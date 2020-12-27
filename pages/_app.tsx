import { AppProps } from 'next/app';
import 'focus-visible/dist/focus-visible';
import { ChakraProvider } from '@chakra-ui/react';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
