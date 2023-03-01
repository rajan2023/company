import styled from "styled-components";
import { Button as AuthButton } from "../../../components/core/button/index.style";
import { initial_padding } from "../../../theme/padding.style";
export const AlignItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Img = styled.img`
  width: 85px;
  height: 75px;
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;
export const MainTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #353535;
  line-height: 2rem;
`;
export const Address = styled(MainTitle)`
  color: red;
  font-size: 14px;
`;
export const URL = styled.p`
  font-size: 25px;
  font-weight: 500;
  color: #888;
`;
export const Button = styled(AuthButton)`
  background-color: #377cdb;
`;

export const HeaderContainer = styled.div`
  padding: 2rem ${initial_padding};
  display: flex;
  flex-direction: column;
  gap:2.5rem;
  box-shadow: 2px 4px 10px #eee;
`;

export const DropdownContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;
