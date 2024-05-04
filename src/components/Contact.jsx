"use client";
import React, { useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import axios from "axios";
import Link from "next/link";
// import Image from "next/image";
import toast from "react-hot-toast";
import { Button, Input, Textarea } from "@nextui-org/react";

const notify = (msg) => toast(msg);

const Contact = () => {
  const initial = {
    email: "",
    name: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState(initial);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/send`, formData)
      .then((res) => {
        notify(res?.data, "success");
        setFormData(initial);
      })
      .catch((err) => {
        console.log(err);
        notify(JSON.stringify(err.response.data), "error");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <form className="w-full h-full flex flex-col gap-8" onSubmit={handleSubmit}>
        {" "}
        <Input
          size="lg"
          isRequired
          type="text"
          label="Name"
          value={formData.name}
          placeholder="eg:John Doe"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          size="lg"
          isRequired
          type="text"
          label="Email or Phone"
          value={formData.email}
          placeholder="name@example.com or eg: 024 ..."
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Input
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          type="text"
          label="Subject"
          size="lg"
          isRequired
          value={formData.subject}
          placeholder="eg. say Hello"
        />
        <Textarea
          size="lg"
          label="Message"
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          value={formData.message}
          placeholder="eg. Let's talk about."
        />
        <Button
          type="submit"
          isLoading={isLoading}
          color="primary"
          variant="ghost"
          size="lg"
        >
          {!isLoading ? "Send Message" : "Sending..."}
        </Button>
      </form>
    </div>
  );
};

export default Contact;
