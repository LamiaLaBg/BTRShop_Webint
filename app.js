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


//search bar function here

function searchbar(){
    input = document.getElementById("myInput");
    
    const val  = input.value
    var pro = data[val]
    if (pro){
        for(j = 0; j< 2;j++){
            var key = Object.keys(pro)[j];
            //console.log(pro.key);



        var mainnode = document.getElementById('content');
        var linebreak = document.createElement('br');
        var div = document.createElement('div');  //main div element for each item
        
        div.style.paddingTop = '50px';
        
        


    //create tags here

    //h1 tag for title 
        var h1 = document.createElement('h5');
        var text = document.createTextNode((j+1)+".\u00A0"+pro[key].title+'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'.repeat(10)+"Rating - "+pro[key].rating);
        h1.appendChild(text);
        h1.appendChild(linebreak);
        div.appendChild(h1);
        div.appendChild(linebreak);
        div.appendChild(linebreak);
        h1.style.textAlign = 'center';
        h1.style.padding = '10px';
    

    //image and description
       var p1 = document.createElement('p');
       var img = document.createElement('img');
       var p2 = document.createElement('p');
       var text = document.createTextNode(pro[key].comment);
       img.src = pro[key].image
       p1.appendChild(img); //append image
       p2.appendChild(text); //append text to p2
       div.appendChild(p1);   //append p1 to div
       div.appendChild(p2);
       p1.style.textAlign = 'center';
       p2.style.textAlign = 'center';

    
    var p3 = document.createElement('p'); // paragraph element to add pros and cons


    // Buying link here
    var p4 = document.createElement('p');
    var buy = document.createElement('a');
    var text = document.createTextNode('BUY HERE');
    buy.href = pro[key].website;
    buy.appendChild(text);
    buy.style.color = 'red';
    p4.appendChild(buy);
    div.appendChild(p4); 
   
   //adding pros here 
    
    var ul1 = document.createElement('ul');  // adding pros and cons
    var pros = pro[key].positive.split(",");
    ul1.appendChild(document.createElement('h4').appendChild(document.createTextNode('PROS')));
    for(i=0;i<pros.length;i++){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(pros[i]));
        ul1.appendChild(li)
    }
   //ul1 styling here 
    //ul1.style.float = 'left';
  //appending ul1 to div here
    div.appendChild(ul1);


    


    //adding cons here
    var ul2 = document.createElement('ul');  
    var cons = pro[key].negative.split(",");
    ul2.appendChild(document.createElement('h4').appendChild(document.createTextNode('CONS')));
    for(i=0;i<cons.length;i++){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(cons[i]));
        ul2.appendChild(li)
    }
   //ul2 styling below 
    ul2.style.float = 'right';
    ul2.style.paddingBottom = '50px';

    
    
    div.appendChild(ul2);

    
    


    



     

        div.appendChild(linebreak);
        mainnode.appendChild(div); //append div to mainnode
        
        mainnode.appendChild(linebreak);


        }

}
    
}