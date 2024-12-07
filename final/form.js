document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    const user=document.getElementById("userNameInput").value;
    const frag=document.getElementById("fragranceInput").value;
    const over=document.getElementById("overallInput").value;
    const sill=document.getElementById("sillageInput").value;
    const perf=document.getElementById("performanceInput").value;
    const comm=document.getElementById("commentInput").value;
    const agr = document.getElementById("agree").checked;

    if (!agr) {
        alert("You did not give us consent to publicize your data");
        return;
    }

    const data={
        userName: user,
        fragName: frag,
        overAll: over,
        sillage: sill,
        performance: perf,
        comment: comm

    }

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response=JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML=response.message;
            document.getElementById("clear").innerHTML="";
        } else if(xhr.readystate === 4){
            alert( 'Error submitting form.');
        }
    };

    xhr.send(JSON.stringify(data));
    console.log(data);
})