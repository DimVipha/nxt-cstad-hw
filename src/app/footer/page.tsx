import React from "react";
import { Image } from "@nextui-org/react";
export default function FooterComponent() {
  return (
    <>
      <footer className="bg-blue-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="index.tsx" className="flex items-center">
                <Image
                  className="h-24"
                  alt="logo"
                  src="https://istad.co/resources/img/CSTAD_120.png"
                />
                {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" /> */}
              </a>
              <p className="self-center mt-4 text-white font-semibold whitespace-nowrap dark:text-white">
                Start your IT career with CSTAD
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Learn more
                </h2>
                <ul className="text-white dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Course
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      New IT
                    </a>
                  </li>
                  <li className="my-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Job Opportunity
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Privatcy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Contact us
                </h2>
                <ul className="text-white dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="tel:+855 95-990-910" className="hover:underline ">
                      (+855) 95-990-910
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="tel:(+855) 93-990-910" className="hover:underline">
                      (+855) 93-990-910
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://t.me/istadkh" className="hover:underline">
                      <span className="flex gap-2">
                        <svg
                          className="w-8 h-8 text-wite dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                          />
                        </svg>
                        
                        Telegram
                      </span>
                      
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCUaq9S8Gu4zteE-x77JT-kA"
                  target="_blank" className="hover:underline">
                        <span className="flex gap-2">
                        <svg
                          className="w-6 h-6 text-white dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        You Tube
                        </span>
                        
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Follow Us
                </h2>
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fistad.co&amp;tabs&amp;width=255&amp;height=130&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=536767018150991"
                  width="255"
                  height="130"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
                {/* <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="text-center">
            <span className="text-sm text-white text-center ">
            © 2024 Center of Science and Technology Advanced Development | All Rights Reserved
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
