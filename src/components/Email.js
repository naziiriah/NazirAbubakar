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
  
const EmailDisplay = () => {
    
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        return (
          <>
            <Button  borderStyle="solid" borderWidth="3px" bgColor="#fdfff5" borderColor="brown" my="5rem" onClick={onOpen} height="5rem" width={["10rem", "14rem", "17rem", "17rem"]} cursor="pointer" _hover={{width:"18rem"  }}>Email Me</Button>
      
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                
                <ModalCloseButton />
                <ModalBody pb={6} margin="auto">
                  <Box fontStyle="italic">nazirabubakar7@gmail.com</Box>
                </ModalBody>
      
                <ModalFooter>
                  
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
}
 
export default EmailDisplay;