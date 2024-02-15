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
  <Layout title="Webcog">
    <Container>
      <Title>
        Cognition experiment <Badge>2023-</Badge>
      </Title>
      <P>
        An experiment website studying the relationship of memory and age
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://online-exp-fa0f1071162c.herokuapp.com/">
            https://online-exp-fa0f1071162c.herokuapp.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows / macOS / Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>jsPsych / Flask / AWS / Heroku</span>
        </ListItem>

      </List>

      <WorkImage src="/images/works/webcog_eyecatch.png" alt="webcog" />
      <WorkImage src="/images/works/webcog_02.png" alt="webcog" />
      <WorkImage src="/images/works/webcog_03.png" alt="webcog" />
      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/-qBavwqc_mY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
