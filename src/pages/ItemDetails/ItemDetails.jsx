import { Link } from "react-router-dom";
import useItemsContext from "@/hooks/useItemsContext";
import defaultImage from "@/assets/default-image.jpg";
import "./itemdetails.css";

const ItemDetails = () => {
  const { itemSelected } = useItemsContext();

  return (
    <>
      <Link to="/">
        <ion-icon
          class="btn-back bg-white text-dark"
          name="arrow-back-outline"
        ></ion-icon>
      </Link>
      <div className="item-details grid grid-center">
        <div className="left">
          <img
            src={itemSelected.image || defaultImage}
            alt={itemSelected.product_name}
          />
        </div>
        <div className="right grid">
          <h2 className="uppercase">{itemSelected.product_name}</h2>
          <p>{itemSelected.brand}</p>
          <p>Categoria: {itemSelected.category}</p>
          <p>{itemSelected.description}</p>
          <p>Price: $ {itemSelected.price}</p>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
