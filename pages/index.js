import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoGithub, IoAttachSharp } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a full-stack developer based in Irvine, CA
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Luna Dai
          </Heading>
          <p>Proficient in JavaScript, Python, SQL </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/jingyue_01.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>



      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999.09</BioYear>
          Born in China.
        </BioSection>
        <BioSection>
          <BioYear>2021.06</BioYear>
          Completed the Bachelor&apos;s Degree of Actuarial Science in
          University of Internation Business and Economics in Beijing, China.
        </BioSection>
        <BioSection>
          <BioYear>2023.12</BioYear>
          Completed the Master&apos;s Degree of Software Engineering in the ICS School of
          University of California, Irvine.
        </BioSection>
      </Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          During my junior year at university, I interned as a Developer at a tech company,
          gaining exposure to roles in UI/UX design, data analysis, and web development.
          My driving force is a passion for storytelling and creativity — connecting with users,
          evoking emotions, and bringing ideas to life.
          {/* The opportunity to make a positive impact and create content that resonates with people
          is a powerful source of motivation for me. */}
          I am also fueled by the desire to continuously improve my skills,
          explore innovative approaches, and contribute meaningfully to the projects I undertake.

        </Paragraph>
        <Paragraph>
          Following that experience, I immersed myself in computer science, focusing on web development.
          Since September 2022, Ive been collaborating with professors and classmates in UCI,
          exploring software engineering comprehensively—including web and mobile development,
          data storage, DevOps, and project management.
        </Paragraph>
        <Paragraph>
          Now I am also learning to use Flutter to develop a mobile game app ...

        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/experience"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
            mr={8} // Add margin to the right of the first button
          >
            Experience
          </Button>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Projects
          </Button>
        </Box>
      </Section>



      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Hiking, Traveling, Cooking, Reading, Music, {' '}
          <Link href="https://unsplash.com/@jingyued2023/" target="_blank">
            Photography
          </Link>

        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          More
        </Heading>
        <List>

          <ListItem>
            <Link href="https://drive.google.com/file/d/144ybuaceb1z3GQJPYOna891B4ezWIZP8/view?usp=sharing">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoAttachSharp />}
              >
                @Resume
              </Button>
            </Link>
          </ListItem>


          <ListItem>
            <Link href="https://github.com/jingyued" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Luna
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.instagram.com/_stack_overflow_/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @Luna Dai
              </Button>
            </Link>
          </ListItem>

        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;150k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        {/* <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.devas.life/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Sign up my newsletter here
          </Button>
        </Box> */}

      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
