import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Avatar,
} from "@heroui/react";
import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function NavBar() {
  return (
    <Navbar maxWidth="full" className="bg-slate-700 flex justify-between">
      <NavbarBrand className="text-white items-center">
        <AcmeLogo />
        <p className="font-bold text-white">InfoKonserID</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link to="/" className="text-white">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="#" className="text-white">
            Event
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" to="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" to="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="gap-4">
        <NavbarItem className="hidden lg:flex">
          <div className="flex flex-col items-center">
            <IoIosAddCircle className="text-white text-xl" />
            <Link to="#" className="text-white text-sm">
              Create Event
            </Link>
          </div>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex mr-4">
          <div className="flex flex-col items-center">
            <FaStar className="text-white text-xl" />
            <Link to="/interest" className="text-white text-sm">
              Interested
            </Link>
          </div>
        </NavbarItem>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name="Jason Hughes"
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </NavbarContent>
    </Navbar>
  );
}
