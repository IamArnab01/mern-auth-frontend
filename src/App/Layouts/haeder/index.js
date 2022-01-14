import React from "react";
import Logo from "../../Assets/images/logo.svg";
import { useWindowWidthAndHeight } from "../../../Hooks/useWidthAndHeight";
import HeaderWeb from "./headerweb";
import HeaderMob from "./headermob";

const Header = () => {
  const [width] = useWindowWidthAndHeight();
  return (
    <div>
      {width > 768 ? (
        <HeaderWeb Logo={Logo} width={width} />
      ) : (
        <HeaderMob Logo={Logo} width={width} />
      )}
    </div>
  );
};

export default Header;
