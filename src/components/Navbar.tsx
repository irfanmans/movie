import type NavbarProps from "../interface/Navbar";
import Logo from "./Logo";

export default function NavBar({ children }: NavbarProps) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}
