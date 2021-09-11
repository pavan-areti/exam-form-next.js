import { Box, Grid,GridItem, Container } from "@chakra-ui/react";
import { SingleChoice } from "./SingleChoice";
import { Paragraph } from "./Paragraph";
import { FileUpload } from "./FileUpload";
import { CardLeft } from "./CardLeft";
import { DndButton } from "./DndButton";
import { Section } from "./AddSection";
import { MultipleChoice } from "./MultipleAnswer";
import { Sidebar } from "./Sidebar";
import { useState, useEffect, createContext, useContext } from "react";
import { v4 } from "uuid";
import { ListContext } from "../context/context";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Card = () => {
  const { list, setList } = useContext(ListContext);

  const insertcomp = (comp) => {
    switch (comp) {
      case "single":
        return <SingleChoice />;
      case "multiple":
        return <MultipleChoice />;
      case "file":
        return <FileUpload />;
      default:
        return <Paragraph />;
    }
  };

  return (
    <DragDropContext
      onDragEnd={(param) => {
        const srcI = param.source?.index
        const desI = param.destination?.index
        let dummylist = list;
        dummylist.splice(desI,0,dummylist.splice(srcI,1)[0]);
        setList(dummylist)
      }}
    >
      <Droppable droppableId="droppable-1">
        {(provided, _) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {list.map((item, i) => (
              <Draggable
                key={item.id}
                draggableId={"draggable-" + item.id}
                index={i}
              >
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} {...provided.draggableProps}>
                    {item.comp === "section" ? (
                      <div >
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
                              <div {...provided.dragHandleProps}>
                                <DndButton />
                              </div>
                            </GridItem>
                              <Section/>
                          </Grid>
                        </Box>
                      </div>
                    ) : (
                      <Box
                        bg="white"
                        m={5}
                        mt={9}
                        border="1px"
                        borderColor="gray.200"
                        boxShadow="lg"
                        rounded="md"
                        key={item.id}
                        height="100%"
                      >
                        <Grid templateColumns="repeat(17, 1fr)" gap={6}>
                          <div {...provided.dragHandleProps}>
                            <DndButton />
                          </div>
                          <CardLeft id={item.id} />
                          <Box
                            colSpan={1}
                            borderRight="1px"
                            height="90%"
                            mt="4"
                            borderColor="#E05D5D"
                          ></Box>
                          {insertcomp(item.comp)}
                          <Sidebar id={item.id} index={i} />
                        </Grid>
                      </Box>
                    )}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Card;
