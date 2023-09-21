import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils2" aboutText="About Utils" ></Navbar>
      <div className="container my-3 ">
        <TextForm heading="Enter your text here"></TextForm>
      </div>
    </>
  );
}

export default App;
