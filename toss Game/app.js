const h2 = document.querySelector("#h2");
const img = document.querySelector("#img")

// masjid && chand

function toss(selected){
    console.log(selected);
    
    let randomnumber =Math.ceil( Math.random()*2)
    console.log(randomnumber);
    

    if(
        (selected === "masjid" && randomnumber === 1) || 
       (selected === "chand" && randomnumber === 2) 
    ){
        console.log("you won the toss");
        h2.innerHTML = "you won the toss"
    }else{
        console.log("you loss the toss");
        h2.innerHTML = "you loss the toss"
        
    }
    if(randomnumber === 1){
        img.src = "https://i.ebayimg.com/images/g/KQYAAOSwUf5hoOxr/s-l400.jpg";

    } else {
        img.src =  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW8IvbK3sp0kHNUW8LuRPZ6RO-uVqPK1TGDku90bOHPCzt6fgpJtd7C8g7nHIHDufl67E&usqp=CAU";
    }
       
}