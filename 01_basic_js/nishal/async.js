async function fetchAsyncData() {
    const data = await fetchDataPromise();
    console.log('Data received (async/await):', data);
  }
  
  fetchAsyncData();
  console.log('Fetching data (async/await)...');
  