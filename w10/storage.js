const saveLS = function(cfpData) {
    const serializedArr = JSON.stringify(cfpData);
    localStorage.setItem('cfp', serializedArr);
}

function getLS() {
    const retrievedArry = localStorage.getItem('cfp')
    if (retrievedArry !== null) {
        return JSON.parse(retrievedArry);
    } else {
        return [];
    }

}

const cfpData = getLS();


export {cfpData, saveLS, getLS};