import React, { useState } from "react";

const AddDepartmentForm = () => {
  const [departmentName, setDepartmentName] = useState("");
  const [description, setDescription] = useState("");

  // Handle department name change
  const handleNameChange = (e) => {
    setDepartmentName(e.target.value);
  };

  // Handle description change
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send the data to the backend)
    console.log("Department Added:", { departmentName, description });
  };

  return (
    <div className="flex items-center justify-between p-6 space-x-6">
      {/* Form Section */}
      <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Add New Department</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Department Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Department Name
            </label>
            <input
              type="text"
              id="name"
              value={departmentName}
              onChange={handleNameChange}
              required
              className="mt-1 p-3 border border-gray-300 rounded-md w-full"
              placeholder="Enter department name"
            />
          </div>

          {/* Description Field */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              required
              rows="4"
              className="mt-1 p-3 border border-gray-300 rounded-md w-full"
              placeholder="Enter department description"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md w-full"
          >
            Add Department
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="flex-none w-48 h-48 bg-gray-100 rounded-lg flex justify-center items-center">
        <img
          src="/department.png"
          alt="Department"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
};

export default AddDepartmentForm;
