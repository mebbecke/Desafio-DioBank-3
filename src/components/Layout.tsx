import { Box } from "@chakra-ui/react";
import { Header } from "./Header";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Box
        minHeight="100vh"
        backgroundColor="#1e192c"
        // display="flex"
        // flexWrap="wrap"
        // justifyContent="center"
      >
        <Header />
        {children}
      </Box>
    </>
  );
};
