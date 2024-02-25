import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Mealkit Delivery Design">
    <Container>
      <Title>
        Mealkit Delivery Service UE/UI Design  <Badge>2023</Badge>
      </Title>
      <P>
        A comprehensive UI/UE design for a Meal Kit Delivery Service, including the creation of a detailed Persona, a User Journey Map, and wireframes for both web and mobile platforms.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Tools</Meta>
          <span>Figma </span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://www.figma.com/file/D51GmjtqQ2kD8pp52yzR39/Multiple-Personas-Template-(Community)?type=design&node-id=0-1&mode=design&t=diy5X9rEbrpP1qs2-0">
            Persona <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://www.figma.com/file/9ZBqJxrrKABmnxDwM3tbyS/User-Journey-Map-Template-(Community)?type=design&mode=design">
            User Jounery Map <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://www.figma.com/file/xIzw4fsOGBv730ifqUuLX0/Desktop-and-Mobile-Version-of-Meal-Kit-Delivery?type=design&node-id=202-5106&mode=design&t=n6ojtgCXi6taXu7k-0">
            Wireframes & high-fidelity mockup page <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://archive.craftz.dog/blog.odoruinu.net/2015/12/23/the-four-painters-a-video-work-created-with-deep-learning/">
            The four painters: A Video Work Created with Deep Learning{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://archive.craftz.dog/blog.odoruinu.net/2015/12/19/created-movie-with-deep-learning/">
            Deep Learningを使って映像作品を作った
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      {/* <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://news.ycombinator.com/item?id=10782289">
            <Badge mr={2}>Hacker News</Badge>
            The Four Painters: A Video Work Created with Deep Learning
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://gigazine.net/news/20151224-deep-learning-four-painters/">
            <Badge mr={2}>Gigazine</Badge>
            実写映像を人工知能「ディープラーニング」でゴッホや葛飾北斎っぽく変換した「the
            four painters」
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList> */}

      {/* <Box>
        <iframe
          src="https://player.vimeo.com/video/146373709"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
        />
      </Box> */}

      <WorkImage src="/images/works/mealkit_02.jpg" alt="mealkit" />
      <WorkImage src="/images/works/mealkit_01.jpg" alt="mealkit" />
      <WorkImage src="/images/works/mealkit_03.jpg" alt="mealkit" />

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Functionality</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          Navigation between the pages (links, navigation buttons, clickable items, etc.).
        </ListItem>
        <ListItem>
          Scrollable page (or portion of a page):
          All pages are vertically scrollable, with a fixed top navigation bar. The
          first page allows horizontal scrolling within the "explore the menu" area for
          the placeholder pictures.

        </ListItem>
        <ListItem>
          Pop-up overlay: Upon opening the first page, a pop-up overlay will automatically appear after
          four seconds, showcasing discount information and subscription requests.
          The overlay includes a button in the top right corner to close it.

        </ListItem>
        <ListItem>
          Interactive component with variants: On the third page, the "collect the meal" button changes to a darker gray
          background color when the mouse hovers over it and returns to a lighter gray
          background color when the mouse moves away.

        </ListItem>
      </UnorderedList>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
