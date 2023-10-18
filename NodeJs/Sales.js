// Function to calculate the daily target for a given date range
function calculateDailyTarget(startDate, endDate) {
    const workingDays = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
    const monthlyTarget = 435;

    let totalWorkingDays = 0;
    let currentDay = new Date(startDate);
    const endDay = new Date(endDate);

    // Count the total number of working days within the date range
    while (currentDay <= endDay) {
        if (workingDays.includes(currentDay.toLocaleDateString("en-US", { weekday: 'long' })) &&
            currentDay.getDate() !== 2) {
            totalWorkingDays++;
        }
        currentDay.setDate(currentDay.getDate() + 1);
    }

    // Check if there are working days in the date range
    if (totalWorkingDays === 0) {
        return [0, 0, 0, monthlyTarget];
    }

    // Calculate the daily target based on the total working days and monthly target
    const dailyTarget = monthlyTarget / totalWorkingDays;

    // Calculate the total target by multiplying the daily target by the total working days
    const totalTarget = dailyTarget * totalWorkingDays;

    return [dailyTarget.toFixed(2), totalTarget.toFixed(2), totalWorkingDays, monthlyTarget];
}

// Function to calculate the total target in accordance with the date range
function calculateTotalTargetInRange(startDate, endDate) {
    let currentDay = new Date(startDate);
    const endDay = new Date(endDate);
    let totalTarget = 0;

    while (currentDay <= endDay) {
        const [dailyTarget] = calculateDailyTarget(currentDay, currentDay); // Calculate daily target for each day
        totalTarget += parseFloat(dailyTarget); // Sum up daily targets
        currentDay.setDate(currentDay.getDate() + 1);
    }

    return totalTarget.toFixed(2);
}

// Set the start and end dates
const startDate = prompt("Enter Start Date (YYYY-MM-DD):");
const endDate = prompt("Enter End Date (YYYY-MM-DD):");

// Calculate the daily target, total target, total working days, and monthly target
const [dailyTarget, totalTarget, totalWorkingDays, monthlyTarget] = calculateDailyTarget(startDate, endDate);

// Calculate the total target in accordance with the date range
const totalTargetInRange = calculateTotalTargetInRange(startDate, endDate);

// Display the results in the console
console.log("Start date: " + startDate);
console.log("End date: " + endDate);
console.log("Total working days: " + totalWorkingDays);
console.log("Monthly target: " + monthlyTarget);
console.log("The daily target is: " + dailyTarget);
console.log("The total target is: " + totalTarget);
console.log("Total Target in accordance with the date range: " + totalTargetInRange);
