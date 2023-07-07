function rollDice(){
    const num1 = Math.ceil(Math.random()*6);
    const num2 = Math.ceil(Math.random()*6);
    var title = "";
    if (num1>num2){
        title="Player1 Win";
    }
    else if(num1<num2){
        title="Player2 Win";
    }
    else{
        title="Draw";
    }
    document.querySelector("h1").textContent = title;
    const img1 = "./images/dice"+num1+".png";
    const img2 = "./images/dice"+num2+".png";
    document.querySelector(".img1").setAttribute("src",img1);
    document.querySelector(".img2").setAttribute("src",img2);
}