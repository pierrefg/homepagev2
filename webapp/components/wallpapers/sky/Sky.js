"use client";

import React, { useEffect, useRef, useState } from "react";

const SYMBOLS = ["+", "*", "x", "o", ".", "•"];
const N_POINTS = 100;

function genStars(width, height) {
    return Array.from({ length: N_POINTS }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        opacity: Math.random() * 0.5 + 0.35,
        textSize: Math.random() * 15 + 5,
        symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        duration: Math.random() * 2 + 1.5,
        delay: Math.random() * 3,
        depthInv: 1 / (Math.random() * 30 + 5), // precompute 1/depth once
    }));
}

export default function Sky({ color = "purple" }) {
    const [stars, setStars] = useState([]);
    const containerRef = useRef(null);
    const rafRef = useRef(null);
    const latestOffsetRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        setStars(genStars(window.innerWidth, window.innerHeight));

        const handleMouseMove = (e) => {
            latestOffsetRef.current = {
                x: e.clientX - window.innerWidth / 2,
                y: e.clientY - window.innerHeight / 2,
            };

            if (rafRef.current) return;

            rafRef.current = requestAnimationFrame(() => {
                const el = containerRef.current;
                if (el) {
                    el.style.setProperty("--mx", `${latestOffsetRef.current.x}px`);
                    el.style.setProperty("--my", `${latestOffsetRef.current.y}px`);
                }
                rafRef.current = null;
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 overflow-hidden pointer-events-none"
            style={{ "--mx": "0px", "--my": "0px" }}
        >
            <style jsx>{`
                @keyframes starPulse {
                    0% {
                        opacity: 0.2;
                        transform: scale(0.85);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.15);
                    }
                    100% {
                        opacity: 0.2;
                        transform: scale(0.85);
                    }
                }
            `}</style>

            {stars.map((star, index) => (
                <div
                    key={index}
                    className="absolute pointer-events-none"
                    style={{
                        left: `${star.x}px`,
                        top: `${star.y}px`,
                        "--depth-inv": star.depthInv,
                        transform: `translate(calc(-50% + var(--mx) * var(--depth-inv)), calc(-50% + var(--my) * var(--depth-inv)))`,
                        transition: "transform 0.20s ease-out",
                    }}
                >
                    <div
                        className="absolute"
                        style={{
                            color: "white",
                            opacity: 0.6,
                            fontSize: `${star.textSize}px`,
                        }}
                    >
                        {star.symbol}
                    </div>

                    <div
                        className="absolute"
                        style={{
                            color,
                            fontSize: `${star.textSize}px`,
                            animationName: "starPulse",
                            animationDuration: `${star.duration}s`,
                            animationDelay: `${star.delay}s`,
                            animationIterationCount: "infinite",
                            animationTimingFunction: "ease-in-out",
                            transformOrigin: "center",
                            opacity: star.opacity,
                        }}
                    >
                        {star.symbol}
                    </div>
                </div>
            ))}
        </div>
    );
}