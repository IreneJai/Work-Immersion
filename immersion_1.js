
function validateForm(){
    var title = document.getElementById("title").value;
    var text = document.getElementById("text").value;
    var image = document.getElementById("image").value;

    if(title == "") {
        alert("Title is Required");
        return false;
    }

    if(text =="") {
        alert("Text is required");
        return false;
    }
    

    return true;
}



function showData() {
    var postList;
    if(localStorage.getItem("postList") == null){
        postList =[];
    }
    else {
        postList = JSON.parse(localStorage.getItem("postList"));
    }

    var html ="";

    postList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.title + "</td>";
        html += "<td>" + element.text + "</td>";
        html += '<td><button onclick="deleteData('+ 
        index +
        ')" class="btn btn-danger">Delete</button><button onclick="updateData(' +
        index + 
        ')" class="btn btn-warning m-2">Edit</button></td>';
        html += '<td><img src="' + element.image + '" width="100"></td>';
        html += "</tr>";
    });

    document.querySelector("#postTable tbody").innerHTML = html;
}


document.onload = showData();


function addData() {
    
    if(validateForm() == true) {
        var title = document.getElementById("title").value;
        var text = document.getElementById("text").value;
        var image = document.getElementById("image").value;

        var postList;
        if(localStorage.getItem("postList") == null){
            postList =[];
        }
        else {
            postList = JSON.parse(localStorage.getItem("postList"));
        }

        postList.push({
            title : title,
            text: text,
            image: image,
        });

        localStorage.setItem("postList", JSON.stringify(postList));
        showData();
        document.getElementById("title").value = ""; 
        document.getElementById("text").value = "";
        document.getElementById("image").value = "";
    }
}


function deleteData(index) {
    var postList;
    if(localStorage.getItem("postList") == null){
        postList =[];
    }
    else {
        postList = JSON.parse(localStorage.getItem("postList"));
    }

    potList.splice(index,1);
    localStorage.setItem("postList", JSON.stringify (postList));
    showData();
}

function updateData(index){
    
    document.getElementById("Submit").style.display ="none";
    document.getElementById("Update").style.display ="block";

    var postList;
    if(localStorage.getItem("postList") == null) {
        postList = [];
    } else {
        postList = JSON.parse(localStorage.getItem ("postList"));
    }

    document.getElementById("title").value = postList[index].title;
    document.getElementById("text").value = postList[index].text;
    document.getElementById("image").value = postList[index].image;

    document.querySelector("#Update").onclick = function() {
        if(validateForm() == true){
            postList[index].title = document.getElementById("title").value;
            postList[index].text = document.getElementById("text").value;
            postList[index].image = document.getElementById("image").value;
            localStorage.setItem("postList", JSON.stringify(postList));

            showData();

            document.getElementById("title").value = "";
            document.getElementById("text").value = "";
            document.getElementById("image").value = "";

             
    document.getElementById("Submit").style.display ="block";
    document.getElementById("Update").style.display ="none";
        }
    }
}
