
import { link as linkStyles } from '@heroui/theme';
import NextLink from 'next/link';
import clsx from 'clsx';
import { siteConfig } from '../config/site';
import { useEffect, useState } from 'react';
import { headings } from '../constant';
import Image from 'next/image';
import Iskra from '../assets/images/logos/Iskra.jpg';
import CustomButton from './Button';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pageRoutes = siteConfig.pageRoutes;
  const [companyLinks, setCompanyLinks] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState('');
  const currentPage = usePathname();

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      setQuery(value);
      const suggestions = headings.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );

      setFiltered(suggestions);
    } else {
      setQuery(value);
      setFiltered([]);
    }
  };

  const handleSelect = (item) => {
    router.push(`${item.page}#${item.id}`);
  };

  useEffect(() => {
    if (pageRoutes.length > 0) {
      setCompanyLinks(pageRoutes.filter((item) => item.type === 1));
    }
  }, [pageRoutes]);

  return (
    <>
      <div className="navbar grid grid-cols-12 gap-6 items-center py-1">
        <div className="col-span-2 ">
          <NextLink className="" href="/">
            <Image
              src={Iskra}
              alt="MTrax Digital Media"
              about="this is a logo of Iskra"
              width={92}
              className="ms-auto"
            />
          </NextLink>
        </div>
        <div className="col-span-8 ">
          <ul className="hidden lg:flex justify-center gap-6  ml-2">
            {console.log(companyLinks, currentPage)}
            {companyLinks?.map((item) => (
              <li key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: 'foreground' }),
                    'data-[active=true]:text-primary  text-xl font-medium hover:text-primaryBlue data-[active=true]:font-medium capitalize'
                  )}
                  style={{ color: currentPage === item.href ? '#00adef' : '' }}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2">
          <NextLink className="" href="/donate">
            <CustomButton
              title={'Donate Now'}

              // radius="sm"
              // className="bg-primaryBlue text-white font-semibold text-lg"
            />
            {/* 
            </CustomButton> */}
          </NextLink>
        </div>
      </div>
      {/* <HeroUINavbar maxWidth="full" className="py-2 heroUiNavbar flex" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full 2222" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="ms-8"
            href="/"
          >
            <Image
              src={Iskra}
              alt="MTrax Digital Media"
              about="this is a logo of Iskra"
              width={92}
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <div >hello</div>

      <NavbarContent
        className="hidden bg-slate-200 w-full sm:flex basis-1/5 sm:basis-full col-span-2"
        // justify="center"
      >
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {companyLinks?.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary  text-lg data-[active=true]:font-medium capitalize'
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

       <NavbarContent className="basis-1/5 sm:basis-full 2222" justify="end">
        <NavbarItem as="li" className="gap-3 me-8">
          <NextLink
            className="ms-20"
            href="/"
          >
            <Button
              radius='sm'
              className='bg-primaryBlue text-white font-semibold text-lg'
            >
              Donate Now
            </Button>
            
          </NextLink>
        </NavbarItem>
      </NavbarContent>


      <NavbarMenu>
        
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {companyLinks.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={'foreground'}
                href={item.href}
                size="lg"
                className="text-xl"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar> */}
      {/* <Button  className='w-full bg-red-400'>Open Modal</Button> */}
      {/* <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={'2xl'}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody className='overflow-scroll'>
               <PaymentComponent/>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}
    </>
  );
};
