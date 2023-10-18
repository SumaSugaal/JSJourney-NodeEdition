<!-- README Icon -->
<div align="center">
  <img src="https://jumpseller.com/images/share/ecommerce-precio-de-mi-producto.jpg" alt="Assignment Icon" width="900">
</div>

# Assignment: Calculate Daily Target

This repository contains a JavaScript function to calculate the daily sales target for a given date range. The function considers working days and a monthly sales target.

## Function Overview

The `calculateDailyTarget` function calculates the daily sales target based on the following parameters:

- Start date
- End date
- Monthly target
- Working days (Monday to Thursday, excluding Tuesdays)

## Usage

1. Set the start and end dates by running the script.
2. The function will calculate and display the daily target, total working days, and monthly target.

## How to Use

```javascript
// Function to calculate the daily target for a given date range
function calculateDailyTarget(startDate, endDate) {
  // ... (function code)
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
