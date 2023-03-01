import Header from "../../components/page/header";
import Footer from "../../components/page/footer";
import User from "./component/users";
import UserProgress from "./component/user_progress";
import ChartDescription from "./component/chart_description";
import MapImg from "../../assest/map.png";
import { BodyElements, ImageStyle } from "./index.style";
const MainPage = () => {
  return (
    <div>
      <Header />
      <BodyElements>
        <ImageStyle src={MapImg} alt="map" />
        <UserProgress />
        <ChartDescription />
        <User />
      </BodyElements>
      <Footer />
    </div>
  );
};
export default MainPage;
