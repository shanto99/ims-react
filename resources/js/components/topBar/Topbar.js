import * as Icon from "react-feather";
import ProfileIcon from "../../images/profile-8.jpg";

const Topbar = () => {
 return (
    <div className="top-bar">
        <div className="-intro-x breadcrumb mr-auto hidden sm:flex">
            <a href="">Application</a> <Icon.ChevronRight/> <a href="" className="breadcrumb--active">Dashboard</a>
        </div>
        <div className="intro-x dropdown w-8 h-8">
            <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in" role="button" aria-expanded="false">
                <img alt="Rubick Tailwind HTML Admin Template" src={ProfileIcon}/>
            </div>
            <div className="dropdown-menu w-56">
                <div className="dropdown-menu__content box bg-theme-26 dark:bg-dark-6 text-white">
                    <div className="p-2 border-t border-theme-27 dark:border-dark-3">
                        <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                            <Icon.ToggleRight/> Logout
                        </a>
                    </div>
                </div>
            </div>
        </div>
     </div>

 )
}

export default Topbar
