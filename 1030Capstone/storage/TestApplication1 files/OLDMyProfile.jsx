import React from 'react';

const MyProfile = () => {
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    instrument: 'Piano',
  };

  return (
    <div>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Instrument:</strong> {user.instrument}</p>
    </div>
  );
};

export default MyProfile;
