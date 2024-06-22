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
        Sina 13F <Badge>2018-2020</Badge>
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
            Angular / TypeScript / Python / Data Visualization
          </span>
        </ListItem>

      </List>

      <List ml={4} my={4}>
        <ListItem>
          • I played a key role in designing and developing the 13F data section on Sina Finance, aimed at providing domestic investors with timely insights into institutional investment managers holdings. By analyzing business logic and displaying both overall institutional investors and individual investor holdings, we created a seamless user experience that increased the monthly active user base by 7%. I contributed to the product design with detailed wireframes and high-fidelity mockups, ensuring a harmonious UI design aligned with the company aesthetic.

        </ListItem>
        <br />
        <ListItem>
          • In this project, I developed engaging front-end interfaces with features like an auto-scrolling news widget, dynamic investment data tables, and interactive charts. I automated the extraction of 13F filings, ensuring accurate and reliable data reporting. Visualizing fund trends with interactive charts and creating a rectangular treemap for top holdings helped users make informed investment decisions. Additionally, I implemented a CI/CD pipeline to streamline the software development lifecycle, accelerating release cycles and enhancing overall efficiency.
        </ListItem>
        <br />
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
