import React from 'react';
import { useParams } from 'react-router-dom';

const serviceData = {
  1: {
    title: 'Web Development',
    content: 'Detailed info about Web Development services goes here...'
  },
  2: {
    title: 'Mobile Development',
    content: 'Everything about Mobile App development and deployment...'
  },
  3: {
    title: 'AI Solutions',
    content: 'Learn how AI and ML solutions can enhance your business...'
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceData[id];

  if (!service) return <h2 style={{ color: 'white', textAlign: 'center' }}>Service Not Found</h2>;

  return (
    <div style={{ color: 'white', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>{service.title}</h2>
      <p>{service.content}</p>
    </div>
  );
};

export default ServiceDetail;
