"use server";

import React from "react";  
import { getErrorMessage } from "@/lib/utils";
import { Resend } from "resend";
import ContactForm from "@/email/contactForm";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");
  console.log(email,message );

  if (
    !email ||
    !message ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return { error: "Missing email or message" };
  }

  try{
    resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: "lubos.jurca@gmail.com",
      subject: "Your Portfolio Site",
      reply_to: email,
      react: React.createElement(ContactForm, { email, message }),
    })
    ;
  } catch (error: unknown) {
    return { error: getErrorMessage(error), };
  }

  
};
