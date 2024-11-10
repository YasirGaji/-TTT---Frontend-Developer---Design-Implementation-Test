import React, { useState } from 'react';
import Image from 'next/image';
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Icon,
  List,
  ListItem,
} from '@chakra-ui/react';
import { Leaf, Eye, Sun } from 'lucide-react';

const BusinessSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const features = [
    {
      icon: Leaf,
      text: 'We connect our customers with the best.',
    },
    {
      icon: Eye,
      text: 'Advisor success customer launch party.',
    },
    {
      icon: Sun,
      text: 'Business-to-consumer long tail.',
    },
  ];

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Box className="md:py-20 bg-white pb-10">
      <Container maxW="7xl" py={{ base: 0, md: 16 }} mb={{ base: 0, md: 40 }}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 8, md: 12 }}
          align="center"
        >
          {/* Left side with text and features */}
          <Stack
            spacing="6"
            w={{ base: 'full', md: '50%' }}
            px={{ base: 4, sm: 6, md: 0 }}
          >
            <Heading
              as="h2"
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
              lineHeight="tight"
              color="black"
              textAlign={{ base: 'center', md: 'left' }}
              fontWeight="light"
            >
              We connect our customers <br className="hidden md:block" /> with
              the best, and help them <br className="hidden md:block" /> keep
              up-and stay open.
            </Heading>

            <List spacing="4">
              {features.map((feature, index) => (
                <ListItem
                  key={index}
                  display="flex"
                  alignItems="center"
                  bg={activeIndex === index ? '#0B2640' : 'white'}
                  color={activeIndex === index ? 'white' : '#0B2640'}
                  p="3"
                  rounded="lg"
                  boxShadow="md"
                  cursor="pointer"
                  width={{base: 'full', md: 500}}
                  onClick={() => handleItemClick(index)}
                  _hover={{
                    boxShadow: 'lg',
                  }}
                >
                  <Box p="2.5" mr="3">
                    <Icon
                      as={feature.icon}
                      color={activeIndex === index ? 'white' : '#0B2640'}
                      boxSize="4"
                    />
                  </Box>
                  <Text>{feature.text}</Text>
                </ListItem>
              ))}
            </List>
          </Stack>

          {/* Right side with image and chart */}
          <Box position="relative" w={{ base: 'full', md: '50%' }}>
            <Box
              position="relative"
              height={{ base: '250px', sm: '400px', md: '500px' }}
              rounded="lg"
              width={{ base: 'full', md: 490 }}
              overflow="visible"
            >
              <Image
                src="/business1.png"
                alt="Business professional on phone"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />

              {/* Floating chart card */}
              <Box
                position="absolute"
                bottom={{ base: '-80px', md: '-180px' }}
                right={{ base: '10px', md: '120px' }}
                bg="white"
                rounded="xl"
                boxShadow="2xl"
                width={291}
                height={388}
                zIndex={2}
                overflow="hidden"
                border="1px"
                borderColor="gray.100"
                display={{ base: 'none', md: 'block' }}
              >
                {/* Container for the chart image */}
                <Box position="relative" width="full" height="full" p="4">
                  {/* Chart Image */}
                  <Box
                    position="relative"
                    width="full"
                    height="180px"
                    mx="auto"
                    marginTop={18}
                  >
                    <Image
                      src="/business2.png" 
                      alt="Chart overlay"
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </Box>
                  {/* Text Overlay */}
                  <Box
                    mt="4"
                    pl="4"
                    color="gray.700"
                    fontSize="sm"
                    lineHeight="1.6"
                  >
                    <Text display="flex" alignItems="center">
                      <Box
                        as="span"
                        mr="2"
                        borderRadius="full"
                        bg="blue.400"
                        boxSize="8px"
                      />
                      35% - Agile Development
                    </Text>
                    <Text display="flex" alignItems="center" mt="2">
                      <Box
                        as="span"
                        mr="2"
                        borderRadius="full"
                        bg="green.300"
                        boxSize="8px"
                      />
                      30% - Investor bandwidth
                    </Text>
                    <Text display="flex" alignItems="center" mt="2">
                      <Box
                        as="span"
                        mr="2"
                        borderRadius="full"
                        bg="gray.400"
                        boxSize="8px"
                      />
                      35% - A/B testing
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default BusinessSection;
