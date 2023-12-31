import {
  CloseRounded,
  DarkModeRounded,
  GroupRounded,
  LightModeRounded,
  PersonRounded,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { setDarkMode } from "../redux/reducers/userSlice";

const Container = styled.div`
  flex: 0.65;
  flex-direction: column;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.menubar};
  color: ${({ theme }) => theme.menu_primary_text};
  @media (max-width: 1100px) {
    position: fixed;
    z-index: 1000;
    width: 100%;
    max-width: 300px;
    left: ${({ setMenuOpen }) => (setMenuOpen ? "0" : "-100%")};
    transition: 0.3s ease-in-out;
    flex-direction: column; 
    
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
`;

const LogoText = styled(Link)`
  font-size: 28px;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  background: linear-gradient(
    225deg,
    rgb(72, 249, 85) 0%,
    rgb(72, 249, 85) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  @media only screen and (max-width: 600px) {
    font-size: 22px;
  }
`;

const MenuItems = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1100px) {
    flex-direction: column; /* Change back to row layout for larger screens */
     /* Reset the margin */
  }
`;


const NavLinkItem = styled(NavLink)`
  display: flex;
  color: ${({ theme }) => theme.menu_secondary_text};
  align-items: center;
  gap: 16px;
  cursor: pointer;
  font-size: 18px;
  padding: 18px 22px;
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  margin: 0px 10px;
  &:hover {
    background-color: ${({ theme }) => theme.menu_secondary_text + 10};
  }
  &.active {
    background-color: ${({ theme }) => theme.primary + 10};
    color: ${({ theme }) => theme.primary};
    font-weight: 500;
  }

  @media (max-width: 768px) {
    padding: 20px 16px;
    font-size: 16px;
    display: none;
  }
`;

const Hr = styled.div`
  height: 1px;
  margin: 15px 0px 15px 0px;
  background: ${({ theme }) => theme.menu_secondary_text + 30};
`;

const Close = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: block;
  }
`;

const Space = styled.div`
  height: 50px;
`;

const Item = styled.div`
  display: flex;
  color: ${({ theme }) => theme.menu_secondary_text};
  align-items: center;
  gap: 16px;
  cursor: pointer;
  font-size: 18px;
  padding: 20px 22px;
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  margin: 0px 10px;
  &:hover {
    background-color: ${({ theme }) => theme.menu_secondary_text + 10};
  }

  @media (max-width: 768px) {
    padding: 20px 16px;
    font-size: 16px;
    display: none;
  }
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px;
`;

const ContainerWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Menu = ({ setMenuOpen }) => {
  // Hooks
  const { darkMode } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <Container setMenuOpen={setMenuOpen}>
      <Header>
        <LogoText to="/">User Management</LogoText>
        <MenuItems>
          <NavLinkItem
            to="/"
            index
            exact
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <PersonRounded sx={{ fontSize: "26px" }} />
            Users
          </NavLinkItem>
          <NavLinkItem
            to="/teams"
            index
            exact
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <GroupRounded sx={{ fontSize: "26px" }} />
            Teams
          </NavLinkItem>
          <Hr />
          <Item onClick={() => dispatch(setDarkMode(!darkMode))}>
            {darkMode ? (
              <LightModeRounded sx={{ fontSize: "26px" }} />
            ) : (
              <DarkModeRounded sx={{ fontSize: "26px" }} />
            )}
          
          </Item>
        </MenuItems>
        <Close>
          <CloseRounded onClick={() => setMenuOpen(false)} />
        </Close>
      </Header>
  
    </Container>
  );
};

export default Menu;
