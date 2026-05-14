import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import NotificationsMenu from '../components/header/NotificationsMenu';
import UserMenu from '../components/header/UserMenu';
import { Routing } from '../routes/routing';
import { adminLogout } from '../store/slices/authSlice';

export const toggleSidebar = () => {
  if (document.body.classList.contains('hide-sidebar')) {
    document.body.classList.remove('hide-sidebar');
  } else {
    document.body.classList.add('hide-sidebar');
  }
};

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    // await accountService
    //   .logout()
    //   .then(async () => {
        dispatch(adminLogout());
        navigate(Routing.Login);
      // })
      // .catch((error: Error) => console.log(error?.message));
  };

  React.useEffect(() => {
    if (window.innerWidth <= 991) {
      document.body.classList.add('hide-sidebar');
    }

    function checkWindowSize() {
      if (window.innerWidth <= 991) {
        document.body.classList.add('hide-sidebar');
      } else {
        document.body.classList.remove('hide-sidebar');
      }
    }

    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };

  }, [window.innerWidth])

  const spanBaseClass = "block bg-white w-full h-[0.125rem] rounded-[2px] bg-black shadow-[0_0.5px_2px_0_hsla(0,0%,0%,0.2)] transition-colors duration-400 relative";

  return (
    <div className='w-full h-[70px] bg-white flex justify-between items-center px-3 sm:px-5 py-2.5 border-b border-[#7979798a] sticky top-0 z-50'>
      <div
        className={`sidebar-icon bg-primary rounded-[5px] cursor-pointer`}
        onClick={() => {
          toggleSidebar();
        }}
      >
        <button className="border-none bg-none m-0 cursor-pointer w-[32px] h-[32px] p-1 font-inherit">
          <span className={`${spanBaseClass} animate-menu-icon-top-2 [.hide-sidebar_&]:animate-menu-icon-top`}></span>
          <span className={`${spanBaseClass} mt-1 animate-menu-icon-scaled-2 [.hide-sidebar_&]:animate-menu-icon-scaled`}></span>
          <span className={`${spanBaseClass} mt-1 animate-menu-icon-bottom-2 [.hide-sidebar_&]:animate-menu-icon-bottom [.hide-sidebar_&]:bg-white [.hide-sidebar_&]:mt-[7.5px]`}></span>
        </button>
      </div>
      <div className="flex items-center gap-3">
        {/* <ThemeToggle /> */}
        <NotificationsMenu />
        <UserMenu onLogout={handleLogoutClick} />
      </div>
    </div>
  )
}

export default Header
