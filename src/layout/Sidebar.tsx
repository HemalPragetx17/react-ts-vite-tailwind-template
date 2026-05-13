import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { ISidebarData } from '../shared/constants/sidebar-data';
import { sidebarRoutes } from '../shared/constants/sidebar-data';

const Sidebar = () => {
  const { pathname } = useLocation();

  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

  const handleMenuOpen = (menu: string) => {
    if (activeMenu !== menu) {
      setActiveMenu(menu);
    } else {
      setActiveMenu(null);
    }
  };

  const handleMenuClose = () => {
    setActiveMenu(null);
  };

  const filterInactive = "[filter:brightness(0)_saturate(100%)_invert(78%)_sepia(29%)_saturate(5714%)_hue-rotate(359deg)_brightness(104%)_contrast(106%)]";
  const filterActive = "[filter:brightness(0)_saturate(100%)_invert(0%)_sepia(39%)_saturate(7500%)_hue-rotate(360deg)_brightness(87%)_contrast(101%)]";

  return (
    <div className='w-[250px] !important h-screen fixed top-0 left-0 overflow-auto overflow-x-hidden transition-all duration-300 ease-linear [&::-webkit-scrollbar]:w-0 [.hide-sidebar_&]:w-[75px] bg-white border-r-2 border-primary'>

      <div className="p-[10px] flex justify-start items-center gap-[15px] border-b border-[#7979798a] bg-white m-[5px] transition-all duration-300 ease-linear [.hide-sidebar_&]:px-[5px] [.hide-sidebar_&]:w-full">
        <img className="w-[55px] h-[55px]" src="/favicon.svg" alt='img not found' />
        <p className='text-2xl'>Admin Portal</p>
      </div>

      <nav className="px-[10px] flex flex-col items-start h-full" tabIndex={-1}
        onFocus={(e) => e.preventDefault()}>
        <ul className='flex flex-col w-full m-0 p-0 list-none'>
          {sidebarRoutes?.map((menu: ISidebarData, index) => {
            const isActive = activeMenu === menu?.module;
            return (
            <li
              key={index}
              className={`block p-0 w-full overflow-hidden transition-all duration-500 ease-in-out aria-[label=true]:bg-[#FCB400] aria-[label=true]:rounded-[10px] aria-[label=true]:max-h-[400px] aria-[label=false]:rounded-[10px] aria-[label=false]:max-h-[51px]`}
              aria-label={isActive ? 'true' : 'false'}
              tabIndex={-1}
              onFocus={(e) => e.preventDefault()}
              onClick={(e) => {
                e.stopPropagation();
                (menu?.childs?.length ?? 0) > 0 ? handleMenuOpen(menu?.module) : handleMenuClose();
              }}
            >
              <Link
                className={`group w-full relative flex items-center box-border text-[15px] leading-[19px] p-[12px] text-black gap-[10px] no-underline hover:text-black ${pathname?.includes(menu?.route) ? 'active bg-primary text-black' : ''} hover:bg-primary`}
                to={menu?.route ? menu?.route : '/'}
                onClick={(e) => {
                  if ((menu?.childs?.length ?? 0) > 0) e.preventDefault();
                }}
                tabIndex={-1}
                onFocus={(e) => e.preventDefault()}
                aria-label={isActive ? 'true' : 'false'}
              >
                <img className={`w-[27px] h-[27px] mr-[15px] ${isActive || pathname?.includes(menu?.route) ? filterActive : filterInactive} group-hover:${filterActive}`} src={menu?.image} alt='' />
                <span className="text-[18px] inline-block mr-[8px]">{menu?.name}</span>
                {(menu?.childs?.length ?? 0) > 0 && (
                  <span className={`w-[13px] h-[13px] inline-block relative -bottom-[5px] -left-[10px] transition-all duration-500 ease-in-out mt-[2px] text-left transform rotate-45 ml-auto before:absolute before:content-[''] before:inline-block before:w-[10.5px] before:h-[2.5px] before:bg-black before:transition-all before:duration-500 before:ease-in-out before:rounded-[2px] after:absolute after:content-[''] after:inline-block after:w-[10.5px] after:h-[2.5px] after:bg-black after:transition-all after:duration-500 after:ease-in-out after:rounded-[2px] after:transform after:rotate-90 after:-top-[5px] after:left-[5px] aria-[label=true]:before:-rotate-90 aria-[label=true]:after:rotate-180`} aria-label={isActive ? 'true' : 'false'}></span>
                )}
              </Link>
              {(menu?.childs?.length ?? 0) > 0 &&
                (
                  <ul className={`flex flex-col gap-[5px] p-[5px] bg-primary ${isActive ? 'show-child-menu' : ''}`} tabIndex={-1}
                    onFocus={(e) => e.preventDefault()}>
                    {(menu?.childs?.length ?? 0) > 0 && (
                      menu?.childs?.map((childMenu: ISidebarData, index) => (
                        <li
                          className={`w-full flex items-center gap-[10px] overflow-hidden ${(childMenu?.childs?.length ?? 0) > 0 ? 'has-menu' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          tabIndex={-1}
                          onFocus={(e) => e.preventDefault()}
                          key={index}
                        >
                          <Link
                            className={`w-full relative flex items-center box-border text-[15px] leading-[19px] p-[12px] rounded-[10px] text-black gap-[10px] no-underline hover:bg-background ${pathname?.includes(childMenu?.route) ? 'active bg-[#FFF8E7]' : ''}`}
                            to={childMenu?.route ? childMenu?.route : '/'}
                            onClick={(e) => {
                              if ((childMenu?.childs?.length ?? 0) > 0) e.preventDefault();
                            }}
                            tabIndex={-1}
                            onFocus={(e) => e.preventDefault()}
                          >
                            <img className={`w-[18px] ${filterActive}`} src={childMenu?.image} alt='' />
                            <span className="text-[16px]">{childMenu?.name}</span>
                          </Link>
                        </li>
                      ))
                    )}
                  </ul>
                )}
            </li>
          )})}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar