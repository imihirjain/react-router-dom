import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Loading } from "./Loading";

const AppLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);
  if (navigation.state === "loading") return <Loading />;
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
