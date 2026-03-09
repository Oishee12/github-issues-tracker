const loadIssues = () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then((res) => res.json())
        .then(json => displayIssues(json.data));
}
// function for open button
let openIssues;
const loadOpenIssues = async (status) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    loadingSpinner.classList.remove('hidden');

    try {
        const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
        const json = await res.json();

        openIssues = json.data.filter(issue => issue.status === status);
       displayOpenCard(openIssues);
    }
    finally {
        loadingSpinner.classList.add('hidden');
    }
    const openIssuesNumber = document.getElementById('issue-number');
    openIssuesNumber.innerText = openIssues.length;
}
// code for display open card
const displayOpenCard = (cards)=>{
cards.forEach(card => {
        console.log(card);
    })
}


// function for closed button
let closedIssues;
const loadClosedIssues = async (status) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    loadingSpinner.classList.remove('hidden');

    try {
        const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
        const json = await res.json();

        closedIssues = json.data.filter(issue => issue.status === status);
        displayClosedCard(closedIssues);
    }
    finally {
        loadingSpinner.classList.add('hidden');
    }
    const closedIssuesNumber = document.getElementById('issue-number');
    closedIssuesNumber.innerText = closedIssues.length;
}
// code for display closed card
const displayClosedCard = (cards)=>{
cards.forEach(card => {
        console.log(card);
    })
}


// displayIssues function
const displayIssues = (issues) => {
    const allIssuesNumber = document.getElementById('issue-number');
    allIssuesNumber.innerText = issues.length;
    issues.forEach(card => {
        console.log(card);
    })
    

    const btnContainer = document.getElementById('btn-container');
    btnContainer.innerHTML = "";

    //    for(issue of issues){
    const btnDiv = document.createElement('div');
    btnDiv.innerHTML = `
    <button 
    id="tab-all" onclick="loadIssues()"
    class="btn btn-outline px-6 lg:px-10 mr-3 lg:mr-5">All</button>

    <button 
    id="tab-all" onclick="loadOpenIssues('open')"
    class="btn btn-outline px-4 lg:px-8 mr-3 lg:mr-5">Open</button>

    <button 
    id="tab-all" onclick="loadClosedIssues('closed')"
    class="btn btn-outline px-3 lg:px-7">Closed</button>
    `
    btnContainer.append(btnDiv);
    //    }
}
loadIssues();