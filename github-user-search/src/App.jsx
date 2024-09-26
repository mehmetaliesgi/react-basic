import { useState } from "react";
import "./App.css";
import User from "./components/User";

const BASE_URL = "https://api.github.com/";

function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  const searchUser = async () => {
    const finalUrl = `${BASE_URL}search/users?q=${query}`;

    await fetch(finalUrl)
      .then((response) => response.json())
      .then((data) => setUsers(data.items))
      .catch((error) => new Error(error));
  };

  return (
    <div className="app">
      <div className="main">
        <h1>Search Github User</h1>
        <input
          type="text"
          placeholder="Enter username or Email"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button onClick={searchUser}>Search</button>
        <h2>Results</h2>
        <div className="user">
          <User users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
