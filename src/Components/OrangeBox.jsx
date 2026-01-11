import React, { useState } from "react";

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

  //------------------- now drag function
//This state remembers WHICH task you are currently dragging.
  const [dragInfo, setDragInfo]=useState({
    id:null,
    taskId:null
  })

  //-----------Drag Start------------

  const handleDragStart=(id,taskId )=>{

    setDragInfo({id,taskId})

  }
  // ------------Drag drop-----------

 const  handleDrop=(id,taskId)=>{

 setShowBox(prev=>prev.map(
 box=>{
  if (box.id!==id) return box; // it will eliminate other unwanted boxes

  const tasks=[...box.task] //it will copy all the task from the box

  const draggedIndex=tasks.findIndex( //here we findintg the dragged index from dragInfo useState
    t1=>t1.id===dragInfo.taskId
  )

  const targetIndex=tasks.findIndex( //here we finding the drop index, where we droped 
    t1=>t1.id===taskId //taskId will carry the Drop ID
    //by comparing with all tasks we can find the drop ID that will then with the help of findIndex we will find its drop Index
    //and store it in targetIndex

  )

  //now we have draggedIndex & targetIndex(drop index)

   if (draggedIndex === -1 || targetIndex === -1) return box;

   const [draggedTask]=tasks.splice(draggedIndex,1) // here we store the dragged task in  draggedTask variable and remove it from tasks
   //splice means=>here  tasks.splice(draggedIndex,1) 1 is delete index
   
   //array.splice(startIndex, deleteCount, itemToInsert);

   tasks.splice(targetIndex,0,draggedTask)

   return{...box,task:tasks}









 } 

  


))

 }


  return (
    <div className="p-6 flex gap-4 flex-wrap">
      {showBox.map(box => (


        <div
          key={box.id}
          className="w-[340px] h-[400px] bg-orange-400 p-4 rounded-xl
                     shadow-lg hover:shadow-xl transition-shadow
                     max-h-[420px] overflow-y-auto"
        >

          <div className="flex items-center mb-4" >

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

              <div draggable="true"
                onDragStart={()=>handleDragStart(box.id,task.id)}
                 onDragOver={(e)=>e.preventDefault()} 
                 onDrop={()=>handleDrop(box.id,task.id)}
                 className="flex items-center gap-3 mb-2   px-3 py-2 mt-1"

                 >

                <span className="cursor-grab select-none">☰</span>
              </div>
            



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
