import { GhIcon, MailIcon } from "./svg"; // Adjust the path to your icons file
import React from "react";
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-6">
          I’d love to hear from you! Reach out via email or connect with me on
          social media.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:your.email@example.com"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition flex items-center gap-2"
          >
            <MailIcon className="w-6 h-6" fill="white" />
            Email Me
          </a>
          <a
            href="https://github.com/Jeffreyxdev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition flex items-center gap-2"
          >
            <GhIcon className="w-6 h-6" fill="white" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;