import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api";

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const ContaInfo = () => {
  const [userData, setUserData] = useState<null | UserData>();

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  return (
    <>
      <Center>
        <Text fontSize="3xl" fontWeight="bold" color="white">
          Informações da conta
        </Text>
      </Center>
      <Center>
        <Link to="/conta/1">
          <Text fontSize="xl" color="white">
            Ver saldo da conta
          </Text>
        </Link>
      </Center>
      {userData === undefined || userData === null ? (
        <Center padding="20px">
          <Spinner size="xl" color="white" />
        </Center>
      ) : (
        <Box padding="20px">
          <Text fontSize="large" color="white">
            <p>Nome: {userData?.name}</p>
            <p>E-mail: {userData?.email}</p>
            <p>ID da conta: {userData?.id}</p>
          </Text>
        </Box>
      )}
    </>
  );
};

export default ContaInfo;
