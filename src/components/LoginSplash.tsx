import { Form, Offcanvas, Button } from "react-bootstrap"
import { User } from "../App";
import { useState } from "react";

interface Props {
  show: boolean;
  onHide: () => void;
  onSubmit: (email: string, password: string) => void;

};
const LoginSplash = ({ show, onHide, onSubmit }: Props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    onSubmit(email, password)
    setPassword('');
    setEmail('');

  };

  return (
    <div>
      <Offcanvas
        show={show}
        onHide={onHide}
        placement="top"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>log in</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleClick} type="button">
              Submit
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default LoginSplash
