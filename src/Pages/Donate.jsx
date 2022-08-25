import React from 'react';
import {Box,Flex} from "@chakra-ui/react";
import RefineSearch from '../Donate/RefineSearch';
import DonateItem from '../Donate/DonateItem';

const Donate = () => {
  return (
    <Box>
       <Flex direction= "column">
          <Box position="absolute" right="250px">
            <RefineSearch/>
          </Box>
          <DonateItem/>
       </Flex>
    </Box>
  )
}

export default Donate;
