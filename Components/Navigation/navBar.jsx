import { NavLinks } from "./navLinks";

const NavBar = ({ className }) => {
  return (
    <>
      <div className={className}>
        <NavLinks />
      </div>
    </>
  );
};
export default NavBar;
