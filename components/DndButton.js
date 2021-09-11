import { useContext } from "react";
import {
  GridItem,
} from "@chakra-ui/react";
import { ListContext } from "../context/context";
import { HiOutlineViewList } from 'react-icons/hi';

export const DndButton = ({ id }) => {
  return <GridItem colSpan={1} p={2}  style={{display:"flex",flexDirection:"column",height:"90%",width:"90%",alignItems:"center",justifyContent:"space-around",borderRadius:"5px",marginTop:"5px"}}>
       <HiOutlineViewList size={25} color="gray"/>
  </GridItem>;
};
