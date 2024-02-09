import useItemsContext from "@/hooks/useItemsContext";
import Navbar from "@/components/Navbar/";
import LoginForm from "@/components/LoginForm/";
import SignupForm from "@/components/SignupForm/";
import ItemsDashboard from "@/components/ItemsDashboard/";
import "./home.css";

const Home = () => {
  const { items, loading } = useItemsContext();

  return (
    <>
      <Navbar />
      {/* <LoginForm />
      <SignupForm /> */}
      <ItemsDashboard items={items} loading={loading} />
    </>
  );
};

export default Home;
