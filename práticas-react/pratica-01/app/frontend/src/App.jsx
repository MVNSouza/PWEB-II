import { useState } from "react";

import "./App.css";

import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useEffect } from "react";

const listCars = [];
const App = () => {
  const [cars, setCars] = useState(listCars);

   useEffect(() => {
    async function fetchCars() {
      const res = await fetch("http://localhost:3000/anuncios");
      const data = await res.json();
      setCars(data);
    }

    fetchCars();
  }, []);

  const handleSearch = async (query) => {
    if (query === '') {
      const res = await fetch("http://localhost:3000/anuncios");
      const data = await res.json();
      setCars(data);
      setCars(listCars);
      return;
    }

    setCars(listCars.filter( ({ model }) => model.toLowerCase().includes(query.toLowerCase()) ));
  }
  
  return (
    <>
      <header><NavBar/></header>
      <h1>Anúncios Recentes</h1>
      <SearchBar handleSearch={handleSearch} />
      <div className='cards'>
        {cars && cars.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default App;
