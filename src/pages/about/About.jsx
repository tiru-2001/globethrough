import React from 'react';
const Aboutus = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full">
        <img
          src="/Background.png"
          alt="Header"
          className="w-full object-cover"
          style={{ height: '130px', maxHeight: '150px' }}
        />
      </div>

      <div className="flex-grow flex flex-col items-center mx-auto max-w-full px-4 sm:px-8 md:px-16 lg:px-28 py-8 md:py-16">
        <div className="text-center relative">
          <span className="block mb-10 sm:absolute sm:mb-0 sm:right-5 md:right-28">
            {/* <button className="border-4 border-teal-500 text-sm sm:text-lg rounded-2xl px-6 sm:px-8 py-1 sm:py-2 text-teal-500">
              Blog
            </button> */}
          </span>

          <span className="block text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 font-manrope text-gray-600 ">
            Our Story
          </span>

          <p className="leading-7 sm:leading-8 md:leading-10 sm:text-center md:text-justify m-5 mb-4 sm:mb-10 mt-10 sm:mt-20 font-manrope text-lg sm:text-2xl md:text-3xl font-thin text-gray-600">
            Globe Through is a cutting-edge ticket booking application created
            by Websort to revolutionize the way people book tickets for travel,
            events, and more. Designed with user convenience in mind, Globe
            Through simplifies the booking process and offers a seamless
            experience for users around the globe.
          </p>
          <p className="leading-7 sm:leading-8 md:leading-10 sm:text-center md:text-justify m-5 mb-4 sm:mb-10 mt-8 sm:mt-10 font-manrope text-lg sm:text-2xl md:text-3xl font-thin text-gray-600">
            With a commitment to enhancing the travel and event booking
            experience, Globe Through provides a platform that caters to diverse
            needs and preferences. Whether you’re planning your next adventure
            or organizing an important event, Globe Through ensures a
            straightforward and efficient booking process.
          </p>
          <p className="leading-7 sm:leading-8 md:leading-10 sm:text-center md:text-justify m-5 mb-4 sm:mb-10 mt-6 sm:mt-10 font-manrope text-lg sm:text-2xl md:text-3xl font-thin text-gray-600">
            Our application combines modern technology with a user-friendly
            interface to help you manage your bookings effortlessly. Globe
            Through aims to make every booking a hassle-free experience,
            providing users with the tools they need to easily plan and enjoy
            their journeys and events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
