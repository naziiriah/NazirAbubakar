import {
    Box,
    Text
  } from '@chakra-ui/react'
  import EmailDisplay from './Email';

const ContactForm = () => {
    
    
    return ( 
        <Box as="footer" width="100%" justifyContent="center" height="27rem" borderBottomColor="brown" borderBottomWidth="3px" borderBottomStyle="solid" borderTopColor="brown" borderTopWidth="3px" borderTopStyle="solid">
            <Text as="h1" textAlign="center" fontSize="39px"my="1rem" fontWeight="600" letterSpacing="1px">Interested in doing a project with me ?</Text>
                <Box width="17rem" margin="auto"> <EmailDisplay/></Box>
                
            <Text as="h3" textAlign="center" my="2rem" fontWeight="600" fontSize="25px">Nazir, 2021.</Text>
        </Box>
     );
}
 

 
export default ContactForm;

