/* 
Write a function named calculateAverageSpeed:
- Continuously prompt the user to input distance (in kilometers) and time (in hours).
- After each input, calculate and log the average speed in the console.
- Stop asking for inputs when the user enters 0 for distance. 
*/


const calculateAverageSpeed = () => {
    let distance;

    do {
        distance = Number(prompt("Enter the distance (0 to stop):"));
        if (distance === 0) break;

        const time = Number(prompt("Enter the time:"));
        console.log("Average speed:", distance / time);
    } while (true);
};

calculateAverageSpeed();
