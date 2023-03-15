const form = document.getElementById('my-form');

        form.addEventListener('submit', function(event) {
          event.preventDefault(); // prevent form submission
        
          // Retrieve input values from the form
          const fname = form.elements.fname.value;
          const lname = form.elements.lname.value;
          const email = form.elements.email.value;
          const dob = form.elements.dob.value;

        
          // Create a JSON object to represent the user data
          const user = {
            fname: fname,
            lname: lname,
            email: email,
            dob: dob
          };
        
          // Retrieve existing users from local storage or create empty array
          const users = JSON.parse(localStorage.getItem('users')) || [];
        
          // Add new user to array and save to local storage
          users.push(user);
          localStorage.setItem('users', JSON.stringify(users));

          // Reset the form
          form.reset();
          alert("User Added successfully");
    location.reload();
        });
   
    const users = JSON.parse(localStorage.getItem('users')) || [];

    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      console.log(`fname: ${user.fname}, lName: ${user.lname}, Email: ${user.email}, dob: ${user.dob}`);
    }


    users.forEach(user => {
      const userBirthday = new Date(user.dob);
      const birthdayAlertShown = user.birthdayAlertShown || false;
      const daysBeforeBirthday = 2;
    
      // Check if the user's birthday is within two days of the current date
      const today = new Date();
const timeDiff = Math.abs(userBirthday.getTime() - today.getTime());
const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
if (daysDiff <= daysBeforeBirthday && !birthdayAlertShown) {
  // Display alert and set birthdayAlertShown flag to true
  alert(`Upcoming birthday: ${user.fname} ${user.lname} on ${userBirthday.toDateString()}`);
  user.birthdayAlertShown = true;
  localStorage.setItem('users', JSON.stringify(users));

  // Redirect to another page
  window.location.href = 'giftvoucher.html';
}});

    





// Retrieve the table element
const usersTable = document.getElementById('usersTable');


// Loop through each user and create a new row in the table
for (let i = 0; i < users.length; i++) {
  const user = users[i];

  // Create a new row element
  const row = document.createElement('tr');

  // Add cells to the row for each user property
  const fnameCell = document.createElement('td');
  fnameCell.textContent = user.fname;
  row.appendChild(fnameCell);

  const lnameCell = document.createElement('td');
  lnameCell.textContent = user.lname;
  row.appendChild(lnameCell);

  const emailCell = document.createElement('td');
  emailCell.textContent = user.email;
  row.appendChild(emailCell);

  const dobCell = document.createElement('td');
  dobCell.textContent = user.dob;
  row.appendChild(dobCell);

  // Add the row to the table
  usersTable.appendChild(row);
}
console.clear();



