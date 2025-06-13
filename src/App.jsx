// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React, { useState } from "react";
import { Route,BrowserRouter as Router,Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import Home from "./pages/Home";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
const App = () => {

  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
      <>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Vaishnavi Shankar Gaikwad"
          studentPhotoUrl="/images/Vaishnavi.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>

      <Router>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/home" element = {<Home />} />
          <Route path="/aboutpage" element = {<AboutPage/>} />
          <Route path="/coursespage" element = {<CoursesPage/>} />
          <Route path="/contactpage" element = {<ContactPage/>} />
          <Route path="/admissionspage" element = {<AdmissionsPage/>} />
        </Routes>
        <ChatbotComponent/>
      </Router>
      </>
  )
}

export default App;