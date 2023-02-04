import HeadComponent from './components/Head';
import { Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <HeadComponent />
      <Heading as="h1" size='2xl'>
        How Much Leftover?
      </Heading>
      
    </>
  )
}
