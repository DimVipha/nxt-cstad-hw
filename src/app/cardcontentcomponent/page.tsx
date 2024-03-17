import React from "react";

export default function Carousel() {
  const items = [
    {
      src: "https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
      alt: "Pizza",
      content: {
        category: "blog",
        date: "12-Aug-2024",
        text: "If a dog chews shoes whose shoes does he choose?",
      },
    },
    // Add more items as needed
  ];

  return (
    <>
      <div className="carousel carousel-center rounded-box">
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <div className="card card-compact max-w-sm bg-base-100 shadow-xl">
              <figure>
                <img src={item.src} alt={item.alt} />
              </figure>
              <div className="card-body p-6 py-8">
                <div className="flex justify-between ">
                  <span className="blog flex gap-2">
                    <svg
                      className="h-4 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                    </svg>
                    {item.content.category}
                  </span>
                  <div className="date">
                    <p>{item.content.date}</p>
                  </div>
                </div>
                <p>{item.content.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
