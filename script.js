let box = document.getElementsByTagName("p")
let start = document.querySelector("button")
let game = document.querySelector(".game")
let positions = [
 "first","second", "third" , "four", "five", "six",
 "seven", "eight", "nine", "ten", "eleven", "twelve",
 "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen",
 "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four",
 "twenty-five"," twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty"]
let count = 0
let score = 0





const position = ()=>{
    let randomize = Math.round(Math.random() * positions.length) - 1
     start.style.display = "none"
    for(let j=0;j<box.length;j++){
        box[j].unselectable = "on"
        box[j].style.color="black"
                setTimeout(()=>{
          box[j].style.color="#BDC3C7"
          count+=1
        },2000)
    }
    for(let i=0;i<box.length;i++){
        box[i].classList.add(positions[randomize])
        positions.splice(randomize,1)
    }
}

const reveal = (e)=>{
    let target = e.target
    if(count>0 && target.innerHTML === "*" && target.style.color!=="white"){
        target.style.color ="#BB1B0D"
        score+=1
        target.classList.add("active")
        target.style.filter = "drop-shadow(1px 8px 15px red) invert(75%)"
        target.style.border = "none"
    }else if(count>0 && target.innerHTML !== "*" && target.innerHTML.length===1){
        target.classList.add("active")
        alert("Game Over!")
        window.location.reload()
    }
    
    if(score>4){
        alert("Congratulations!")
        window.location.reload()
    }
    
}

game.addEventListener("click",(e)=>{
    console.log(e.target.innerHTML.length)
})
game.addEventListener("click",reveal)
start.addEventListener('click',position)