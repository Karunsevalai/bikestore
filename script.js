
let data='{"bikes":[{"img":"./images/imga1.jpg","name":"pulsor","no":123,"price":10000},{"img":"./images/imgb1.jpg","name":"platina","no":1223,"price":20000}]}';


let obje=JSON.parse(data);

function dec(){
    obje.bikes.sort(function(a,b){
        return b.price - a.price;
    });
    render();
}
function asse(){
obje.bikes.sort(function(a,b){
    return a.price - b.price;
});
render();
}
var con=document.getElementById("c");
var i=0;
    for(const key in obje.bikes){
       //img
var cimg=document.createElement("div");
cimg.setAttribute('class','img');
var image=document.createElement("img");
image.setAttribute('alt','img');
image.setAttribute('src',`${obje.bikes[i].img}`);//src
cimg.appendChild(image);
//img
//content
var co=document.createElement("div");
co.setAttribute('class','contend');
var p1=document.createElement("p");
var p2=document.createElement("p");
var p3=document.createElement("p");
p1.innerHTML=`Bike Model: ${obje.bikes[i].name}`;
p2.innerHTML=`Bike No: ${obje.bikes[i].no}`;
p3.innerHTML=`Price: ${obje.bikes[i++].price}`;
co.appendChild(p1);
co.appendChild(p2);
co.appendChild(p3);

//content
    var pdiv=document.createElement("div");
    pdiv.innerHTML="";
    pdiv.setAttribute('class','Product');
    con.appendChild(pdiv);
    pdiv.appendChild(cimg);
    pdiv.appendChild(co);
    }
function render(){
  //  var con=document.getElementById("c");
  con.innerHTML="";
    var i=0;
        for(const key in obje.bikes){
           //img
    var cimg=document.createElement("div");
    cimg.setAttribute('class','img');
    var image=document.createElement("img");
    image.setAttribute('alt','img');
    image.setAttribute('src',`${obje.bikes[i].img}`);//src
    cimg.appendChild(image);
    //img
    //content
    var co=document.createElement("div");
    co.setAttribute('class','contend');
    var p1=document.createElement("p");
    var p2=document.createElement("p");
    var p3=document.createElement("p");
    p1.innerHTML=`Bike Model: ${obje.bikes[i].name}`;
    p2.innerHTML=`Bike No: ${obje.bikes[i].no}`;
    p3.innerHTML=`Price: ${obje.bikes[i++].price}`;
    co.appendChild(p1);
    co.appendChild(p2);
    co.appendChild(p3);
    
    //content
        var pdiv=document.createElement("div");
        pdiv.innerHTML="";
        pdiv.setAttribute('class','Product');
        con.appendChild(pdiv);
        pdiv.appendChild(cimg);
        pdiv.appendChild(co);
        }
        const nav=document.querySelector(".menu");
        const moon=document.getElementById("moon");
        const rigbutton=document.querySelector(".right-bar");
        const images=document.querySelectorAll(".Product");
        const root = document.querySelector(':root');
        const filter=document.querySelector(".filterBar");
        const fil=document.querySelector(".fil");
        
        filter.addEventListener("click",()=>{
          fil.classList.add("active");
        });
        
        fil.addEventListener("click",()=>{
            fil.classList.remove("active");
          });
          
        // --theme:rgb(22, 5, 86);
        moon.addEventListener("click",()=>{
            if(moon.classList.contains("fa-moon-o")){
                moon.classList.remove("fa-moon-o");
                moon.classList.add("fa-sun-o");
                root.style.setProperty('--theme', '#0e031f');
                root.style.setProperty('--filter', '#ffff');
            }
            else{
                moon.classList.remove("fa-sun-o");
                moon.classList.add("fa-moon-o");
                root.style.setProperty('--theme', '#ffff');
                root.style.setProperty('--filter', 'black');
            }
        });
        
        rigbutton.addEventListener("click",()=>{
           
            if(nav.classList.contains("active")){
                nav.classList.remove("active");
                rigbutton.classList.remove("isactive");
            }
            else{
                nav.classList.add("active");
               rigbutton.classList.add("isactive");
            }
        });
        
        nav.addEventListener("click",()=>{
            nav.classList.remove("active");
            rigbutton.classList.remove("isactive");
        });
        
        
        images.forEach((image)=>{
        image.addEventListener("click",()=>{
            remove();
            image.classList.add("isactived");
        });
        });
        images.forEach((image)=>{
            image.addEventListener("dblclick",()=>{
                if(image.classList.contains("isactived")){
                    image.classList.remove("isactived");
                }
            });
            });
        
        function remove(){
            images.forEach((image)=>{
                  image.classList.remove("isactived")
            });
        };
        
}












//****************************************************************************************** */
const nav=document.querySelector(".menu");
const moon=document.getElementById("moon");
const rigbutton=document.querySelector(".right-bar");
const images=document.querySelectorAll(".Product");
const root = document.querySelector(':root');
const filter=document.querySelector(".filterBar");
const fil=document.querySelector(".fil");

filter.addEventListener("click",()=>{
  fil.classList.add("activa");
});

fil.addEventListener("click",()=>{
    fil.classList.remove("activa");
  });
  
// --theme:rgb(22, 5, 86);
moon.addEventListener("click",()=>{
    if(moon.classList.contains("fa-moon-o")){
        moon.classList.remove("fa-moon-o");
        moon.classList.add("fa-sun-o");
        root.style.setProperty('--theme', '#0e031f');
        root.style.setProperty('--filter', '#ffff');
    }
    else{
        moon.classList.remove("fa-sun-o");
        moon.classList.add("fa-moon-o");
        root.style.setProperty('--theme', '#ffff');
        root.style.setProperty('--filter', 'black');
    }
});

rigbutton.addEventListener("click",()=>{
   
    if(nav.classList.contains("active")){
        nav.classList.remove("active");
        rigbutton.classList.remove("isactive");
    }
    else{
        nav.classList.add("active");
       rigbutton.classList.add("isactive");
    }
});

nav.addEventListener("click",()=>{
    nav.classList.remove("active");
    rigbutton.classList.remove("isactive");
});


images.forEach((image)=>{
image.addEventListener("click",()=>{
    remove();
    image.classList.add("isactived");
});
});
images.forEach((image)=>{
    image.addEventListener("dblclick",()=>{
        if(image.classList.contains("isactived")){
            image.classList.remove("isactived");
        }
    });
    });

function remove(){
    images.forEach((image)=>{
          image.classList.remove("isactived")
    });
};


//............................................

const decrement=document.getElementById("low");
const increment=document.getElementById("high");

decrement.addEventListener("click",()=>{
   asse();
});
increment.addEventListener("click",()=>{
   dec();
 });

