import { Link } from "react-router-dom";
import useItemsContext from "@/hooks/useItemsContext";
import defaultImage from "@/assets/default-image.jpg";
import "./itemsdashboard.css";

const ItemsDashboard = () => {
  const { items, loading, setItemSelected, searchTerm } = useItemsContext();

  const itemsWithImages = items.map((item) => ({
    ...item,
    image: item.image || defaultImage,
  }));

  const filteredItems = itemsWithImages.filter((item) => {
    return item.product_name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="items-dashboard container">
      <h2 className="items-dashboard-title uppercase">
        Tenemos lo que necesitas ☺️
      </h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="items-gallery grid">
          {filteredItems.map((item) => (
            <div className="item-card grid grid-center" key={item.id}>
              <Link
                to={`/itemdetails/${item.product_name}`}
                className="item-link"
                onClick={() => setItemSelected(item)}
              >
                <img
                  className="item-image"
                  src={item.image ?? defaultImage}
                  alt={item.product_name}
                />
                <div className="item-info grid grid-center">
                  <h3 className="item-name">{item.product_name}</h3>
                  <h5 className="item-brand uppercase ff-serif">
                    {item.brand}
                  </h5>
                  <p className="item-price fs-400 letter-spacing-3 ">
                    <span>$</span>
                    {item.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemsDashboard;
