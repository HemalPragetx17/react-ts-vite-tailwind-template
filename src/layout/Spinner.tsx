import React, { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';

const Spinner: React.FC = () => {
    const [color, setColor] = useState("#ffffff"); // Default fallback

    useEffect(() => {
        const primaryColor = getComputedStyle(document.documentElement)
            .getPropertyValue('--color-primary')
            .trim();
        if (primaryColor) {
            setColor(primaryColor);
        }
    }, []);

    return (
        <div className="fixed inset-0 z-[9999] bg-black/40 flex items-center justify-center">
            <HashLoader color={color} />
        </div>
    );
};

export default Spinner;
