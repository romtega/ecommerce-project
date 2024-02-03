import "./itemsdashboard.css";

const ItemsDashboard = ({ items, loading }) => {
  return (
    <div className="items-dashboard">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>Product List</h2>
          {items.length > 0 ? (
            <div>
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    <div className="item-image">
                      <img src={item.image} alt={item.product_name} />
                    </div>
                    <div className="item-name">{item.product_name}</div>
                    <div className="item-name">{item.brand}</div>
                    <div className="item-price">
                      <span>$</span>
                      {item.price}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No encontre nada con esa descripcion, intenta de nuevo!</p>
          )}
        </>
      )}
    </div>
  );
};

export default ItemsDashboard;
