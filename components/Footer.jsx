import { Box } from '@chakra-ui/react'

const Footer = () => (
  <Box
    textAlign="center"
    p="5"
    color="gray.600"
    borderTop="1px"
    borderColor="gray.100"
  >
    Cloud9 Realtor, Inc. &copy; {new Date().getFullYear()}
  </Box>
)

export default Footer
