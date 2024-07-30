/* eslint-disable react/prop-types */
const Todo = ({ todo }) => {
   return (
      <div className="flex items-center gap-8 p-4 border-b border-b-gray-400 w-2/3">
         <input type="checkbox" checked={todo.isCompleted} />
         <p className="font-karla text-2xl">{todo.title}</p>
         <button className="flex justify-center items-center bg-gray-100 ml-auto rounded-lg text-red-400 size-12">
            <i className="fa-trash-can fa-solid"></i>
         </button>
      </div>
   );
};

export default Todo;
