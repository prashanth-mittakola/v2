import { 
  Container, 
  // Heading, 
  SimpleGrid 
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbApple from '../public/images/learnings/apple-earphones-scroll-ss.png'
import thumbCovid from '../public/images/learnings/covid-19-ss.png'
import thumbMovie from '../public/images/learnings/movie-landing-page-ss.png'

const Leanings = () => (
  <Layout title="Leanings">
    <Container>
      {/* <Heading as="h3" fontSize={20} mb={4}>
        Leanings
      </Heading> */}

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            url="https://codepen.io/prashant-mittakola/full/XWjBvZq"
            title="Earphones"
            thumbnail={thumbApple}
          >
          </WorkGridItem>
          <p style={{textAlign:"center"}}>Apple earphones scroll effect.</p>
        </Section>
        <Section>
          <WorkGridItem
            url="https://codepen.io/prashant-mittakola/full/LYRzPPa"
            title="Covid-19"
            thumbnail={thumbCovid}
          >
          </WorkGridItem>
          <p style={{textAlign:"center"}}>Covid-19 tracker.</p>
        </Section>
        <Section>
          <WorkGridItem
            url="https://prashanth-mittakola.github.io/movie-website"
            title="Movies"
            thumbnail={thumbMovie}
          >
          </WorkGridItem>
          <p style={{textAlign:"center"}}>Movies landing page.</p>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Leanings
