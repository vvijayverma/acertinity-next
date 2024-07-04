import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        <div className="">
          <h3>About Us</h3>
          <p>Musica School is a premier instituion dedicated to teaching the art and science of
            music. We nurture talent from the ground up, fostering a vibrant community of musicians.
          </p>
        </div>
        <div className="">
          <h3>Quick Links</h3>
          <div className="flex flex-col">
          <Link href={``} className="hover:text-blue-500">Home</Link>
          <Link href="" className="hover:text-blue-500">About</Link>
          <Link href="" className="hover:text-blue-500">Course</Link>
          <Link href="" className="hover:text-blue-500">Contact</Link>
          </div>
        </div>
        <div className="">
          <h3>Follow Us</h3>
          <div className="flex flex-col">
          <Link href={``} className="hover:text-blue-500">Facebook</Link>
          <Link href="" className="hover:text-blue-500">Twitter</Link>
          <Link href="" className="hover:text-blue-500">Instagram</Link>
          </div>
        </div>
        <div className="">
          <h3>Contact Us</h3>
          <p>New Delhi, India</p>
          <p>Delhi 10001</p>
          <p>Email: vvijayverma91@gmail.com</p>
          <p>Mobile: 9876702269</p>
        </div>
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;
