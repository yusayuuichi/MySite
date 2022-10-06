import Container from "react-bootstrap/Container";
import { Provider } from "./store/index";

import ZhenNavbar from "./components/Navbar/ZhenNavbar";
import "./App.css";
import AppRouter from "./router/index";

export default function App() {
  return (
    <>
      <Provider>
        <ZhenNavbar />
        <Container className="mt-5 pt-3">
          <AppRouter />
        </Container>
      </Provider>
    </>
  );
}
