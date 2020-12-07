const uri = 'api/employees';

function addItem() {
    const addNameTextbox = document.getElementById('add-name');
  
    const item = {
      isComplete: false,
      name: addNameTextbox.value.trim()
    };

    const employee = {
        firstName = 'Bent',
        lastName = 'Nielsen'
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
        addNameTextbox.value = '';
      })
      .catch(error => console.error('Unable to add item.', error));
  }