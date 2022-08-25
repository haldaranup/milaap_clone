import { useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDonate } from '../Redux/AppReducer/action';
import { Box } from '@chakra-ui/react';

const SingleDonate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch()
  const {id} = useParams()
  const donate= useSelector((store)=>store.AppReducer.donate)
  const [item,setItem] = useState({});
   
  useEffect(() => {
    if (donate?.length === 0) {
      dispatch(getDonate());
    }
  }, [donate?.length, dispatch]);

  useEffect(()=>{
    if(id){
      const temp=donate.find((donate)=>donate.id===Number(id));
      temp && setItem(temp)
    }
  },[donate,id])


  return (
    <Box>
       <Flex margin="auto" w={["95vw","95vw","95vw","80vw"]} gap="20px">





       </Flex>
    </Box>
  )
}

export default SingleDonate;