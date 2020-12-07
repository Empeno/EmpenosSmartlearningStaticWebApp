const uri = 'api/addemployee';

function addEmployee() {
    const firstNameTextbox = document.getElementById('firstName');
  
    const employee = {
        firstName : firstNameTextbox.value.trim(),
        lastName : 'Nielsen'
    }
  
    fetch(uri, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
    })
      .then(response => response.json())
      .then(() => {
        getItems();
        firstNameTextbox.value = '';
      })
      .catch(error => console.error('Unable to add item.', error));
  }