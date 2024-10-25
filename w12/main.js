const FORM = document.getElementById("exerciseForm");

FORM.addEventListener('submit', function(e) {
    e.preventDefault();
    const exercise = document.getElementById("exercise").value;
    const reps = document.getElementById("reps").value;
    const time = document.getElementById("time").value;
    setTimeout(function() {
        displayEndMessage(exercise);
    }, 2000);
    displayStartMessage(exercise, reps, time);

});

function displayStartMessage(exercise, reps, time) {
    const startMessage = document.createElement("p");
    startMessage.textContent = `Start ${exercise} exercise the goal is ${reps} reps in ${time}.`;
    document.getElementById("message").appendChild(startMessage);
    console.log("start")
}

function displayEndMessage(exercise) {
    const endMessage = document.createElement("p");
    endMessage.textContent = `End ${exercise} exercise.`;
    document.getElementById("message").appendChild(endMessage);
    console.log("end")
}

