


# 📝 Todo Board App (React)

A modern **Todo Board application** built using **React** that allows users to create multiple todo boxes, manage tasks inside each box, and prioritize tasks using **drag and drop**.

This project focuses on **real-world React state management**, clean UI behavior, and keyboard-friendly interactions.

---

## 🚀 Features

### 📦 Todo Boxes
- Create multiple todo boxes
- Edit box title
- Delete an entire box with all its tasks

### ✅ Tasks
- Add multiple tasks inside each box
- Add task using **Enter key** or **+ button**
- Mark tasks as completed using checkbox
- Completed tasks are shown with **strike-through**
- Delete individual tasks

### 🔀 Drag & Drop (Priority Management)
- Drag tasks using the ☰ handle
- Reorder tasks inside the same box
- Helps prioritize tasks easily

### ⌨️ Keyboard Friendly
- Press **Enter** to add a new task
- Smooth user experience without mouse dependency

---

## 🛠️ Tech Stack

- **React (Hooks)**
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **HTML5 Drag and Drop API**

---

## 📂 Project Structure

```

src/
│── Components/
│   ├── Header.jsx
│   └── OrangeBox.jsx
│
│── App.jsx
│── main.jsx
│── index.css

````

---

## 🧠 Key Concepts Used

- `useState` for state management
- Immutable state updates using `map()` and `filter()`
- Controlled inputs
- Conditional rendering
- Nested state handling (boxes → tasks)
- HTML Drag & Drop API
- Keyboard event handling (`onKeyDown`)

---

## 🧪 How It Works (High Level)

- Each **box** contains an array of **tasks**
- Each **task** has:
  js
  {
    id,
    text,
    completed
  }


* Tasks are updated using `map()`
* Tasks are deleted using `filter()`
* Drag & drop reorders tasks using `splice()`

---

## ▶️ How to Run Locally

1. Clone the repository

   bash
   git clone https://github.com/your-username/your-repo-name.git
   

2. Install dependencies

   ```bash
   npm install
   ```

3. Start development server

   ```bash
   npm run dev
   ```

---

