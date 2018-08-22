export default (url, params) =>
  fetch(url, params)
    .then(response => {
      if (response.ok) {
        return response;
      }

      throw new Error('Data Error');
    })
    .then(response => response.json())
    .catch(err => {
      console.log(err);
    });
