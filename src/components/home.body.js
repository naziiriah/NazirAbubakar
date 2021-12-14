import { Box, Image, Flex, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import imageOfman from "../image/images.png"
import projOne from "../image/projects/preview.jpg"
import projTwo from "../image/projects/preview1.jpg"
import { IoIosArrowBack,IoIosArrowForward } from 'react-icons/io'
import ContactForm from "./contactForm"


const Home = () => {
    const data = [{
        id:1,
        title:"audiophile ecommerce website",
        description:" We have a large showroom and luxury demonstration rooms available for you to brow",
        image:projOne,
        liveUrl:"",
        github:""
    }, 
    {
        id:2,
        title:"product feedback app",
        description:"product application",
        image:projTwo,
        liveUrl:"",
        github:""

    }
]

    
    const [projects, setProject] = useState(data[1])
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
            <Box as="section" my="5rem" >
                <Box as="h2" fontSize="33px" my="1rem" borderBottomColor="brown"
              borderBottomStyle="solid" borderBottomWidth="2px">Skills</Box>
                <Box as="ul" textTransform="uppercase" listStyleType="none" fontSize="23px">
                    <Box as="li">languages: <Box as="span" color="brown" >html, css,javascript </Box></Box>
                    <Box as="li">frameworks: <Box as="span" color="brown" >react, vue </Box></Box>
                    <Box as="li">state management: <Box as="span" color="brown">redux, context-api, vuex</Box></Box>
                    <Box as="li">testing: <Box as="span" color="brown">Jest, react-testing-library  </Box></Box>
                    <Box as="li">styling: <Box as="span" color="brown" >bootstrap, chakra UI, react-styled-components, scss </Box></Box>
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
                Front End Development is building out the visual components of a website. Using HTML, CSS , and Javascript, I build fast, interactive websites. This also may include a CMS, API's or other integrations.</Text>
                <Box width="100%" my="3rem" height="60rem"></Box>
                <Box width="100%" my="3rem" height="60rem">

                        <Flex  flexDirection={["row","column"]} width={["100%", "100%", "100%","60%" ]} margin="auto" justify="space-between" > 
                            <Flex justify="center">
                                
                                <Image className="imageHolder" src={projects.image} alt={projects.title} width="100%" margin="auto" height="40rem" py="1rem" cursor="pointer" boxShadow="xl" borderRadius="20rem"  _hover={{}}/>
                                
                            </Flex>
                            <Flex width="100px" margin="auto" justify="space-between" >
                            <Icon as={ IoIosArrowBack } fontSize="33px" marginTop="170px" cursor="pointer" _hover={{color:"brown"}} onClick={() => setProject(data[0]) } />
                            <Icon as={ IoIosArrowForward } fontSize="33px" marginTop="170px" cursor="pointer" _hover={{color:"brown"}} onClick={() => setProject(data[1]) }/>
                            </Flex>
                           
                            <Box width="100%" height ="30rem">
                                <Box as="h2" textAlign="center"><Box as="span" fontSize="1.1rem" textTransform="uppercase">{projects.title}</Box></Box>
                                <Box as="h2" textAlign="center"><Box as="span" fontSize="1.1rem" textTransform="uppercase"  >{projects.description}</Box></Box>
                                <Box as="h2" textAlign="center"> <Box as="span" fontSize="1.1rem" textTransform="uppercase" >{projects.github}</Box></Box>
                                <Box as="h2" textAlign="center"><Box as="span" fontSize="1.1rem" textTransform="uppercase" >{projects.liveUrl}</Box></Box>
                            </Box>
                        </Flex>  
                </Box>
                <Box width="100%" my="3rem" height="10rem">

                </Box>

            </Box>

                <Box display="flex" justifyContent="space-between" flexDirection={["column", "column", "row", "row"]} width={["100%","100%","90%","80%"]} height={["60rem", "80rem","40rem", "40rem"]} >
                    <Box height="10rem" width="20rem" bgColor="red"></Box>
                    <Box height="10rem" width="20rem" bgColor="blue"></Box>
                </Box>

            <Box>
                <Text as="h3">Interested in doing a project together ? </Text>
                <ContactForm/>
            </Box>
        </Box>
    );
}
 
export default Home;