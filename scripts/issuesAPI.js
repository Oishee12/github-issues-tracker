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
const displayOpenCard = (cards) => {
    const allIssues = document.getElementById('all-issues');
    allIssues.innerHTML = "";
    cards.forEach(card => {
        console.log(card);
        const openCards = document.createElement('div');
        openCards.innerHTML = `
        <div class="h-full">
                <div class="card h-full w-full lg:w-60 bg-base-100 card-sm shadow-sm border border-gray-200 border-t-4 
                ${card.status ==='open'?`border-t-[#00A96E]`:`border-t-[#A855F7]`}">
                
                    <div class="card-body h-full">
                        <div class="flex justify-between items-center">
                            <div class="flex justify-between">
                                <div>
                                    ${card.status === 'open'?`<img class="w-8 h-8"  src="./assets/Open-Status.png" alt="Open-Status"></img>`:`<img class="w-8 h-8"  src="./assets/Closed- Status .png"  alt="Closed-Status"></img>`}
                                </div>
                        </div>
                            <button class="btn border rounded-lg ${card.priority === 'medium'?`bg-[#FDE68A] text-[#D97706] border-[#D97706]`:
                                 card.priority === 'low' ? `bg-[#EEEFF2] text-[#9CA3AF] border-[#9CA3AF]`:`bg-[#FEECEC] text-[#EF4444] border-[#EF4444]`}">
                                 ${card.priority}
                            </button>
                        </div>
                        <h3 class="text-lg font-semibold">${card.title}</h3>
                                <p class="gray">${card.description}</p>
                                <div>
                                    <button class="btn border border-[#EF4444] rounded-lg bg-[#FEECEC] text-[#EF4444] ">Bug</button>
                                    <button class="btn border border-[#D97706] rounded-lg bg-[#FDE68A] text-[#D97706] ">Help Wanted</button>
                                </div>
                                <hr class="border border-gray-200 w-full">
                                <p class="text-sm gray">#<span>${card.id}</span> by ${card.author} <br> <span class="text-xs gray">${new Date(card.createdAt).toLocaleDateString()}</span></p>
                    </div>
                </div>
            </div>
        `
        allIssues.append(openCards);
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
const displayClosedCard = (cards) => {
    const allIssues = document.getElementById('all-issues');
    allIssues.innerHTML = "";
    cards.forEach(card => {

        console.log(card);
        const closedCards = document.createElement('div');
        closedCards.innerHTML = `
        <div class="h-full">
                <div class="card h-full w-full lg:w-60 bg-base-100 card-sm shadow-sm border border-gray-200 border-t-4 
                ${card.status ==='open'?`border-t-[#00A96E]`:`border-t-[#A855F7]`}">
                
                    <div class="card-body h-full">
                        <div class="flex justify-between items-center">
                            <div class="flex justify-between">
                                <div>
                                    ${card.status === 'open'?`<img class="w-8 h-8"  src="./assets/Open-Status.png" alt="Open-Status"></img>`:`<img class="w-8 h-8"  src="./assets/Closed- Status .png"  alt="Closed-Status"></img>`}
                                </div>
                        </div>
                            <button class="btn border rounded-lg ${card.priority === 'medium'?`bg-[#FDE68A] text-[#D97706] border-[#D97706]`:
                                 card.priority === 'low' ? `bg-[#EEEFF2] text-[#9CA3AF] border-[#9CA3AF]`:`bg-[#FEECEC] text-[#EF4444] border-[#EF4444]`}">
                                 ${card.priority}
                            </button>
                        </div>
                        <h3 class="text-lg font-semibold">${card.title}</h3>
                                <p class="gray">${card.description}</p>
                                <div>
                                    <button class="btn border border-[#EF4444] rounded-lg bg-[#FEECEC] text-[#EF4444] ">Bug</button>
                                    <button class="btn border border-[#D97706] rounded-lg bg-[#FDE68A] text-[#D97706] ">Help Wanted</button>
                                </div>
                                <hr class="border border-gray-200 w-full">
                                <p class="text-sm gray">#<span>${card.id}</span> by ${card.author} <br> <span class="text-xs gray">${new Date(card.createdAt).toLocaleDateString()}</span></p>
                    </div>
                </div>
            </div>
        `
        allIssues.append(closedCards);
    })
}


// displayIssues function
const displayIssues = (issues) => {
    const allIssuesNumber = document.getElementById('issue-number');
    allIssuesNumber.innerText = issues.length;
    const allIssues = document.getElementById('all-issues');
    allIssues.innerHTML = "";

    issues.forEach(card => {
        console.log(card);

        

        const allCards = document.createElement('div');
        allCards.innerHTML = `
        <div class="h-full">
                <div class="card h-full w-full lg:w-60 bg-base-100 card-sm shadow-sm border border-gray-200 border-t-4 
                ${card.status ==='open'?`border-t-[#00A96E]`:`border-t-[#A855F7]`}">
                
                    <div class="card-body h-full">
                        <div class="flex justify-between items-center">
                            <div class="flex justify-between">
                                <div>
                                    ${card.status === 'open'?`<img class="w-8 h-8"  src="./assets/Open-Status.png" alt="Open-Status"></img>`:`<img class="w-8 h-8"  src="./assets/Closed- Status .png"  alt="Closed-Status"></img>`}
                                </div>
                        </div>
                            <button class="btn border rounded-lg ${card.priority === 'medium'?`bg-[#FDE68A] text-[#D97706] border-[#D97706]`:
                                 card.priority === 'low' ? `bg-[#EEEFF2] text-[#9CA3AF] border-[#9CA3AF]`:`bg-[#FEECEC] text-[#EF4444] border-[#EF4444]`}">
                                 ${card.priority}
                            </button>
                        </div>
                        <h3 class="text-lg font-semibold">${card.title}</h3>
                                <p class="gray">${card.description}</p>
                                <div>
                                    <button class="btn border border-[#EF4444] rounded-lg bg-[#FEECEC] text-[#EF4444] ">Bug</button>
                                    <button class="btn border border-[#D97706] rounded-lg bg-[#FDE68A] text-[#D97706] ">Help Wanted</button>
                                </div>
                                <hr class="border border-gray-200 w-full">
                                <p class="text-sm gray">#<span>${card.id}</span> by ${card.author} <br> <span class="text-xs gray">${new Date(card.createdAt).toLocaleDateString()}</span></p>
                    </div>
                </div>
            </div>
        `

        allIssues.append(allCards);
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