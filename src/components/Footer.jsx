import React from "react";

function Footer() {
  return (
    <div className="flex w-full h-135 justify-center items-center mt-12   relative flex-col md:flex-row">
      <div className="relative ">
        <iframe className="w-70 h-60"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387196.0767083608!2d-74.30915277037441!3d40.6966726870191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1739520565200!5m2!1sen!2sin"
          width="550"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute top-2 -right-11 -rotate-90 text-3xl font-cedarville ">
          Contacts
        </div>
      </div>

      <div className="w-[80px] h-[2px] bg-black mx-10"></div>

      <div>
        <h1 className="font-bold text-3xl mb-5 text-nowrap text-center">Our address</h1>
        <ul className="text-lg font-light space-y-2 text-nowrap text-center md:text-left">
          <li>110 St-Cathedral Pkwy Station</li>
          <li>4310 94th St, Flushing</li>
          <li>94-54 Corona Ave., Elmhurst</li>
          <li>5627 Van Doren St, Queens</li>
        </ul>
      </div>

      <div className="w-full absolute bottom-0 flex justify-center items-center font-light">
        Built with ❤️ by - Debraj Sarkar
      </div>
    </div>
  );
}

export default Footer;
