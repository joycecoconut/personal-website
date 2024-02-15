import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  // AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="13f">
    <Container>
      <Title>
        Sina 13F <Badge>2021</Badge>
      </Title>
      <P>
        A webpage from Sina Finance about the 13F form disclosure information.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://global.finance.sina.com.cn/clues/13f/?nav13f_id=AgencyStats" target="_blank">
              https://global.finance.sina.com.cn/clues/13f/?nav13f_id=AgencyStats <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React / TypeScript / PHP / Python
          </span>
        </ListItem>

      </List>

      <WorkImage src="/images/works/13f_eyecatch.png" alt="Website" />

      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/GznmPACXBlY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}

      {/* <WorkImage src="/images/works/margelo_01.png" alt="Margelo" /> */}

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
