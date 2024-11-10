'use client';

import {
  Box,
  Container,
  Input,
  Button,
  Text,
  Flex,
  VStack,
  HStack,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  // Responsive values for padding and spacing
  const sectionPadding = useBreakpointValue({ base: '6', md: '12', lg: '24' });
  const containerSpacing = useBreakpointValue({ base: '4', md: '6', lg: '8' });
  const headingSize = useBreakpointValue({ base: 'xl', md: '2xl' });
  const subscriptionHeight = useBreakpointValue({ base: 'auto', md: '96' });

  return (
    <Box as="footer" className="py-16 bg-white">
      <Container maxW="container.xl" px={containerSpacing}>
        
        {/* Email Subscription Section */}
        <Box
          position="relative"
          overflow="hidden"
          bg="#0B2640"
          className={`mb-8 md:mb-16 p-6 md:p-${sectionPadding} rounded-lg text-white relative overflow-hidden`}
          minH={subscriptionHeight}
        >
          <Box
            position="absolute"
            top={{ base: '-50%', md: '-75%' }}
            left={{ base: '40%', md: '62%' }}
            width="150%"
            height="150%"
            borderRadius="full"
            bg="#1C3D5B"
            zIndex="0"
          />

          {/* Content */}
          <Flex
            direction="column"
            align="center"
            className="space-y-4 md:space-y-6 relative z-10"
            py={{ base: 8, md: 20 }}
          >
            <Heading
              as="h2"
              size={headingSize}
              lineHeight="1.4"
              className="text-center max-w-2xl"
              fontWeight="light"
            >
              An enterprise template to ramp
              <br className="hidden md:block" /> up your company website
            </Heading>
            <Flex
              className="w-full max-w-md gap-4"
              direction={{ base: 'column', sm: 'row' }}
              px={4}
            >
              <Input
                placeholder="Your email address"
                bg="white"
                color="black"
                _placeholder={{ color: 'gray.500' }}
                className="rounded-full"
                size={{ base: 'md', md: 'lg' }}
              />
              <Button
                className="bg-[#65E4A3] text-black px-6 md:w-[210px] rounded-full hover:bg-[#50c88a]"
                width={{ base: 'full', sm: 'auto' }}
                size={{ base: 'md', md: 'lg' }}
              >
                Start now
              </Button>
            </Flex>
          </Flex>
        </Box>

        {/* Main Footer Content */}
        <Flex
          className="gap-8 md:gap-8"
          direction={{ base: 'column', md: 'row' }}
          justify={{ base: 'flex-start', md: 'space-between' }}
        >
          {/* Logo Section */}
          <VStack
            align={{ base: 'center', md: 'flex-start' }}
            className="space-y-4"
            maxW={{ base: 'full', md: 'xs' }}
            mb={{ base: 8, md: 0 }}
          >
            <Flex align={'center'}>
              <Link href="/" passHref>
                <Box
                  display="flex"
                  alignItems="center"
                  _hover={{ textDecoration: 'none' }}
                >
                  <Box position="relative" width="32px" height="32px" mr={2}>
                    <Image
                      src="/footerLogo.png"
                      alt="Boldo Logo"
                      fill
                      style={{ objectFit: 'contain' }}
                      priority
                    />
                  </Box>
                  <Box color="#0B1B35" fontWeight="bold" fontSize="4xl">
                    Boldo
                  </Box>
                </Box>
              </Link>
            </Flex>

            <Text className="text-gray-500 text-sm text-center md:text-left"
              px={{ base: 4, md: 0 }}>
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </Text>
            <Text className="text-gray-500 text-sm">All rights reserved.</Text>
          </VStack>

          {/* Landings Section */}
          <VStack align={{ base: 'center', md: 'flex-start' }} className="space-y-4">
            <Text className="font-bold text-lg text-[#0B1B35] ">Landings</Text>
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-500 hover:text-gray-700"
            >
              Products
            </Link>
            <Link
              href="/services"
              className="text-gray-500 hover:text-gray-700"
            >
              Services
            </Link>
          </VStack>

          {/* Company Section */}
          <VStack align={{ base: 'center', md: 'flex-start' }} className="space-y-4">
            <Text className="font-bold text-lg text-[#0B1B35] ">Company</Text>
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <HStack>
              <Link
                href="/careers"
                className="text-gray-500 hover:text-gray-700"
              >
                Careers
              </Link>
              <Box className="bg-[#65E4A3] text-[#0B1B35] font-bold px-2 py-0.5 rounded-full text-xs">
                Hiring!
              </Box>
            </HStack>
            <Link
              href="/services"
              className="text-gray-500 hover:text-gray-700"
            >
              Services
            </Link>
          </VStack>

          {/* Resources Section */}
          <VStack align={{ base: 'center', md: 'flex-start' }} className="space-y-4">
            <Text className="font-bold text-lg text-[#0B1B35]">Resources</Text>
            <Link href="/blog" className="text-gray-500 hover:text-gray-700">
              Blog
            </Link>
            <Link
              href="/products"
              className="text-gray-500 hover:text-gray-700"
            >
              Products
            </Link>
            <Link
              href="/services"
              className="text-gray-500 hover:text-gray-700"
            >
              Services
            </Link>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
