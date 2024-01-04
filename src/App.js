import Component from './component/Component';
import './App.css';
import Json from "./file.json";

function App() {

  const data = Json;

  return (
    <div id='App'>
      <Component testimonal={data.testimonial} instructor={data.instructor} course={data.course} />
    </div>
  );
}

export default App;
