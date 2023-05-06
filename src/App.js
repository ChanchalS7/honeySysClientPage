import logo from './logo.svg';
import './App.css';
import AutoPlay from './Components/Slide';
import MultipleItems from './Components/Slide2';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios({
      url: `https://honeysys-server.onrender.com/products`,
      method: "GET"
    })
      .then((res) => {
        setProducts(res);
      })
      .catch((er) => console.log(er));
  }, []);
  console.log("pro", products?.data);
  console.log("pro", products?.data);
  return (
    <div className="App">
      <AutoPlay></AutoPlay>
      <br />
      <MultipleItems />
    </div >
  );
}

export default App;
