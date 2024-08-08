import React from "react";
import banner_book1 from "../assets/images/banner_book1.jpg";

const Banner = () => {
  return (
    <>
      <section className="p-4 px-4 mt-2 md:mt-18 md:px-24">
        <div className="container flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 space-y-7 flex flex-col justify-center order-2 md:order-1">
            <div>
              <h1 className="text-4xl">
                Hello, Welcome here to learn something
                <span className="text-pink-500"> new everyday!!!</span>
              </h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Exercitationem vel beatae ut blanditiis architecto laborum eum
                necessitatibus ratione esse, ab eius nemo voluptatem quas quae
                tempore.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <input
                type="email"
                name="subscribe"
                id="subscribe"
                placeholder="✉️ Subscribe For Free!"
                className="border-2 border-black rounded outline-none h-10 w-full px-2"
              />
              <button className="btn btn-secondary bg-pink-500 rounded-lg px-2 h-10">
                Subscribe
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img src={banner_book1} alt="banner image" className="w-92 h-92" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
