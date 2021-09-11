import { Text, Textarea, GridItem, Input } from "@chakra-ui/react";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";

export const FileUpload = () => {
  return (
    <GridItem colSpan={8} p={5}>
      <Editable defaultValue="What is the size of the Earth?" color="#911F27" m={2}>
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Input
        type="file"
        w="100%"
        height="300px"
        mt={6}
        bg="#FFE3E3"
        p={10}
        mb={10}
        style={{ textAlign: "center" }}
      />
    </GridItem>
  );
};
