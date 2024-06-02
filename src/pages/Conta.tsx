import { Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import CardInfo from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { useParams, useNavigate, Link } from "react-router-dom";
import { AppContext } from "../components/AppContext";

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const Conta = () => {
  const [userData, setUserData] = useState<null | UserData>();
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(AppContext);

  !isLoggedIn && navigate("/");

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  const actualData = new Date();

  if (userData && id !== userData.id) {
    navigate("/");
  }

  return (
    <>
      <Center padding="15px">
        <Link to="/infoconta">
          <Text fontSize="xl" color="white">
            Ver informações da conta
          </Text>
        </Link>
      </Center>
      <Center>
        <SimpleGrid columns={2} spacing={8} paddingTop={16}>
          {userData === undefined || userData === null ? (
            <Center padding="20px">
              <Spinner size="xl" color="white" />
            </Center>
          ) : (
            <>
              <CardInfo
                mainContent={`Bem vinda ${userData?.name}`}
                content={`${actualData.getDate()}/${actualData.getMonth()}/${actualData.getFullYear()}, ${actualData.getHours()}:${actualData.getMinutes()}`}
              />
              <CardInfo
                mainContent="Saldo"
                content={`R$ ${userData.balance}`}
              />
            </>
          )}
        </SimpleGrid>
      </Center>
    </>
  );
};

export default Conta;
