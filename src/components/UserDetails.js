import React, { useEffect, useState } from "react";

const UserDetails = () => {
  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // State to store user data fetched from the server
  const [users, setUsers] = useState([]);

  // Fetch user data from the server on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://user-data-zpsd.onrender.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // State to track the selected user for generating a report
  const [selectedUser, setSelectedUser] = useState(null);

  // Filter users based on the search query
  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to open the report modal for a selected user
  const openReportModal = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="p-4 w-[100%]">
      <div className="flex justify-center">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search users by Username"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-7 outline-none w-60 h-9 border-2 border-gray-200 pl-3 placeholder:font-mono sm:placeholder:text-sm"
        />

        {/* Report modal */}
        {selectedUser && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded">
              <h2 className="font-mono">
                Generate Report for {selectedUser.username}?
              </h2>
              <div className="flex justify-center mt-4 font-mono">
                <button
                  className="border-2 border-green-400 text-white bg-green-400 text-xs rounded-md p-2 mr-4"
                  onClick={() => {
                    alert("Data Generated Successfully");
                    setSelectedUser(null);
                  }}
                >
                  Generate
                </button>
                <button
                  className="border-2 border-red-400 text-white bg-red-400 text-xs rounded-md p-2 "
                  onClick={() => setSelectedUser(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* User table */}
      <div className="overflow-x-auto">
        <table className="w-[90%] m-auto border-2 border-slate-300">
          <thead>
            <tr className="bg-amber-200">
              <th className="p-2 font-semibold tracking-wide text-left">ID</th>
              <th className="p-2 font-semibold tracking-wide text-left">
                Username
              </th>
              <th className="p-2 font-semibold tracking-wide text-left">
                Email
              </th>
              <th className="p-2 font-semibold tracking-wide text-left">
                Phone
              </th>
              <th className="p-2 font-semibold tracking-wide text-left">
                Creation Date
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Display filtered user data in the table */}
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                onClick={() => openReportModal(user)}
                className="space-x-3 cursor-pointer hover:bg-slate-200 border-2 border-slate-300"
                id="table-entry"
              >
                <td className="p-2 text-sm sm:p-1">{user.id}</td>
                <td className="p-2 text-sm sm:p-1">{user.username}</td>
                <td className="p-2 text-sm sm:p-1">{user.email}</td>
                <td className="p-2 text-sm sm:p-1">{user.phone}</td>
                <td className="p-2 text-sm sm:p-1">{user.creationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetails;
