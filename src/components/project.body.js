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
                    <Box width="100%" display="flex" mt="1rem" flexDirection={["column", "column", "row", "row"]} justifyContent="space-between">
                    
                    <Box width="100%" display="flex" flexDirection={[ "row"]} justifyContent="space-between">
                        <Box width="10rem" height ="4rem" borderColor={"brown"} borderWidth={"3px"} borderStyle={"solid"} borderRadius={"5px"}>
                        <Link href="https://github.com/naziiriah/Audiophile-e-commerce-webstore"> 
                        <Box width="100%" textAlign={"center"}pt="1rem" textColor={"brown"} textTransform={"uppercase"}> View Code </Box>
                        </Link>
                        </Box>
                        <Box  width="10rem" height ="4rem" borderColor={"brown"} borderWidth={"3px"} borderStyle={"solid"} borderRadius={"5px"}>
                            <Link href="https://audiophile-e-commerce-webstore.vercel.app">
                            <Box  width="100%" textAlign={"center"}pt="1rem" textColor={"brown"} textTransform={"uppercase"}> live site</Box>
                            </Link>
                            
                        </Box>
                    </Box>
                    
                    </Box>
                </Box>

                <Box as="section" mt="8rem" height="30rem">
                    <Box width="80%">
                        <Text as="h3" my=".4rem" fontSize="23px" width="100%">Product Feedback App</Text>
                        <Text as="h3" color="brown" fontStyle="italic" width="100%" fontSize="20px">Frontend / Customer / Unit Testing</Text>
                        </Box>
                    <Box width="100%" height="15rem" bgColor="lightgrey">
                    <Box width="10%" marginLeft="45%"  ><Icon as={ IoIosChatboxes } marginTop="5rem"  fontSize="53px" color="brown"/></Box>
                    </Box>

                    <Box   width="100%" display="flex" mt="1rem" flexDirection={[ "row"]} justifyContent="space-between">
                        <Link href="https://github.com/naziiriah/products-feedback-app">
                        <Box width="10rem" height ="4rem" borderColor={"brown"} borderWidth={"3px"} borderStyle={"solid"} borderRadius={"5px"}>
                             <Box  width="100%" textAlign={"center"}pt="1rem" textColor={"brown"} textTransform={"uppercase"} > view code </Box>
                             </Box>
                        </Link>
                        
                        <Box  width="10rem" height ="4rem" borderColor={"brown"} borderWidth={"3px"} borderStyle={"solid"} borderRadius={"5px"}>
                            <Link href = "https://product-feedback-app-one.vercel.app/">
                            <Box width="100%" textAlign={"center"}pt="1rem" textColor={"brown"} textTransform={"uppercase"}>live site</Box>
                            </Link>
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
                    <Box width="100%" display="flex" mt="1rem" flexDirection={[ "row"]} justifyContent="space-between">
                        <Link href="">
                        <Box width="10rem" height ="4rem" borderColor={"brown"} borderWidth={"3px"} borderStyle={"solid"} borderRadius={"5px"}> 
                            <Box width="100%" textAlign={"center"}pt="1rem" textColor={"brown"} textTransform={"uppercase"}> view code </Box></Box>
                        </Link>
                        <Link href="">
                            <Box width="10rem" height ="4rem" borderColor={"brown"} borderWidth={"3px"} borderStyle={"solid"} borderRadius={"5px"}>
                            <Box width="100%" textAlign={"center"}pt="1rem" textColor={"brown"} textTransform={"uppercase"}>live site</Box>
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
                    <Box width="100%" display="flex" flexDirection={["column", "column", "row", "row"]} mt="1rem" justifyContent="space-between">
                        
                    <Box width="100%" display="flex" flexDirection={[ "row"]} justifyContent="space-between">
                        <Link href="https://github.com/naziiriah/static-listing-website">
                        <Box width="10rem" height ="4rem" borderColor={"brown"} borderWidth={"3px"} borderStyle={"solid"} borderRadius={"5px"}> 
                            <Box width="100%" textAlign={"center"}pt="1rem" textColor={"brown"} textTransform={"uppercase"} > view code </Box>
                            </Box>
                        </Link>
                        <Link href="https://static-listing-website-i07f6n7eo-naziiriah.vercel.app/">
                            <Box width="10rem" height ="4rem" borderColor={"brown"} borderWidth={"3px"} borderStyle={"solid"} borderRadius={"5px"}>
                            <Box width="100%" textAlign={"center"}pt="1rem" textColor={"brown"} textTransform={"uppercase"}>live site</Box>
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
