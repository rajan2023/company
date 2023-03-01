import DefaultImg from "../../../../../assest/user.png";
import { UserLayout, UserImage, UserName, UserPosition } from "./index.style";
const UserDetail = (props) => {
  return (
    <UserLayout>
      <UserImage src={DefaultImg} alt="user" />
      <div>
        <UserName>{props.userName}</UserName>
        <UserPosition>{props.userPosition}</UserPosition>
      </div>
    </UserLayout>
  );
};
export default UserDetail;
