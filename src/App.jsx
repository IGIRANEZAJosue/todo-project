import { useState } from "react";

export default function App() {
   const [input, setInput] = useState("");
   const [todos, setTodos] = useState([]);

   const handleInput = (e) => {
      setInput(e.target.value);
   };

   const addTodo = (e) => {
      e.preventDefault();
      setTodos((previousTodos) => [
         ...previousTodos,
         { title: input, isCompleted: false, id: Math.random() * 100 },
      ]);

      setInput("");
   };

   return (
      <div className="flex flex-col justify-center items-center font-poppins">
         <h1 className="font-bold text-[6rem] text-gray-300">todos</h1>

         <form onSubmit={addTodo} className="flex flex-col items-center w-full">
            <div className="flex items-center gap-4 border-2 border-gray-300 shadow-lg p-2 rounded-full w-1/2 outline-[#636cff]">
               <input
                  type="text"
                  value={input}
                  onChange={handleInput}
                  placeholder="Add todo..."
                  className="p-2 w-full outline-none"
               />
               <button
                  type="submit"
                  className="flex justify-center items-center bg-green-500 rounded-full size-10"
               >
                  <i className="fa-plus fa-solid"></i>
               </button>
            </div>
         </form>
         <div className="w-full">
            {todos.map((todo) => (
               <div className="flex items-center gap-8 p-4 w-2/3" key={todo.id}>
                  <input type="checkbox" checked={todo.isCompleted} />
                  <p>{todo.title}</p>
                  <button className="flex justify-center items-center bg-gray-100 ml-auto rounded-lg text-red-400 size-12">
                     <i className="fa-trash-can fa-solid"></i>
                  </button>
               </div>
            ))}
         </div>
      </div>
   );
}
