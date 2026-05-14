import React, { useRef, useEffect, useState } from 'react';

interface AnimatedExpandProps {
    expanded: boolean;
    children: React.ReactNode;
}

const AnimatedExpand: React.FC<AnimatedExpandProps> = ({ expanded, children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number | 'auto'>(expanded ? 'auto' : 0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        if (expanded) {
            setIsTransitioning(true);
            // Set specified height to trigger transition
            setHeight(ref.current.scrollHeight);

            // After transition duration, set height to auto to allow fluid resizing
            const timeout = setTimeout(() => {
                setHeight('auto');
                setIsTransitioning(false);
            }, 300); // match CSS transition duration

            return () => clearTimeout(timeout);
        } else {
            setIsTransitioning(true);
            // Set height to measured height before collapsing
            setHeight(ref.current.scrollHeight);

            // Trigger collapse after frame
            requestAnimationFrame(() => {
                setHeight(0);
            });

            // Reset transitioning after animation frame plus transition duration
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
            }, 300);

            return () => clearTimeout(timeout);
        }
    }, [expanded]);

    return (
        <tr>
            <td colSpan={100} style={{ padding: 0, border: 0 }}>
                <div
                    ref={ref}
                    style={{
                        height: height === 'auto' ? 'auto' : `${height}px`,
                        overflow: 'hidden',
                        transition: 'height 300ms ease, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, border-radius .15s ease',
                        backgroundColor: isTransitioning ? '#f7f8fc' : 'transparent',
                    }}
                >
                    {children}
                </div>
            </td>
        </tr>
    );
};

export default AnimatedExpand;
