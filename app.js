let toggleBtn = document.getElementById('menu-toggle');
let sidebarWrapper = document.getElementById('wrapper');
let video_add= document.getElementById('videoAdd')

function main() {
    // check whether we are logged in or not
    var online= window.sessionStorage['online'] || "false";
    if(online == "true"){
        document.getElementById("signin").style.display="none";
        users=JSON.parse(sessionStorage.getItem('users')) ;        
        document.getElementById("name-dropdown").textContent=users[users.length-1][0]+ " "+ users[users.length-1][1];
    }else{
        document.getElementById("name-dropdown").style.display="none";
        document.getElementById("profile").style.display="none";
        document.getElementById("logout").style.display="none";
    }
    return false;

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
    const val  = input.value;
    var pro = data[val];
    var i = 0;
    if (pro && i===0){
        i=1;
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

        //creation the div pros and cons titles:
        var divTitlespros_and_cons =  document.createElement('div');
        divTitlespros_and_cons.setAttribute('id','divTitlespros_and_cons'+ j);
        divTitlespros_and_cons.setAttribute('class','row justify-content-center');

        //add pros title and the unhappy emoji:
        var emojihappy = document.createElement('img');
        emojihappy.setAttribute('src',"/images/emoji-happy.png");
        
        divTitlespros_and_cons.appendChild(emojihappy);
        h_pros= document.createElement('h4');
        h_pros.appendChild(document.createTextNode('PROS'));
        h_pros.setAttribute("class", "col-sm-3");
        divTitlespros_and_cons.appendChild(h_pros);
        
        //styling emoji image
        emojihappy.setAttribute("height", "10%");
        emojihappy.setAttribute("class", "col-sm-1 left");


        //adding cons here
        var emojiUnhappy = document.createElement('img');
        emojiUnhappy.setAttribute('src',"/images/emoji-unhappy.jpeg");

        //add cons title and the unhappy emoji
        divTitlespros_and_cons.appendChild(emojiUnhappy);
        h_cons= document.createElement('h4');
        h_cons.appendChild(document.createTextNode('CONS'));
        h_cons.setAttribute("class", "col-sm-4");
        divTitlespros_and_cons.appendChild(h_cons);

        //styling emoji image
        emojiUnhappy.setAttribute("height", "10%");
        emojiUnhappy.setAttribute("class", "col-sm-1");
        
        div.appendChild(divTitlespros_and_cons);
        // creation of the div and the ul (list) of and  pros and cons div
        var divlistrow =  document.createElement('div');
        divlistrow.setAttribute('id','listrowarticle'+ j);
        divlistrow.setAttribute('class','row justify-content-center');

        //pros ul
        var ul1 = document.createElement('ul');  // adding pros and cons
        var pros = pro[key].positive.split(",");
        for(i=0;i<pros.length;i++){
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(pros[i]));
            ul1.appendChild(li)
            li.style.margin= 0; 
            li.style.padding= 0;
        }
        
        //cons ul
        var ul2 = document.createElement('ul');
        var cons = pro[key].negative.split(",");
        for(i=0;i<cons.length;i++){
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(cons[i]));
            ul2.appendChild(li)
            li.style.margin= 0; 
            li.style.padding= 0;
        }

        

        //appending ul1 and ul2 to div here 
        divlistrow.appendChild(ul1);
        divlistrow.appendChild(ul2);

        //ul1 and ul2 styling here 
        ul1.style.margin= 0; 
        ul1.style.padding= 0;
        ul2.style.margin= 0; 
        ul2.style.padding= 0;
        ul1.setAttribute('class',"col-sm-4");
        ul2.setAttribute('class',"col-sm-4");
        
        
        
        //appending divlistrow to the div article i
        div.appendChild(divlistrow);
        

        //comment box
        //create the division for the comment
        var mandiv = document.createElement('div') //main div tag to store the comment box
        mandiv.setAttribute("id", "best_c"+j)
        
        // best comment title
        var divcomment =  document.createElement('div');
        divcomment.setAttribute('id','divcomment'+ j);
        divcomment.setAttribute('class','row justify-content-center');

        var p_bestCom = document.createElement('p');
        p_bestCom.setAttribute('class', 'col-8 left')
        p_bestCom.appendChild(document.createTextNode('Best Comments'));
        divcomment.appendChild(p_bestCom);


        // best comment editor info
        //adding girl image 
        var img_div = document.createElement('div') //div tag to hold image
        img_div.setAttribute("id", "img_div"+j);
        img_div.setAttribute('class','row justify-content-center');
        var girl = document.createElement('img');
        girl.setAttribute('src',"/images/lamia_photo.jpeg");
        girl.setAttribute("class", "center");
        girl.setAttribute("height", "5%");
        img_div.appendChild(girl);
        //mandiv.appendChild(img_div);
        girl.setAttribute('class', "col-sm-1");

        //best comment content
        var comment_info_div = document.createElement('div') //div tag to hold image
        comment_info_div.setAttribute("id", "comment_info_div"+j);
        comment_info_div.setAttribute('class','row justify-content-center');

        //adding user name
        var usr = document.createElement('h6');
        var comment= document.createElement('h6');
        usr.appendChild(document.createTextNode(pro[key].user+" says"))
        comment.appendChild(document.createTextNode(pro[key].says))
        
        img_div.appendChild(usr);
        mandiv.appendChild(img_div);
        usr.setAttribute('class', "col-7")
        

        //appending divcomment to the div article i
        mandiv.appendChild(divcomment);
        //appending divcomment to the div article i
        mandiv.appendChild(img_div);
        div.appendChild(mandiv);
        //append mandiv to div
        
        comment_info_div.appendChild(comment);
        mandiv.appendChild(comment_info_div);
        comment.setAttribute('class', "col-8")

        

        mainnode.appendChild(div); //append div to mainnode
        //mainnode.appendChild(linebreak);
        
        }
        
    }
}