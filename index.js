let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBTn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

deleteBTn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

console.log(leadsFromLocalStorage)

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        //listItems += "<li> <a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a> </li>"
        listItems +=
            `
            <li>
                <a target="_blank" href="${leads[i]}">
                ${leads[i]}
                </a> 
            </li>
            `
        //const li = document.createElement("li")
        //ulEl.textContent = myLeads[i]
        //ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}