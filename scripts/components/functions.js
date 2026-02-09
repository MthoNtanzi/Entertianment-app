export default function createHeadings(headingName, parentName){
    const userHeading = document.createElement(`h1`);
    
    userHeading.innerText = headingName;
    parentName.appendChild(userHeading);
}
