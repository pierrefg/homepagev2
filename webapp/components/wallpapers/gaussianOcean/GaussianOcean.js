"use client";

import React, { useEffect, useRef } from "react";
import { Noise } from "noisejs";

function smoothstep(edge0, edge1, x) {
    const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
}

function hexToRgb(hex) {
    const clean = hex.replace("#", "").slice(0, 6);
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

function distancePointToCircle(px, py, cx, cy, r) {
    const d = Math.hypot(px - cx, py - cy);
    return Math.abs(d - r);
}

export default function GaussianOcean({
    colorFar = "#500052",
    colorNear = "#ffffff",
}) {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const pointerRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef(null);
    const noiseRef = useRef(null);

    // Multiple active click pulses
    const pulsesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const res = 25;
        const scale = 0.06;
        const timeScale = 0.0002;
        const parallaxStrength = 50;
        const cursorRadius = 180;
        const pulseSpeed = 2;
        const pulseWidth = 40;
        const pulseLifetime = 220;

        const symbols = [
            " ", "_", ".", "*", "o", "X",
            "-", "+", "=", "~", "^", ":", ";",
            ",", "`", "'", "\"", "/", "\\", "|",
            "(", ")", "[", "]", "{", "}",
            "<", ">", "!", "?", "#", "%", "&", "@",
            "$", "0", "O", "❤",
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

        const handleClick = (e) => {
            pulsesRef.current.push({
                x: e.clientX,
                y: e.clientY,
                time: 0
            });
        };
        window.addEventListener("click", handleClick);

        const handleMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
            pointerRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
            pointerRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener("pointermove", handleMove);

        const animate = (timestamp) => {
            pulsesRef.current = pulsesRef.current
                .map((pulse) => ({
                    ...pulse,
                    time: pulse.time + 1
                }))
                .filter((pulse) => pulse.time < pulseLifetime);

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

                    const [r, g, b] = lerpColor(rgbFar, rgbNear, depth);
                    let fillR = r;
                    let fillG = g;
                    let fillB = b;
                    let alpha = Math.min(1, effectiveValue + 0.4);

                    let maxPulseStrength = 0;

                    for (const pulse of pulsesRef.current) {
                        const radius = pulse.time * pulseSpeed;
                        const pulseDistance = distancePointToCircle(
                            pulse.x,
                            pulse.y,
                            cellCenterX,
                            cellCenterY,
                            radius
                        );

                        if (pulseDistance < pulseWidth) {
                            const ringFactor = 1 - pulseDistance / pulseWidth;
                            const ageFactor = 1 - pulse.time / pulseLifetime;
                            const strength = ringFactor * ageFactor;
                            maxPulseStrength = Math.max(maxPulseStrength, strength);
                        }
                    }

                    if (maxPulseStrength > 0) {
                        const pulseColor = lerpColor(
                            [r, g, b],
                            [255, 255, 0],
                            Math.min(1, maxPulseStrength * 1.5)
                        );
                        fillR = pulseColor[0];
                        fillG = pulseColor[1];
                        fillB = pulseColor[2];
                        alpha = Math.min(1, alpha + maxPulseStrength * 0.8);
                    }

                    ctx.fillStyle = `rgb(${fillR}, ${fillG}, ${fillB})`;
                    ctx.globalAlpha = alpha;
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
            window.removeEventListener("click", handleClick);
        };
    }, [colorFar, colorNear]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />
    );
}