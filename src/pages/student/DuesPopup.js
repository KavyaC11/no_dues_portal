import React, { useState } from "react";
import callIcon from "../../assets/call.png";
import mailIcon from "../../assets/mail.png";

const DuesPopup = () => {
  const [user, setUser] = useState({
    name: "Satvik Satvik",
    phone: "91-69012 58977",
    email: "honicheeli@iitg.ac.in",
    profilePic: "", // Replace with actual image
  });
  const [newDue, setNewDue] = useState({ category: "", amount: "" });
  const [dues, setDues] = useState([
    { id: 1, category: "Lab Equipment", date: "23rd Oct 2024", amount: 125 },
    { id: 2, category: "Library Fine", date: "25th Oct 2024", amount: 250 },
  ]);

  const handleAddDue = () => {
    if (!newDue.category || !newDue.amount) return;
    setDues([
      ...dues,
      {
        id: dues.length + 1,
        ...newDue,
        date: new Date().toLocaleDateString("en-GB"),
      },
    ]);
    setNewDue({ category: "", amount: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg border border-gray-200">
        {/* Profile Section */}
        <div className="flex items-center gap-4 border-b pb-4">
          <img
            src={user.profilePic}
            alt=""
            className="w-16 h-16 rounded-full object-cover bg-gray-200"
          />
          <div>
            <p className="text-xs font-medium text-gray-500">NAME</p>
            <h2 className="text-lg font-semibold mb-1">{user.name}</h2>
            <p className="text-[#2164E8] font-medium flex items-center gap-4 text-sm">
              <img src={callIcon} alt="Call" className="w-4 h-4" />
              {user.phone}
              <img src={mailIcon} alt="Mail" className="w-4 h-4" />
              {user.email}
            </p>
          </div>
        </div>
        <h3 className="font-semibold text-[#919191] text-sm mt-4">New Dues</h3>
        {/* New Dues Section */}
        <div className="mt-4 p-4 shadow-md border border-gray-300 rounded-lg space-y-2">
          <div className="grid grid-cols-3 text-xs font-medium gap-4 items-center border-b pb-2">
            <p>Due Category</p>
            <p>Due Amount</p>
            
          </div>
          <div className="grid grid-cols-3 gap-4 items-center">
            <select
              className="p-2 border rounded-lg text-sm bg-[#F3F3F3] w-full"
              value={newDue.category}
              onChange={(e) =>
                setNewDue({ ...newDue, category: e.target.value })
              }
            >
              <option value="">Select Category</option>
              <option value="Lab Equipment">Lab Equipment</option>
              <option value="Library Fine">Library Fine</option>
              <option value="Hostel Dues">Hostel Dues</option>
            </select>

            <input
              type="number"
              placeholder="Eg: 300"
              className="p-2 border rounded-lg text-sm bg-[#F3F3F3] w-full"
              value={newDue.amount}
              onChange={(e) => setNewDue({ ...newDue, amount: e.target.value })}
            />
            <div className="flex gap-2 justify-center">
              <button
                className="p-2 border border-gray-400 text-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-200"
                onClick={handleAddDue}
              >
                ✔
              </button>
              <button className="p-2 border border-red-500 text-red-500 rounded-lg flex items-center justify-center hover:bg-red-100">
                ✖
              </button>
            </div>
          </div>
        </div>

        {/* Add New Dues Button */}
        <div className="mt-4 flex justify-center">
          <button
            className="bg-[#2164E8] text-white font-semibold py-2 px-6 rounded-lg text-sm hover:bg-blue-600"
            onClick={handleAddDue}
          >
            + Add New Due
          </button>
        </div>

        {/* Existing Dues Table */}
        <div className="mt-4">
          <h3 className="font-semibold text-[#919191] text-sm">Existing Dues</h3>
          <table className="w-full mt-2 border-collapse text-black text-sm">
            <tbody>
              {dues.map((due) => (
                <tr key={due.id} className="border-b border-gray-300">
                  <td className="p-2 font-medium ">{due.id}</td>
                  <td className="p-2 font-medium">{due.category}</td>
                  <td className="p-2 font-medium">{due.date}</td>
                  <td className="p-2 font-medium text-green-500">₹ {due.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DuesPopup;
