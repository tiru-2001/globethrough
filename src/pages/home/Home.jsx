import { useState } from 'react';
import { v4 } from 'uuid';
import { IoIosSearch } from 'react-icons/io';
import { FaTicketSimple } from 'react-icons/fa6';
import { FaLocationDot } from 'react-icons/fa6';
import { FaWallet } from 'react-icons/fa';
const Home = () => {
  const [index, setIndex] = useState(1);
  const features = [
    {
      id: v4(),
      icon: <IoIosSearch />,
      title: 'Find your Destination',
      desc: 'Discover new and exciting places to explore. Let us guide you to your next adventure with ease.',
      img: '/findestination.jpg',
    },
    {
      id: v4(),
      icon: <FaTicketSimple />,
      title: 'Book a Ticket',
      desc: 'Secure your journey in just a few clicks. Booking your ticket has never been this fast and simple.',
      img: '/booking.jpg',
    },
    {
      id: v4(),
      icon: <FaWallet />,
      title: 'Make a payment',
      desc: 'Enjoy a seamless and secure payment process. Choose from various payment methods for your convenience',
      img: '/payment.jpg',
    },
    {
      id: v4(),
      icon: <FaLocationDot />,
      title: 'Explore destination',
      desc: 'Dive into the wonders of your chosen destination. Uncover hidden gems and create unforgettable memories.',
      img: 'https://images.unsplash.com/photo-1706897516719-f25079bf55f2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const setIndexFun = (ind) => {
    setIndex(ind);
  };
  return (
    <section className="home">
      <section className=" border-gray-600 h-[100vh]">
        <section className="flex items-center justify-center px-4  h-full w-full relative ">
          <img
            className="h-full w-full object-cover block"
            src="/bi3.jpg"
            alt="banner_image"
          />
          <section className="absolute  backdrop-blur-[2px] bg-black bg-opacity-50  top-0 bottom-0 left-0 right-0 flex flex-col items-start justify-center gap-8 ">
            <section className=" mt-5 xs:mt-0 py-4 lg:py-0 px-3 xs:px-0 flex flex-col gap-5 sm:gap-8 w-full xs:w-4/5 mx-auto my-0">
              <h1 className=" w-full sm:w-[90%] xl:w-4/5 heading_font  text-white ">
                Explore the World, One Journey at a Time with{' '}
                <span className=" bg-span_text bg-clip-text ">
                  {''}
                  Globethrough
                </span>
              </h1>
              <p className="text-[1.5rem] md:text-[2rem] w-full sm:w-[90%] md:w-3/4 xl:w-2/4 text-gray-300">
                Globethrough invites you to experience the world’s beauty, one
                journey at a time, crafted for the curious traveler
              </p>
              <a
                href="#contact"
                className="p-3  text-center rounded backdrop-blur-sm sm:w-[100px]  text-lg border-[0.5px] border-white bg-zinc-500 text-white bg-opacity-40"
              >
                join
              </a>
            </section>
          </section>
        </section>
      </section>
      <section className="flex flex-col items-center pt-9  gap-8">
        <section>
          <h2>Features</h2>
        </section>
        <section className="grid w-[95%]  md:w-4/5 gap-6 sm:auto-rows-[minmax(400px,auto)] grid-cols-1 sm:grid-cols-3 ">
          <section className="shadow-md hover:scale-90 transition py-4 bg-features flex items-center justify-center px-2 md:px-4 gap-4 flex-col rounded-md overflow-hidden  sm:col-span-2 ">
            <h3 className="text-[1.4rem] sm:text-[1.8rem]  md:text-[2.2rem] text-center text-white font-bold">
              Personalized Recommendations
            </h3>
            <p className="text-lg md:text-[1.3rem] text-zinc-300 font-medium text-center">
              Tailored suggestions based on user preferences and past bookings
              to enhance the user experience
            </p>
          </section>
          <section className=" flex items-center hover:scale-90 transition  py-4 bg-features justify-center px-2 md:px-4 gap-4 flex-col shadow-md rounded-md overflow-hidden ">
            <h3 className="text-[1.4rem] sm:text-[1.8rem]  md:text-[2.2rem] text-center text-white font-bold">
              Multi-Language and Currency Support
            </h3>
            <p className="text-lg md:text-[1.3rem] text-zinc-300 font-medium text-center">
              Options for different languages and currencies to cater to a
              global audience.
            </p>
          </section>
          <section className=" flex items-center hover:scale-90 transition  py-4 bg-features justify-center px-2 md:px-4 gap-4 flex-col shadow-md rounded-md overflow-hidden  ">
            <h3 className="text-[1.4rem] sm:text-[1.8rem]  md:text-[2.2rem] text-center text-white font-bold">
              Loyalty and Rewards Programs
            </h3>
            <p className="text-lg md:text-[1.3rem] text-zinc-300 font-medium text-center">
              Features to earn points or rewards for frequent bookings, offering
              added value to loyal customers.
            </p>
          </section>
          <section className=" shadow-md flex hover:scale-90 transition  py-4 bg-features items-center justify-center px-2 md:px-4 gap-4 flex-col rounded-md overflow-hidden  sm:col-span-2 ">
            <h3 className="text-[1.4rem] sm:text-[1.8rem]  md:text-[2.2rem] text-center text-white font-bold">
              24-Hour Clock Display
            </h3>
            <p className="text-lg md:text-[1.3rem] text-zinc-300 font-medium text-center">
              A 24-hour clock format is used throughout the app for clear and
              consistent booking times across time zones, ensuring precise
              scheduling.
            </p>
          </section>
        </section>
      </section>
      <section className=" pt-9   flex items-center flex-col gap-8">
        <h2>One click for you</h2>
        <section className=" flex-col flex sm:flex-row  border-gray-400  min-h-[600px] px-2 flex-1 md:w-[90%] xl:w-[60%] gap-[50px]">
          <section className="flex-1 shadow-features_image overflow-hidden  rounded-xl ">
            <section className="h-full  w-full ">
              <img
                src={features[index].img}
                className="h-[300px] object-cover sm:h-full w-full shadow-2xl "
                alt="image"
              />
            </section>
          </section>
          <section className="flex-1 flex flex-col md:gap-[30px] xl:gap-[50px] ">
            {features.map((item, ind) => (
              <section
                key={item.id}
                onClick={() => {
                  setIndexFun(ind);
                }}
                className={`p-2 rounded-xl  items-center gap-2 sm:gap-3 xl:gap-5 flex flex-1 cursor-pointer  font-semibold ${
                  index == ind && 'shadow-features '
                }`}
              >
                <section className="flex-2">
                  <h3 className=" text-2xl sm:text-[2rem] text-theme_color">
                    {item.icon}
                  </h3>
                </section>
                <section className="flex-1 flex flex-col gap-1">
                  <h3 className="  text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-md sm:text-lg">{item.desc}</p>
                </section>
              </section>
            ))}
          </section>
        </section>
      </section>
      <section className="flex  py-9 flex-col gap-8 items-center">
        <section className="text-center p-2 ">
          <h2>Team Up</h2>
          <p className="text-xl text-zinc-600">
            Travel Agencies: Get in Touch to Explore Collaboration Opportunities
            with Globe Through
          </p>
        </section>
        <section className=" w-[95%] md:w-4/5  flex  justify-center flex-1 ">
          <form
            action=""
            id="contact"
            className=" gap-4 sm:gap-6 md:gap-9  flex flex-col   w-full h-[60%] "
          >
            <section className="flex text-xl md:text-2xl flex-col gap-2">
              <label htmlFor="" className="font-semibold text-theme_color">
                Name:
              </label>
              <input
                className=" rounded-md outline-none border-2 py-3 md:py-5 px-2 "
                type="text"
                placeholder="Name"
              />
            </section>
            <section className="flex flex-col text-xl md:text-2xl gap-3">
              <label htmlFor="" className="font-semibold text-theme_color">
                Email:
              </label>
              <input
                className="rounded-md outline-none border-2  py-3 md:py-5 px-2 "
                type="email"
                placeholder="Email"
              />
            </section>
            <section className="flex text-xl md:text-2xl flex-col gap-3">
              <label htmlFor="" className="font-semibold text-theme_color">
                Phone:
              </label>
              <input
                className="rounded-md outline-none border-2 py-3 md:py-5 px-2 "
                type="text"
                placeholder="Phone"
              />
            </section>
            <button className="py-4 px-8 text-xl bg-theme_color text-white">
              Submit
            </button>
          </form>
        </section>
      </section>
    </section>
  );
};

export default Home;
