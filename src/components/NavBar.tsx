import { Link } from "react-router-dom";
import logoSvg from "../assets/icons/logo.svg";
import Button from "./Button";
import LanguageSelection from "./LanguageSelection";

type NavBarProps = {
  showSignIn?: boolean;
};
const NavBar: React.FC<NavBarProps> = ({ showSignIn = true }) => {
  return (
    <div className="content">
      <nav className="flex justify-between items-center py-6 bg-transparent z-40">
        <Link to="/">
          <img className="w-24 md:w-36 h-auto" src={logoSvg} alt="Logo" />
        </Link>
        {showSignIn && (
          <div className="flex justify-end gap-3">
            <LanguageSelection />
            <Button
              to="/login"
              text="Sign In"
              isArrow={false}
              style="px-4 py-1"
            />
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
