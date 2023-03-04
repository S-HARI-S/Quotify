# Quotify

##  About
Quotify is a web application that enables users to generate instant quote cards. It allows users to input their preferred quote, author's name, and specify their desired background image.

## Tech used 
[React.js](https://reactjs.org/) + [Vite](https://vitejs.dev/) , [Tailwind CSS](https://tailwindcss.com/), 
[Dalle](https://platform.openai.com/docs/introduction/overview)(open AI API) for generating images.

## Create development server

To install all necessary packages , run : 
```
npm i
```
To start a local server run : 
```
npm run dev
```
## Sample outputs
![canvas](https://user-images.githubusercontent.com/92015765/222869419-a9959573-8477-401d-b419-a7fb8cfc42dd.png)
![canvas1](https://user-images.githubusercontent.com/92015765/222869415-7ac4fdd0-fb59-4328-b663-fe1f960e03fe.png)

## Working
Users can enter the author name , quote and a description of background image into the text box provided. These values are read and the bg image description is given as prompt to DALLE. A response containing url of generated image is obtained and it is rendered on a HTML canvas. Then the author name , quote are also rendered on top of the image canvas.

## Changes I'm working on
* Adding a color wheel.
* Adding a font selector.
* Adding a download button.
* A tool to change the position of the texts.

