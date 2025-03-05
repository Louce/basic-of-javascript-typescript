# basic-of-javascript-typescript

# TypeScript Exercise Solutions 🚀

Simple and clear solutions to common programming exercises. Feel free to use, modify, or learn from these!

---

## 1. Calculate Rectangle Area 📏  
**File:** `1.find area of rectangle.ts`  
**What it does:**  
Calculates the area of a rectangle using `length × width`.  

```typescript
let Length = 5;   // Define length
let Width = 3;    // Define width
let Area = Length * Width; // Calculate area
console.log(Area); // Output: 15
Tip: Use const instead of let for fixed values (e.g., const Length = 5;).

2. Circle Properties Calculator ⭕
File: 2.find diameter, circumference and area of a circle.ts
What it does:
Calculates a circle's diameter, circumference, and area from its radius.

typescript
Copy
let radius = 5;
let diameter = 2 * radius; // Diameter formula
let circumference = 2 * Math.PI * radius; // Circumference (uses π)
let circle_Area = Math.PI * Math.pow(radius, 2); // Area (radius squared)

console.log(diameter); // Output: 10
console.log(circumference.toFixed(4)); // 31.4159 (4 decimals)
console.log(circle_Area.toFixed(3)); // 78.540 (rounded)
Key Features:

Math.PI for precision.

toFixed() for clean decimal formatting.

3. Find the Third Angle of a Triangle 🔺
File: 3.find angles of triangle if two angles are given.ts
What it does:
Calculates the missing angle in a triangle (sum of angles = 180°).

typescript
Copy
let a = 80; // First angle
let b = 65; // Second angle
let OutPut = 180 - a - b; // Subtract from 180°
console.log(OutPut); // Output: 35
4. Date Difference Calculator 📅
File: 4.get difference between dates in days.ts
What it does:
Calculates days between two dates.

typescript
Copy
let date1 = new Date('2024-03-19'); // Start date
let date2 = new Date('2024-03-21'); // End date

// Convert dates to milliseconds and calculate difference
let difference_Ms = date2.getTime() - date1.getTime();
let difference_Days = difference_Ms / (1000 * 3600 * 24); // Convert ms to days

console.log(difference_Days); // Output: 2
Why 1000?

1000 converts milliseconds → seconds.

Full formula: ms → seconds → hours → days.

5. Convert Full Name to Uppercase Initials 🔠
File: 5.name uppercase from full name too only initial.ts
What it does:
Turns "John Doe" into "JD".

typescript
Copy
let fullName = "John Doe";
let nameParts = fullName.split(" "); // Split into ["John", "Doe"]
let initial = nameParts[0].charAt(0) + nameParts[1].charAt(0); // "J" + "D"
console.log(initial.toUpperCase()); // Output: "JD"
How to Run These Files 🛠️
Install TypeScript (if needed):

bash
Copy
npm install -g typescript
Compile & Execute:

bash
Copy
tsc filename.ts && node filename.js
