import React, { useState } from "react";
import axios, { Axios } from "axios";
import Canvas from "./Canvas";


let quote;
let author ;

export default function text() {


  
  const [result, setResult] = useState("");

const draw = (context) => {
  const img = new Image();
  img.src = result;
  img.onload = () => {
    context.drawImage(img, 0, 0);
    context.font = "70px Arial";
    context.fillText(quote, 400, 540);
    context.fillText(author, 400, 640);

  };


}; 

  async function DataFn(value) {


    const client = axios.create({
      headers: {
        Authorization: "Bearer " + "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",
      },
    });

    const params = {  
      prompt: value,
      n: 2,
      size: "1024x1024",
    };
    
client
      .post("https://api.openai.com/v1/images/generations", params)
      .then((Response) => {
        console.log(Response.data.data[0]);
      setResult(Response.data.data[0].url);

      }
      )
      .catch((err) => {
        console.log(err);
      });

  }

  function handleClick(event) {
    let value = document.getElementById("description").value;
    console.log(value);

    quote = document.getElementById("quote").value;
    console.log(quote);

    author = document.getElementById("author").value;
    console.log(author);






  DataFn(value);




  }



  return (
    <>
      <form className="max-w-2xl mx-auto" method="post">
        <div>
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            <b>Author</b>
          </label>
          <input
          id="author"
            placeholder="Write author's name"
            type="text"
            className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            <b>Quote</b>
          </label>
          <input
            id="quote"
            type="text"
            placeholder="Write your quote"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
           <b>Description of background image</b>
          </label>
          <input
            id="description"
            // onChange={handleChange}
            type="text"
            placeholder="Describe how background image of qoute should looks like"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleClick}
            className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Generate
          </button>
        </div>
      </form>
<div className="mt-8 flex justify-center items-center">

  {result.length > 0 ? (
    <Canvas draw={draw} height={1080} width={1080} />
  ) : (
    <></>
  )}
</div>
    </>
  );
}

