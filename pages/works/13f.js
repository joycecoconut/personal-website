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
            Angular / TypeScript / PHP / Python
          </span>
        </ListItem>

      </List>

      <List ml={4} my={4}>
        <ListItem>
          1. Participated in the design of the product by analyzing business logic: separating 13F report data to show both top 10 investment managers and top 10 invested stocks/ETFs.
        </ListItem>
        <ListItem>
          2. Drew wireframes and high-fidelity mockups using Axure to harmonize UI design with the company website aesthetic.
        </ListItem>

        <ListItem>
          3. Developed the front-end using Angular and Angular Material, including an auto-scrolling news widget, toolbars, table data, and media sharing features.
        </ListItem>
        <ListItem>
          4. Automated the extraction of 13F filings using Scrapy, refining and verifying data accuracy.
        </ListItem>
        <ListItem>
          5. Employed Apache ECharts to visualize institutional investors’ fund trends, including a changeable time axis for users to drag and select their interested time span.
        </ListItem>
        <ListItem>
          6. Created a dynamic investment data table, integrating ngx-datatable for enhanced functionalities including pagination, sorting, and filtering.
        </ListItem>
        <ListItem>
          7. Implemented a CI/CD pipeline leveraging Jenkins automation to build, test, and deploy software products to orchestrate the entire software development lifecycle and accelerated release cycles.
        </ListItem>
        <ListItem>
          8. Led efforts resulting in a 7% increase in the monthly active user base by researching the current market for similar products, identifying areas for improvement before product releases and bug fixes.
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
