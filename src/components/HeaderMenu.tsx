import { Button, Offcanvas } from "react-bootstrap";
import { User } from "../App"

interface Props {
  user?: User;
  show: boolean;
  buttonText: string
  onLogButtonClick: () => void;
  onHide: () => void;
};

const HeaderMenu = ({ user, show, onHide, buttonText,onLogButtonClick }: Props) => {

  return (
    <Offcanvas
      onHide={onHide}
      placement="end"
      show={show}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {(user) && <p>loged as: {user.name} {user.id}</p>}
        <Button
          variant="primary"
          onClick={onLogButtonClick}
        >
          {buttonText}
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default HeaderMenu
