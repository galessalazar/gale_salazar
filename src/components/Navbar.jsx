import { Link } from "react-router-dom";
import styled from "styled-components";

import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub as faGithubBrand,
  faLinkedin as faLinkedinBrand,
} from "@fortawesome/free-brands-svg-icons";

// profile menu component
const profileMenuItems = [
  {
    label: "Resume",
    icon: UserCircleIcon,
  },

  // {
  //   label: "Contact Me",
  //   icon: InboxArrowDownIcon,
  // },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="image of Gale"
            className="border border-gray-900 p-0.5"
            src="/images/Photo.jpg"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;

          const menuItemClasses = `flex items-center gap-2 rounded ${
            isLastItem
              ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
              : ""
          }`;

          const iconElement = React.createElement(icon, {
            className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
            strokeWidth: 2,
          });

          const content = (
            <MenuItem className={menuItemClasses}>
              {iconElement}
              <span className="text-sm">{label}</span>
            </MenuItem>
          );

          if (label === "Resume") {
            return (
              <Link
                to="/resume"
                key={label}
                onClick={closeMenu}
                className="w-full block"
              >
                {content}
              </Link>
            );
          }
          return (
            <div key={label} onClick={closeMenu}>
              {content}
            </div>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// nav list menu
const navListMenuItems = [
  {
    title: "Phone:",
    description: "726-228-6211",
    icon: faPhone,
  },

  {
    title: "Email:",
    description: "gale.s.salazar22@gmail.com",
    icon: faEnvelope,
  },

  {
    title: "Github:",
    description: "https://github.com/galessalazar",
    icon: faGithubBrand,
  },
  {
    title: "LinkedIn:",
    description: "https://www.linkedin.com/in/gale-s-salazar22/",
    icon: faLinkedinBrand,
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, description, icon }) => {
    const goToUrl = description.startsWith("https");

    const content = (
      <MenuItem
        className={` flex items-start gap-3 ${
          goToUrl ? "hover:bg-gray-500 cursor-pointer" : "cursor-default"
        }w-full max-w-[500] `}
      >
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={icon} className="text-gray-700" />
          <Typography variant="h6" color="blue-gray" className="mb-1 mr-3 whitespace-nowrap">
            {title}
          </Typography>
        </div>
        <div className="flex items-center gap-2 w-full">
          <Typography variant="small" color="gray" className="font-normal break-words w-full">
            {description}
          </Typography>
        </div>
      </MenuItem>
    );

    return goToUrl ? (
      <a
        href={
          description.startsWith("https")
            ? description
            : `https://${description}`
        }
        key={title}
        target="_blank"
        rel="noreferrer"
        className="group"
      >
        {content}
      </a>
    ) : (
      <div key={title} className="group">
        {content}
      </div>
      // <Link to={description} key={title}>
      //   {content}
      // </Link>
    );

    //  </a>
  });

  return (
    <React.Fragment>
      <Menu  allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler >
          {/* <Typography as="a" href="#" variant="small" className="font-normal"> */}
          <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex ">
            {/* TOP RIGHT OF CORNER NEXT TO CIRCULAR IMAGE */}
            Contact Me{" "}
            <ChevronDownIcon
              strokeWidth={2}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </MenuItem>
          {/* </Typography> */}
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="black"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <Avatar
              variant="square"
              strokeWidth={1}
              alt="image of Gale"
              className="w-40 h-40 object-cover object-[center_30%] rounded-md"
              src="/images/Photo.jpg"
            />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
        Contact Me{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
    </ul>
  );
}

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    // ADJUSTED to fill the width and stick to the top
    <Navbar
      fullWidth
      className="bg-white text-black border-b border-gray-200 shadow-md px-6 py-4 w-full rounded-none"
    >
      <div className="flex items-center justify-between w-full text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          style={{ fontFamily: "Lato, sans-serif", fontWeight: 700 }}
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          Gale Salazar
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        {/* <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton> */}

        {/* <Button size="sm" variant="text">
          <span>Log In</span>
        </Button> */}
        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}

export default ComplexNavbar;
