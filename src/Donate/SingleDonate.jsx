import { Box,Flex,Text,Heading, useDisclosure,Image, Tag,CircularProgress,CircularProgressLabel,Stack, Button,Link } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { getDonate } from '../Redux/AppReducer/action';
import {BsWhatsapp,BsFacebook} from "react-icons/bs"
import { Link as RouterLink } from 'react-router-dom';
const SingleDonate = () => {

  // const location = useLocation()
  // console.log(location,"params")
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
       <Flex margin="auto" w={["95vw","95vw","95vw","80vw"]} gap="20px" direction={["column", "column", "column", "column", "row"]}>
         <Box w={["100%", "100%", "100%", "100%", "50%"]}>
           <Box bg={"#f3f3f3"} h="40px" borderRadius="10px">
              <Text fontSize="sm" textAlign="center" pt="8px">
              Milaap will not charge any fee on your donation to this fundraiser.
              </Text>
           </Box>
            <Heading fontSize="25px" fontWeight="500" textAlign="left" m="29px">
                {item.motivation}
            </Heading>
             <Image src={item.lozad_src} w="100%" borderRadius="3px 3px 0px 0px"
            h="450px" textAlign="left"
                 {...item.tax_ribbon ? (<Tag bg={"#9c3353"} m="10px" color="white" size="lg">{item.tax_ribbon}</Tag>):null}
             />
             <Flex m="20px 10px 10px 10px" justifyContent="space-between">
               <Flex>
               <CircularProgress value={item.progress_circle}  color="green.600"
            size="60px">
              <CircularProgressLabel>
              {item.progress_circle}%
            </CircularProgressLabel>
             </CircularProgress>
             <Stack textAlign="left" m="12px">
            <Text fontSize="sm">Raised</Text>
            <Stack direction="row">
            <Text fontSize="lg" fontWeight="500" color={"#9c3353"}>
              {item.raised_amount}
            </Text>
            <Text fontSize="lg" fontWeight="500">
                    of $5,00,000
              </Text>
            </Stack>
          </Stack>
        </Flex>
          <Button borderRadius="15px" m="20px" color="#9c3353" background="white">
              <Link>1465 suppporters</Link>
            </Button>
          </Flex>
          <Button
            bg={"#25d366"}
            color="white"
            size="lg"
            w="280px"
            borderRadius="25px"
          >
            <BsWhatsapp/>
            Share
          </Button>
          <Button
            bg={"#3b5998"}
            color="white"
            w="280px"
            size="lg"
            borderRadius="25px"
            m="20px"
          >
            <BsFacebook />
            Share
          </Button>
          <Flex  justifyContent="space-around" m="20px">
          <Flex border={"1px solid #e0e1e3"} w="300px">
          <Box bg={"#eddae0"} borderRadius="50%" w="50px" h="50px" m="20px">
            <Text mt="10px">
               {item.created_name ? item.created_name[0]:"A"}
            </Text>
          </Box>
          </Flex>
          </Flex>
         </Box>
       </Flex>
    </Box>
  )
}

export default SingleDonate;