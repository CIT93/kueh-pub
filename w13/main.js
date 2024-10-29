const FORM = document.getElementById("exerciseForm");

FORM.addEventListener('submit', function(e) {
    e.preventDefault();

    const exercise = document.getElementById("exercise").value;
    const reps = document.getElementById("reps").value;
    const time = document.getElementById("time").value;

    displayStartMessage(exercise, reps, time)
        .then(() => displayEndMessage(exercise))
        .catch(handleError);
});

function displayStartMessage(exercise, reps, time) {
    return new Promise((resolve, reject) => {
        if (exercise && reps && time) {
            const startMessage = document.createElement("p");
            startMessage.textContent = `Start ${exercise} exercise. The goal is ${reps} reps in ${time}.`;
            document.getElementById("message").appendChild(startMessage);
            console.log("start");
            resolve();
        } else {
            reject("Invalid input for exercise, reps, or time.");
        }
    });
}

function displayEndMessage(exercise) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const endMessage = document.createElement("p");
            endMessage.textContent = `End ${exercise} exercise.`;
            document.getElementById("message").appendChild(endMessage);
            console.log("end");
            resolve();
        }, 2000); 
    });
}

function handleError(error) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = `Error: ${error}`;
    document.getElementById("message").appendChild(errorMessage);
    console.error(error);
}