import React, { useState } from "react";
import axios, { Axios } from "axios";
import Image from "./Image";



export default function text() {
  const [photo, setPhoto] = useState("");
  const [clientId, setclientId] = useState(
    "pwFOw1MP0h5mHXgZNlBdUV8DZpCf6Zay8qQLWNxfmHc"
  );

  const [result, setResult] = useState([]);

  function handleChange(event) {
    console.log("Changed");
  }

  function handleClick(event) {
    let value = document.getElementById("bleh").value + " background";
    console.log(value);

    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +value +"&client_id=" +
clientId;


      axios.get(url)
      .then((Response) => {
        console.log(Response);
        setResult(Response.data.results);
      });
  }

  return (
    <>
      <form className="max-w-2xl mx-auto">
        <div>
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Author
          </label>
          <input
            type="text"

            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Quote
          </label>
          <input
            id="bleh"
            onChange={handleChange}
            type="text"
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

<div className="flex justify-center align-center" >

  <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 py-8">
  {result.map((photo) => (
          <Image key={photo.id} {...photo}/>
        ))}
  </div>

</div>






    </>
  );
}
