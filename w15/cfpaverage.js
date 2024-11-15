function calculateAverageFootprint(data) {
    if (data.length === 0) {
        return 0; // Avoid division by zero
    }

    const totalScore = data
        .map(item => item.total) // Extract total scores
        .reduce((sum, score) => sum + score, 0); // Sum up the scores

    const average = totalScore / data.length; // Calculate the average

    // Round to the nearest 0.10
    return Math.round(average * 10) / 10;
}

export { calculateAverageFootprint };