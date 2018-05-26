let config = {
  url: '6ghadam',
  cdn: 'cdn',
  title: '6Ghadam'
};

if (process.env.NODE_ENV === 'development') {
  config.url = 'http://localhost:5001';
  config.cdn = 'http://localhost:5001/static';
}

export default config;
