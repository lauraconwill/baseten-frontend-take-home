import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <div className="Header">
      <div className="Logo">
        <img
          height="30"
          alt="Baseten logo"
          src="https://app.baseten.co/static/Baseten_Logo_Primary_Symbol.svg"
        />
      </div>
      <div className="Text">ML Model Search</div>
    </div>
  );
};

export default Header;
