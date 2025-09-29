import { useState } from "react";

const AddVideoModal = ({ onClose, onSubmit }) => {
  const [form, setForm] = useState({
    link: "",
    description: "",
    category: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.link) {
      newErrors.link = "YouTube link is required.";
    }
    if (!form.description) {
      newErrors.description = "Description is required.";
    }
    if (!form.category) {
      newErrors.category = "Category is required.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit(form);
  };

  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center"
      onClick={(e) => e.target.id === "modal-overlay" && onClose()}
    >
      <div className="bg-white p-6 rounded-2xl w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Add New Video</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="YouTube Link"
              className={`w-full border p-2 rounded-md ${
                errors.link ? "border-red-500" : "border-gray-500"
              }`}
              value={form.link}
              onChange={(e) => handleInputChange("link", e.target.value)}
            />
            {errors.link && (
              <p className="text-red-500 text-sm mt-1">{errors.link}</p>
            )}
          </div>
          <div>
            <textarea
              placeholder="Description"
              className={`w-full border p-2 rounded-md ${
                errors.description ? "border-red-500" : "border-gray-500"
              }`}
              value={form.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>
          <div>
            <select
              className={`w-full border p-2 rounded-md ${
                errors.category ? "border-red-500" : "border-gray-500"
              }`}
              value={form.category}
              onChange={(e) =>
                handleInputChange("category", parseInt(e.target.value))
              }
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
              <option value="4">Category 4</option>
              <option value="5">Category 5</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">{errors.category}</p>
            )}
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-gray-200 cursor-pointer hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-purple-600 text-white cursor-pointer hover:bg-purple-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVideoModal;