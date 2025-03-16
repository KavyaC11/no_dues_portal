import React, { useState } from "react";
import background from "../../assets/background.png";
import logo from "../../assets/iitg-logo.png";

const LoginStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    program: "B.Tech",
    branch: "",
    hostel: "Brahmaputra",
    roomNumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "rollNumber" && !/^\d*$/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Required";
    if (!formData.rollNumber.trim()) newErrors.rollNumber = "Required";
    if (!formData.branch.trim()) newErrors.branch = "Required";
    if (!formData.roomNumber.trim()) newErrors.roomNumber = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted Data:", formData);
    }
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div
        className="max-w-md w-80 p-5 flex flex-col gap-3 shadow-lg bg-white rounded-lg absolute"
        style={{
          fontFamily: "Inter, sans-serif",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <img src={logo} alt="IIT Guwahati Logo" className="w-7 h-7 object-contain" />
        </div>
          <h2 className="text-sm font-bold">Enter Personal Details</h2>

        <div className="flex justify-between items-center">
          <label className="text-xs font-semibold">Name</label>
          <span className="text-red-500 text-xs">{errors.name}</span>
        </div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your Full name"
          className="p-2 border rounded w-full mb-1 text-xs"
        />

        <div className="flex justify-between items-center">
          <label className="text-xs font-semibold">Roll Number</label>
          <span className="text-red-500 text-xs">{errors.rollNumber}</span>
        </div>
        <input
          type="text"
          name="rollNumber"
          value={formData.rollNumber}
          onChange={handleChange}
          placeholder="Enter your Roll Number"
          className="p-2 border rounded w-full mb-1 text-xs"
        />

        {/* Grid for Program-Branch & Hostel-Room */}
        <div className="grid grid-cols-2 gap-3 mb-2">
          <div className="flex flex-col">
            <label className="text-xs font-semibold">Program</label>
            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="p-2 border rounded w-full text-xs"
            >
              <option>B.Tech</option>
              <option>M.Tech</option>
              <option>PhD</option>
              <option>B.Des</option>
            </select>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold">Branch</label>
              <span className="text-red-500 text-xs">{errors.branch}</span>
            </div>
            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              placeholder="Eg: CSE"
              className="p-2 border rounded w-full text-xs"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-semibold">Hostel</label>
            <select
              name="hostel"
              value={formData.hostel}
              onChange={handleChange}
              className="p-2 border rounded w-full text-xs"
            >
              <option>Brahmaputra</option>
              <option>Lohit</option>
              <option>Disang</option>
              <option>Dhansiri</option>
              <option>Subhansiri</option>
              <option>Siang</option>
              <option>Umiam</option>
              <option>Kapili</option>
              <option>Kameng</option>
              <option>Barak</option>
              <option>Manas</option>
              <option>Dihing</option>
            </select>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold">Room No.</label>
              <span className="text-red-500 text-xs">{errors.roomNumber}</span>
            </div>
            <input
              type="text"
              name="roomNumber"
              value={formData.roomNumber}
              onChange={handleChange}
              placeholder="Eg: A-303"
              className="p-2 border rounded w-full text-xs"
            />
          </div>
        </div>

        <div className="flex justify-end mt-1">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 text-xs"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginStudent;
