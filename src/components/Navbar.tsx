import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";

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
    <Navbar
      maxWidth="full"
      className="bg-slate-700 flex justify-between px-8 py-2"
    >
      <NavbarBrand className="text-white items-center">
        <AcmeLogo />
        <p className="font-bold text-white">Ken Organizer</p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-8 text-white "
        justify="center"
      >
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Event
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="text-white g  ap-4">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Create Event</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-yellow-300 text-black rounded-md py-1"
            href="#"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
