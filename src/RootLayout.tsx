import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Container>
      <Outlet/>
    </Container>
  )
}
