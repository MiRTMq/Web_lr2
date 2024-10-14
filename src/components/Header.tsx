import { Button, Navbar, NavItem } from "react-bootstrap";
import { User } from "../App";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

interface Props {
  user?: User;
  showLoginButton?: boolean;
  showMenu?: boolean;
  onLoginClick?: () => void;
  onMenuLogButtonClick: () => void;


}
const Header = ({ showMenu = false, user, showLoginButton = true, onLoginClick, onMenuLogButtonClick }: Props) => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const handleToggleClick = () => {
    setShowOffCanvas(!showOffCanvas);
  }

  const handleMenuHide = () => {
    setShowOffCanvas(false);
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand href="#home">Lr2</Navbar.Brand>
      <div className=" ms-auto me-2" >
        {user && <NavItem > {user.name}</NavItem>}
        <Button
          hidden={!showLoginButton}
          variant="primary"
          onClick={onLoginClick}

        >
          login
        </Button>

      </div>

      <Navbar.Toggle
        onClick={handleToggleClick}
        aria-controls="basic-navbar-nav" />
      <HeaderMenu
        buttonText={user && user.id !== 0 ? "logout" : "login"}
        user={user}
        show={showOffCanvas && showMenu}
        onHide={handleMenuHide}
        onLogButtonClick={onMenuLogButtonClick}
      />
    </Navbar>
  );
}

export default Header;

