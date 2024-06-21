import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Weee">
    <Container>
      <Title>
        E-commerce Web-App <Badge>2023-2024</Badge>
      </Title>
      <P>
        A store-page showing store info, products, customer reviews, with search and navigation functionalities.
      </P>
      <List ml={4} my={4}>

        <ListItem>
          <Meta>Platform</Meta>
          <span>Web on mutiple browsers</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Angular / PrimeNG / Figma / RESTful API </span>
        </ListItem>
      </List>

      <List>
        <ListItem>
          • I crafted an engaging and user-friendly store intro-page for the upcoming Global+ service, bringing the store information, product displays, and customer reviews to life. By designing seamless search and navigation features, I ensured that users could easily find what they needed. My work on the UX design included creating detailed personas, user journey maps, and interactive prototypes, making the interface not only functional but also visually captivating.
        </ListItem>
        <br />
        <ListItem>
          • To keep users hooked, I added infinite scrolling for customer reviews and a video carousel with catchy GIF previews. I also made sure that inventory and promotions were updated in real-time, creating a dynamic shopping experience. By setting up a streamlined process for adding items to the cart and placing orders, I helped make shopping smooth and enjoyable. Throughout the project, I collaborated with a talented team of over 10 developers, using creative problem-solving and agile methodologies to bring this vibrant platform to life.
        </ListItem>
        <br />
      </List >

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
