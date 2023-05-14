let hour = document.querySelector("#hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let t =document.getElementById("t")


function time(){
    let now = new Date();

    hour.innerText="0" + now.getHours()%12;
    min.innerText = now.getMinutes()<10 ? "0" + now.getMinutes() : now.getMinutes();
    sec.innerText = now.getSeconds()<10 ? "0" + now.getSeconds() : now.getSeconds();
    t.innerText = now.getHours()<12 ? "AM" :"PM"

    setTimeout(time,1000);
}

time();