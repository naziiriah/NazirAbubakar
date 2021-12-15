import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import Logo from "../image/n-logo.png"
import { Link } from "react-router-dom";
const Header = () => {
    return ( 
        <Box as="header" maxWidth="90rem" width="90%" borderBottomStyle="solid" borderBottomColor="brown" borderBottomWidth="2px" height="7rem" margin="auto" display="flex" justifyContent="space-between">
            <Image src={Logo} height="4rem" width="4rem" borderRadius="50%" alt="logo of me" marginTop="2rem"/>

            <Box as="ul" display="inline-flex" listStyleType="none" marginTop="3rem" fontWeight="550">
                <Link to="/"><Box as="li" textTransform="capitalize"  mx="1rem" _hover={{cursor:"pointer", color:"brown"}}>About</Box></Link>
                <Link to="/projects"><Box as="li" textTransform="capitalize" mx="1rem" _hover={{cursor:"pointer", color:"brown"}}>projects</Box></Link>
                
            </Box>
        </Box>
        );
}
 
export default Header;