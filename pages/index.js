import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, Text,Grid,GridItem,Box,Button,HStack } from "@chakra-ui/react";
import { Section } from "../components/AddSection";
import CardLeft from "../components/CardLeft";
import { DndButton } from "../components/DndButton";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import { v4 } from "uuid";
import { ListContext } from "../context/context";

export default function Home() {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList([{ id: v4(), comp: "single" }]);
  }, []);

  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Exam Form</title>
      </Head>
      <ListContext.Provider value={{ list, setList }}>
        <Container w="250%" maxW="container.lg">
          <Text p={2} fontSize={"1.5em"}>
            Create Questions
          </Text>
          <hr style={{ background: "brown" }} />
          <Box
            bg="white"
            color="black"
            m={5}
            mt={10}
            pt={6}
            border="1px"
            borderColor="gray.200"
            boxShadow="lg"
            rounded="md"
          >
            <Grid templateColumns="repeat(17, 1fr)" gap={3}>
              <GridItem colSpan={1}>
                  <DndButton />
              </GridItem>
              <Section />
            </Grid>
          </Box>
          <Card />
          <HStack m={3} w="100%" style={{justifyContent:"center"}}>
           <Button colorScheme="messenger" m={2}>Publish</Button>
           <Button colorScheme="red" m={2}>Discard</Button>
          </HStack>
        </Container>
      </ListContext.Provider>
    </div>
  );
}
