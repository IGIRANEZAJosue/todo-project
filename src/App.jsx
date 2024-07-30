import { useState } from "react";

export default function App() {
   const [input, setInput] = useState("");

   console.log(input);

   return (
      <div className="flex flex-col justify-center items-center font-poppins">
         <h1 className="font-bold text-[6rem] text-gray-300">todos</h1>

         <main className="flex flex-col items-center w-full">
            <div className="flex items-center gap-4 border-2 border-gray-300 shadow-lg p-2 rounded-full w-1/2 outline-[#636cff]">
               <input
                  type="text"
                  placeholder="Add todo..."
                  className="p-2 w-full outline-none"
               />
               <span className="flex justify-center items-center bg-green-500 rounded-full size-10">
                  <i className="fa-plus fa-solid"></i>
               </span>
            </div>
         </main>
      </div>
   );
}
