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

    // Calculate the daily target based on the total working days and monthly target
    const dailyTarget = monthlyTarget / totalWorkingDays;

    return [dailyTarget.toFixed(2), totalWorkingDays, monthlyTarget];
}

// Set the start and end dates
const startDate = prompt("Enter Start Date (YYYY-MM-DD):");
const endDate = prompt("Enter End Date (YYYY-MM-DD):");

// Calculate the daily target, total working days, and monthly target
const [dailyTarget, totalWorkingDays, monthlyTarget] = calculateDailyTarget(startDate, endDate);

// Display the results in the console
console.log("Start date: " + startDate);
console.log("End date: " + endDate);
console.log("Total working days: " + totalWorkingDays);
console.log("Monthly target: " + monthlyTarget);
console.log("The daily target is: " + dailyTarget);
