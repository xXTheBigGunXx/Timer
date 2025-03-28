const convertSeconds = (seconds = 0) => {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    remainingSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

    return `${minutes}:${remainingSeconds}`;
}

function main(){
    let minDiv = document.querySelector(".min-sec");
    let body = document.querySelector("body");

    let HSVvalue = 0;
    let timeNowSec = 0;
    minDiv.textContent = convertSeconds();

    let buttons = document.querySelector("#incrament");
    let start = document.querySelector(".go");
    
    buttons.addEventListener("click", event => {
        let targetedButton = event.target;
    
        switch(targetedButton.className)
        {
            case "5": timeNowSec += 5*60; break;
            case "15": timeNowSec += 15*60; break;
            case "30": timeNowSec += 30*60; break;
            case "reset": timeNowSec = 0; break;
        }
        minDiv.textContent = convertSeconds(timeNowSec);
    });

    start.addEventListener("click", () => {
        const interval = setInterval(() => {
            if (timeNowSec < 0) {
                clearInterval(interval);
                body.style.background = "#2c303c";
                timeNowSec++;
                return;
            }
            console.log(timeNowSec);
            minDiv.textContent = convertSeconds(timeNowSec);
            timeNowSec--;

            document.body.style.background = `hsl(${HSVvalue}, 75%, 50%)`;
            HSVvalue = (HSVvalue+=3) % 361;
        }, 1000);  
    });

};
main();