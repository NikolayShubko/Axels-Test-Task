import { Link } from "@mui/material";
import { NavLink } from "react-router";

const Logo = () => {
  return (
    <Link component={NavLink} to={"/"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="240"
        height="60"
        viewBox="0 0 240 60"
        fill="none"
      >
        <path
          d="M10 45 L30 25 L45 35 L65 15"
          stroke="#4CAF50"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="45" r="4" fill="#4CAF50" />
        <circle cx="30" cy="25" r="4" fill="#4CAF50" />
        <circle cx="45" cy="35" r="4" fill="#4CAF50" />
        <circle cx="65" cy="15" r="4" fill="#4CAF50" />

        <text
          x="80"
          y="38"
          fontFamily="Arial, sans-serif"
          fontSize="28"
          fontWeight="bold"
          fill="#333"
        >
          Track
          <tspan fill="#4CAF50">Wise</tspan>
        </text>
      </svg>
    </Link>
  );
};

export default Logo;
