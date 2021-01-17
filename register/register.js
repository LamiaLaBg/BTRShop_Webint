var users=[];

function createUser(){
    //new user info
    var firstname= document.querySelector('#firstname').value;
    var lastname= document.querySelector('#lastname').value;
    var email= document.querySelector('#email').value;
    var pass= document.querySelector('#password').value;
    var passconf = document.querySelector('#passconf').value;
    var phonenum= "";

    var newUser=[firstname , lastname,  email, pass, passconf, phonenum];


    //get all registered users
    users= JSON.parse(sessionStorage.getItem('users')) || [];
    //check if the new user exist in the registered users
    var exist= false;
    //check if the pass & passconf are the same
    var confirmation=true;


    
    for (let i=0; i<users.length; i++){
        user= users[i];
        if(user[0]==newUser[0] && user[1]==newUser[1] && user[2]==newUser[2] && user[3]==newUser[3] && user[4]==newUser[4]){
            exist=true;
            users.splice(i,1);
            break;
        }
        if(newUser[3] != newUser[4]){
            confirmation=false;
            break;
        }
    }

    users.push(newUser); //push at the end

    if(!confirmation){
        alert("Passwords do not match!");
        document.querySelector('#password').value="";
        document.querySelector('#passconf').value="";
    }else if(exist){
        alert("You already have an account, we are logging you in!")
        window.sessionStorage.setItem('users', JSON.stringify(users));
        window.sessionStorage.setItem('online', "true");
        goToSearch();
    }else{
        alert("New user is created");
        //store new user  
        window.sessionStorage.setItem('users', JSON.stringify(users));
        window.sessionStorage.setItem('online', "true");
        // //go to add search for products
        goToSearch();
    }
    return false;
}

function goToSearch(){
    document.location.href="index.html";
    return false;
}