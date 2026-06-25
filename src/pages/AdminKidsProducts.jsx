import React, { useContext } from "react";
import ProductManagement from "../components/ProductManagement";
import { AdminContext } from "../context/AdminContext";

const AdminKidsProducts = () => {
  const { kidsProducts, addKidsProduct, updateKidsProduct, deleteKidsProduct } = useContext(AdminContext);

  return (
    <ProductManagement
      category="Kids Wear"
      products={kidsProducts}
      addProduct={addKidsProduct}
      updateProduct={updateKidsProduct}
      deleteProduct={deleteKidsProduct}
    />
  );
};

export default AdminKidsProducts;
