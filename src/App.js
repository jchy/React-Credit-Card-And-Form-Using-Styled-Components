import "./styles.css";
import Form from "./Components/Form";
import CreditCard from "./Components/CreditCard";

export default function App() {
  return (
    <div className="App">
      <h2>REACT CREDIT CARD FORM</h2>
      <div style={{ display: "flex", flexDirection: "row", gap: "6rem" }}>
        <div>
          <CreditCard />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}
