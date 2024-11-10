import React, { useState } from 'react';
import {
  Box,
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Avatar,
  IconButton,
} from '@chakra-ui/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  name: string;
  title: string;
  image: string;
  isCenter?: boolean;
}

const testimonials = [
  {
    text: 'Buyer buzz partner network disruptive non-disclosure agreement business',
    name: 'Albus Dumbledore',
    title: 'Manager @ Howarts',
    image: '/t1.png',
  },
  {
    text: 'Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.',
    name: 'Severus Snape',
    title: 'Manager @ Slytherin',
    image: '/t2.png',
  },
  {
    text: 'Release facebook responsive web design business model canvas seed money monetization.',
    name: 'Harry Potter',
    title: 'Team Leader @ Gryffindor',
    image: '/t3.png',
  },
  {
    text: 'Scalable e-commerce innovation with revolutionary UI/UX experiences.',
    name: 'Luna Lovegood',
    title: 'Lead Designer @ Ravenclaw',
    image: '/t1.png',
  },
  {
    text: 'Seamless integration between legacy systems and modern applications.',
    name: 'Ron Weasley',
    title: 'Project Manager @ Gryffindor',
    image: '/t2.png',
  },
];

const TestimonialCard = ({ text, name, title, image, isCenter }: TestimonialCardProps) => (
  <Box
    bg="white"
    p={{ base: 4, md: 6 }}
    rounded="lg"
    boxShadow="lg"
    maxW={{ base: 'full', md: 'sm' }}
    w={{ base: 'full', md: 350 }}
    textAlign="left"
    mt={{ base: 6, md: 10 }}
    height={isCenter ? { base: 'auto', md: '320px' } : { base: 'auto', md: '280px' }}
    transform={isCenter ? 'scale(1.05)' : 'scale(1)'}
    transition="transform 0.3s ease-in-out"
  >
    <Text mb="4" fontSize={{ base: 'lg', md: '2xl' }} fontWeight="normal" color="gray.700">
      “{text}”
    </Text>
    <Stack direction="row" align="center" spacing="4">
      <Avatar src={image} name={name} size="md" />
      <Box>
        <Text fontWeight="bold" color="#0B2640">
          {name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {title}
        </Text>
      </Box>
    </Stack>
  </Box>
);

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleTestimonials = () => {
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (currentIndex + 1) % testimonials.length;

    return [
      testimonials[prevIndex],
      testimonials[currentIndex],
      testimonials[nextIndex],
    ];
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <Box bg="#0B2640" py={{ base: 10, md: 20 }}>
      <Container maxW="7xl">
        {/* Header with navigation buttons */}
        <Flex
          justify="space-between"
          align="center"
          mb="12"
          direction={{ base: 'column', md: 'row' }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Heading
            as="h2"
            color="white"
            mb={{ base: 6, md: 0 }}
            size={{ base: '2xl', md: '3xl' }}
          >
            An enterprise template to ramp <br className="hidden md:block" /> up
            your company website
          </Heading>
          <Stack direction="row" spacing="4">
            <IconButton
              aria-label="Previous"
              icon={<ArrowLeft />}
              onClick={handlePrevious}
              variant="ghost"
              color="#0A2640"
              boxSize={{ base: '12', md: '16' }}
              rounded="full"
              bg="white"
              _hover={{ bg: 'whiteAlpha.500' }}
            />
            <IconButton
              aria-label="Next"
              icon={<ArrowRight />}
              onClick={handleNext}
              variant="ghost"
              color="#0A2640"
              boxSize={{ base: '12', md: '16' }}
              rounded="full"
              bg="white"
              _hover={{ bg: 'whiteAlpha.500' }}
            />
          </Stack>
        </Flex>

        {/* Carousel for Testimonials */}
        <Flex justify="center" align="center" gap="4" overflow={{ base: ' ', md: 'hidden' }}>
          {visibleTestimonials.map((testimonial, index) => (
            <Box
            key={index}
            flex={{ base: index === 1 ? '1' : '0', md: '1' }}
            display={{ base: index === 1 ? 'block' : 'none', md: 'block' }}
          >
            <TestimonialCard
              key={index}
              text={testimonial.text}
              name={testimonial.name}
              title={testimonial.title}
              image={testimonial.image}
              isCenter={index === 1} 
            />
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default TestimonialSection;
