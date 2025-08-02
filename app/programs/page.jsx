'use client';
import { Input, Textarea } from '@heroui/input';
import { title } from '../../components/primitives';
import { Select, SelectItem } from '@heroui/select';
import { Button } from '@heroui/button';
import Discribe from '../../components/discribe';
import GetInTouch from '../../components/GetInTouch';
import { Card, CardBody } from '@heroui/card';
import GoogleMap from '../../components/GoogleMap';
import { contactNumbers, gallaryImages, partenrs } from '../../constant';
import { WhatsappIcon } from '../../assets/brand-Icons';
import { PhoneIcon } from '../../assets/icons/icons';
import Link from 'next/link';
import { useState } from 'react';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@heroui/modal';
import CustomButton from '../../components/Button';
import { CaseStudies } from '../../assets';
import PaymentComponent from '../../components/donate';
import Gallery from '../../components/gallery';
import UnderDev from '../../components/UnderDev';
import { FileUpload } from '../../components/ui/file-upload';
// import Button as CustomButton from '../../components/Button';
// import

export const preferences = [
  { key: 'inquiry', label: 'Inquiry' },
  { key: 'request', label: 'Request' },
  { key: 'support for any services', label: 'Support for any services' },
  { key: 'revenue shareing plan', label: 'Revenue shareing plan' },
];
export const involmentPossion = [
  { key: 'possition-a', label: 'Possition A' },
  { key: 'possition-a', label: 'Possition AB' },
  { key: 'possition-a', label: 'Possition AV' },
  { key: 'possition-a', label: 'Possition AD' },
  { key: 'possition-a', label: 'Possition AF' },
  { key: 'possition-a', label: 'Possition AG' },
  { key: 'possition-a', label: 'Possition AE' },
];

export default function OurProjectPage() {
    const [files, setFiles] = useState([]);
  const handleFileUpload = (files) => {
    setFiles(files);
    console.log(files);
  };
  const {
    isOpen: isErrorOpen,
    onOpen: onErrorOpen,
    onOpenChange: onErrorOpenChange,
  } = useDisclosure();

  const {
    isOpen: isSuccessOpen,
    onOpen: onSuccessOpen,
    onOpenChange: onSuccessOpenChange,
  } = useDisclosure();

  const [missingFields, setMissingFields] = useState([]);
  const [waitingForResponse, setWaitingForResponse] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    preference: '',
    mobile: '',
    email: '',
    description: '',
  });
  const destinationLatitude = 26.872576;
  const destinationLongitude = 80.937831;
  const handleShowRoute = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const origin = `${latitude},${longitude}`;
          const destination = `${destinationLatitude},${destinationLongitude}`;
          const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;
          window.open(mapsUrl, '_blank');
        },
        (error) => {
          alert(
            'Error fetching location. Please allow location access in your browser.'
          );
          console.error(error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (key) => {
    setFormData((prev) => ({ ...prev, preference: key }));
  };

  const submitQueryForm = async () => {
    const requiredFields = [
      'name',
      'preference',
      'mobile',
      'email',
      'description',
    ];
    const emptyFields = requiredFields.filter((field) => !formData[field]);

    if (emptyFields.length > 0) {
      setMissingFields(emptyFields);
      onErrorOpen();
      return;
    }
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_SHEETDB_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({ data: formData }), // Important: SheetDB expects { data: {...} }
      });
      setWaitingForResponse(true);

      const result = await response.json();
      if (!result.error) {
        onSuccessOpen();
        setFormData({
          name: '',
          preference: '',
          mobile: '',
          email: '',
          description: '',
        });
        setWaitingForResponse(false);
      }
    } catch (error) {
      console.error('Error while submitting form:', error);
    }
  };

  return (
    <div className="flex flex-col w-full items-center gap-y-10  overflow-hidden ">
      <div className="w-4/5 ">
        <div className=" mb-8 flex justify-center text-center md:text-start">
          <h1 className={title({})}>Programs</h1>
        </div>
        <UnderDev section={'Programs'} />
      </div>
     
    </div>
  );
}
