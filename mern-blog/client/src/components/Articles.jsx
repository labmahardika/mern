import React from "react";
import { Link } from "react-router-dom";

const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((articles, index) => (
        <div key={index} className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
            <Link to={`/Article/${articles.name}`}>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={articles.thumbnail}
                alt="blog"
              />
            </Link>
            <div className="p-6">
              <Link key={index} to={`/Article/${articles.name}`}>
                <h3 className="font-bold">{articles.title}</h3>
              </Link>
              <p className="leading-relaxed mb-3">
                {articles.content[0].substring(0, 120) + "..."}
              </p>
              <div className="flex items-center flex-wrap ">
                <Link
                  to={`/Article/${articles.name}`}
                  className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm p-1 px-3 bg-gray-200 rounded">
                  {articles.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Articles;
