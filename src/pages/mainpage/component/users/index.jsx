import UserDetail from "./user_detail";
import { UsersLayout, Title } from "./index.style";
import { Layout } from "../wrapper/index.style";
import { useQuery } from "react-query";
const Users = () => {
  const { isLoading, error, data } = useQuery("userData", () =>
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    )
  );
  console.log(data);
  return (
    <Layout>
      <Title>वडागत पदाधिकारी</Title>
      <UsersLayout>
        {data
          ? data.slice(0, 5).map((p) => (
              <UserDetail userName={p.name} userPosition={p.username} />
          ))
          : null}
      </UsersLayout>
    </Layout>
  );
};
export default Users;
