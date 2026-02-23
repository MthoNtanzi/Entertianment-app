export default function createHeadings(headingName){
    const userHeading = document.createElement(`h1`);
    userHeading.classList.add("globalHeadings");
    
    userHeading.innerText = headingName;

    return userHeading;
}
