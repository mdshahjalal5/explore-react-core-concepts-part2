import { useEffect, useState } from "react";
import "./Friends.css";
import Friend from "./Friend";
export default function Friends() {
  const [friends, setFriends] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setFriends(data));
  // }, []);
  //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log("Response:", res);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Data:", data);
        setFriends(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="box">
      <h3>Friends: {friends.length}</h3>
      {friends.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
}

/**
 * 1. state to hold data
 * 2. use effect with dependency array
 * 3. use fetch to load data
 * 4. set loaded data to the state
 * 5. display data on the component
 */

