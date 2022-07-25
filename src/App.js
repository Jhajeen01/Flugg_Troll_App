import "./App.css";
import Sidebar from "./Sidebar";
import "./Sidebar.css";
import Feed from "./Feed";
import "./Feed.js";
import RightSide from "./RightSidebar";
function App() {
  return (
    <div className="app">
      <Sidebar />
      {/*feed */}
      <Feed />
      {/* what's happening */}
      <RightSide />
    </div>
  );
}
export default App;
