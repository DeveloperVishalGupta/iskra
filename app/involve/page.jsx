'use client';
import { Input, Textarea } from '@heroui/input';
import { title } from '../../components/primitives';
import { Select, SelectItem } from '@heroui/select';
import { Button } from '@heroui/button';

import { useState } from 'react';
import { useDisclosure } from '@heroui/modal';

import { FileUpload } from '../../components/ui/file-upload';

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

export default function InvolvePage() {
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
          <h1 className={title({})}>Involment</h1>
        </div>
      </div>

      <div className="w-3/5">
        <div className="shadow-lg border-2 border-slate-200 bg-white rounded-xl row-span-2 w-full flex flex-col gap-4 px-4 sm:px-10 py-8">
          <Input
            name="name"
            label="Name"
            type="text"
            variant="faded"
            placeholder="Enter your name"
            isRequired
            isClearable
            value={formData.name}
            onChange={handleChange}
          />

          <Input
            name="email"
            label="Email Id"
            placeholder="Enter your email id"
            variant="faded"
            type="email"
            isRequired
            isClearable
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            name="mobile"
            label="Contact Number"
            placeholder="Enter your Mobile Number"
            variant="faded"
            type="tel"
            isRequired
            isClearable
            value={formData.mobile}
            onChange={handleChange}
          />
          <Select
            name="possition"
            label="Possition"
            placeholder="Which Position are you interested in?"
            variant="faded"
            isRequired
            selectedKeys={[formData.preference]}
            onSelectionChange={(keys) => handleSelectChange([...keys][0])}
          >
            {involmentPossion.map((item) => (
              <SelectItem key={item.key}>{item.label}</SelectItem>
            ))}
          </Select>

          <Textarea
            name="description"
            label="Anything you would like to tell"
            placeholder="Enter what you want"
            variant="faded"
            minRows={4}
            isRequired
            isClearable
            value={formData.description}
            onChange={handleChange}
          />

          <div className="w-full max-w-4xl mx-auto  border-2 border-dashed bg-white border-slate-300 rounded-lg">
            <FileUpload onChange={handleFileUpload} />
          </div>

          <Button
            type="button"
            onPress={submitQueryForm}
            color="danger"
            variant="bordered"
            isLoading={waitingForResponse}
          >
            Send message
          </Button>
        </div>
      </div>
    </div>
  );
}
