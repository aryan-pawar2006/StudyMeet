import { useState } from "react";

const TaskForm = ({ onAddTask, Home }) => {
  const [taskId, settaskId] = useState("");
  const [tasktitle, settitle] = useState("");
  const [subject, setsubject] = useState("");
  const [status, setstatus] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      taskId: taskId,
      title: tasktitle,
      subject: subject,
      status: status,
    };

    console.log("New Task:", newTask);

    onAddTask(newTask);

    settaskId("");
    settitle("");
    setsubject("");
    setstatus("");
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 bg-gray-200 text-black rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Add Task</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Task ID */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Task ID</label>

          <input
            type="number"
            placeholder="Enter task ID"
            value={taskId}
            onChange={(e) => settaskId(e.target.value)}
            className="w-full p-3 bg-white border border-gray-400 rounded-lg outline-none focus:border-blue-500"
          />
        </div>

        {/* Title */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Task Title</label>

          <input
            type="text"
            placeholder="Enter the title of task"
            value={tasktitle}
            onChange={(e) => settitle(e.target.value)}
            className="w-full p-3 bg-white border border-gray-400 rounded-lg outline-none focus:border-blue-500"
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Subject</label>

          <input
            type="text"
            placeholder="Enter subject"
            value={subject}
            onChange={(e) => setsubject(e.target.value)}
            className="w-full p-3 bg-white border border-gray-400 rounded-lg outline-none focus:border-blue-500"
          />
        </div>

        {/*status*/}

        <div className="flex flex-col gap-1">
          <label className="font-semibold">Status</label>

          <input
            type="text"
            placeholder="Enter status"
            value={status}
            onChange={(e) => setstatus(e.target.value)}
            className="w-full p-3 bg-white border border-gray-400 rounded-lg outline-none focus:border-blue-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg"
        >
          Add Task
        </button>
      </form>

      <button
        onClick={() => Home("home")}
        className="w-20 bg-[#AEEED3] text-black rounded-2xl mt-4"
      >
        GoToHome
      </button>
    </div>
  );
};

export default TaskForm;
