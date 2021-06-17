function eat(){
    let x = document.getElementById("eat")
    let y = document.getElementById("drink")
    let b = document.getElementById("btn1")
    let bt = document.getElementById("btn2")
    b.style.backgroundColor = "grey"
    bt.style.backgroundColor = "rgb(219, 218, 218)"

    x.style.display = "block"
    y.style.display = "none"

}

function drink(){
    let x = document.getElementById("eat")
    let y = document.getElementById("drink")
    let b = document.getElementById("btn1")
    let bt = document.getElementById("btn2")
    b.style.backgroundColor = "rgb(219, 218, 218)"
    bt.style.backgroundColor = "grey"
    x.style.display = "none"
    y.style.display = "block"

}