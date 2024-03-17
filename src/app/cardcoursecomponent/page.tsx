import React from 'react'
import { Image } from "@nextui-org/react";
export default function CardCourse(){
  return (
    <>
    <div className="couse-card border-2 min-w-sm bg-base-100 rounded-md flex shadow-lg items-center">
            <div className=" ml-6 w-32">
                <a href="#" className="object-cover ">
                <Image
              
              alt="NextUI hero Image"
              src="https://api.istad.co/media/image/835a7298-dbab-448d-8229-ee8a555c4846.png"
            />
                    {/* <Image className="" src="https://api.istad.co/media/image/835a7298-dbab-448d-8229-ee8a555c4846.png" alt=""> */}
                </a>
            </div>
            <div className="card-body w-full">
                <div className="info">
                    <div className="title-hour flex justify-between pt-6 px-6">
                        <h3 className="title uppercase">
                            ios development
                        </h3>
                        <span className="hour flex gap-3">
                            <svg className="w-6 h-6 text-gray-600 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                    clip-rule="evenodd" />
                            </svg>
                            80 hours
                        </span>
                    </div>
                    <div className="sholor-level flex justify-between px-6 mt-2">
                        <div>
                            <span className="bg-red-600 px-4 text-white rounded-lg pb-1">scholarship 20%</span>
                        </div>
                        <div className="flex gap-4">
                            <svg className="w-6 h-6 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z" clip-rule="evenodd"/>
                              </svg>                      
                            Meduim
                        </div>
                    </div>
                </div>
                <p className="description px-6 pt-4 pb-6">
                    iOS Development is designed for students to get started with design iOS App Concepts.
                </p>
            </div>
        </div> 
    </>
  )
}

