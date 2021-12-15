import { 
    Box,
    Text
 } from "@chakra-ui/react";
import ContactForm from "./contactForm";
 

const Project = () => {
    return ( 
        <Box width="100%" height="100rem">
            <Text as="h2" width={[ "90%", "80%","80%","60%"]} 
            my="1rem"
            height="10rem" fontSize="33px" py="4rem" alignSelf="center" margin="auto" fontWeight="600" >
            Recent Projects: Samples of some of my work from the past year.
            </Text>

            <Box as="article" width={[ "90%", "80%","80%","60%"]} margin="auto" mt="10rem" height="120rem">
                <Box as="section">
                    <Box width="100%" height="15rem" bgColor="lightgrey"></Box>
                    <Text as="h3" my=".4rem" fontSize="23px" width="100%">Audio Ecommerce Store</Text>
                    <Text as="h3" color="brown" fontStyle="italic" fontSize="20px" width="100%">Design / Frontend Development</Text>
                </Box>

                <Box as="section" my="6rem" height="30rem">
                    <Box width="100%" height="15rem" bgColor="lightgrey"></Box>
                    <Text as="h3" my=".4rem" fontSize="23px" width="100%">Product Feedback App</Text>
                    <Text as="h3" color="brown" fontStyle="italic" width="100%" fontSize="20px">Frontend / Customer / Unit Testing</Text>
                </Box>

                <Box as="section" height="30rem">
                    <Box width="100%" height="15rem" bgColor="lightgrey"></Box>
                    <Text as="h3" my=".4rem" fontSize="23px" width="100%">Ip Address Tracker</Text>
                    <Text as="h3" color="brown" fontStyle="italic"  width="100%" fontSize="20px">Frontend Development / API </Text>
                </Box>

                <Box as="section" my="6rem" height="30rem">
                    <Box width="100%" height="15rem" bgColor="lightgrey"></Box>
                    <Text as="h3" my=".4rem" fontSize="23px" width="100%">Static Job Listing</Text>
                    <Text as="h3" color="brown" fontStyle="italic" width="100%" fontSize="20px">Design </Text>
                </Box>


            </Box>
            <ContactForm/>

        </Box>
     );
}
 
export default Project;