function fetchData(callback) {
    setTimeout(() => {
      const data = 'Some fetched data';
      callback(data);
    }, 2000);
  }
  
  fetchData(function(data) {
    console.log('Data received (callback):', data);
  });
  console.log('Fetching data (callback)...');
  