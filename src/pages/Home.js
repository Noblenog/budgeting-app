import React from 'react';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <MyButton />
    </div>
  );
}

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default Home;