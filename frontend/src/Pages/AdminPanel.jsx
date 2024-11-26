import { useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    picture: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, picture: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("picture", formData.picture);

    try {
      const response = await axios.post(
        "http://localhost:2000/api/v1/admin/adminPanel",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status == 201) {
        alert("product uploded succesfully");
        console.log(response);
      } else {
        alert("failed to upload");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-16 text-center">
        <div>
          <h3 className="text-3xl text-center font-poppins font-bold">
            Admin Panel
          </h3>
        </div>
        <div className="mt-20 text-xl ">
          <div className="ml-2 mb-5">
            <label>Product Name: </label>
            <input
              className="border border-black "
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mr-1 mb-5">
            <label>Product Price: </label>
            <input
              className="border border-black"
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="ml-40">
            <label>Product Picture: </label>
            <input
              type="file"
              name="picture"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>
        </div>
        <button
          className="mt-5 border pl-2 pr-2 border-blue-400 bg-blue-500 text-white rounded-md hover:font-bold"
          type="submit"
        >
          Upload Product
        </button>
      </div>
    </form>
  );
};

export default AdminPanel;
