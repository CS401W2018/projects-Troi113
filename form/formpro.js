document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    const first=document.getElementById("firstNameInput").value;
    const last=document.getElementById("lastNameInput").value;
    const age=document.getElementById("dateInput").value;
    const number=document.getElementById("phoneInput").value;
    const gender=document.querySelector('input[name="gender"]:checked');
    const state=stateSelect.value;

    if(!first||!last){
        alert("Please provide your full name.");
        return;
    }

    if(!age||age<18){
        alert("You must be 18 years of age or older to submit this form");
        return;
    }

    if(!number){
        alert("Please enter phone number");
        return;

    }

    if(!gender){
        alert("Please pick gender");
        return;
    }

    const data={
        firstNameInput:first,
        lastNameInput:last,
        dateInput:age,
        numberInput:number,
    }

    const xhr = new XMLHttpRequest();
    xhr.open ("GET", "submit.json", true);
    xhr.setRequestHeader ("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response=JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML=response.message;
            document.getElementById("myForm").innerHTML="";
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');

        }
    };

    xhr.send(JSON.stringify(data));
    console.log(data);
});