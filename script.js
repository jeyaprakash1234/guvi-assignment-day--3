/*---------
  document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const firstName = document.getElementById('firstname').value;
    const middleName = document.getElementById('middlename').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phoneNumber = document.getElementById('phone').value;
    console.log(FirstName : {firstName}, MiddleName : {middleName}, LastName: {lastName}, Email: {email}, Password: ${password}, PhoneNumber: ${phoneNumber});


  });
-------*/


function createForm() {
    var form = document.createElement("form");
    form.id = "myForm";
    var fields = [
        "First Name", "Middle Name", "Last Name",
        "Email", "Password", "Phone Number"
    ];


    fields.forEach(function(fieldName) {
        var label = document.createElement("label");
        label.textContent = fieldName + ": ";
        form.appendChild(label);

        var input = document.createElement("input");
        if (fieldName === "Password") {
            input.type = "password";
        } else {
            input.type = "text";
        }
        input.name = fieldName.toLowerCase().replace(/\s/g, '');
        form.appendChild(input);

        form.appendChild(document.createElement("br"));
    });
    var submitBtn = document.createElement("input");
    submitBtn.type = "submit";
    submitBtn.value = "Submit";
    form.appendChild(submitBtn);

    
    document.body.appendChild(form);


    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
    });
}

createForm();
