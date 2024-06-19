import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbInkdrop from '../public/images/works/weee_eyecatch.png'
import thumb13f from '../public/images/works/sina_eyecatch.png'
import thumbAction from '../public/images/works/action_eyecatch.png'
import thumbMeituan from '../public/images/works/meituan_eyecatch.png'

const Experience = () => (
  <Layout title="Experience">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Experience
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2]} gap={6}>
          <WorkGridItem id="weee" title="Weee" thumbnail={thumbInkdrop}>
            Built Reusable Store Page for Global+ service for products display and customer reviews.
          </WorkGridItem>

          <WorkGridItem id="13f" thumbnail={thumb13f} title="Sina Finance 13F">
            Developed 13F data section on Sina Finance, providing investors with timely access to 13F reports.
          </WorkGridItem>

        </SimpleGrid>

      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <WorkGridItem id="action" title="Action" thumbnail={thumbAction}>
            Created ad placement dashboard to visualize the cost-effectiveness of advertising channels.
          </WorkGridItem>

          <WorkGridItem id="meituan" thumbnail={thumbMeituan} title="Meituan">
            Built comprehensive test cases to cover various scenarios for Meituan Business Toolkit.
          </WorkGridItem>
        </SimpleGrid>
      </Section>

    </Container>
  </Layout >
)

export default Experience
export { getServerSideProps } from '../components/chakra'
