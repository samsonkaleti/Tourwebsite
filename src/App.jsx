import React, { useEffect, useState } from 'react';
import Tour from './components/Tour';
import useFetchApi from './Hooks/UseFetchApi';

const App = () => {
  const url = 'https://www.course-api.com/react-tours-project';
  const { data, error, loading } = useFetchApi(url);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    if (data) {
      setTours(data);
    }
  }, [data]);

  const deleteTour = (id) => {
    const newTours = tours.filter((each) => each.id !== id);
    setTours(newTours);
  };

  if (loading) {
    return <h1 className='text-3xl font-bold text-center py-8'>Loading...</h1>;
  } 

  if (tours.length === 0) {
    return (
      <div className="text-3xl font-bold text-center py-8">
        <h1>No tours lef</h1> 
        <button className='mt-4 px-4 py-2 bg-green-500 text-white rounded' onClick={() => {
       setTours(data)
        }}>Refresh</button>
      </div>
    )
  }

  if (error) {
    return <h1 className='text-3xl font-bold text-center py-8'>Error: {error.message}</h1>;
  }

  return (
    <div className='min-h-screen min-w-full bg-gray-100'>
      <h1 className='text-3xl font-bold text-center py-8 underline underline-offset-8 decoration-green-400 '>Tour Website</h1> 
      
      <div className="flex justify-start flex-wrap p-4">
        {tours.map((tour) => (
          <Tour key={tour.id} data={tour} deleteTour={deleteTour} />
        ))}
      </div>
    </div>
  );
};

export default App;
