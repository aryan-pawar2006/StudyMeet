import { useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Homecomponent from "./components/Homecomponent.jsx";
import TaskCard from "./components/TaskCard.jsx";
import TaskForm from "./components/TaskForm.jsx";

function App() {
  const [page, setPage] = useState("home"); //it will decide which page to load

  function handlePageChange(pageName) {
    setPage(pageName);
  }

  const [tasks, settasks] = useState([
    {
      taskId: "1",
      title: "Arrays DSA practice with Leetcode",
      subject: "DSA",
      status: "Inwork",
    },
    {
      taskId: "2",
      title: "build taskBar in studymeet app",
      subject: "development",
      status: "done",
    },
  ]);


  //create the function to remove task :
  function deletetask(taskId){
   settasks((previousTasks)=>previousTasks.filter(task=>task.taskId!==taskId)
   );
  }
  {/*except this id whose id matchess to given id filter out all the tasks  */}

  //create the fun to change task :
  function updateTaskStatus(taskId, newStatus) {
    settasks((previousTasks) =>
      previousTasks.map((task) =>
        task.taskId === taskId ? { ...task, status: newStatus } : task,
      ),
    );
  }

  //create the fun to set task :
  function addTask(newtask) {
    settasks((previoustasks) => [...previoustasks, newtask]);
  }
  return (
    <div>
      <Navbar />

      {page === "home" && <Homecomponent onNavigate={handlePageChange} />}
      {page === "tasks" && (
        <div>
          {tasks.map((task) => (
            <TaskCard
              key={task.taskId}
              taskId={task.taskId}
              title={task.title}
              subject={task.subject}
              status={task.status}
              goToHome={handlePageChange}
              onStatusChange={updateTaskStatus}
              deleteTask={deletetask}
            />
          ))}
          {/* so basically we are calling the updateTaskStatus fun whenever w'llmake chnages into state */}
        </div>
      )}

      {page === "add" && (
        <TaskForm Home={handlePageChange} onAddTask={addTask} />
      )}
    </div>
  );
}

export default App;
