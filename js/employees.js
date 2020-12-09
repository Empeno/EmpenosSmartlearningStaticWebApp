const uri = 'api/addemployee';

function addEmployee() {
    const firstNameTextbox = document.getElementById('firstName');
  
    const employee = {
        firstName : firstNameTextbox.value.trim(),
        lastName : document.getElementById('surname').value.trim()
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
        getEmployees();
        firstNameTextbox.value = '';
      })
      .catch(error => console.error('Unable to add item.', error));
  }

  function getItems() {
    fetch(uri)
      .then(response => response.json())
      .then(data => _displayItems(data))
      .catch(error => console.error('Unable to get items.', error));
  }