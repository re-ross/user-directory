import "./App.css";
import Header from "./components/Header";
import UserView from "./components/UserView";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <UserView />
      </div>
    </div>
  );
}

export default App;
