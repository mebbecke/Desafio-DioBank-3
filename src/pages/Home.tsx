import { Box, CardBody, CardHeader, Heading, Input } from "@chakra-ui/react";
import { DCard } from "../components/Card";
import { useContext, useState } from "react";
import { DButton } from "../components/Button";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { user, setIsLoggedIn, isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  if (isLoggedIn){
    navigate('/conta/1');
  }

  const validateUser = async (email: string, password: string) => {
    const loggedIn = await login(email, password);

    if (!loggedIn) {
      alert("E-mail ou senha inválidos!");
    } else {
      setIsLoggedIn(true);
      changeLocalStorage({ login: true, email: email, user: user });
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
              onChange={(event) => setPassword(event.target.value)}
            />
            <DButton
              id="login"
              onClick={() => validateUser(email, password)}
              text="Entrar"
            />
          </CardBody>
        </>
      </DCard>
    </Box>
  );
};

export default Home;
