import { useLocation } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Chatbot from "./Components/Chatbot/Chatbot";
import "./index.css"

const App = () => {
  const {pathname} = useLocation();
  return (
    <div className="">
      {pathname === "/" && <Landing />}
      {pathname === "/chat" && <Chatbot />}
    </div>
  );
}

export default App;
