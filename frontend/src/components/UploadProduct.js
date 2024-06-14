import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaCloudUploadAlt } from "react-icons/fa";
import productCategory from "../helpers/productCategory";

const UploadProduct = ({ onClose }) => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    productImage: "",
    price: "",
    selling: "",
    category: "",
    description: "",
  });
  const handleOnchnage = () => {};
  return (
    <div className=" fixed  w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center ">
      <div className="p-4 bg-white rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden">
        <div className="flex justify-between items-center pb-3">
          <h2 className="font-bold text-lg">Upload Product</h2>
          <div
            className="w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer"
            onClick={onClose}
          >
            <CgClose />
          </div>
        </div>
        <form className="grid p-4 gap-2 overflow-y-scroll h-full pb-5">
          <label htmlFor="productName">Product Name : </label>
          <input
            id="productName"
            type="text"
            placeholder="Enter Product Name"
            name="productName"
            value={data.productName}
            onChange={handleOnchnage}
            className="p-2 bg-slate-100 border rounded"
          />
          <label className="mt-3" htmlFor="brandName">
            Brand Name :{" "}
          </label>
          <input
            id="brandName"
            type="text"
            placeholder="Enter Brand Name"
            name="brandName"
            value={data.brandName}
            onChange={handleOnchnage}
            className="p-2 bg-slate-100 border rounded"
          />
          <label className="mt-3" htmlFor="category">
            Category :
          </label>
          <select
            value={data.category}
            className="p-2 bg-slate-100 border rounded"
          >
            {productCategory.map((category, index) => {
              return (
                <option value={category.value} key={category.id}>
                  {category.value}
                </option>
              );
            })}
          </select>
          <label className="mt-3" htmlFor="productImage">
            Product Image :
          </label>
          <div className="bg-slate-100 border p-2 rounded h-32 w-full"></div>
          <div className="">
            <img
              src=""
              alt={data.produuctImage}
              w={80}
              h={80}
              className="bg-slate-100 border"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
