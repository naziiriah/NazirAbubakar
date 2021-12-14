import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Box,
    Textarea,
    Button
  } from '@chakra-ui/react'

const ContactForm = () => {
    
    
    return ( 
        <Box as="form" width={["10rem", "20rem", "40rem", "50rem"]} margin="auto">
            <FormControl id='name' my="2rem">
                <Input type='text' placeholder="Name: " height="3rem" fontSize="23px" width="90%" margin="auto" />
            </FormControl>
            <FormControl id='email'>
                <Input type='email' placeholder="Email: " height="3rem" fontSize="23px" width="90%" margin="auto" />
            </FormControl>
            <FormControl id='name' my="2rem">
                <Textarea name="" id="" cols="30" rows="10" placeholder='Message'></Textarea>
            </FormControl>
            <Box as="flex"justifyContent="end" width="100%">
                <Button color="brown" cursor="pointer" _hover={{bgColor:"brown" ,opacity:"0.8", color:"white"}}>Submit</Button>
            </Box>
            
        </Box>
     );
}
 

 
export default ContactForm;

