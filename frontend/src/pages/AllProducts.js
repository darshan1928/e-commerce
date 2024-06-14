import React, { useState } from "react";
import UploadProduct from "../components/UploadProduct";

const AllProducts = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false);

  return (
    <div className="">
      <div className=" bg-white py-2 px-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">All Product</h2>
        <button
          onClick={() => setOpenUploadProduct(() => true)}
          className="py-1 px-3 rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all"
        >
          Upload Product
        </button>
      </div>
      {openUploadProduct && (
        <UploadProduct onClose={() => setOpenUploadProduct(false)} />
      )}
    </div>
  );
};

export default AllProducts;
