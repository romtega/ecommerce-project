import useItemsContext from "@/hooks/useItemsContext";
import defaultImage from "@/assets/default-image.jpg";
import "./itemdetails.css";

const ItemDetails = () => {
  const { itemSelected } = useItemsContext();

  return (
    <div className="item-details">
      <h2>{itemSelected.product_name}</h2>
      <img
        src={itemSelected.image || defaultImage}
        alt={itemSelected.product_name}
      />
      <p>Brand: {itemSelected.brand}</p>
      <p>Price: ${itemSelected.price}</p>
      <p>Description: {itemSelected.description}</p>
    </div>
  );
};

export default ItemDetails;
