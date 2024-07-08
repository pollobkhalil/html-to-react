import React, { useEffect, useState } from 'react';
import { fetchTours } from '../../Services/api'; // Adjust path based on your folder structure
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation

const TourList = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTours = async () => {
      try {
        const data = await fetchTours();
        setTours(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getTours();
  }, []);

  const limitTitleLength = (title, maxLength) => {
    if (title.length <= maxLength) {
      return title;
    } else {
      return title.substring(0, maxLength) + '...';
    }
  };

  if (loading) return <div className="container">Loading...</div>;
  if (error) return <div className="container">Error: {error.message}</div>;

  console.log('Tours:', tours); // Log tours array to check its contents

  return (
    <div className="container">
      <div className="row">
        {tours.map(tour => (
          <div key={tour.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={tour.featured_image} className="card-img-top" alt={tour.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{limitTitleLength(tour.title, 20)}</h5>
                <p className="card-text">Price: ${tour.meta._price}</p>
                <Link to={`/tours/${tour.id}`} className="btn btn-primary mt-auto">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourList;
