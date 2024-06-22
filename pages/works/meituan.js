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
  <Layout title="meituan">
    <Container>
      <Title>
        Meituan <Badge>2020-2022</Badge>
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
          • I collaborated closely with backend developers, UX designers, and product managers to ensure alignment on requirements, design decisions, and strategies. By implementing responsive and mobile-friendly layouts, I made sure the platform was accessible across various devices. I developed reusable UI components for product displays and promotions management, enhancing code reuse and maintainability.
        </ListItem>
        <br />
        <ListItem>
          • To bring data to life, I integrated interactive visualization components, allowing stakeholders to track sales performance and analyze order patterns and delivery efficiency. My work included designing automated testing scripts for functional and UI testing, ensuring consistent performance. I also conducted accessibility testing to meet web standards and coordinated user acceptance testing, working with end-users to validate the system against business needs, ensuring a seamless and inclusive user experience.
        </ListItem>

      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
