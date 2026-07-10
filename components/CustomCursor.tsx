'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const CustomCursor = () => {
    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    useGSAP((context, contextSafe) => {
        if (window.innerWidth < 768) return;

        const handleMouseMove = contextSafe?.((e: MouseEvent) => {
            const { clientX, clientY } = e;

            if (innerRef.current) {
                gsap.set(innerRef.current, {
                    x: clientX,
                    y: clientY,
                });
            }

            if (outerRef.current) {
                gsap.to(outerRef.current, {
                    x: clientX,
                    y: clientY,
                    duration: 0.25,
                    ease: 'power2.out',
                });
            }
        }) as any;

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    });

    return (
        <>
            {/* Outer Circle */}
            <div
                ref={outerRef}
                className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '2px solid hsl(var(--primary))',
                    backgroundColor: 'transparent',
                    position: 'fixed',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 9999,
                }}
            />

            {/* Inner Dot */}
            <div
                ref={innerRef}
                className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'hsl(var(--primary))',
                    position: 'fixed',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 9999,
                }}
            />
        </>
    );
};

export default CustomCursor;
