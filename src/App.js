import { useEffect, useState } from "react";
import { ImageCard } from "./components/ImageCard";
import { NavBar } from "./components/NavBar";

function App() {
  const [term, setTerm] = useState('');

  //https://pixabay.com/api/?key=47685161-a1af04dddfef278019100bf32&q=yellow+flowers&image_type=photo

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=47685161-a1af04dddfef278019100bf32&q=${term}&image_type=photo`)
    .then(res => res.json())
    .then(data => console.log(data))
  }, [term])

  const handleChange = (e) => {
    setTerm(e.target.value);
  }


  return (
    <div className="App">
      <NavBar handleChange= {handleChange}/>
      <ImageCard term = {term}/>
    </div>
  );
}

export default App;
