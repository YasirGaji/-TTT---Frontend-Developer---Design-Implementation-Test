import { Box, Heading, Text, Container, SimpleGrid } from '@chakra-ui/react';
import { ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  title?: string;
  description: string;
  image?: React.ReactNode;
  key: number;
}

const ServiceCard = ({ title, description, image, }: ServicesSectionProps) => (
  <Box className="p-6 rounded-2xl">
    <Box className="rounded-2xl mb-6 aspect-square flex items-center ">
      {image}
    </Box>
    <Heading as="h3" size="md" className="mb-3 text-[#000000]">
      {title}
    </Heading>
    <Text className="text-[#777777] mb-4">{description}</Text>

    <Box className="flex items-center cursor-pointer group">
      <div className="flex items-center pb-1 border-b border-black">
        <Text className="text-[#0A2640] font-medium">Explore page</Text>
        <ArrowRight
          className="ml-2 group-hover:translate-x-1 transition-transform"
          size={20}
          color="#0A2640"
        />
      </div>
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
        <Heading as="p" size="sm" className="text-center text-[#777777] mb-4">
          Our Services
        </Heading>
        <Heading
          as="h1"
          size="xl"
          className="text-center text-[#000000] mb-16"
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
