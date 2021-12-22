import { 
    Box,
    Text,
    Icon
 } from "@chakra-ui/react";
import ContactForm from "./contactForm";
import { FaCartPlus, FaCode, FaEye, FaListUl, FaMapPin} from 'react-icons/fa'
import { IoIosChatboxes } from "react-icons/io"
import { RiMapPinFill } from "react-icons/ri"
import { Link } from '@chakra-ui/react'



const Project = () => {
    return ( 
        <Box width="100%" height="100rem" className="introduction">
            <Text as="h2" width={[ "90%", "80%","80%","60%"]} 
            my="1rem"
            height="10rem" fontSize="33px" py="4rem" alignSelf="center" margin="auto" fontWeight="600" >
            Recent Projects: Samples of some of my work from the past year.
            </Text>

            <Box as="article" width={[ "90%", "80%","80%","60%"]} margin="auto" mt="10rem" height="130rem">
                <Box as="section">
                    <Box  width="50%">
                    <Text as="h3" my=".4rem" fontSize="23px" width="100%">Audio Ecommerce Store</Text>
                    <Text as="h3" color="brown" fontStyle="italic" fontSize="20px" width="100%">Design / Frontend Development</Text>
                        </Box>
                    <Box width="100%" height="15rem" bgColor="lightgrey">
                         <Box width="10%" marginLeft="45%"  ><Icon as={ FaCartPlus } marginTop="5rem"  fontSize="53px" color="brown"/></Box>
                    </Box>
                    <Box width="100%" display="flex" flexDirection={["column", "column", "row", "row"]} justifyContent="space-between">
                    
                    <Box width="100%" display="flex" flexDirection={["column", "column", "row", "row"]} justifyContent="space-between">
                        <Box width="1%">
                        <Link href="https://github.com/naziiriah/Audiophile-e-commerce-webstore"> 
                        <Box > <Icon as={ FaCode } marginTop="1rem"  fontSize="25px" color="brown"/> </Box>
                        </Link>
                        </Box>
                        <Box width="1%" justifyContent="end">
                            <Link href="https://audiophile-e-commerce-webstore.vercel.app">
                            <Box><Icon as={ FaEye } marginTop="1rem"  fontSize="25px" color="brown"/></Box>
                            </Link>
                            
                        </Box>
                    </Box>
                    
                    </Box>
                </Box>

                <Box as="section" mt="8rem" height="30rem">
                    <Box width="50%">
                        <Text as="h3" my=".4rem" fontSize="23px" width="100%">Product Feedback App</Text>
                        <Text as="h3" color="brown" fontStyle="italic" width="100%" fontSize="20px">Frontend / Customer / Unit Testing</Text>
                        </Box>
                    <Box width="100%" height="15rem" bgColor="lightgrey">
                    <Box width="10%" marginLeft="45%"  ><Icon as={ IoIosChatboxes } marginTop="5rem"  fontSize="53px" color="brown"/></Box>
                    </Box>
                    <Box width="100%" display="flex" flexDirection={["column", "column", "row", "row"]} justifyContent="space-between">
                        <Link href="https://github.com/naziiriah/products-feedback-app">
                        <Box width="1%"> <Box > <Icon as={ FaCode } marginTop="1rem"  fontSize="25px" color="brown"/> </Box></Box>
                        </Link>
                        
                        <Box width="1%" justifyContent="end">
                            <Box><Icon as={ FaEye } marginTop="1rem"  fontSize="25px" color="brown"/></Box>
                            
                        </Box>

                    </Box>
                </Box>

                <Box as="section" height="30rem" my="-rem">
                    <Box width="50%">
                        <Text as="h3" my=".4rem" fontSize="23px" width="100%">Ip Address Tracker</Text>
                        <Text as="h3" color="brown" fontStyle="italic"  width="100%" fontSize="20px">Frontend Development / API </Text>
                        </Box>
                    <Box width="100%" height="15rem" bgColor="lightgrey">
                    <Box width="10%" marginLeft="45%"  ><Icon as={ RiMapPinFill } marginTop="5rem"  fontSize="53px" color="brown"/></Box>
                    </Box>
                    <Box width="100%" display="flex" flexDirection={["column", "column", "row", "row"]} justifyContent="space-between">
                        <Link href="">
                        <Box width="1%"> <Box > <Icon as={ FaCode } marginTop="1rem"  fontSize="25px" color="brown"/> </Box></Box>
                        </Link>
                        <Link href="">
                            <Box width="1%" justifyContent="end">
                            <Box><Icon as={ FaEye } marginTop="1rem"  fontSize="25px" color="brown"/></Box>
                        </Box>
                        </Link>
                        
                    </Box>
                </Box>

                <Box as="section" my="0rem" height="30rem">
                    <Box width="50%">
                            <Text as="h3" my=".4rem" fontSize="23px" width="100%">Static Job Listing</Text>
                            <Text as="h3" color="brown" fontStyle="italic" width="100%" fontSize="20px">Design </Text>
                        </Box >
                    <Box width="100%" height="15rem" bgColor="lightgrey">
                    <Box width="10%" marginLeft="45%"  ><Icon as={ FaListUl } marginTop="5rem"  fontSize="53px" color="brown"/></Box>
                    </Box>
                    <Box width="100%" display="flex" flexDirection={["column", "column", "row", "row"]} justifyContent="space-between">
                        
                    <Box width="100%" display="flex" flexDirection={["column", "column", "row", "row"]} justifyContent="space-between">
                        <Link href="https://github.com/naziiriah/static-listing-website">
                        <Box width="1%"> <Box > <Icon as={ FaCode } marginTop="1rem"  fontSize="25px" color="brown"/> </Box></Box>
                        </Link>
                        <Link href="https://static-listing-website-i07f6n7eo-naziiriah.vercel.app/">
                            <Box width="1%" justifyContent="end">
                            <Box><Icon as={ FaEye } marginTop="1rem"  fontSize="25px" color="brown"/></Box>
                        </Box></Link>
                        
                    </Box>
                    </Box>
                    
                </Box>


            </Box>
            <ContactForm/>

        </Box>
     );
}
 
export default Project;