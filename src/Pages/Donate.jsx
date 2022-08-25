import React from 'react';
import {Box,Flex,Image} from "@chakra-ui/react";
import RefineSearch from '../Donate/RefineSearch';
import DonateItem from '../Donate/DonateItem';

const Donate = () => {
  return (
    <Box>
       <Flex direction= "column">
          <Box >
            <Image src="./img2.png" m="auto" w="50%"/>
          </Box>
          <Box mt="100px" position="absolute" right="250px">
            <RefineSearch border="1px solid black"/>
          </Box>
          <DonateItem/>
       </Flex>
    </Box>
  )
}

export default Donate;
