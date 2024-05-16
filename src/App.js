import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./App.css";
import { ThreadList } from "./thread-list";
import CreateThread from "./create-thread";
import Thread from "./thread";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThreadList />} />
        <Route path="/thread" element={<Outlet />}>
          <Route path="new" element={<CreateThread />} />
          <Route path=":thread_id" element={<Thread />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
