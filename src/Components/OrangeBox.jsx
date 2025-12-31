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
  const handleCheck = (id) => {
    setShowBox(prev =>
      prev.map(box =>
        box.id === id
          ? { ...box, completed: !box.completed }
          : box
      )
    );
  };

  // update TASK text
  const handleTask = (id, value) => {
    setShowBox(prev =>
      prev.map(box =>
        box.id === id ? { ...box, task: value } : box
      )
    );
  };

  return (
    <div className="p-6 flex gap-4 flex-wrap">
      {showBox.map(box => (
        <div
          key={box.id}
          className="w-80 bg-orange-400 p-4 rounded"
        >

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
          />


          <div className="flex">
            {/* CHECKBOX + TASK */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={box.completed}
                onChange={() => handleCheck(box.id)}
                className="w-5 h-5"
              />

              <input
                type="text"
                placeholder="Write your task"
                value={box.task}
                onChange={(e) =>
                  handleTask(box.id, e.target.value)
                }
                className={`bg-transparent border-0 border-b-2
                focus:outline-none focus:ring-0
                text-lg w-full
                ${box.completed ? "line-through text-gray-600" : ""}
              `}
              />


            </div>


            <div>

              <button className="">+</button>

            </div>

          </div>



        </div>
      ))}
    </div>
  );
};

export default OrangeBox;
