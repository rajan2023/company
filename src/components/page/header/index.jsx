import logo from "../../../assest/mofoga.png";
import {
  Button,
  Img,
  LogoContainer,
  MainTitle,
  Address,
  URL,
  AlignItems,
  HeaderContainer,
  DropdownContainer
} from "./index.style.js";
import Navlink from "../../../components/page/nav_links/nav_links";
import SearchBox from "../../../components/core/inputs/search_box";
import { ArrowRight } from "../../../theme/icons/arrow.icon";
import Dropdown from "../../../components/core/dropdown";
const Header = () => {
  return (
    <HeaderContainer>
      <AlignItems>
        <LogoContainer>
          <Img src={logo} alt="Logo" />
          <div>
            <MainTitle>नेपाल सरकार</MainTitle>
            <Address>दुधकोशी थुलुङ्ग गाऊपालिका</Address>
            <Address>सोलुखुम्बु प्रदेश १</Address>
          </div>
        </LogoContainer>
        <URL>cmis.mofaga.gov.np</URL>
        <Navlink />
        <SearchBox />
        <Button>
          लग इन <ArrowRight />
        </Button>
      </AlignItems>
      <DropdownContainer>
        <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </DropdownContainer>
    </HeaderContainer>
  );
};
export default Header;
