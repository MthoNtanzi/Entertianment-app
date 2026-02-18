export default function createHeadings(headingName){
    const userHeading = document.createElement(`h1`);
    
    userHeading.innerText = headingName;

    return userHeading;
}
