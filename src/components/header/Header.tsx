import { ChakraProvider, Heading, Image, Box, Divider } from '@chakra-ui/react'
import logo from '../../img/logo-dio.svg'

export const Header = () => {
    return (
        <ChakraProvider>
            <>
                <Box 
                    display={"flex"}
                    bg="#1E192C"
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Image
                        src={logo}
                        boxSize={'100px'}
                        m={'10px'} />
                    <Divider 
                        orientation='vertical'
                        h={'100px'}
                        borderWidth={'5px'}
                        borderColor={'rgb(255, 255, 255)'}
                    />
                    <Heading
                        as={'h1'}
                        bg="#1E192C"
                        color="white"
                        size={'3xl'}
                        pl="10px">DIO BANK</Heading>
                </Box>
            </>

        </ChakraProvider>
    )
}