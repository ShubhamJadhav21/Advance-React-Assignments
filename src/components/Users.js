import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import './Users.css';

export default function UserCards() {
  const [users, setUsers] = useState([]);
  const [showCards, setShowCards] = useState(false);

  async function getUserData() {
    try {
      const response = await fetch("https://reqres.in/api/users/ ");
      const data = await response.json();
      setUsers(data.data);
      setShowCards(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button onClick={getUserData}>Get User</button>
      {showCards && (
        <div className="cards">
          {users &&
            users.map((user) => {
              return <UserCard key={user.id} user={user} />;
            })}
        </div>
      )}
    </>
  );
}
