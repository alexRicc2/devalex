"use client";

import React, { useState } from "react";
import { sendContactForm } from "@/lib/api/api";
import Link from "next/link";
import Message from "@/components/Icons/Message";
import Container from "../layout/Container";
import Github from "../Icons/Github";
import s from './contact.module.css'
import Email from "../Icons/Email";
import { ShareIcon } from "@heroicons/react/24/outline";
import Linkedin from "../Icons/Linkedin";
const initValues = { name: "", email: "", phone: "", comment: "" };
const initState = {
  values: initValues,
  isLoading: false,
  error: null,
  succes: "",
};
function Contact() {
  // for getting data from form tag
  const [state, setState] = useState(initState);
  const { values, isLoading, error, succes } = state;

  const handleChange = ({ target }: any) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  const onsubmit = async (e: any) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setState(initState);
      setState((prev) => ({
        ...prev,
        succes: "Thank you for submiting, I received your message",
      }));
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <Container>
      <section className="py-6 md:py-12">
        <h2 className="font-bold text-3xl md:text-5xl text-center">Let&apos;s work together</h2>

        <h3 className="mt-3 md:text-xl text-lg text-text opacity-80 text-center">
          I’m interested in freelance opportunities – if you have a request or
          question, don’t hesitate to use the form.
        </h3>
        <div >
          <div className="mt-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-y-8">
            <form
              className={`md:w-[26rem] flex flex-wrap gap-x-4 gap-y-2 ${s.form}`}
              onSubmit={(e) => onsubmit(e)}
            >
              <label htmlFor="name" className="block text-text">
                Name*
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                className="mt-1 py-2 px-3 w-full text-md text-text placeholder:text-darker-text rounded-lg bg-[#3D3D3D40] outline-none"
              />

              <label htmlFor="phone" className="block text-text">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                placeholder="Phone number"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                className="mt-1 py-2 px-3 w-full text-md text-text placeholder:text-darker-text rounded-lg bg-[#3D3D3D40] outline-none"
              />
              <label htmlFor="email" className="block text-text">
                Email*
              </label>
              <input
                id="email"
                type="text"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="mt-1 py-2 px-3 w-full text-md text-text placeholder:text-darker-text rounded-lg bg-[#3D3D3D40] outline-none"
              />
              <label htmlFor="comment" className="block text-text">
                Comment*
              </label>
              <textarea
                id="comment"
                placeholder="Comment"
                name="comment"
                rows={5}
                value={values.comment}
                onChange={handleChange}
                className="mt-1 py-2 px-3 w-full text-md text-text placeholder:text-darker-text rounded-lg bg-[#3D3D3D40] outline-none"
              />
              <span className="text-text">{succes}</span>
              <span className="text-text">{error}</span>
              <button

                className={`mt-2 w-full py-3 flex justify-center border relative min-h-[3.2rem] rounded-[5px] ${isLoading ? s.loading : undefined}`}
                type="submit"
              >
                <span>
                  Send
                </span>
              </button>
            </form>

            <div className="w-full md:w-[40%]">
              <Message className="hidden md:block max-w-full w-full" />

              <div className="mt-4 flex items-center justify-between sm:justify-center sm:gap-x-5">
                <button
                  className="flex items-center gap-1 sm:gap-2 social-svg lighter"
                  onClick={() => {
                    console.log("copied");
                  }}
                >
                  <span className="w-4 sm:w-6">
                    <Email className="fill-white"/>
                  </span>

                  <h4 className="text-[.8rem] lg:text-[.95rem] text-text">
                    <span>alex.65.santanna@gmail.com</span>
                  </h4>
                </button>

                <Link
                  href={""}
                  className="flex items-center gap-1 sm:gap-2 social-svg lighter"
                >
                  <span className="w-4 sm:w-6">
                    {/* <TelegramIcon /> */}
                    <ShareIcon className="fill-white"/>
                  </span>

                  <h4 className="text-[.8rem] lg:text-[.95rem] text-text">
                    AlexRicc2
                  </h4>
                </Link>
              </div>

              <div className="mt-2 flex items-center gap-1 justify-center sm:gap-3">

                <Link
                  href="/"
                  className="w-6 social-svg lighter"
                >
                  <Linkedin className="fill-white"/>
                </Link>
                <Link href="/" className="w-6 social-svg lighter">
                  <Github className="w-6 h-6 fill-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Container>
  );
}

export default Contact;
