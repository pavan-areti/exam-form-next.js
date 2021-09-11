import {
  Box,
} from "@chakra-ui/react";
import { Checkbox} from "@chakra-ui/react"
import { Radio, RadioGroup,Grid,GridItem } from "@chakra-ui/react";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";
import { DndButton } from "./DndButton";
export const Section = () => {
  return (

      <GridItem colSpan={16} p={5}> 
      <Editable defaultValue="Section Name" fontSize="2em" color="grey">
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Editable
        defaultValue="Description(optional)"
        fontSize="1em"
        color="grey"
        pb={4}
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Checkbox  pt={5}>Shuffle Questions</Checkbox>
      </GridItem>

  );
};

