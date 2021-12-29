import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Box
  } from '@chakra-ui/react'
  import {
    FormControl,
    FormLabel,
    Input,
    Textarea
  } from '@chakra-ui/react'
  
const EmailDisplay = () => {
    
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        return (
          <>
            <Button  borderStyle="solid" margin="auto" borderWidth="3px" bgColor="#fdfff5" borderColor="brown" my="5rem" onClick={onOpen} height="5rem" width={["10rem", "14rem", "17rem", "17rem"]} cursor="pointer" _hover={{width:"18rem"  }}>Email Me</Button>
      
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                
                <ModalCloseButton />
                <ModalBody pb={6} margin="auto">
                <FormControl id='email'>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' />
                    </FormControl>
                    <FormControl id='email'>
                    <FormLabel>Name</FormLabel>
                    <Input type='text' />
                    </FormControl>
                    <FormControl id='email'>
                    <FormLabel>Message</FormLabel>
                   <Textarea placeholder='hello!'>

                   </Textarea>
                    </FormControl>
                    
                </ModalBody>
      
                <ModalFooter>
                  <Button fontWeight={"600"} textTransform={"capitalize"}>Submit</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
}
 
export default EmailDisplay;