import React from 'react';
import { HashLoader } from 'react-spinners';

const Spinner: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[9999] bg-black/40 flex items-center justify-center">
            <HashLoader color="#2196f3" />
        </div>
    );
};

export default Spinner;
