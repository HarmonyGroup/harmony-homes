import React from "react";
import Image1 from "@/assets/asset-2.jpg";
import { FiPhoneCall } from "react-icons/fi";

const Extras = () => {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-black p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
              Start your <span className="text-yellow-500">real estate</span> journey now and turn your vision into reality
              </h2>

              <p className="hidden text-white/90 sm:mt-4 sm:block">
              Finding the perfect place to call home has never been easier. Your dream property is within reach. Let&apos;s start your journey today—because your future begins at home.
              </p>

              {/* <div className="mt-4 md:mt-8">
                <a
                  href="#"
                  className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Speak to agents
                </a>
              </div> */}
              <p className="text-white/90 mt-4 sm:block">
                Call 08182012345</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt="Harmony Homes"
              src={"https://images.unsplash.com/photo-1724861927517-a1e02621edc7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />

            <img
              alt=""
              src="https://images.unsplash.com/photo-1724100688279-8d1a9985a0d1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extras;
