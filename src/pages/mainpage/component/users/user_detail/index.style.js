import styled from "styled-components";
export const UserLayout = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid #c5c5c5;
  border-radius: 3px;
  align-items: center;
  text-align: center;
`;

export const UserName = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;
export const UserPosition = styled.p`
  font-size: 1.3rem;
`;

export const UserImage = styled.img`
  width: 180px;
  height: 180px;
`;
