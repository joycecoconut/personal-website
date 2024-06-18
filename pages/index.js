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
        Hello, I&apos;m a front-end developer based in Los Angeles
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Joyce Dai
          </Heading>
          <p>Proficient in HTML/CSS/JavaScript, Angular </p>
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
              src="/images/jingyue_06.png"
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
          <BioYear>2023.08</BioYear>
          Front-end Developer @Weee! Global+ Delivery Service
        </BioSection>
        <BioSection>
          <BioYear>2022.09</BioYear>
          Full-Stack Developer @Action Property Management
        </BioSection>
        <BioSection>
          <BioYear>2020.09</BioYear>
          Front-end Developer @Sina Finance Big Data Center
        </BioSection>
        <BioSection>
          <BioYear>2018.09</BioYear>
          Quality Assurance    @Meituan Business
        </BioSection>
      </Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Hi, I am Joyce, a front-end developer with 6 years of experience. I believe the front end is where technology meets art, creating visually appealing and user-friendly interfaces. My expertise lies in JavaScript frameworks like angular and react, enabling me to build modern, SEO-friendly websites that enhance user satisfaction and drive company profits.
        </Paragraph>

        <Paragraph>
          In my career, I have focused on developing and testing Angular projects ranging from e-commerce platforms to admin panels. Additionally, I am skilled in using data visualization tools to create interactive charts, aiding stakeholders in making informed decisions.
        </Paragraph>

        <Paragraph>
          I am highly motivated and always ready for new challenges. I actively engage with the developer community, sharing knowledge and staying updated with the latest trends and technologies.
        </Paragraph>

        <Paragraph>
          My driving force is a passion for storytelling and creativity — connecting with users, evoking emotions, and bringing ideas to life. I am also fueled by the desire to continuously improve my skills, explore innovative approaches, and contribute meaningfully to the projects I undertake.
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
            <Link href="https://drive.google.com/file/d/1-EjyAMJmNf5K_--bI_MuKm7le_mbgyGk/view?usp=sharing">
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
                @Joyce
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
                @Joyce Dai
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
