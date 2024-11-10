/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Box, Container, Text, Button, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef(null);
  
  // Array of logo images for the carousel
  const logos = [
    '/boldo.png',
    '/presto.png',
    '/boldo.png',
    '/presto.png',
    '/boldo.png',
    '/presto.png',
    '/boldo.png',
    '/presto.png',
    '/boldo.png',
    '/presto.png',
    '/boldo.png',
    '/presto.png',
  ];

  // Auto-scroll effect for the carousel
  useEffect(() => {
    const scrollSpeed = .1; // Adjust speed as needed
    let animationFrameId: number;
    
    const animate = () => {
      setTranslateX(prev => {
        const newTranslate = prev - scrollSpeed;
        // Reset position when first set of logos is fully scrolled
        if (newTranslate <= -(100 / logos.length) * (logos.length / 2)) {
          return 0;
        }
        return newTranslate;
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <Box position="relative" overflow="hidden" bg="#0B2640">
      {/* Two-toned background */}
      <Box
        position="absolute"
        top="-85%"
        left="60%"
        width="100%"
        height="150%"
        borderRadius="full"
        bg="#1C3D5B"
        zIndex="0"
      />

      <Container maxW="7xl" pt={{ base: '36', md: '32' }} pb={{ base: '16', md: '24' }} position="relative" zIndex="1">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          justify="space-between"
          gap={{ base: '12', lg: '8' }}
        >
          {/* Left content */}
          <Box flex="1" color="white" maxW={{ lg: '600px' }}>
            <Text
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="bold"
              lineHeight="1.2"
              mb="6"
            >
              Save time by building fast with Boldo Template
            </Text>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="whiteAlpha.900"
              mb="8"
              lineHeight="1.6"
            >
              Funding handshake buyer business-to-business metrics iPad partnership.
              First mover advantage innovator success deployment non-disclosure.
            </Text>
            <Flex gap="4" flexWrap="wrap">
              <Button
                size="lg"
                bg="#69E6A6"
                color="#0A2640"
                px="8"
                rounded="full"
                _hover={{ bg: '#50c990' }}
              >
                Buy template
              </Button>
              <Button
                size="lg"
                variant="outline"
                color="white"
                px="8"
                rounded="full"
                _hover={{ bg: 'whiteAlpha.200' }}
              >
                Explore
              </Button>
            </Flex>
          </Box>

          {/* Right content - Dashboard Images */}
          <Box flex="1" display={{ base: 'none', md: 'block' }} position="relative">
            {/* Main dashboard */}
            <Box
              bg="#3e566c"
              rounded="xl"
              p="4"
              mb="4"
              boxShadow="xl"
            >
              <Box bg="#3e566c" rounded="md" p="2">
                <Flex gap="2" mb="2">
                  <Box w="3" h="3" bg="#FF6056" rounded="full" />
                  <Box w="3" h="3" bg="#FFBD2E" rounded="full" />
                  <Box w="3" h="3" bg="#27C93F" rounded="full" />
                </Flex>
                <Image
                  src="/graphs.png"
                  alt="Chart"
                  width={494}
                  height={150}
                  className='md:ml-12 md:py-5'
                  style={{ marginTop: '8px' }}
                />

                
              </Box>
            </Box>

            {/* Small charts */}
            <Flex gap="4" justify="space-between">
              <Box
                bg="#3e566c"
                rounded="xl"
                p="4"
                flex="1"
              >
                <Flex gap="2" mb="2">
                  <Box w="2" h="2" bg="#FF6056" rounded="full" />
                  <Box w="2" h="2" bg="#FFBD2E" rounded="full" />
                  <Box w="2" h="2" bg="#27C93F" rounded="full" />
                </Flex>
                <Image
                  src="/bar.png"
                  alt="Chart"
                  width={139}
                  height={106}
                  className='md:ml-12 md:py-5'
                  style={{ marginTop: '8px' }}
                />
              </Box>

              <Box
                bg="#3e566c"
                rounded="xl"
                p="4"
                flex="1"
              >
                <Flex gap="2" mb="2">
                  <Box w="2" h="2" bg="#FF6056" rounded="full" />
                  <Box w="2" h="2" bg="#FFBD2E" rounded="full" />
                  <Box w="2" h="2" bg="#27C93F" rounded="full" />
                </Flex>
                <Image
                  src="/pie.png"
                  alt="Pie Chart"
                  width={201}
                  height={93}
                  className='md:mx-5 md:py-5'
                  style={{ marginTop: '8px' }}
                />
              </Box>
            </Flex>
          </Box>
        </Flex>

        {/* Logo carousel */}
        <Box mt="16" overflow="hidden">
          <Flex
            ref={carouselRef}
            position="relative"
            gap="8"
            style={{ transform: `translateX(${translateX}%)` }}
            transition="transform 0.1s linear"
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <Box
                key={`first-${index}`}
                flex="none"
                w={`${100 / 6}%`}
                opacity="0.4"
                _hover={{ opacity: "2" }}
                transition="opacity 0.3s"
              >
                <Image
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  width={150}
                  height={50}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>
            ))}
            
            {/* Duplicate set of logos for seamless loop */}
            {logos.map((logo, index) => (
              <Box
                key={`second-${index}`}
                flex="none"
                w={`${100 / 10}%`}
                opacity="0.4"
                _hover={{ opacity: "2" }}
                transition="opacity 0.3s"
              >
                <Image
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  width={150}
                  height={50}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;