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
          I interned as a Software Developer in a tech company during my junior
          year in University, where I was lucky to work with and explore how the works like
          as a UI/UX designer, a data analyst and a web developer.
          What motivates me is the passion for storytelling and creativity.
          The ability to connect with users, evoke emotions, and bring ideas to life through my work.
          I am fueled by the desire to continuously improve my skills,
          explore innovative approaches, and contribute meaningfully to the projects I undertake.
          The opportunity to make a positive impact and create content that resonates with people
          is a powerful source of motivation for me.

        </Paragraph>
        <Paragraph>
          Following that experience, I took serveral courses in CS related area and decided to dive deep
          in the area of web developer. I started my new journey in the US since Sept 2022 and worked with
          professors, classmates in a comprehensive aspects of Software Engineering covering Web Developemnt,
          Mobile development, Data Storage, DevOps, and Project Managements.
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
            <Link href="https://drive.google.com/file/d/1jsC1Ns9e86-Ht-2ZM7xM5WSpgUxxmN0D/view?usp=sharing">
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
                @jingyued
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
