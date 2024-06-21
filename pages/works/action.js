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
  <Layout title="action">
    <Container>
      <Title>
        Action Property Management <Badge>2022-2023</Badge>
      </Title>
      <P>
        A web platform  supporting the digitalization of 100,000+ vendors, where they can manage their stores, claim locations, post vouchers, reply to reviews, and handle other online operations.
      </P>

      <List ml={4} my={4}>

        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Angular / TypeScript / CI/CD / Testing
          </span>
        </ListItem>

      </List>

      <List ml={4} my={4}>
        <ListItem>
          • I developed and maintained an in-house advertising analysis dashboard, transforming complex data into actionable insights for stakeholders. By importing and consolidating advertising data, I ensured efficient storage and analysis, enabling clear visualization of ad campaign performance. This allowed stakeholders to monitor ROI and conversion rates across different channels and time spans, making informed, data-driven decisions.
        </ListItem>
        <br />
        <ListItem>
          • To ensure secure access, I implemented robust user authentication and authorization mechanisms. I also streamlined the development process by orchestrating CI/CD pipelines, which automated integration, testing, and deployment. Through weekly code reviews and maintaining detailed documentation, I facilitated rapid prototyping and seamless onboarding, contributing to a cohesive and efficient team environment.
        </ListItem>
        <br />
      </List>


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
