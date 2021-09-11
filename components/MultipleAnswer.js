import React from "react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Box, GridItem, Stack, Text } from "@chakra-ui/react";

export const MultipleChoice = () => {
  return (
    <GridItem colSpan={8} p={5}>
      <Editable defaultValue="What is the size of the Earth?" color="#911F27" m={2}>
        <EditablePreview />
        <EditableInput />
      </Editable>
      <CheckboxGroup>
        <Stack>
          <Box display={"flex"}>
            <Checkbox size="lg" value="1"></Checkbox>
            <Editable defaultValue="option 1" m={2}>
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Box>

          <Box display={"flex"}>
            <Checkbox size="lg" value="2"></Checkbox>
            <Editable defaultValue="option 2" m={2}>
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Box>

          <Box display={"flex"}>
            <Checkbox size="lg" value="3"></Checkbox>
            <Editable defaultValue="option 3" m={2}>
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Box>

          <Box display={"flex"}>
            <Checkbox size="lg" value="4"></Checkbox>
            <Editable defaultValue="option 4" m={2}>
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Box>
        </Stack>
      </CheckboxGroup>
    </GridItem>
  );
};
