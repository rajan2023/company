import UserProgressDetail from "./user_progress_detail";
import { Layout } from "../wrapper/index.style";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LeftIcon } from "../../../../theme/icons/left_icon";
import { RightIcon } from "../../../../theme/icons/right_icon";
import { Button } from "./index.style";
const SliderDesign = styled(Slider)`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  flex-direction: row;
  gap: 1rem;
  .slick-track {
    margin: 0 -5px;
  }
  .slick-slide > div {
    margin: 0 5px;
  }
`;
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <Button onClick={onClick}>
      <RightIcon />
    </Button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <Button onClick={onClick}>
      <LeftIcon />
    </Button>
  );
}
const UserProgess = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Layout style={{ padding: "3rem 1rem" }}>
      <SliderDesign {...settings}>
        <UserProgressDetail />
        <UserProgressDetail />
        <UserProgressDetail />
        <UserProgressDetail />
        <UserProgressDetail />
      </SliderDesign>
    </Layout>
  );
};
export default UserProgess;
