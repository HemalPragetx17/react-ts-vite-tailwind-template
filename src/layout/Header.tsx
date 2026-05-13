import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Routing } from '../routes/routing';
import accountService from '../services/account-service';
import { adminLogout } from '../store/slices/authSlice';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';

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
    await accountService
      .logout()
      .then(async () => {
        dispatch(adminLogout());
        navigate(Routing.Login);
      })
      .catch((error: Error) => console.log(error?.message));
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

  const spanBaseClass = "block w-full h-[0.125rem] rounded-[2px] bg-black shadow-[0_0.5px_2px_0_hsla(0,0%,0%,0.2)] transition-colors duration-400 relative";

  return (
    <div className='w-full h-[60px] bg-white rounded-[10px] flex justify-between items-center p-2.5 mb-5 shadow-[2px_0px_10px_rgba(0,0,0,0.103)]'>

      <div className={`sidebar-icon bg-primary-200 rounded-[5px] cursor-pointer`} onClick={() => {
        toggleSidebar()
      }}>
        <button className="border-none bg-none m-0 cursor-pointer w-[32px] h-[32px] p-1 font-inherit">
          <span className={`${spanBaseClass} animate-menu-icon-top-2 [.hide-sidebar_&]:animate-menu-icon-top`}></span>
          <span className={`${spanBaseClass} mt-1 animate-menu-icon-scaled-2 [.hide-sidebar_&]:animate-menu-icon-scaled`}></span>
          <span className={`${spanBaseClass} mt-1 animate-menu-icon-bottom-2 [.hide-sidebar_&]:animate-menu-icon-bottom [.hide-sidebar_&]:bg-black`}></span>
        </button>
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <button className="group flex items-center justify-start w-[35px] h-[35px] border-none rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 bg-[#ffe4c2] hover:w-[125px] hover:bg-[#fcb400] hover:rounded-[40px] hover:duration-500" onClick={handleLogoutClick}>
        <div className="w-full transition-all duration-300 flex items-center justify-center group-hover:w-[30%] group-hover:duration-[600ms] group-hover:pl-5"><svg viewBox="0 0 512 512" className="w-[17px]"><path className="fill-black group-hover:fill-white" d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg></div>
        <div className="absolute right-0 w-0 opacity-0 text-white text-[16px] font-medium transition-all duration-500 group-hover:opacity-100 group-hover:w-[70%] group-hover:duration-300 group-hover:pr-2.5">Logout</div>
        </button>
      </div>

    </div>
  )
}

export default Header
