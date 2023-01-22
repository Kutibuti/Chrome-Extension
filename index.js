let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
})

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) 


console.log(leadsFromLocalStorage)

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        //listItems += "<li> <a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a> </li>"
        listItems +=
            `
            <li>
                <a target="_blank" href="${myLeads[i]}">
                ${myLeads[i]}
                </a> 
            </li>
            `
        //const li = document.createElement("li")
        //ulEl.textContent = myLeads[i]
        //ulEl.append(li)
    }
    ulEl.innerHTML = listItems
    //inputEl.value = ""
}