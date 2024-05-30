import { Box, Flex, Spacer, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../services/storage";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({ login: false, user: '', email: '' });
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
      <Flex
        bg="#151515"
        padding="15px"
        color="white"
        w="100%"
        h="70px"
        alignItems="center"
      >
        <Box
          // display='flex'
          fontFamily="Open Sans, sans-serif"
          fontSize="30px"
          fontWeight="bold"
        >
          DIO Bank
        </Box>
        {isLoggedIn && (
          <>
            <Spacer />
            <Button onClick={() => logout()}>Sair</Button>
          </>
        )}
      </Flex>
  );
};
