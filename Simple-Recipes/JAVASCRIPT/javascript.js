//RECIPE POP UP MODAL SECTION//

//SETS UP BUTTON TO OPEN MODAL//
var btns = document.querySelectorAll("input.modal-button");

//Defines all modals for each recipe//
var modals = document.querySelectorAll(".recipe-modal");

//gets span element that closes modal//
var closeBtn = document.getElementsByClassName("close-btn");

//opens modal when user clicks recipe button//
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (event) {
        modal = document.querySelector(event.target.getAttribute 
        ("href"));
        modal.style.display = "block";   
    }
}

//close modal when user clicks on <span> (c)//
for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
        for (var index in modals) {
            if (modals[index].style) {
                modals[index].style.display = "none";
            }
        }
    }
}

 //TIMES OUT MODAL//
// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Close the modal after a specific time (e.g., 10 seconds)
setTimeout(closeModal, 10000); 


//EMAIL VALIDATION//
document.getElementById('contactForm').addEventListener('submit',
    function (event) {
        //overrides default browser refresh when submit it clicked//
        event.preventDefault();

        //variables to validate each field is filled out//
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        //email pattern checks for all symbols needed for an email address//
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        //displays message if fields are filled out//
        const valMsg = document.getElementById('validateMsg');

        if (!firstName || !lastName || !phone || !message) {
            //checks if fields have been filled out//
            valMsg.innerHTML = '<p style="color: red;"=>Please fill out all fields.</p>';
        } else if (!emailPattern.test(email)) {
            //checks for valid email//
            valMsg.innerHTML = '<p style="color: red;">Please enter a valid email.</p>';
        } else {
            //thank you message if all fields are filled out correctly//
            valMsg.innerHTML = '<p style="color: red;">Thank you for your submition!</p>';
        }
    }
)

const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    message: message,
    subscribe: document.getElementById('subscription').checked
};
//displays what user wrote in console//
console.log(JSON.stringify(formData));