import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import  Button  from "./component/Button";
import BasicForm from "./component/Form/BasicForm";
function App() {
  return (
    <Container style={{ textAlign: "center", marginTop: "20%" }}>
      <Routes>
        <Route path="/" element={<Button type="button" className="btn btn-primary" text="hello"/>} />
        <Route path="/add" element={<BasicForm />} />
      </Routes>
    </Container>
  );
}

export default App;
