import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(
        "/api/v1/furusato/company/?appid=dj00aiZpPUg3dXd2YzNEakNTSSZzPWNvbnN1bWVyc2VjcmV0Jng9NGU-",
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response.data); // 取得したデータの形式を確認するためにログに出力
        setUsers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Company List</h1>
      <ul>
        {Array.isArray(users) && users.length > 0 ? (
          users.map((user, index) => (
            <li key={index}>
              <h2>{user.cpName}</h2>
              <p>{user.building}</p>
              <p>Location: {user.city}</p>
            </li>
          ))
        ) : (
          <li>No data available</li>
        )}
      </ul>
    </div>
  );
}

export default Home;
