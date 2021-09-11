import { Stack, HStack, VStack ,GridItem,IconButton} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import { HiDuplicate } from 'react-icons/hi';
import { AiFillDelete } from 'react-icons/ai';
import {BsFillImageFill,BsArrowsMove} from 'react-icons/bs'
import {IoMdAddCircle} from 'react-icons/io'
import {MdPlaylistAdd} from 'react-icons/md'
import { useState,useEffect,createContext,useContext } from "react";
import {v4} from "uuid"
import { ListContext } from "../context/context";

export const Sidebar = ({id,index}) => {
  const {list, setList} = useContext(ListContext);


  const addCard = () =>{
    // setList([...list,{id:v4(),comp:"single"}])
    let dummylist=list;
    dummylist.splice(index+1,0,{id:v4(),comp:"single"})
    console.log(dummylist)
    setList([...dummylist])
  }
  const deleteCard = () =>{
    if(list.length>1){
    setList(list.filter(item=>item.id!==id))
    console.log("deleted")
    }
  }
const addsection = () =>{
  // setList([...list,{id:v4(),comp:"section"}])
  let dummylist=list;
  dummylist.splice(index+1,0,{id:v4(),comp:"section"})
  console.log(dummylist)
  setList([...dummylist])
}
  useEffect(()=>{},[list]) 

  return <GridItem colSpan={1}>
     <div style={{display:"flex",backgroundColor:"#911F27",flexDirection:"column",height:"90%",width:"90%",alignItems:"center",justifyContent:"space-around",borderRadius:"5px",marginTop:"5px"}}>
     <IoMdAddCircle color="white" cursor="pointer" onClick={addCard}/>
     <BsFillImageFill color="white" cursor="pointer"/>
     <HiDuplicate color="white" cursor="pointer"/>
     <AiFillDelete color="white" cursor="pointer" onClick={(deleteCard)}/>
     <MdPlaylistAdd color="white" cursor="pointer" onClick={(addsection)}/>
     </div>
  </GridItem>;
};
