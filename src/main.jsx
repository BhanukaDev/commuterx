import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { User } from "./components/User.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <User>
      <App />
    </User>
  </>
)
