import React from 'react';
import {
  Box,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Image,
  Avatar,
  Button,
  VStack,
  Flex,
} from '@chakra-ui/react';

interface BlogCardProps {
  category: string;
  date: string;
  title: string;
  authorName: string;
  image?: string;
  authorImage?: string;
}

const BlogCard = ({
  category,
  date,
  title,
  authorName,
  authorImage,
  image,
}: BlogCardProps) => (
  <Box borderRadius="lg" overflow="hidden" bg="white" p={4}>
    <Image
      src={image}
      alt={title}
      width="298px"
      height="180px"
      objectFit="cover"
      borderRadius="xl"
      mb={4}
    />
    <Flex justify="flex-start" align="center" gap="4" mb={4}>
      <Text fontSize="sm" fontWeight="bold" color="#0A2640">
        {category}
      </Text>
      <Text fontSize="xs" color="gray.500">
        {date}
      </Text>
    </Flex>
    <Heading
      as="h2"
      textAlign="left"
      fontSize="md"
      color="#0A2640"
      width={300}
      noOfLines={4}
      mb={5}
    >
      {title}
    </Heading>
    <VStack align="start" spacing={2}>
      <Box display="flex" alignItems="center">
        <Avatar size="sm" src={authorImage} name={authorName} mr={2} />
        <Text fontSize="sm" color="gray.700">
          {authorName}
        </Text>
      </Box>
    </VStack>
  </Box>
);

const BlogSection = () => {
  const blogs = [
    {
      category: 'Category',
      date: 'November 22, 2021',
      title: 'Pitch termsheet backing validation focus release.',
      authorName: 'Chandler Bing',
      authorImage: '/b1.png',
      image: '/service1.png',
    },
    {
      category: 'Category',
      date: 'November 22, 2021',
      title:
        'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
      authorName: 'Rachel Green',
      authorImage: '/t2.png',
      image: '/business1.png',
    },
    {
      category: 'Category',
      date: 'November 22, 2021',
      title:
        'Beta prototype sales iPad gen-z marketing network effects value proposition.',
      authorName: 'Monica Geller',
      authorImage: '/b3.png',
      image: '/blog.png',
    },
  ];

  return (
    <Box py={20} bg="white">
      <Container maxW="container.xl" textAlign="center">
        <Text fontSize="sm" color="gray.500" mb={4}>
          Our Blog
        </Text>
        <Heading as="h1" size="2xl" color="gray.800" mb={16}>
          Value proposition accelerator product
          <br className="hidden md:block" />
          management venture
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </SimpleGrid>

        <Button
          size="lg"
          variant="outline"
          color="#0A2640"
          px="8"
          rounded="full"
          border="solid"
          mt={7}
          _hover={{ bg: '#0A2640', color: 'white' }}
        >
          Load more
        </Button>
      </Container>
    </Box>
  );
};

export default BlogSection;
