import React from "react";
import Buttons from "./components/Buttons";

function App ({input,clear}) {

return (
  <div className="min-h-screen flex items-center justify-center bg-gray-200">
    <div className="bg-white rounded-xl shadow-lg p-6 w-[340px]">

      <Buttons/>

     
    </div>
  </div>
);

}

export default App

