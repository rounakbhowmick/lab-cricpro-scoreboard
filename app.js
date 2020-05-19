//Selecting full table and cricket player image for Dom Manipulation
const table = document.querySelector('.table')
const cricketerImage = document.querySelector('.playersimg');
const popupDOM = document.querySelector('.playersimg');

table.addEventListener('click', e => {
    let click_event_value = e.target.innerHTML;
    /*this below condition is written to know whether clicked item picture is present or not,if it is present then it moves to popup function
    Checking if there is any kind of comma in string because in the field of "Did not batsman" comma strings are present,to eliminate it this if block is made*/
    if (click_event_value.includes(",")) {
        click_event_value = click_event_value.slice(0, click_event_value.length - 1);
        popup_function(click_event_value);

    } else if (click_event_value.includes("MS Dhoni")) {
        popup_function("MS Dhoni");
    } else if (click_event_value.includes("Gautam") || click_event_value.includes("Virender") || click_event_value.includes("Harbhajan") || click_event_value.includes("Munaf") || click_event_value.includes("Sreesanth") || click_event_value.includes("Sachin") || click_event_value.includes("Suresh") || click_event_value.includes("Virat ") || click_event_value.includes("Virender") || click_event_value.includes("Yuvraj") || click_event_value.includes("Zaheer")) {
        popup_function(click_event_value);
    } else {

        table.style.opacity = 1;
        popupDOM.style.display = 'none';
    }
});
/*HTML Template function to display popups*/
function popup_function(click_event_value) {
    if (click_event_value.length < 30) {
        popupDOM.style.display = 'block';
        table.style.opacity = 0.3;
        let html = `<img src="./assets/${click_event_value}.png" class="player-image popup-none" id="playerid" alt="">`;
        cricketerImage.innerHTML += html;
    } else {
        return;
    }
}