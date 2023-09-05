/*
Alexander Calkins
Personal Website
9/1/2023
*/



//This function changes the backgorund of page when an item is selected (unused)
function GetImage(ele) {
    let IdImageEntries = '{"projects": [' +
    '{"id": "p-EnterPresser", "image": "images/enterPresser.png"},'+
    '{"id": "p-PortfolioWebsite", "image": "images/profile.png"},'+
    '{"id": "p-ProjectA", "image": "images/project A.png"}]}';
    const obj = JSON.parse(IdImageEntries);
    let eleIndex;
    for (let i = 0; i < obj.projects.length; i++) {
        if (obj.projects[i].id === ele.id) { 
            eleIndex = i;
            break; 
        }
    }
    if (eleIndex !== undefined) {
        document.getElementById("projectContainer").style.backgroundImage = 'url(' + obj.projects[eleIndex].image + ')';
    } else {
        console.log("Project not found");
    }
}

