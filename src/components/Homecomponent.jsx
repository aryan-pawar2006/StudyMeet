const Homecomponent = ({ onNavigate }) => {//onNavigate is parameter we are passing handleChange as parameter value.
  return (
    <div className="w-screen h-200 bg-[#c98935] text-[#9d440d]">
      <h6 className="item-center justify-center text-black font-bold flex flex-column text-3xl">CHOOSE YOUR OPTION !</h6>

      <h3 className="text-black font-bold p-5 italic text-1xl">
        1)See Your Tasks:
      </h3>

      <button
        onClick={() => onNavigate("tasks")}//this on navigate is acyually working like handleChange fun
        className="bg-[#5a48f4] text-black rounded w-20 ms-10"
      >
        Click
      </button>

      <h3 className="text-black font-bold p-5">
        2)Add New Tasks:
      </h3>

      <button
        onClick={() => onNavigate("add")}
        className="bg-[#16c855] text-black rounded w-20 ms-10"
      >
        Click
      </button>
    </div>
  );
};

export default Homecomponent;
//so basically here we are actully having one function calles as onNavigate and with the help of this function we are passing the different values like seetask or addtask on the basis of which button is clicked and its parent component: