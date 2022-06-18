import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/spotify-logo.png'
import thumbWalknote from '../public/images/works/klarna-og.png'
import thumbFourPainters from '../public/images/works/thumb.jpeg'
import thumbMenkiki from '../public/images/works/tic-tac-toe.png'

const Works = () => (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
  
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="spotify" title="Spotify clone" thumbnail={thumbInkdrop}>
              A Spotify clone built with React and Chakra UI.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="klarna"
              title="Klarna-checkout"
              thumbnail={thumbWalknote}
            >
             Web shop with API and Klarna Checkout.
            </WorkGridItem>
          </Section>
  
          <Section delay={0.1}>
            <WorkGridItem
              id="to-do-list"
              title="To-do list"
              thumbnail={thumbFourPainters}
            >
              A to-do list built with React native.
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id="tic-tac-toe" thumbnail={thumbMenkiki} title="tic-tac-toe">
              A tic-tac-toe game built with React.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Divider my={4} />
        </Container>
    </Layout>
    )


export default Works;
