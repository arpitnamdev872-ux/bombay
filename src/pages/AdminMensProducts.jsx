import React, { useContext } from "react";
import ProductManagement from "../components/ProductManagement";
import { AdminContext } from "../context/AdminContext";

const AdminMensProducts = () => {
  const { mensProducts, addMensProduct, updateMensProduct, deleteMensProduct } = useContext(AdminContext);

  return (
    <ProductManagement
      category="Mens Wear"
      products={mensProducts}
      addProduct={addMensProduct}
      updateProduct={updateMensProduct}
      deleteProduct={deleteMensProduct}
    />
  );
};

export default AdminMensProducts;
