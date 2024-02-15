import {
  Box,
  Flex,
  useColorModeValue,
  Image,
  Text,
  Stack,
  Button,
  Collapse,
  useDisclosure,
  IconButton
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import { navitems } from "../../Constants/DesktopNavitems";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box>
        <Flex
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          bg={useColorModeValue("white", "gray.800")}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
          py={{ base: 6 }}
          px={{ base: 4, md: 16 }}
        >
          <Flex align="center" flex={{ base: 1 }} justify={{ base: "start" }}>
            <NavLink to="/">
              <Image src={logo} />
            </NavLink>
            <Flex display={{ base: "none", lg: "flex" }} ml={"16"}>
              <DesktopNavbar />
            </Flex>
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Flex display={{ base: "flex", lg: "none" }}>
            <IconButton
              onClick={onToggle}
              color={"brand_pink.900"}
              icon={isOpen ? <FiX size="32px" /> : <FiMenu size="32px" />}
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
            <Box>
              <NavLink to={"/connectWallet"}>
                <Button
                  fontSize={"md"}
                  color={"white"}
                  bg={"button_gradient"}
                  px={8}
                  _hover={{
                    bg: "button_gradient_light",
                  }}
                  _active={{
                    bg: "button_gradient_light",
                  }}
                >
                  Connect Wallet
                </Button>
              </NavLink>
            </Box>
          </Stack>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
        <MobileNav onToggle={onToggle} />
      </Collapse>
      </Box>

     
    
    </>
  );
}

const DesktopNavbar = () => {
  const location = useLocation();

  return (
    <>
      {navitems.map((navItem, index) => {
        const { item, link } = navItem;
        console.log(index);
        return (
          <Box key={index}>
            <NavLink to={link}>
              <Text
                p={2}
                fontSize={"md"}
                fontWeight={400}
                color={
                  location?.pathname === link ? "brand_pink.900" : "gray.800"
                }
                _hover={
                  location?.pathname !== link && {
                    textDecoration: "none",
                    color: "gray.600",
                  }
                }
              >
                {item}
              </Text>
            </NavLink>
          </Box>
        );
      })}
    </>
  );
};

const MobileNav = ({ onToggle }) => {
  return(
    <Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{ lg: "none" }} spacing={0}>
      {/* {navitems.map(({ item = "", link = "" }) => (
        <MobileNav key={item} onClick={onToggle} item={item} link={link} />
      ))} */}
      <Box onClick={onToggle}>
      <NavLink to={"/connect-wallet"}>
            <Button
              fontSize={"md"}
              color={"white"}
              bg={"button_gradient"}
              px={8}
              _hover={{
                bg: "button_gradient_light",
              }}
              _active={{
                bg: "button_gradient_light",
              }}
            >
              Connect Wallet
            </Button>
          </NavLink>
      </Box>
    </Stack>
  )
}


export default Navbar;
