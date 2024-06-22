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
            Built reusable store-page components for products display and customer reviews.
          </WorkGridItem>

          <WorkGridItem id="action" title="Action Property Management" thumbnail={thumbAction}>
            Developed a dashboard for advertising channel cost-effectiveness analyzing.
          </WorkGridItem>

        </SimpleGrid>

      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <WorkGridItem id="meituan" thumbnail={thumbMeituan} title="Meituan">
            Implemented a web platform for over vendors to handle online operations.
          </WorkGridItem>

          <WorkGridItem id="13f" thumbnail={thumb13f} title="Sina Finance">
            Created 13F data section for investors to access reports promptly.
          </WorkGridItem>
        </SimpleGrid>
      </Section>

    </Container>
  </Layout >
)

export default Experience
export { getServerSideProps } from '../components/chakra'
