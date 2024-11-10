import { Box, Heading, Text, Container, SimpleGrid } from '@chakra-ui/react';
import { ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  title?: string;
  description: string;
  image?: React.ReactNode;
  key: number;
}

const ServiceCard = ({ title, description, image, }: ServicesSectionProps) => (
  <Box className="p-6 rounded-2xl" textAlign={{ base: 'center', md: 'left' }} mx="auto">
    <Box className="rounded-2xl mb-6 aspect-square flex items-center " alignItems={{ base: 'center', md: 'left' }} justifyContent={{ base: 'center', md: 'left' }}>
      {image}
    </Box>
    <Heading as="h3" size="md" fontWeight="light" color="#000000" mb={3}>
      {title}
    </Heading>
    <Text color="#777777" mb={4}>
      {description}
    </Text>

    <Box display="flex" justifyContent={{ base: 'center', md: 'left' }} alignItems={{ base: 'center', md: 'left' }} cursor="pointer" className="group">
      <Box display="flex" alignItems="center" pb={1} borderBottom="1px solid black">
        <Text color="#0A2640" fontWeight="bold">
          Explore page
        </Text>
        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} color="#0A2640" />
      </Box>
    </Box>
  </Box>
);

const ServicesSection = () => {
  const services = [
    {
      title: 'Cool feature title',
      description: 'Learning curve network effects return on investment.',
      image: (
        <Box
          className="w-72 h-96 bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/service1.png')" }}
        />
      ),
    },
    {
      title: 'Even cooler feature',
      description: 'Learning curve network effects return on investment.',
      image: (
        <Box
          className="w-72 h-96 bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/services2.png')" }}
        />
      ),
    },
    {
      title: 'Cool feature title',
      description: 'Learning curve network effects return on investment.',
      image: (
        <Box
          className="w-72 h-96 bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/services3.png')" }}
        />
      ),
    },
  ];

  return (
    <Box className="py-20 bg-white">
      <Container maxW="container.xl">
        <Heading as="p" size="sm" fontWeight="light" className="text-center text-[#777777] mb-4">
          Our Services
        </Heading>
        <Heading
          as="h1"
          size={{ base: 'xl', md: '3xl' }}
          className="text-center text-[#000000] mb-16"
          fontWeight="light"
        >
          Handshake infographic mass market <br className="hidden md:block" />{' '}
          crowdfunding iteration.
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
