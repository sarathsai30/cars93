import React, { useState, useEffect } from 'react';
import carData from '../../Data/data.json'; // Adjust path if needed

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);

  // 🔁 Real-time filtering
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredCars([]);
    } else {
      const results = carData.AllCars.filter(car =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCars(results);
    }
  }, [searchTerm]);

  return (
    <>
      {/* 🔍 Input */}
      <input
        type="text"
        placeholder="Search cars..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          position: 'absolute',
          top: '50px',
          right: '30px',
          zIndex: 10,
          width: '300px',
          padding: '12px 18px',
          borderRadius: '25px',
          border: '1px solid #ddd',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          backgroundColor: '#f9f9f9',
          outline: 'none',
          fontSize: '14px'
        }}
      />

      {/* 🧩 Search Results */}
      {(searchTerm.trim() !== '') && (
        <div style={{
          position: 'absolute',
          top: '100px',
          right: '30px',
          background: 'white',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          maxHeight: '300px',
          overflowY: 'auto',
          zIndex: 10,
          width: '320px'
        }}>
          {filteredCars.length === 0 ? (
            <div style={{ padding: '15px', color: '#999' }}>No results found.</div>
          ) : (
            filteredCars.map((car, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px',
                borderBottom: '1px solid #eee'
              }}>
                {/* 🖼 Car image */}
                {car.image && (
                  <img
                    src={'/${car.image}'}
                    alt={car.name}
                    style={{ width: '50px', height: '30px', objectFit: 'cover', borderRadius: '4px' }}
                  />
                )}

                {/* 📝 Car details */}
                <div>
                  <strong>{car.name}</strong>
                  <div style={{ fontSize: '12px', color: '#555' }}>{car.priceRange}</div>
                  <div style={{ fontSize: '12px', color: '#999' }}>{car.carType}</div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </>
  );
}

export default SearchBar;