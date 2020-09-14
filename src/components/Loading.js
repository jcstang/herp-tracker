import React from 'react';

const loadingImage =
  'https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg';

const Loading = () => {
  return (
    <div>
      <img src={loadingImage} alt='Loading' />
    </div>
  );
};

export default Loading;
