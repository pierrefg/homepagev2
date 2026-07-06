"use client";

import React, { useEffect, useRef } from "react";

function smoothstep(edge0, edge1, x) {
    const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
}

function luminance(r, g, b) {
    return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

const SYMBOLS = Array.from(
    "` .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$"
);

export default function AsciiImage({
    imgSrc,
    size = 320,       // rendered canvas size (width & height, square)
    res = 8,          // cell size in px -> controls ascii "resolution"
    cursorRadius = 140,
    parallaxStrength = 12,
    invert = false,   // set true if your image is dark-on-light and glyphs look backwards
}) {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const pointerRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef(null);
    const pixelDataRef = useRef(null); // { cols, rows, data: Uint8ClampedArray }

    // Extract pixel grid from the image once (or whenever imgSrc/size/res change)
    useEffect(() => {
        const src = typeof imgSrc === "string" ? imgSrc : imgSrc?.src;
        if (!src) return;

        const cols = Math.ceil(size / res);
        const rows = Math.ceil(size / res);

        const img = new window.Image();
        img.crossOrigin = "anonymous";
        img.src = src;

        img.onload = () => {
            const sampleCanvas = document.createElement("canvas");
            sampleCanvas.width = cols;
            sampleCanvas.height = rows;
            const sctx = sampleCanvas.getContext("2d", { willReadFrequently: true });
            sctx.drawImage(img, 0, 0, cols, rows);
            const { data } = sctx.getImageData(0, 0, cols, rows);
            pixelDataRef.current = { cols, rows, data };
        };

        img.onerror = (e) => {
            console.error("AsciiImage: failed to load image", e);
        };
    }, [imgSrc, size, res]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        canvas.width = size * dpr;
        canvas.height = size * dpr;
        canvas.style.width = `${size}px`;
        canvas.style.height = `${size}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.font = `${res}px monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const handleMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current.x = e.clientX - rect.left;
            mouseRef.current.y = e.clientY - rect.top;
            pointerRef.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            pointerRef.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        };
        window.addEventListener("pointermove", handleMove);

        const animate = () => {
            const pixelData = pixelDataRef.current;
            ctx.clearRect(0, 0, size, size);

            if (pixelData) {
                const { cols, rows, data } = pixelData;
                const mx = mouseRef.current.x;
                const my = mouseRef.current.y;
                const px = pointerRef.current.x;
                const py = pointerRef.current.y;

                for (let y = 0; y < rows; y++) {
                    for (let x = 0; x < cols; x++) {
                        const i = (y * cols + x) * 4;
                        const r = data[i];
                        const g = data[i + 1];
                        const b = data[i + 2];
                        const a = data[i + 3] / 255;

                        if (a < 0.05) continue;

                        let lum = luminance(r, g, b);
                        if (invert) lum = 1 - lum;

                        const symbolIndex = Math.min(
                            SYMBOLS.length - 1,
                            Math.floor(lum * SYMBOLS.length)
                        );
                        const symbol = SYMBOLS[symbolIndex];
                        if (symbol === " ") continue;

                        const cellCenterX = x * res + res / 2;
                        const cellCenterY = y * res + res / 2;

                        const dx = cellCenterX - mx;
                        const dy = cellCenterY - my;
                        const distance = Math.hypot(dx, dy);
                        const proximity = 1 - smoothstep(0, cursorRadius, distance);

                        const depth = proximity ** 2;
                        const translateX = px * depth * parallaxStrength;
                        const translateY = py * depth * parallaxStrength;

                        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                        ctx.globalAlpha = 1;
                        ctx.fillText(symbol, cellCenterX + translateX, cellCenterY + translateY);
                    }
                }
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener("pointermove", handleMove);
        };
    }, [size, res, cursorRadius, parallaxStrength, invert]);

    return (
        <canvas
            ref={canvasRef}
            style={{ width: size, height: size }}
        />
    );
}