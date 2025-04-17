// filepath: /d:/Study/Cars93/cars93/src/Modules/Search/Search.jsx
import React, { useState } from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import searchData from "../../Data/searchData.json"

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

  const handleSearch=()=>{
    
  }

  return (
    <div className="search-form p-3 bg-light border rounded" style={{ width: '300px', margin: '0 auto' }}>
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
               {searchData.carTypes.map((type, index) => (
                <MenuItem key={index} value={type}>
                  {type}
                </MenuItem>
              ))}
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
             {searchData.priceRange.map((range, index) => (
                <MenuItem key={index} value={range}>
                  {range}
                </MenuItem>
              ))}
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
              {searchData.brands.map((brand, index) => (
                <MenuItem key={index} value={brand}>
                  {brand}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <button type="submit" onClick={handleSearch} className="btn btn-primary">Search</button>
      </form>
    </div>
  );
};

export default Search;