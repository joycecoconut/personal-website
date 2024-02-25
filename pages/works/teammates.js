import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Teammates (Testing)">
    <Container>
      <Title>
        Testing Project on "Teammates"
      </Title>
      <P>
        We did a comprehensive software testing on TEAMMATES,
        a open-source online system for managing peer evaluations,
        including the following parts:

      </P>

      <UnorderedList my={4}>
        <ListItem>Functional Testing(e2e) and Partition Testing </ListItem>
        <ListItem>White Box Testing and Coverage </ListItem>
        <ListItem>Continuous Integration</ListItem>
        <ListItem>Testable Design and Mocking</ListItem>
        <ListItem>Static Analyzers</ListItem>

      </UnorderedList>

      <List ml={4} my={4}>

        <ListItem>
          <Meta>Tools</Meta>
          <span> Selenium, JUnit, JaCoCo, GitHub Actions, Mockito, SpotBugs, Checkstyle</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://drive.google.com/file/d/1gmLTkJK0yuVBWLgrlmsdUVy-GhI05PEY/view?usp=sharing">
            The Final PDF Report <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        {/* <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/craftzdog/caffe-ios-sample">
            github.com/craftzdog/caffe-ios-sample <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      {/* <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://itunes.apple.com/app/id1035645520?mt=8"
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/works/appstore.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box> */}

      {/* <WorkImage src="/images/works/menkiki_eyecatch.png" alt="menkiki" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/menkiki_01.png" alt="menkiki" />
        <WorkImage src="/images/works/menkiki_02.png" alt="menkiki" />
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
