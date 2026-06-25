import React, { useContext } from "react";
import ProductManagement from "../components/ProductManagement";
import { AdminContext } from "../context/AdminContext";

const AdminLadiesProducts = () => {
  const { ladiesProducts, addLadiesProduct, updateLadiesProduct, deleteLadiesProduct } = useContext(AdminContext);

  return (
    <ProductManagement
      category="Ladies Wear"
      products={ladiesProducts}
      addProduct={addLadiesProduct}
      updateProduct={updateLadiesProduct}
      deleteProduct={deleteLadiesProduct}
    />
  );
};

export default AdminLadiesProducts;
