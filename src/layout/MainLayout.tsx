import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';

interface IMainLayoutProps {
    children?: React.ReactNode;
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
    return (
        <div className="flex justify-start overflow-y-scroll relative">
            <Sidebar />
            <div className='flex-grow w-[calc(100%-250px)] [.hide-sidebar_&]:w-[calc(100%-64px)] transition-all duration-300 ease-linear fixed right-0 top-0 h-screen overflow-auto overflow-x-hidden bg-bgColor'>
                <Header />
                <main className='main-content p-5'>
                    {/* Comment the line below to hide/disable breadcrumbs throughout the entire system */}
                    <Breadcrumbs variant='light' size="md" color="default" underline="hover" radius="lg" />
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
