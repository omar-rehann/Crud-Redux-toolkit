# CRUD App (React + Redux Toolkit)

A simple **CRUD (Create, Read, Delete)** application built with **React** and **Redux Toolkit**. The app demonstrates clean state management, basic routing, and interaction with a mock backend using **JSON Server**.

---

## 🚀 Features

* ➕ **Add items** from the Home page
* 📄 **View all items** on a dedicated page
* 🗑️ **Delete items** with one click
* 🔁 State management using **Redux Toolkit**
* 🌐 Mock backend using **JSON Server**
* 🧭 Navigation between pages using **React Router**

---

## 🛠️ Tech Stack

* **React.js**
* **Redux Toolkit**
* **React Redux**
* **React Router DOM**
* **JSON Server** (Mock API)
* **JavaScript (ES6+)**
* **CSS**
* **Sweet Alert**

---

## 📂 Project Structure (Simplified)

```
src/
│── components/
│── Crud/
│   ├── crud.jsx
│   └── crud.css
│── Eror/
│   ├── eror.jsx
│   └── eror.css
│── Header/
│   ├── header.jsx
│   └── header.css
│── name/
│   ├── name.jsx
│   └── name.css
│── posts/
│   ├── posts.jsx
│   └── posts.css
│── pages/
│   ├── crud.jsx
│── redux toolkit/
│   ├── store.jsx
│   └── slice.jsx
│── App.jsx
│── index.js
│─
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

2. Install dependencies:

```bash
npm install
```

3. Start JSON Server:

```bash
npm run server
```

4. Start the React app:

```bash
npm start
```

> The app will run on `http://localhost:3000`
>
> JSON Server will run on `http://localhost:3001`

---

## 🔄 CRUD Operations

### ➕ Create

* Add new items from the **Home page** using a simple form.
* Data is dispatched to Redux Toolkit and saved via JSON Server.

### 📄 Read

* All items are displayed on a separate page.
* Data is fetched from the store using `useSelector`.

### 🗑️ Delete

* Items can be deleted directly from the list.
* The UI updates instantly after deletion.

---

## 📌 Learning Outcomes

* Practical use of **Redux Toolkit slices & async actions**
* Better understanding of **global state management**
* Working with a **mock REST API**
* Structuring a scalable React project

---

## 📬 Contact

If you have any feedback or suggestions, feel free to reach out.

---

⭐ If you like this project, don’t forget to give it a star!
