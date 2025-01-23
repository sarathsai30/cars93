// filepath: /d:/Study/Cars93/cars93/src/Modules/Search/Search.jsx
import React, { useState } from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const Search = () => {
  const [brand, setBrand] = useState("");
  const [carType, setCarType] = useState("");
  const [budget, setBudget] = useState("");

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleCarTypeChange = (event) => {
    setCarType(event.target.value);
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  return (
    <div className="search-form p-3 bg-light border rounded" style={{ width: '200px', margin: '0 auto' }}>
      <form>
        <div className="mb-3">
          <FormControl fullWidth>
            <InputLabel id="car-type-label">Car Type</InputLabel>
            <Select
              labelId="car-type-label"
              id="carType"
              value={carType}
              label="Car Type"
              onChange={handleCarTypeChange}
            >
              <MenuItem value="Sedan">Sedan</MenuItem>
              <MenuItem value="SUV">SUV</MenuItem>
              <MenuItem value="Hatchback">Hatchback</MenuItem>
              <MenuItem value="Convertible">Convertible</MenuItem>
              <MenuItem value="Coupe">Coupe</MenuItem>
              <MenuItem value="Wagon">Wagon</MenuItem>
              <MenuItem value="Van">Van</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="mb-3">
          <FormControl fullWidth>
            <InputLabel id="budget-label">Budget</InputLabel>
            <Select
              labelId="budget-label"
              id="budget"
              value={budget}
              label="Budget"
              onChange={handleBudgetChange}
            >
              <MenuItem value="1-5 lakhs">1-5 lakhs</MenuItem>
              <MenuItem value="5-10 lakhs">5-10 lakhs</MenuItem>
              <MenuItem value="above 10 lakhs">Above 10 lakhs</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="mb-3">
          <FormControl fullWidth>
            <InputLabel id="brand-label">Brand</InputLabel>
            <Select
              labelId="brand-label"
              id="brand"
              value={brand}
              label="Brand"
              onChange={handleBrandChange}
            >
              <MenuItem value="Maruti Suzuki">Maruti Suzuki</MenuItem>
              <MenuItem value="Hyundai">Hyundai</MenuItem>
              <MenuItem value="Tata">Tata</MenuItem>
              <MenuItem value="Mahindra">Mahindra</MenuItem>
              <MenuItem value="Honda">Honda</MenuItem>
              <MenuItem value="Toyota">Toyota</MenuItem>
              <MenuItem value="Ford">Ford</MenuItem>
              <MenuItem value="Volkswagen">Volkswagen</MenuItem>
            </Select>
          </FormControl>
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    </div>
  );
};

export default Search;