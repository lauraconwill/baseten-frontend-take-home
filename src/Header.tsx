import { FunctionComponent } from "react";
import { ReactComponent as Logo } from "./assets/Baseten_Logo_Primary_Symbol.svg";

const Header: FunctionComponent = () => (
  <div className="Header">
    <div className="Logo">
      <Logo height="30px" />
    </div>
    <div className="Text">ML Model Search</div>
  </div>
);

export default Header;
