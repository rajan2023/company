import styled from "styled-components";
import { NavLink as BaseNavLink } from "react-router-dom";
const NavLink = styled(BaseNavLink)`
  font-size: 16px;
  color: #666;
  font-weight: 600;
  padding: 1.5rem;
  &:hover {
    position: relative;
  }
  &:hover::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    border-top: 4px solid red;
    border-radius: 10px;
  }
`;
const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;
const Navigation = () => {
  return (
    <NavLinks>
      <NavLink to="/dashboard">गरेहप्र</NavLink>
      <NavLink to="#">सम्पर्क</NavLink>
      <NavLink to="#">सुप्पोर्ट</NavLink>
      <NavLink to="#">स्रोत-नक्शा</NavLink>
    </NavLinks>
  );
};
export default Navigation;
