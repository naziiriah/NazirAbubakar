import { Box, Image, Text } from "@chakra-ui/react";
import imageOfman from "../image/images.png"
import ContactForm from "./contactForm";


const Home = () => {
    
    return ( 
        <Box as="article"  maxWidth="90rem" width="80%"   height="50rem" margin="auto" marginTop="5rem">
            <Box as="section" margin="auto">
                <Image src={imageOfman} width="10rem" margin="auto" alt="man with desktop" borderRadius="50%"  cursor="pointer" _hover={{ borderColor:"brown" ,borderStyle:"solid", borderWidth:"3px"}}></Image>
            </Box>
            
            <Box as="section">
                <Box as="h1" fontSize="33px">
                    Hi, I'm Nazir.
                </Box>
                <Box as="p"fontSize="27px" width="100%">
                    I'm an experienced  <Box as="span" color="brown" textTransform="uppercase">Frontend Engineer</Box>,
                    with a passion for making beautiful, responsive website and web aplications. Technology has always 
                    been a major interest in my life, and to combine technology with an attention to details is the best way to guarantee a beautiful modern websites

                </Box>
                <Box as="p" fontSize="27px" width="100%">
                        In my free time, I enjoy reading and discussing philosophy, spending time with family and music(beautiful music)
                </Box>
            </Box>

            <Box as="section">
            <Box as="h2" fontSize="33px" 
                my="2.1rem" py="1rem" borderBottomColor="brown"
              borderBottomStyle="solid" borderBottomWidth="2px" >Services</Box>
              <Text as="h2" color="brown" fontSize="27px" my="1rem" > UI/UX DESIGN</Text>
            <Text as="p" fontSize="27px"
             width="100%" marginBottom="3rem">
                 
            UI/UX involves planning 
            and iterating a site's structure and layout.
            Once the proper information architecture is in place, 
            I design the visual layer to create a beautiful user experience</Text>

            <Text as="h2" color="brown" fontSize="27px" my="1.3rem" > FRONT END DEVELOPMENT</Text>
            <Text as="p" fontSize="27px"
             width="100%" marginBottom="2rem">
                Front End Development is building out the visual components of a website. Using my frontend skills, I build fast, interactive websites. This also may include a CMS, API's or other integrations.</Text>
            </Box>       
            <ContactForm/>
        </Box>
    );
}
 
export default Home;