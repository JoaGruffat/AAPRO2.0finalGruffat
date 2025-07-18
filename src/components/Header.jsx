import wineLogo from "../assets/wine.svg";
import "../components/styles/header.css";

export const Header = () => {
  return (
    <div className="logo-container">
      <img src={wineLogo} className="wine-logo" alt="Wine logo" />
    </div>
  );
};
