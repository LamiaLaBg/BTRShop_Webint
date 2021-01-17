function removeLoggedUser(){
    // users= JSON.parse(window.sessionStorage.getItem('users'));
    // users.pop();
    // window.sessionStorage.setItem('users', JSON.stringify(users));
    window.sessionStorage.setItem('online', "false");
    document.location.href="index.html";
    return false;
}