import React from "react";
import PropTypes from "prop-types";
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

const Canvas = ({ draw, height, width }) => {
  const canvas = React.useRef();

  React.useEffect(() => {
    const context = canvas.current.getContext("2d");
    draw(context);
  });

  // var canvasd = document.getElementById("mycanvas");
  // var imgD   = canvasd.toDataURL("image/png");
  // document.write('<img src="'+imgD+'"/>');
  const handleCaptureClick = async () => {
    const element = canvas.current;
    const canvas1 = await html2canvas(element);

    const data = canvas1.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
  <>
  <div className="flex justify-center items-center flex-col">
  <canvas id="mycanvas" ref={canvas} height={height} width={width} />

  <button type="button" onClick={() => handleCaptureClick()} className="mt-8 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">download</button>

  </div>



  </>
  )
};

Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

export default Canvas;
