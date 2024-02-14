import { Box, Flex, useColorModeValue,Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/logo.svg"

function Navbar() {
  return (
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
            <Image src={logo}/>
          </NavLink>
         
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
