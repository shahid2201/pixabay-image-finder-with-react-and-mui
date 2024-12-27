import { useEffect, useState } from "react";
import { ImageCard } from "./components/ImageCard";
import { NavBar } from "./components/NavBar";

function App() {
  const [term, setTerm] = useState('');
  const [imageData, setImageData] = useState([]);

  //https://pixabay.com/api/?key=47685161-a1af04dddfef278019100bf32&q=yellow+flowers&image_type=photo

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => setImageData(data.hits))
  }, [term])

  const handleChange = (e) => {
    setTerm(e.target.value);
  }


  return (
    <div className="App">
      <NavBar handleChange= {handleChange}/>
      <ImageCard imageData = {imageData}/>
    </div>
  );
}

export default App;
