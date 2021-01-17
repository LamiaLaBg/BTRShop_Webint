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

        var mainnode = document.getElementById('articles');

        //var linebreak = document.createElement('br');
        var div = document.createElement('div');  //main div element for each item
        div.setAttribute('id','article'+ j);
        div.style.paddingTop = '50px';

        //create tags here

        var divTitle = document.createElement('div');  
        divTitle.setAttribute('id','divTitle'+j);
        divTitle.setAttribute('class','row justify-content-center');
        
        //h1 tag for title 
        var h1titre = document.createElement('h5');
        var h1rate = document.createElement('h5');
        var text = document.createTextNode((j+1)+".\u00A0"+pro[key].title);
        var rate= document.createTextNode("Rating - "+pro[key].rating);
        h1titre.appendChild(text);
        h1rate.appendChild(rate);

        h1titre.setAttribute('class',"col-4 ")
        h1rate.setAttribute('class',"col-4 text-right")

        divTitle.appendChild(h1titre);
        divTitle.appendChild(h1rate);

        div.appendChild(divTitle);
        
        //h1titre.style.textAlign = 'center';
        //h1rate.style.textAlign = 'center';
    


        // creation of div and styling
        var divDescription = document.createElement('div');
        divDescription.setAttribute('id','divDescription'+j);
        divDescription.setAttribute('class', "row justify-content-center")

        var divDescriptionImg = document.createElement('div');
        divDescriptionImg.setAttribute('id','divDescriptionImg'+j);
        divDescriptionImg.setAttribute('class', "col-4 ");

        var divDescriptionText = document.createElement('div');
        divDescriptionText.setAttribute('id','divDescriptionText'+j);
        divDescriptionText.setAttribute('class', "col-3 ");

        
        divDescription.appendChild(divDescriptionImg);
        divDescription.appendChild(divDescriptionText);
        div.appendChild(divDescription);


        // adding image in divDescriptionImg
        var img = document.createElement('img');
        img.src = pro[key].image
        divDescriptionImg.appendChild(img); //append image


        //addin description in details
        var description_details=document.createElement("details");
        var p2 = document.createElement('p');
        var text = document.createTextNode(pro[key].comment);
        
        description_details.appendChild(p2)
        p2.appendChild(text);
        divDescriptionText.appendChild(description_details);

        //addind link to the website product divDescriptionText

        // Buying link here
        


        //var p4 = document.createElement('p');
        //var buy = document.createElement('a');
        var buttonGoto= document.createElement('button');
        buttonGoto.setAttribute('class', 'btn btn-info')
        buttonGoto.innerHTML='Go to website'
        //var textGoto = document.createTextNode('Go to website');
        var link = pro[key].website;
        //buttonGoto.onclick="self.location.href='"+link+"'";
        //buttonGoto.setAttribute('onclick',"console.log("+link+")");

        buttonGoto.onclick = function(){
            self.location.href=link;
            console.log(link);
        }
        
        divDescriptionText.appendChild(buttonGoto);

        /*
        buy.appendChild(textGoto);
        buy.style.color = 'red';
        p4.appendChild(buy);
        */

        //
   
    
    
        // creation of the pros and cons div
        var divlistrow =  document.createElement('div');
        divlistrow.setAttribute('id','listrowarticle'+ j);
        divlistrow.setAttribute('class','row justify-content-center');

        //adding pros here 
        var emojihappy = document.createElement('img');
        emojihappy.setAttribute('src',"/images/emoji-happy.png");

        var ul1 = document.createElement('ul');  // adding pros and cons
        var pros = pro[key].positive.split(",");

        ul1.appendChild(document.createElement('h4').appendChild(document.createTextNode('PROS')));
        ul1.appendChild(emojihappy);
        emojihappy.setAttribute("height", "10%");
        emojihappy.setAttribute("class", "center");
        for(i=0;i<pros.length;i++){
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(pros[i]));
            ul1.appendChild(li)
        }
        

        //adding cons here
        var emojiUnhappy = document.createElement('img');
        emojiUnhappy.setAttribute('src',"/images/emoji-unhappy.jpeg");

        var ul2 = document.createElement('ul');  
        var cons = pro[key].negative.split(",");

        ul2.appendChild(document.createElement('h4').appendChild(document.createTextNode('CONS')));
        ul2.appendChild(emojiUnhappy);
        emojiUnhappy.setAttribute("height", "10%");
        for(i=0;i<cons.length;i++){
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(cons[i]));
            ul2.appendChild(li)
        }

        

        //appending ul1 and ul2 to div here 
        divlistrow.appendChild(ul1);
        divlistrow.appendChild(ul2);
        //div.appendChild(divlistrow);

        //ul1 and ul2 styling here 
        ul1.setAttribute('class',"col-4");
        ul2.setAttribute('class',"col-4");

        //comment box
        var mandiv = document.createElement('div') //main div tag to store the comment box
        mandiv.setAttribute("id", "best_c"+j)
        
        
        

        //best comment element
        mandiv.appendChild(document.createTextNode('Best Comments'));
        mandiv.setAttribute('class', 'row');
        
       

        //adding girl image 
        var img_div = document.createElement('div') //div tag to hold image
        img_div.setAttribute("id", "img_div"+j);
        img_div.setAttribute('class','row');
        var girl = document.createElement('img');
        girl.setAttribute('src',"/images/girl.png");
        girl.setAttribute("width", "10%");
        girl.setAttribute("height", "40%");
        img_div.appendChild(girl);
        
        //mandiv.appendChild(img_div);
        girl.setAttribute('class', "col-4");



        //adding user name
        var usr = document.createElement('h6');
        var linebreak = document.createElement('br');
        if (j===0){

            usr.appendChild(document.createTextNode('user@batman\n'))
            usr.appendChild(linebreak)
            usr.appendChild(linebreak)
            
            usr.appendChild(document.createTextNode('Great performance and best in class features'))
        }
        else{
            usr.appendChild(document.createTextNode('user@superman\n'))
            usr.appendChild(linebreak);
            usr.appendChild(linebreak)
            
            usr.appendChild(document.createTextNode('Great design and amazing battery life'))
        }
        
        img_div.appendChild(usr)
        mandiv.appendChild(img_div);
        usr.setAttribute('class', "col-8")



        mandiv.appendChild(img_div);
        divlistrow.appendChild(mandiv);





        //append mandiv to div
        div.appendChild(divlistrow);

        

        mainnode.appendChild(div); //append div to mainnode
        //mainnode.appendChild(linebreak);
        
        }
        
    }
}