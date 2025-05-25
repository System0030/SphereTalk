// src/pages/admin/AdminUserTable.jsx
import React, { useState } from "react";




const initialUsers = [
  {
    id: 1,
    username: "ANIMECOON",
    email: "weirdcoot@gmail.com",
    role: "ADMIN",
    status: "ACTIVE",
    created: "01/10/24",
    lastPost: "05/01/25",
  },
  {
    id: 2,
    username: "JACKMAN0691",
    email: "jackman01@gmail.com",
    role: "USER",
    status: "ACTIVE",
    created: "02/14/24",
    lastPost: "05/01/25",
  },
  {
    id: 3,
    username: "POTATOAIM",
    email: "xwisssta@gmail.com",
    role: "USER",
    status: "BAN",
    created: "04/13/21",
    lastPost: "05/01/25",
  },
  {
    id: 4,
    username: "REX TREX",
    email: "rexw04@gmail.com",
    role: "USER",
    status: "ACTIVE",
    created: "05/29/20",
    lastPost: "05/01/25",
  },
  {
    id: 5,
    username: "BAYABAS0231",
    email: "bgb123@gmail.com",
    role: "USER",
    status: "MUTED",
    created: "12/25/23",
    lastPost: "05/01/25",
  },
  {
    id: 6,
    username: "COLDMAN01",
    email: "warlock09@gmail.com",
    role: "USER",
    status: "ACTIVE",
    created: "03/01/24",
    lastPost: "05/01/25",
  },
  {
    id: 7,
    username: "TUNGTUNGSAUR",
    email: "arrow91@gmail.com",
    role: "USER",
    status: "BAN",
    created: "06/12/23",
    lastPost: "05/01/25",
  },
  {
    id: 8,
    username: "PEPERONI7",
    email: "notbro7@gmail.com",
    role: "USER",
    status: "OFFLINE",
    created: "07/13/25",
    lastPost: "05/01/25",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "ACTIVE":
      return "text-green-500";
    case "MUTED":
      return "text-black";
    case "BAN":
      return "text-red-500";
    case "OFFLINE":
      return "text-gray-400";
    default:
      return "text-white";
  }
};

const AdminUserTable = () => {
  const [users, setUsers] = useState(initialUsers);

  const toggleMute = (id) => {
    setUsers((prev) =>
      prev.map((user) => {
        if (user.id !== id) return user;
        if (user.status === "MUTED") return { ...user, status: "ACTIVE" };
        if (user.status === "BAN") return { ...user, status: "MUTED" };
        return { ...user, status: "MUTED" };
      })
    );
  };

  const toggleBan = (id) => {
    setUsers((prev) =>
      prev.map((user) => {
        if (user.id !== id) return user;
        if (user.status === "BAN") return { ...user, status: "ACTIVE" };
        if (user.status === "MUTED") return { ...user, status: "BAN" };
        return { ...user, status: "BAN" };
      })
    );
  };

  return (
    <div className="w-full">
      <h2 className=" text-lg font-bold mb-4 px-2 py-1 bg-white text-black w-fit rounded">
        USER MANAGEMENT
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-xs text-white border border-gray-700">
          <thead>
            <tr className="bg-gray-800 text-left">
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">USERNAME</th>
              <th className="py-2 px-4">E-MAIL</th>
              <th className="py-2 px-4">ROLES</th>
              <th className="py-2 px-4">STATUS</th>
              <th className="py-2 px-4">CREATED</th>
              <th className="py-2 px-4">LAST POST</th>
              <th className="py-2 px-4 text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t border-gray-700">
                <td className="py-2 px-4">{user.id}</td>
                <td className="py-2 px-4 font-bold">{user.username}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.role}</td>
                <td className={`py-2 px-4 font-semibold ${getStatusColor(user.status)}`}>{user.status}</td>
                <td className="py-2 px-4">{user.created}</td>
                <td className="py-2 px-4">{user.lastPost}</td>
                <td className="py-2 px-4 text-center space-x-2">
                  <button
                    onClick={() => toggleMute(user.id)}
                    className="bg-yellow-500 text-black rounded-full w-6 h-6 flex items-center justify-center hover:bg-yellow-400"
                    title="Toggle Mute"
                  >
                    ⏸
                  </button>
                  <button
                    onClick={() => toggleBan(user.id)}
                    className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-500"
                    title="Toggle Ban"
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUserTable;
