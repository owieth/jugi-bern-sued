import { Box, ButtonGroup, Divider, Flex, IconButton, Img, Stack, Text } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { Login } from './components/Login'

export default function Home() {
  return (
    // <Flex direction="column" flex="1">
    //   <Navbar />
    //   <Content />
    //   <Footer />
    // </Flex>

    <Flex direction="row" flex="1">
      <Box w='50%'>
        <Img src='https://bit.ly/dan-abramov' alt='Dan Abramov' style={{ height: '100vh' }} />
      </Box>

      <Flex direction="column" flex="1" align="center">
        <Login />

        <Divider />
        <Stack
          pt="8"
          pb="12"
          justify="space-between"
          direction={{ base: 'column-reverse', md: 'row' }}
          align="center"
        >
          <Text fontSize="sm" color="subtle">
            &copy; {new Date().getFullYear()} Jugi Bern Süd. All rights reserved.
          </Text>
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="1.25rem" />} />
          </ButtonGroup>
        </Stack>
      </Flex>
    </Flex >
  )
}