async function calculateDueDate(submitDate, turnaroundHours) {
    let dueDate = new Date(submitDate);
    let hoursRemaining = turnaroundHours;


    return {
        dueDate: dueDate.toISOString().split('T')[0],
        dueTime: dueDate.toLocaleTimeString('en-US', { hour12: true })
    };
}

module.exports = { calculateDueDate };
