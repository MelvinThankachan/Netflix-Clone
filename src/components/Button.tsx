import { Link } from "react-router-dom";
import arrowSvg from "../assets/icons/arrow.svg";

type ButtonProps = {
  text: string;
  isArrow: boolean;
  style: string;
  to?: string;
};

const Button = ({ text, isArrow, style, to = "" }: ButtonProps) => {
  return (
    <Link
      to={to}
      className={`flex justify-between items-center bg-[rgb(229,9,20)] text-white rounded ${style}`}
    >
      <span className="">{text}</span>
      {isArrow && <img src={arrowSvg} alt=">" />}
    </Link>
  );
};

export default Button;
