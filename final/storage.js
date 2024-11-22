const saveLS = (sleepWorkoutData) => {
    const serializedArr = JSON.stringify(sleepWorkoutData);
    localStorage.setItem('swd', serializedArr);
};

const getLS = () => {
    const retrievedArry = localStorage.getItem('swd')
    if (retrievedArry !== null) {
        return JSON.parse(retrievedArry);
    } else {
        return [];
    }

}

const sleepWorkoutData = getLS();

export { sleepWorkoutData, saveLS, getLS };