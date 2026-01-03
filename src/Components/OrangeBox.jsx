import React from "react";

const OrangeBox = ({ showBox, setShowBox }) => {

  // update TITLE
  const handleChange = (id, value) => {
    setShowBox(prev =>
      prev.map(box =>
        box.id === id ? { ...box, title: value } : box
      )
    );
  };

  // toggle CHECKBOX
  // We go through all tasks in the box, find the task that was clicked, and flip only that task’s completed value.
  const handleCheck = (id, taskId) => {
    setShowBox(prev =>
      prev.map(box =>
        box.id === id
          ? {
            ...box, task: box.task.map(task1 =>
              task1.id === taskId ? {
                ...task1, completed: !task1.completed
              } : task1
            )
          }
          : box
      )
    );
  };

  // update TASK text
  const handleTask = (id, taskId, value) => {
    setShowBox(prev =>
      prev.map(box =>
        box.id === id ? {
          ...box, task: box.task.map(task1 =>

            task1.id === taskId ? {
              ...task1, text: value
            } : task1

          )
        } : box
      )
    );
  };

  // Add new Task
  const addNewTask = (id) => {

    setShowBox(prev => prev.map(

      box => box.id === id ? { ...box, task: [...box.task, { id: Date.now(), text: "", completed: false }] } : box //here "...box.task" means previous tasks

    ))

  }

  //delete function

  const deleteTask = (id, taskId) => {

    setShowBox(prev => prev.map(
      box => box.id === id ? {
        ...box, task: box.task.filter(

          task1 => task1.id !== taskId

        )
      } : box
    ))

  }

  const deleteBox = (id) => {

    setShowBox(prev => prev.filter(
      box => box.id !== id
    ))

  }


  return (
    <div className="p-6 flex gap-4 flex-wrap">
      {showBox.map(box => (


        <div
          key={box.id}
          className="w-80 bg-orange-400 p-4 rounded"
        >

          <div className="flex" >

            {/* TITLE (never strike-through) */}
            <input
              type="text"
              placeholder="Title"
              value={box.title}
              onChange={(e) =>
                handleChange(box.id, e.target.value)
              }
              className="bg-transparent border-0 border-b-2
                       focus:outline-none focus:ring-0
                       text-[26px] text-center w-full mb-4"

              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();     // stop default behavior
                  addNewTask(box.id);     // create new task
                }
              }}
            />

            <div>
              <button className="ml-2.5 mb-2.5" onClick={() => deleteBox(box.id)}>X</button>
            </div>

          </div>

          {/*--------- task creation -----------------*/}


          {box.task.map(task => (
            <div className="flex" key={task.id}>


              {/* CHECKBOX + TASK */}

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleCheck(box.id, task.id)}
                  className="w-5 h-5"
                />

                <input
                  type="text"
                  placeholder="Write your task"
                  value={task.text || ""}
                  onChange={(e) =>
                    handleTask(box.id, task.id, e.target.value)
                  }
                  className={`bg-transparent border-0 border-b-2
                focus:outline-none focus:ring-0
                text-lg w-full
                ${task.completed ? "line-through text-gray-600" : ""}
              `}


                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();     // stop default behavior
                      addNewTask(box.id);     // create new task
                    }
                  }} />


              </div>

              {/*----Add Button------*/}

              <div className="ml-4.5">

                <button onClick={() => addNewTask(box.id)} className="text-[30px] cursor-pointer">+</button>

              </div>

              {/*----Delete Button------*/}

              <div className="mt-[8px] ml-[10px]">
                <button onClick={() => deleteTask(box.id, task.id)} className="text-red-600 font-bold text-[23px] cursor-pointer" >X</button>
              </div>

            </div>


          ))



          }





        </div>


      ))}
    </div>
  );
};

export default OrangeBox;
