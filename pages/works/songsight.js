import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="songsight">
    <Container>
      <Title>
        SongSight <Badge>2023</Badge>
      </Title>
      <P>
        SongSight enables you to search music playlists and visualize them
        in Danceability and Energy so you could easily screen and find wanted songs without
        spending too much time listening them!
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>Angular, NodeJS, ExpressJS, RESTful API</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Functionality</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          After the user successfully logs in and verifies identity,
          s/he will see a playlist recommended for the day on the page.
          They can click the left and right keys to cycle through the displayed playlists.


        </ListItem>
        <ListItem>
          When users search using their keywords and browse the returned results,
          they can click on any position on the carousel card to display the title
          of the selected playlist, along with a visualization chart and information.

        </ListItem>

        <ListItem>
          Users can hover, click, and brush over to further view the content of the songs they are interested in.
        </ListItem>

        <ListItem>
          The page has generally good accessibility.
        </ListItem>

        {/* <ListItem>
          <Badge mr={2}>タブロイド</Badge>
          <Link href="http://www.tabroid.jp/app/multimedia/2013/05/app.walknote.html">
            「YOU、これ聴いちゃいなよ」自分好みの曲が勝手に集まる音楽プレーヤー『walknote』
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem> */}
      </UnorderedList>

      <SimpleGrid >
        <WorkImage src="/images/works/songsight01.png" alt="songsight" />
      </SimpleGrid>
      <WorkImage src="/images/works/songsight02.png" alt="songsight" />
      <WorkImage src="/images/works/songsight03.png" alt="songsight" />
      <WorkImage src="/images/works/songsight04.png" alt="songsight" />
      <WorkImage src="/images/works/songsight05.png" alt="songsight" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
