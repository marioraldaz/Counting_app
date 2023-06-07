let countEl = document.getElementById("count-el")
let count = 0
let previousEntries = document.getElementById("previous-entries")

function increment(){
    count++
    countEl.innerText=count
}

function save(){
    previousEntries.textContent+=count+" - "
    countEl.textContent=0
    count=0
}



