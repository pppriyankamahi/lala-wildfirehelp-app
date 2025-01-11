import React from 'react';

const HelpPage = ({ type }) => {
  return (
    <div>
      <h1>{type === 'need' ? 'I Need Help' : 'I can Help'}</h1>
      <p>{type === 'need' ? 'Here you can find resources and assistance.' : 'Here you can find ways to offer help.'}</p>
    </div>
  );
};

export default HelpPage;