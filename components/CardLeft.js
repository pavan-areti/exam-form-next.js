import { useContext } from "react";
import {
  GridItem,
  Select,
  InputGroup,
  InputRightAddon,
  Input,
  Text,
  FormControl,
  FormLabel,
  HStack,
  Circle
} from "@chakra-ui/react";
import { ListContext } from "../context/context";
import {GrFormAdd} from "react-icons/gr"

export const CardLeft = ({ id }) => {
  const { list, setList } = useContext(ListContext);
  const updateChoice = (choice) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return { ...item, comp: choice };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <GridItem colSpan={6} p={2} pt={6}>
      <FormControl>
        <Select
          placeholder="Select option"
          bg="#FFE3E3"
          pb={6}
          onChange={(e) => {
            updateChoice(e.target.value);
          }}
        >
          <option value="single">Single Choice</option>
          <option value="default">Paragraph</option>
          <option value="file">File Upload</option>
          <option value="multiple">Multiple Choice</option>
        </Select>

        <FormLabel fontSize={"0.8em"} pl={2} m={0} pb={2}>
          Total Marks
        </FormLabel>
        <InputGroup pb={2}>
          <Input type="number" />
          {/* children={<Text>marks</Text>} / */}
          <InputRightAddon>marks</InputRightAddon>
        </InputGroup>

        <FormLabel fontSize={"0.8em"} pl={2} m={0} pb={2}>
          Negative Marks
        </FormLabel>
        <InputGroup>
          <Input type="number" />
          <InputRightAddon>marks</InputRightAddon>
        </InputGroup>
      </FormControl>
      <HStack m={4} cursor="pointer" opacity="0.8">
          <Circle size="30px" bg="#911F27" color="#911F27">
           <GrFormAdd size="30px"/>
          </Circle>
          <Text color="#911F27">Add Optional</Text>
      </HStack>
    </GridItem>
  );
};
