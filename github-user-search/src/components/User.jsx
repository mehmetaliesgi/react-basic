import React from "react";
import "../App.css";

function User({ users }) {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className="user-comp">
          <img src={user.avatar_url} alt="image" width="50" height="50" />
          <a href={user.html_url} target="_blank">
            {user.login}
          </a>
        </div>
      ))}
    </div>
  );
}

export default User;
