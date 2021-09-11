import { Text, Textarea, GridItem } from "@chakra-ui/react";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";

export const Paragraph = () => {
  return (
    <GridItem colSpan={8} p={5}>
      <Editable defaultValue="What is the size of the Earth?" color="#911F27" m={2}>
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Textarea
        placeholder="Paragraph"
        bg="#FFE3E3"
        w="100%"
        height="300px"
        mt={6}
      />
    </GridItem>
  );
};
