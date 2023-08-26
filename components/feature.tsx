import Image from "next/image";
import React from "react";

type Props = {};

const Feature = (props: Props) => {
  return (
    <section id="service">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Our Features</h1>
            {/* <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p> */}
          </div>

          {/* Items */}
          <div className="grid grid-flow-col gap-2">
            {/* 1st item */}

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Hands-On Learning:
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Our training programs emphasize practical learning,
                  encouraging participants to work on projects that mirror
                  real-world scenarios. This approach fosters creativity,
                  problem-solving skills, and a deeper understanding of the
                  subject matter.
                </p>
              </div>
            </div>

            {/* 2nd item */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Collaborative Learning Environment:
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  We facilitate a collaborative learning environment where
                  participants can interact with experts and peers, share ideas,
                  and work together on projects. This simulates industry
                  dynamics and prepares them for teamwork in their future
                  careers.
                </p>
              </div>
            </div>
            {/* 3rd item */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Empowering the Innovators of Tomorrow:
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Our commitment to education is driven by a passion to empower
                  individuals with the knowledge and skills needed to drive
                  innovation forward. By bridging the gap between theoretical
                  learning and practical application, we aim to produce
                  well-rounded professionals who can contribute effectively to
                  the rapidly evolving tech landscape.
                </p>
              </div>
            </div>
            {/* Fourth Item */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
