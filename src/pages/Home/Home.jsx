import useItemsContext from "@/hooks/useItemsContext";
import ItemsDashboard from "@/components/ItemsDashboard/";
import "./home.css";

const Home = () => {
  const { items, loading } = useItemsContext();

  return (
    <>
      <ItemsDashboard items={items} loading={loading} />
    </>
  );
};

export default Home;
