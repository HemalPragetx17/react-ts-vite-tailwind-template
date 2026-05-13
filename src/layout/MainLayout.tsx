import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface IMainLayoutProps {
    children?: React.ReactNode;
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
    return (
        <div className="flex justify-start overflow-y-scroll relative">
            <Sidebar />
            <div className='flex-grow w-[calc(100%-250px)] [.hide-sidebar_&]:w-[calc(100%-70px)] transition-all duration-300 ease-linear fixed right-0 top-0 h-screen overflow-auto overflow-x-hidden bg-bgColor'>
                <Header />
                <main className='main-content py-2.5 px-5 '>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
