function fetchDataPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 'Some fetched data';
        resolve(data);
      }, 2000);
    });
  }
  
  fetchDataPromise().then(data => {
    console.log('Data received (promise):', data);
  });
  console.log('Fetching data (promise)...');
  