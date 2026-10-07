const TaskCard = ({
  taskId,
  title,
  subject,
  status,
  goToHome,
  onStatusChange,
  deleteTask,
}) => {
  return (
    <div className="w-full max-w-md ml-10 mt-6">
      <div>
        <div className="bg-gray-800 rounded-xl shadow-lg p-5 border border-gray-700">
          <h2 className="font-bold italic text-orange-400 text-lg mb-3">
            Task {taskId}
          </h2>

          <h1 className="font-bold text-white text-xl mb-2">Title: {title}</h1>

          <h2 className="font-semibold text-pink-400">Subject: {subject}</h2>

          <h2 className="mt-3 text-[#FFC0DE] intalic">Status:{status}</h2>

          {/* here we actually create one parameter function that will take from App.jsx which is parent com*/}
          <select
            onChange={(e) => {
              onStatusChange(taskId, e.target.value);
            }}
            className="text-white font-bold text-1xl mt-3 flex"
          >
            <option value="DSA" className="text-black">
              changeStatus
            </option>
            <option value="DSA" className="text-black">
              DSA
            </option>
            <option value="development" className="text-black">
              Development
            </option>
            <option value="JobSearching" className="text-black">
              Job
            </option>
          </select>

          
          <buton
            onClick={() => deleteTask(taskId)}
            className="ms-70 mb-110 w-40 h-5 rounded-2xl bg-[#790D16] text-[#ebf7f7] font-bold "
          >
            deleteTask
          </buton>
        </div>
      </div>
      <button
        onClick={() => goToHome("home")}
        className="w-20 rounded-2xl bg-[#A14646] text-white font-bold mt-10"
      >
        Go Home
      </button>
    </div>
  );
};

export default TaskCard;
