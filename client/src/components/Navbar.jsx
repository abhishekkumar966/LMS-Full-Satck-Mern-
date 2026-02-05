import React, { useState } from "react";
import { navbarStyles } from "../assets/dummyStyles";
import logo from "../assets/logo.png";
import { Home, BookOpen, BookMarked, Users, Contact } from "lucide-react";
import { NavLink } from "react-router-dom";
const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Courses", icon: BookOpen, href: "/courses" },
  { name: "About", icon: BookMarked, href: "/about" },
  { name: "Faculty", icon: Users, href: "/faculty" },
  { name: "Contact", icon: Contact, href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setisScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const desktopLinkClasses =(isActive) =>{
    `${navbarStyles.desktopNavItem} ${isActive ? navbarStyles.desktopNavItemActive : ""}`
  }
  const mobileLinkClasses =(isActive) =>{
    `${navbarStyles.mobileMenuItem} ${isActive ? 
      navbarStyles.mobileNavItemActive : navbarStyles.mobileMenuItemHover}`
  }

  return (
    <nav
      className={`${navbarStyles.navbar}${
        showNavbar ? navbarStyles.navbarVisible : navbarStyles.navbarHidden
      }
      ${isScrolled ? navbarStyles.navbarScrolled : navbarStyles.navbarDefault}`}
    >
      <div className={navbarStyles.container}>
        <div className={navbarStyles.innerContainer}></div>
        {/* LOGO */}
        <div className="flex items-center gap-3 select-none">
          <img src={logo} alt="Logo" className="h-12 w-12" />
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-sky-700 to-cyan-600 font-serif leading-[0.95]">
            SkillForge
          </div>
        </div>
        <div className={navbarStyles.desktopNav}>
          <div className={navbarStyles.desktopNavContainer}>
            {navItems.map((item) =>{ 
              const Icon = item.icon;
              return (
                <NavLink key={item.name}
                 to={item.href} 
                 end={item.href === "/"}
                  className={desktopLinkClasses}>
                 <div className="flex items-center space-x-2">
                  <Icon size={19} className={navbarStyles.desktopNavIcon} />
                  <span>{item.name}</span>
                 </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
