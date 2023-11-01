import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import { motion } from "framer-motion";

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
      <div className="flex absolute top-24 gap-4">
        <Image
          src="https://s1.ax1x.com/2023/01/01/pSCLe1S.png"
          width={32}
          height={32}
          alt="Contact"
          className="inline-flex h-8"
        />
        <h3 className="uppercase tracking-[15px] text-gray-400 text-2xl font-semibold">
          Contact
        </h3>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 70, delay: 0.5 }}
        className="flex items-center flex-col scale-90 md:space-x-20 md:flex-row md:scale-100"
      >
        <div className="flex flex-col space-y-6  ">
          <h4 className="text-4xl font-semibold text-center decoration-[#F7AB0A] underline">
            Let&#39;s Connect.
          </h4>

          <div className="flex items-center space-x-5 ">
            <MapPinIcon className="h-7 w-7 animate-bounce" />
            <p className="text-2xl">Los Angeles, CA</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto justify-center pt-5 md:pt-0"
        >
          <div className="md:flex md:space-x-2 space-y-2 md:space-y-0">
            <input
              {...register("name")}
              className="contactInput block"
              placeholder="Name"
              type="text"
            />
            <input
              {...register("email")}
              className="contactInput block"
              placeholder="Email"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            placeholder="Subject"
            type="text"
          />
          <textarea
            {...register("message")}
            className="contactInput md:h-40"
            placeholder="Message"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-4 px-10 rounded-lg text-black font-bold text-lg"
          >
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
