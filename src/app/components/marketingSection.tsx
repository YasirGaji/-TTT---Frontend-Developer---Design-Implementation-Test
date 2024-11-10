import React from 'react';
import Image from 'next/image';
import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  Icon,
  List,
  ListItem,
} from '@chakra-ui/react';
import { Check } from 'lucide-react';
import Link from 'next/link';

const MarketingSection = () => {
  const features = [
    'We connect our customers with the best.',
    'Advisor success customer launch party.',
    'Business-to-consumer long tail.',
  ];

  return (
    <Box className="py-20 bg-white">
      <Container maxW="7xl" py={{ base: 12, md: 16 }}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 8, md: 12 }}
          align="center"
        >
          {/* Left side with image and chart */}
          <Box position="relative" w={{ base: 'full', md: '50%' }}>
            <Box
              position="relative"
              height={{ base: '250px', sm: '400px', md: '500px' }}
              rounded="lg"
              width={{ base: 'full', md: 490 }}
              overflow="visible"
            >
              <Image
                src="/market1.png"
                alt="Business professional on phone"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />

              {/* Floating chart card */}
              <Box
                position="absolute"
                bottom={{ base: '-80px', md: '-110px' }}
                right={{ base: '10px', md: '50px' }}
                bg="white"
                rounded="xl"
                boxShadow="2xl"
                width={{ base: 180, md: 251 }}
                height={{ base: 280, md: 388 }}
                zIndex={2}
                overflow="hidden"
                border="1px"
                borderColor="gray.100"

                display={{ base: 'none', md: 'block' }}
              >
                {/* Container for the chart image */}
                <Box
                  position="relative"
                  width="full"
                  height="full"
                  p="6"
                >
                  <Image
                    src="/market2.png"
                    alt="Chart overlay"
                    fill
                    style={{ 
                      objectFit: 'contain',
                      padding: '20px' 
                    }}
                    priority
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Right side content */}
          <Stack spacing="6" w={{ base: 'full', md: '50%' }} px={{ base: 4, sm: 6, md: 0 }}>
            <Heading
              as="h2"
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
              lineHeight="tight"
              color="black"
              textAlign={{ base: 'center', md: 'left' }}
            >
              We connect our customers <br className="hidden md:block" /> with
              the best, and help them <br className="hidden md:block" /> keep
              up-and stay open.
            </Heading>

            <List spacing="4">
              {features.map((feature, index) => (
                <ListItem key={index} display="flex" alignItems="center" justifyContent={{ base: 'flex-start', md: 'flex-start' }}>
                  <Box rounded="full" bg="#0B2640" p="2.5" mr="3">
                    <Icon as={Check} color="white" boxSize="4" />
                  </Box>
                  <Text color="#0B2640">{feature}</Text>
                </ListItem>
              ))}
            </List>

            <Button
              as={Link}
              href="/login"
              bg="#0B2640"
              color="white"
              px={6}
              py={5}
              rounded="full"
              _hover={{
                bg: '#0B2640.900',
              }}
              width={{ base: 'full', md: '210px' }}
              textAlign="center"
            >
              Start now
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default MarketingSection;