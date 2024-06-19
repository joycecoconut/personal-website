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
        Meituan <Badge>2018-2019</Badge>
      </Title>
      <P>
        --
      </P>

      <List ml={4} my={4}>

        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Angular / TypeScript / PHP / Python
          </span>
        </ListItem>

      </List>

      <List ml={4} my={4}>
        <ListItem>
          1. Collaborated with cross-functional teams to understand, break down requirements, develop com- prehensive test cases to cover various scenarios and edge cases and set testing timelines based on project deadlines.
        </ListItem>
        <ListItem>
          2. Designed automated UI testing(snapshot testing) scripts using Jest and React Testing Library to con- tinuously validate the platform’s UI features, ensuring consistent UI rendering and detecting unin- tended changes.
        </ListItem>

        <ListItem>
          3. Performed E2E testing scenarios using Cypress to simulate real user interactions, verifying the in- tegrity of workflows from login to posting across various browsers, enhancing the reliability of the functions and data flows.
        </ListItem>
        <ListItem>
          4. Conducted regression testing to ensure that new changes do not affect existing functionalities.
        </ListItem>
        <ListItem>
          5. Integrated various lint checks, tests into the CI/CD pipeline with CircleCI and YAML configuration.

        </ListItem>
        <ListItem>
          6.Analyzed and reported on test results, providing actionable insights for the development team using Slack to clearly understand the current project progress and address and fix identified issues promptly.
        </ListItem>
        <ListItem>
          7. Conducted accessibility testing using WAVE to ensure that the platform met web accessibility stan- dards, providing an inclusive user experience for all users.
        </ListItem>
        <ListItem>
          8. Managed the version release process in Jira from product creation to final reviews, ensuring the final product met requirements and user expectations, utilizing Google Analytics and Firebase for user behavior analysis and feedback.
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
