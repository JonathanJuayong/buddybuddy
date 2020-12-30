import { AppProps } from 'next/app';
import 'focus-visible/dist/focus-visible';
import { ChakraProvider } from '@chakra-ui/react';
import { ContextProvider } from '../components/context';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
