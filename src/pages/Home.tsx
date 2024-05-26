import { Box, CardBody, CardHeader, Heading, Input } from "@chakra-ui/react";
import { DCard } from "../components/Card";
import { MouseEventHandler, useContext, useState } from "react";
import { DButton } from "../components/Button";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email: string) => {
    const loggedIn = await login(email);

    if (!loggedIn) {
      alert("E-mail inválido!");
    } else {
      setIsLoggedIn(true);
      changeLocalStorage({ login: true });
      navigate("/conta/1");
    }
  };

  return (
    <Box>
      <DCard id="login">
        <>
          <CardHeader>
            <Heading size="lg">Faça o login</Heading>
          </CardHeader>
          <CardBody justifyContent="center">
            <Input
              color="#73818f"
              placeholder="E-mail"
              _placeholder={{ opacity: 1 }}
              _focus={{ bg: "#e3e5e8" }}
              variant="filled"
              marginBottom="10px"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              color="#73818f"
              type="password"
              placeholder="Senha"
              _placeholder={{ opacity: 1 }}
              _focus={{ bg: "#e3e5e8" }}
              variant="filled"
            />
            <DButton
              id="login"
              onClick={() => validateUser(email)}
              text="Entrar"
            />
          </CardBody>
        </>
      </DCard>
    </Box>
  );
};

export default Home;
