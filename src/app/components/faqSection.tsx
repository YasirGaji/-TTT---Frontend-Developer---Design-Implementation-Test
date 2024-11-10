import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
} from '@chakra-ui/react';

const FaqSection = () => {
  const faqData = [
    {
      question: 'We connect our customers with the best?',
      answer:
        'Yes, we connect our customers with industry-leading partners to help them achieve their goals.',
    },
    {
      question: 'Android research & development rockstar?',
      answer:
        'Our team includes experts in Android development with a focus on innovation and user experience.',
    },
  ];

  return (
    <Box py={{ base: 10, md: 20 }} bg="white">
      <Container maxW="7xl">
        <Box mb={{ base: 8, md: 12 }} overflow="hidden" rounded="lg">
          <Image
            src="/faq.png"
            alt="Office environment with team working"
            objectFit="cover"
            width="100%"
            height={{ base: '200px', md: '400px' }}
            rounded="lg"
          />
        </Box>

        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="start"
          justify="space-between"
        >
          <Box flex="1" pr={{ md: 8 }} mb={{ base: 8, md: 0 }}>
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl' }}
              mb="4"
              color="#000000"
            >
              We connect our customers <br className="hidden md:block" /> with
              the best, and help them <br className="hidden md:block" /> keep
              up-and stay open.
            </Heading>
          </Box>

          <Box flex="1">
            <VStack align="start" spacing={4} width="100%">
              <Accordion allowToggle width="100%">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} border="none">
                    <Text>
                      <AccordionButton
                        px={0}
                        _hover={{ bg: 'none' }}
                        color="#000000"
                      >
                        <Box flex="1" textAlign="left">
                          {faq.question}
                        </Box>
                        <Box
                          as="span"
                          width="24px"
                          height="24px"
                          bg="#0A2640"
                          rounded="full"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <AccordionIcon color="white" />
                        </Box>
                      </AccordionButton>
                    </Text>
                    <AccordionPanel pb={4} pl={0} color="#0A2640">
                      {faq.answer}
                    </AccordionPanel>
                    <Divider borderColor="gray.300" />
                  </AccordionItem>
                ))}
              </Accordion>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FaqSection;
