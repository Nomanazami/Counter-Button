// document.querySelectorAll("button")
// document.body.style.backgroundColor = "blue"

document.getElementById('box').style.height='90px'
document.getElementById('box').style.width='170px'
document.getElementById('box').style.backgroundColor='green'
document.getElementById('box').style.color='brown'
// document.getElementsByTagName("button").style.backgroundColor='red'
// document.getElementsByTagName("button").style.color='yellow'

let number = +document.getElementsByTagName('span')[0].innerHTML
function plus(){
        number++
        document.getElementsByTagName('span')[0].innerHTML = number
}
function minus(){
    number--
    document.getElementsByTagName('span')[0].innerHTML = number
}
function reset(){
    number=0
    document.getElementsByTagName('span')[0].innerHTML = number
}