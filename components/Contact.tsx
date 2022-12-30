import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:pangmin@vt.edu?subject=[Portfolio Website] ${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl space-y-10 px-10 justify-center mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center decoration-[#F7AB0A] underline">
          Lets Connect.
        </h4>

        <div className="flex items-center space-x-5 ">
          <MapPinIcon className="h-7 w-7 animate-bounce" />
          <p className="text-2xl">Blacksburg, VA</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto justify-center"
      >
        <div className="md:flex md:space-x-2 space-y-2 md:space-y-0">
          <input
            {...register('name')}
            className="contactInput block"
            placeholder="Name"
            type="text"
          />
          <input
            {...register('email')}
            className="contactInput block"
            placeholder="Email"
            type="email"
          />
        </div>
        <input
          {...register('subject')}
          className="contactInput"
          placeholder="Subject"
          type="text"
        />
        <textarea
          {...register('message')}
          className="contactInput h-32 md:48"
          placeholder="Message"
        />
        <button
          type="submit"
          className="bg-[#F7AB0A] py-4 px-10 rounded-lg text-black font-bold text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
