import React from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const data = [
    {
      img: "https://www.searchenginejournal.com/wp-content/uploads/2020/03/20-free-things-you-need-to-do-after-launching-your-ecommerce-website-5e664bcb60da5-1280x720.png",
      title: "Movie Recommendation",
      info: "Built using React, Redux, and an external API. Allows users to browse, search, and view detailed information about movies. Demonstrates state management and API integration",
      link: "https://github.com/krushnaKD/moviereactapp",
      live: "https://movieapp-eosin-nine.vercel.app/",
    },
    ,{
        img:"https://i.pinimg.com/736x/5b/a1/15/5ba1155adf4a20751df10f7b126d5303.jpg",
        title:"DevTinder",
        info:"DevTinder is made for the developer to connect with each others ",
        link:"https://github.com/krushnaKD/devtinder-web"
    } 
    // ,{
    //     img:"",
    //     title:"",
    //     info:"",
    //     link:""
    // }
  ];

  return (
    <div className=" w-[670px]">
      <h1 className="text-3xl text-white">Projects 😊</h1>
      <div className="flex gap-10">
      {data.map((d, i) => (
        
          <div className="w-60 h-[300px] border-2 border-gray-400 mt-10 rounded-lg text-white p-1 ">
          <div className="h-[40%] w-full rounded-md overflow-hidden p-1 ">
            <img className="mt-2" src={d.img} alt="thumbnail" />
          </div>
          <div className="mt-2 mb-2">
            <h1 className="flex gap-2">
              {d.title}{" "}
              <a target="_blank" href={d.link}>
                <span className="text-xl hover:scale-120">
                  <FaGithub />
                </span>
              </a>
            </h1>
          </div>
          <div className="">
            <p className="text-sm text-zinc-300 leading-4.5">{d.info}</p>
          </div>
        </div>
       
      ))}
         </div>
    </div>
  );
};

export default Projects;
