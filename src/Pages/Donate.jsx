import React from 'react';
import {Box,Flex} from "@chakra-ui/react";
import RefineSearch from '../Donate/RefineSearch';
import DonateItem from '../Donate/DonateItem';

const Donate = () => {
  return (
    <Box>
       <Flex>
          <Box>
            <RefineSearch/>
          </Box>
          <DonateItem/>
       </Flex>
    </Box>
  )
}

export default Donate;
