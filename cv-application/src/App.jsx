import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Preview from "./preview.jsx";
import './App.css'
import Form from "./form.jsx";

// Layout for the form with all of the  input contents
function App() {
  const [info, setInfo] = useState({
    name: "",
    surname: "",
    email: "",
    occupation: "",
  });
  const [edu, setEdu] = useState([{
    establishment: "",
    diploma: "",
  },]);

  const [experience, setExperience] = useState([{
    enterprise: "",
    job: "",
    responsibility: "",
  },]);
  const [details, setDetails] = useState(["", ""]);
  // 
  return (
  <div className="app-layout">

    <div className="app-layout-form no-print">
      <h1>CV Application</h1>

      <button
        className="print-btn"
        onClick={() => window.print()}
      >
        🖨️ Export / Print to PDF
      </button>

      <Form
        setInfo={setInfo}
        setEdu={setEdu}
        experience={experience}
        setExperience={setExperience}
        details={details}
        setDetails={setDetails}
      />
    </div>

    <aside className="app-layout-preview">
      <Preview
        info={info}
        edu={edu}
        experience={experience}
        details={details}
      />
    </aside>

  </div>
  );
}

export default App
