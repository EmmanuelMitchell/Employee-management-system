import { useState } from "react";
import { Link } from "react-router-dom";

const departmentsData = [
  { id: 1, name: "Marketing", description: "Handles marketing campaigns" },
  {
    id: 2,
    name: "Engineering",
    description: "Develops and maintains products",
  },
  { id: 3, name: "HR", description: "Human Resources and recruiting" },
  // Add more sample departments here...
];

export default function DepartmentsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of items per page

  // Handle search
  const filteredDepartments = departmentsData.filter((dept) =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredDepartments.length / itemsPerPage);
  const displayedDepartments = filteredDepartments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDelete = (id) => {
    // Add your delete logic here (e.g., remove from state or make an API call)
    console.log(`Deleted department with ID: ${id}`);
  };

  const handleEdit = (id) => {
    // Add your edit logic here (e.g., open edit form or navigate to edit page)
    console.log(`Editing department with ID: ${id}`);
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search departments..."
          className="p-2 border rounded-lg w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link
          to="/admin-dashboard/add-department"
          className="px-4 py-2 bg-green-500 text-white rounded-md text-sm"
        >
          Add Department
        </Link>
      </div>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-slate-950 text-white">
              <th className="py-3 px-4 text-left text-sm font-semibold">No</th>
              <th className="py-3 px-4 text-left text-sm font-semibold">
                Name
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold">
                Description
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedDepartments.map((dept, index) => (
              <tr key={dept.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-sm">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                <td className="py-3 px-4 text-sm">{dept.name}</td>
                <td className="py-3 px-4 text-sm">{dept.description}</td>
                <td className="py-3 px-4 text-sm">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(dept.id)}
                      className="px-4 py-2 bg-orange-400 text-white rounded-md text-xs"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(dept.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-md text-xs"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePagination(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 text-white bg-blue-500 rounded-md disabled:bg-gray-300"
        >
          Previous
        </button>
        <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => handlePagination(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 text-white bg-blue-500 rounded-md disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}
