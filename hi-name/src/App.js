import React from 'react'
import Parent from './components/Parent'
import ExampleComponent from './components/ExampleComponent';
import TodoApp from './components/TodoApp';
import LoginForm from './components/LoginForm';
import Counter from './components/Counter';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import TODO from './components/TODO';

const App = () => {
    const weekday = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

const fruits = ["apples","banana","cherry","bat"]

const fruits1 = ["apple","banana"]
const fruits2 = ["cherry","orange"]

const mergedFruits = [...fruits1,...fruits2]

    return (
      <>
        <div style={{ textAlign: "center" }}>
          <p>name in uppercase</p>
          <h1>
            <Parent />
          </h1>
        </div>
        <hr />

        <div style={{ textAlign: "center", listStylePosition: "inside" }}>
          <h1>Week days</h1>
          <ul>
            {weekday.map((day, index) => (
              <li key={index}>{day}</li>
            ))}
          </ul>
        </div>
        <hr />

        <div style={{ textAlign: "center" }}>
          <p style={{color:"red"}}>please don't refer this , see result in the console</p>
          <ExampleComponent />
        </div>
        <hr />

        <div style={{ textAlign: "center", listStylePosition: "inside" }}>
         <p>Remove bat</p>
          <h1>Fruits Component</h1>
          <ul>
            {fruits.map((item, index) => {
              if (item !== "bat") {
                return <li key={index}>{item}</li>;
              }
              return null;
            })}
          </ul>
        </div>
        <hr />

        <div style={{ textAlign: "center", listStylePosition: "inside" }}>
          <h1>Merged Fruits</h1>
          <ul>
            {mergedFruits.map((fruits, index) => (
              <li key={index}>{fruits}</li>
            ))}
          </ul>
        </div>
        <hr />

        <div style={{ textAlign: "center" }}>
          <TodoApp />
        </div>
        <hr />

        <div>
          <LoginForm />
        </div>

        <div>
          <Counter />
        </div>
        <hr />

        <div style={{ textAlign: "center", listStylePosition: "inside" }}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Router>
        </div>
        <hr />

        <div>
          <TODO />
        </div>
      </>
    );
}

export default App