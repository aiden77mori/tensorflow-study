import React from 'react'
import { Box, Container, Text, Heading, Link, Divider } from 'theme-ui'

const Home = () => {
  return (
    <Container as="section" variant="layout.section">
      <Heading as="h2">Hello World</Heading>
      <Text>
        This is a series of Machine Learning experiments using{' '}
        <Link href="https://www.tensorflow.org/js" target="_blank">
          TensorFlow.js
        </Link>
        ,{' '}
        <Link href="https://threejs.org" target="_blank">
          Three.js
        </Link>
        ,{' '}
        <Link href="https://reactjs.org" target="_blank">
          React
        </Link>{' '}
        and{' '}
        <Link href="https://theme-ui.com" target="_blank">
          Theme-ui
        </Link>{' '}
        by{' '}
        <Link variant="text" href="https://s2paganini.com" target="_blank">
          Silvio Paganini
        </Link>
        .
      </Text>
      <Text>
        <Text as="span" sx={{ color: 'green' }}>
          &#x2190;
        </Text>{' '}
        Choose the experiments on the left menu to start ⚡
      </Text>
      <Divider />
      <Heading as="h3" variant="styles.h3" sx={{ mt: 4 }}>
        How to run it locally
      </Heading>
      <Text>
        <Text as="span" sx={{ color: 'green' }}>
          1)
        </Text>{' '}
        Clone the git repository{' '}
        <Box as="pre" variant="styles.pre">
          <code>$ git clone git@github.com:silviopaganini/tensorflow-study.git</code>
        </Box>
      </Text>
      <Text>
        <Text as="span" sx={{ color: 'green' }}>
          2)
        </Text>{' '}
        Install the packages and run
        <Box as="pre" variant="styles.pre">
          <code>
            $ yarn install
            <br />$ yarn start
          </code>
        </Box>
      </Text>
      <Heading as="h3" variant="styles.h3" sx={{ mt: 4 }}>
        Contribute
      </Heading>
      <Text>
        PRs are welcome! Don't forget to fill out a description of your PR. <br />
        View source on{' '}
        <Link href="https://github.com/silviopaganini/tensorflow-study" target="_blank">
          Github
        </Link>
        .
      </Text>
      <Heading as="h3" variant="styles.h3" sx={{ mt: 4 }}>
        ❗ Disclaimer
      </Heading>
      <Text>
        All experiments were heavily tested on a good spec machine on Chrome and Opera.
        <br />
        Some experimemts might make your machine fans go crazy 😁 or just not work at all depending
        on your configuration.
      </Text>
    </Container>
  )
}

export default Home
