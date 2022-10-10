import React from "react";
import { UilEye, UilDownloadAlt, UilThumbsUp } from "@iconscout/react-unicons";

export const Card = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-card hover:scale-105 cursor-pointer transition duration-200 ease-in-out">
      <a href={image.pageURL} target="_blank" rel="">
        <img
          src={image.webformatURL}
          alt=""
          className="w-full h-64 object-cover"
        />
      </a>
      <div className="px-6 py-4">
        <div className="font-bold text-background text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <div className="flex flex-row gap-x-4">
            <li>
              <UilEye className="inline-block mr-1 mb-1" />
              {image.views}
            </li>
            <li>
              <UilDownloadAlt className="inline-block mr-1 mb-1" />
              {image.downloads}
            </li>
            <li>
              <UilThumbsUp className="inline-block mr-1 mb-1" />
              {image.likes}
            </li>
          </div>
        </ul>
      </div>
      <div className="px-5 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-orange rounded-md px-3 py-1 text-sm font-semibold text-white mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
