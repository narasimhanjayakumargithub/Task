import React, { useState, useEffect } from 'react';

const SideEffectComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect hook for initialization
  useEffect(() => {
    fetchData();
  }, []);

  // useEffect hook for updating when data changes
  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  // useEffect hook for cleanup
  useEffect(() => {
    return () => {
      // Perform cleanup here if necessary
      console.log("Cleanup performed");
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SideEffectComponent;
