import ReactDOM from "react-dom/client";
import Construction from "./components/Construction.tsx";
import Nav from "./components/Nav";
import "./index.scss";

const main = (
    <div className="main">
        <Nav />
        <Construction />
    </div>
);

ReactDOM.createRoot(document.getElementById("root")!).render(main);
