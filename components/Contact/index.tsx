"use client";

import React, { useState } from "react";
import { sendContactForm } from "@/lib/api/api";
import Link from "next/link";
import Message from "@/components/Icons/Message";
import Container from "../layout/Container";
import Github from "../Icons/Github";

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
      <section>
        <h2 className="font-bold text-3xl md:text-5xl text-center">Let&apos;s work together</h2>

        <h3 className="mt-3 md:text-xl text-lg text-text opacity-80 text-center">
          I’m interested in freelance opportunities – if you have a request or
          question, don’t hesitate to use the form.
        </h3>
        <div >
          <div className="mt-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-y-8">
            <form
              className="md:w-[26rem] flex flex-wrap gap-x-4 gap-y-2"
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
                className="mt-2 w-full py-3 flex justify-center border"
                type="submit"
              >
                Send
              </button>
            </form>

            <div className="w-full md:w-[40%]">
              <Message className="max-w-full w-full" />

              <div className="mt-4 flex items-center justify-between sm:justify-center sm:gap-x-5">
                <button
                  className="flex items-center gap-1 sm:gap-2 social-svg lighter"
                  onClick={() => {
                    console.log("copied");
                  }}
                >
                  <span className="w-4 sm:w-5">
                    {/* <EmailIcon /> */}
                  </span>

                  <h4 className="text-[.8rem] lg:text-[.95rem] text-text">
                    alex.65.santanna@gmail.com
                  </h4>
                </button>

                <Link
                  href={""}
                  className="flex items-center gap-1 sm:gap-2 social-svg lighter"
                >
                  <span className="w-4 sm:w-5">
                    {/* <TelegramIcon /> */}
                  </span>

                  <h4 className="text-[.8rem] lg:text-[.95rem] text-text">
                    AlexRicc2
                  </h4>
                </Link>
              </div>

              <div className="mt-2 flex items-center justify-between sm:justify-center sm:gap-x-6">
                <span className="inline-block h-5 w-1 bg-brand rounded-lg" />

                <Link
                  href="/"
                  className="w-5 social-svg lighter"
                >
                  {/* <LinkedInIcon /> */}
                </Link>
                <Link href="/" className="w-5 social-svg lighter">
                  {/* <GithubIcon /> */}
                  <Github className="w-5 h-5 fill-white"/>
                </Link>

                <Link
                  href="/"
                  className="w-5 social-svg lighter"
                >
                  {/* <InstagramIcon /> */}
                </Link>

                <Link
                  href="/"
                  className="w-5 social-svg lighter"
                >
                  {/* <StackoverflowIcon /> */}
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
