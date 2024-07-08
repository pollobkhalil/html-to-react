import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTourDetails } from '../../Services/api'; // Adjust path based on your folder structure

const TourDetails = () => {
  const { tourId } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTourDetails = async () => {
      try {
        const data = await fetchTourDetails(tourId); // Adjust to fetch tour details based on tourId
        setTour(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getTourDetails();
  }, [tourId]); // Fetch details whenever tourId changes

  if (loading) return <div className="container">Loading...</div>;
  if (error) return <div className="container">Error: {error.message}</div>;

  if (!tour) return <div className="container">Tour not found</div>;

  return (
    <div className="container">
      <h2>{tour.title}</h2>
      <p>Description: {tour.description}</p>
      <p>Price: ${tour.meta._price}</p>
      {/* Render other tour details as needed */}
    </div>
  );
};

export default TourDetails;
