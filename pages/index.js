import NextLink from 'next/link';
import { Container, Box, Heading, Image, useColorModeValue, Button } from "@chakra-ui/react";
import Section from "../components/section";
import Layout from '../components/layouts/article';
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';
import { GridItem } from '../components/grid-item'

const Home = () => (
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a full-stack developer.
            </Box>

            <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
                Alexander Andersson
            </Heading>
            <p>Web-Developer  (React | Javascript | Redux | Node.js |MongoDB)</p>
            </Box>
            <Box flexShrink={0} mt={{base:4, md:0}} ml={{md: 6}} align="center">
                <Image
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid" 
                maxWidth="100px" 
                display="inline-block" 
                borderRadius="full" 
                src="/images/Alex.jpg"  
                alt="profile pic" />
            </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                I'm a web developer with passion to do awesomne projects.
                I have experience in building websites and web applications.
                My hunger for evolve is to learn new technologies and improve my skills.
                </Paragraph>
            <Box align="center" my={4}>
                <NextLink href="/works">
                    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                        My Portfolio
                    </Button>
                </NextLink>
            </Box>
            </Section>  

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>
                        1991
                    </BioYear>
                    Born in Katrineholm, Sweden.
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    completed Techover Acadamy in Stockholm, Sweden.
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I like ♥
                </Heading>
                <Paragraph>
                    Music, Coffee, Hacking, BugBounty, Machine Learning
                </Paragraph>
            </Section>
        </Container>
        </Layout>
    );
;

export default Home;
