import React from "react";
import {
  Editable,
  EditableInput,
  EditablePreview,
  Box,
  GridItem,
  Stack,
  Text,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

export const SingleChoice = () => {
  return (
    <GridItem colSpan={8} p={5}>
      {/* <Text> */}
        <Editable defaultValue="What is the size of the Earth?" m={2} color="#911F27">
          <EditablePreview />
          <EditableInput />
        </Editable>
      {/* </Text> */}
      <RadioGroup direction="row">
        <Stack>
          <Box display={"flex"}>
            <Radio size="lg" value="1"></Radio>
            <Editable defaultValue="option 1" m={2} width="100%">
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Box>

          <Box display={"flex"}>
            <Radio size="lg" value="2"></Radio>
            <Editable defaultValue="option 2" m={2}>
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Box>

          <Box display={"flex"}>
            <Radio size="lg" value="3"></Radio>
            <Editable defaultValue="option 3" m={2}  >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Box>

          <Box display={"flex"}>
            <Radio size="lg" value="4"></Radio>
            <Editable defaultValue="option 4" m={2}>
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Box>
        </Stack>
      </RadioGroup>
    </GridItem>
  );
};
