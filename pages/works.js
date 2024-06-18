import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/webcog_eyecatch.png'
import thumbWalknote from '../public/images/works/songsight01.png'
import thumbFourPainters from '../public/images/works/mealkit_eyecatch.png'
import thumbMenkiki from '../public/images/works/testing_eyecatch.png'
import thumb13f from '../public/images/works/13f_eyecatch.png'
// import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
// import thumbStyly from '../public/images/works/styly_eyecatch.png'
// import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
// import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
// import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Projects = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

        <Section>
          <WorkGridItem id="webcog" title="Webcog" thumbnail={thumbInkdrop}>
            An experiment website studying the relationship of memory and age
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="webcog" title="StudyHive" thumbnail={thumbInkdrop}>
            A room reservation web application for students to search and book study space
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="songsight" title="SongSight" thumbnail={thumbWalknote}>
            A Music playlist recommendation web app connected to Spotify API
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="mealkit" title="MealKit Delivery" thumbnail={thumbFourPainters}>
            A comprehensive user experience design for a Meal Kit Delivery Service
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="teammates" thumbnail={thumbMenkiki} title="Testing on Teammates">
            A collaborative testing project for a open source project called Teammates
          </WorkGridItem>
        </Section>

      </SimpleGrid>

      {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="13f" thumbnail={thumb13f} title="Sina Finance 13F">
            A webpage from Sina Finance about the 13F form disclosure information.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="13f" thumbnail={thumb13f} title="Sina Finance 13F">
            A webpage from Sina Finance about the 13F form disclosure information.
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}

    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
