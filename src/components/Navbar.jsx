import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="teal.500" p={4}>
    <Flex maxW="container.md" mx="auto" align="center">
      <Text fontSize="xl" fontWeight="bold" color="white">
        Todo App
      </Text>
      <Spacer />
      <Link as={RouterLink} to="/" color="white" mx={2}>
        Home
      </Link>
      <Link as={RouterLink} to="/about" color="white" mx={2}>
        About
      </Link>
    </Flex>
  </Box>
);

export default Navbar;