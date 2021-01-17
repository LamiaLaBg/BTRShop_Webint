let toggleBtn = document.getElementById('menu-toggle');
let sidebarWrapper = document.getElementById('wrapper');
function main() {
    // check whether we are logged in or not
}

function toggleDropdown(){
    var menu = document.getElementById("dropdown");
    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


function main(){
    //load info about user
    var users = JSON.parse(window.sessionStorage.getItem('users'));
    user=users[users.length -1]
    document.getElementById("firstname").value=user[0];
    document.getElementById("lastname").value=user[1];
    document.getElementById("email").value=user[2];
    document.getElementById("phone_num").value=user[5];
}


function updateInfo(){

    var firstname=document.getElementById("firstname").value;
    var lastname= document.getElementById("lastname").value;
    var email= document.getElementById("email").value;
    var phone_num= document.getElementById("phone_num").value;

    users= JSON.parse(window.sessionStorage.getItem('users'));

    user= users.pop();

    user[0]=firstname;
    user[1]=lastname;
    user[2]=email;
    if(phone_num){
        user[5]=phone_num;
    }
    
    users.push(user);
    window.sessionStorage.setItem('users', JSON.stringify(users));
    
}

function importImage(){
    alert("HI")
    var widget = cloudinary.applyUploadWidget({ 
        cloudName: 'demo', 
        uploadPreset: 'blog_upload' }, 
        (error, result) => { 
           if (!error && result && result.event === "success") { 
                console.log('Done uploading..: ', result.info); 
              }
    
         }); 

    myWidget.open();
    return false;
      
}