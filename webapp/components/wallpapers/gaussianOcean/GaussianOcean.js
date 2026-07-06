"use client";

import React, { useEffect, useRef } from "react";
import { Noise } from "noisejs";

function smoothstep(edge0, edge1, x) {
    const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
}

// Parse a hex color ("#rrggbb" or "rrggbb") into [r, g, b]
function hexToRgb(hex) {
    const clean = hex.replace("#", "");
    const bigint = parseInt(clean, 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

function lerp(a, b, t) {
    return a + (b - a) * t;
}

function lerpColor(rgbA, rgbB, t) {
    return [
        Math.round(lerp(rgbA[0], rgbB[0], t)),
        Math.round(lerp(rgbA[1], rgbB[1], t)),
        Math.round(lerp(rgbA[2], rgbB[2], t)),
    ];
}

export default function GaussianOcean({
    colorFar = "#500052",
    colorNear = "#ffffffcc",
}) {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const pointerRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef(null);
    const noiseRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const res = 25;
        const scale = 0.06;
        const timeScale = 0.0002;
        const parallaxStrength = 50;
        const cursorRadius = 180;
        const symbols = [
            " ", "_", ".", "*", "o", "X",
            "-", "+", "=", "~", "^", ":", ";",
            ",", "`", "'", "\"", "/", "\\", "|",
            "(", ")", "[", "]", "{", "}",
            "<", ">", "!", "?", "#", "%", "&", "@",
            "$", "0", "O", '❤',
            "·", "•", "◦", "○", "●", "□", "■", "△", "▲", "◇", "◆"
        ];

        const rgbFar = hexToRgb(colorFar);
        const rgbNear = hexToRgb(colorNear);

        noiseRef.current = new Noise(Math.random());

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        let cols = 0;
        let rows = 0;
        let width = 0;
        let height = 0;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            cols = Math.ceil(width / res);
            rows = Math.ceil(height / res);

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.font = `${res}px`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
        };

        resize();
        window.addEventListener("resize", resize);

        const handleMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
            pointerRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
            pointerRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener("pointermove", handleMove);

        const animate = (timestamp) => {
            const time = timestamp * timeScale;

            ctx.clearRect(0, 0, width, height);

            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;
            const px = pointerRef.current.x;
            const py = pointerRef.current.y;

            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    const raw = noiseRef.current.perlin3(x * scale, y * scale, time);
                    const value = (raw + 1) / 2;

                    const cellCenterX = x * res + res / 2;
                    const cellCenterY = y * res + res / 2;

                    const dx = cellCenterX - mx;
                    const dy = cellCenterY - my;
                    const distance = Math.hypot(dx, dy);

                    const falloff = smoothstep(0, cursorRadius, distance);
                    const effectiveValue = value * falloff;

                    const symbolIndex = Math.min(
                        symbols.length - 1,
                        Math.floor(effectiveValue * symbols.length)
                    );
                    const symbol = symbols[symbolIndex];

                    if (symbol === " ") continue;

                    const depth = effectiveValue ** 4;
                    const translateX = px * depth * parallaxStrength;
                    const translateY = py * depth * parallaxStrength;

                    // Interpolate color based on depth: far (low depth) -> near (high depth)
                    const [r, g, b] = lerpColor(rgbFar, rgbNear, effectiveValue**4);
                    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                    ctx.globalAlpha = effectiveValue + 0.4;
                    ctx.fillText(symbol, cellCenterX + translateX, cellCenterY + translateY);
                }
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", handleMove);
        };
    }, [colorFar, colorNear]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />
    );
}