import ReactDOM from "react-dom";
import Construction from "./components/Construction.tsx";
import Nav from "./components/Nav";
import "./index.css";

const main = (
    <div className="">
        <Nav />
        <Construction />
    </div>
);

ReactDOM.render(main, document.getElementById("root"));
