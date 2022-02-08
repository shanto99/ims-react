import React from "react";
import logo from "../../images/logo.svg";
import * as Icon from "react-feather";
import Velocity from "velocity-animate";

const SidePanel = () => {

    function toggleMenuList(e) {
        const toggleLink = e.currentTarget;
        const menuList = toggleLink.parentElement && toggleLink.parentElement.querySelector('ul');
        if(menuList && menuList.children.length > 0) {
            if(menuList.querySelector('li').offsetParent !== null) {
                toggleLink.querySelector('.side-menu__sub-icon').classList.remove('transform');
                toggleLink.querySelector('.side-menu__sub-icon').classList.remove('rotate-180');
                toggleLink.classList.remove('side-menu--open');

                Velocity(menuList, "slideUp", {
                    duration: 300,
                    complete: function(el) {
                         el.classList.remove("side-menu__sub-open");
                    }
                });
            } else {
                toggleLink.querySelector('.side-menu__sub-icon').classList.add('transform');
                toggleLink.querySelector('.side-menu__sub-icon').classList.add('rotate-180');
                toggleLink.classList.remove('side-menu--open');

                Velocity(menuList, "slideDown", {
                    duration: 300,
                    complete: function(el) {
                         el.classList.add("side-menu__sub-open");
                    }
                });
            }
        }
    }

    return (
        <React.Fragment>
            <nav className="side-nav">
                <a href="" className="intro-x flex items-center pl-5 pt-4">
                    <img alt="Rubick Tailwind HTML Admin Template" className="w-6" src={logo}/>
                    <span className="hidden xl:block text-white text-lg ml-3"> Ru<span className="font-medium">bick</span> </span>
                </a>
                <div className="side-nav__devider my-6"></div>
                <ul>
                    <li>
                        <a href="#" onClick={toggleMenuList} className="side-menu side-menu--active">
                            <div className="side-menu__icon"> <Icon.Home/> </div>
                            <div className="side-menu__title">
                                Dashboard
                                <div className="side-menu__sub-icon transform rotate-180"> <Icon.ChevronDown/> </div>
                            </div>
                        </a>
                        <ul className="side-menu__sub-open">
                            <li>
                                <a href="index.html" className="side-menu side-menu--active">
                                    <div className="side-menu__icon"> <Icon.Activity/> </div>
                                    <div className="side-menu__title"> Overview 1 </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-dashboard-overview-2.html" className="side-menu">
                                    <div className="side-menu__icon"> <Icon.Activity/> </div>
                                    <div className="side-menu__title"> Overview 2 </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-dashboard-overview-3.html" className="side-menu">
                                    <div className="side-menu__icon"> <Icon.Activity/> </div>
                                    <div className="side-menu__title"> Overview 3 </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default SidePanel;
