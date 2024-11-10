'use client';

import {
  Box,
  Flex,
  Button,
  Stack,
  IconButton,
  useDisclosure,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface NavLinkProps {
  children?: string;
  href: string;
}

const NavLink = ({ children, href }: NavLinkProps) => (
  <Link href={href} passHref>
    <ChakraLink
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        color: 'mint.400',
      }}
      color="white"
    >
      {children}
    </ChakraLink>
  </Link>
);

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    // scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      as="nav"
      bg={{ 
        base: isOpen ? '#0A2640' : isScrolled ? '#0A2640' : 'transparent', 
        md: isScrolled ? '#0A2640' : 'transparent' 
      }}
      px={4}
      position="fixed" 
      w="full"
      zIndex={100}
      transition="all 0.3s ease-in-out"
      boxShadow={isScrolled ? 'md' : 'none'}
    >
      <Flex
        h={28}
        alignItems={'center'}
        justifyContent={'space-between'}
        maxW={'7xl'}
        mx={'auto'}
      >
        {/* Logo */}
        <Flex align={'center'}>
          <Link href="/" passHref>
            <ChakraLink
              display="flex"
              alignItems="center"
              _hover={{ textDecoration: 'none' }}
            >
              <Box position="relative" width="32px" height="32px" mr={2}>
                <Image
                  src="/LogoShape.png"
                  alt="Boldo Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </Box>
              <Box color="white" fontWeight="bold" fontSize="4xl">
                Boldo
              </Box>
            </ChakraLink>
          </Link>
        </Flex>

        {/* Desktop Navigation */}
        <Flex display={{ base: 'none', md: 'flex' }} align={'center'}>
          <Stack direction={'row'} spacing={8} pr={10}>
            <NavLink href="/product">Product</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/about">About</NavLink>
          </Stack>
          <Button
            as={Link}
            href="/login"
            bg="white"
            color="#0A2640"
            px={6}
            rounded="full"
            _hover={{
              bg: 'whiteAlpha.900',
            }}
          >
            Log In
          </Button>
        </Flex>

        {/* Mobile Navigation Button */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant={'ghost'}
          color={'white'}
          aria-label={'Toggle Navigation'}
          _hover={{
            bg: 'whiteAlpha.200',
          }}
        />
      </Flex>

      {/* Mobile Menu */}
      <Box display={{ base: isOpen ? 'block' : 'none', md: 'none' }} pb={4}>
        <Stack as={'nav'} spacing={4}>
          <NavLink href="/product">Product</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/about">About</NavLink>
          <Button
            as={Link}
            href="/login"
            bg="white"
            color="#0A2640"
            w="full"
            className='md:w-[128px] '
            rounded="full"
            _hover={{
              bg: 'whiteAlpha.900',
            }}
          >
            Log In
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;