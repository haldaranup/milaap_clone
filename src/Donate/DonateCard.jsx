import React from 'react'
import {Box,Tag,Text,Flex,CircularProgress, Stack,CircularProgressLabel} from "@chakra-ui/react";

const DonateCard = ({motivation,progress_circle,tax_ribbon,created_name,status_msg,raised_amount,lozad_src}) => {

  // const img = ["lozad src"]
  // const image={
  //   background:"lozad src",
  //   bgSize:"100%",
  //   backgroundRepeat: "repeat-x",
  // };

  return (
        
          <Box h="450px" w="320px" boxShadow="lg" borderRadius="10px" >
          <Box w="100%" sx={lozad_src} borderRadius="3px 3px 0px 0px" h="250px">
          {tax_ribbon ? (
            <Tag m="15px 0px 0px -220px" bg={"#9c3353"} color="white">
              {tax_ribbon}
            </Tag>
          ) : null}
        </Box>
        <Box h="60px">
          <Text
            fontSize="15px"
            fontWeight="500"
            textAlign="left"
            m="0px 10px 10px 10px"
          >
            {motivation}
          </Text>
        </Box>
           <Flex m="20px 10px 10px 10px">
             <CircularProgress value={progress_circle}  color="green.300"
            size="50px">
              <CircularProgressLabel>
              {progress_circle}%
            </CircularProgressLabel>
             </CircularProgress>
             <Stack textAlign="left" ml="10px">
            <Text fontSize="xs">Raised</Text>
            <Text fontSize="md" fontWeight="500">
              {raised_amount}
            </Text>
          </Stack>
          <Stack
            ml="10px"
            textAlign="left"
            borderLeft={"3px solid #ecedee"}
            paddingLeft="10px"
          >
            <Text fontSize="xs">Created by</Text>
            <Text fontSize="sm">{created_name}</Text>
          </Stack>
           </Flex>
           <Box
          bg={"#ecedee"}
          m="15px 10px 25px 10px"
          borderLeft="3px solid black"
          textAlign="left"
        >
          <Text fontSize="13px" fontWeight="300" ml="10px">
            For every {status_msg ? status_msg : "₹100"} you donate, Milaap will contribute.
          </Text>
        </Box>
          </Box>
        
  )
}

export default DonateCard