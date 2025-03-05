# basic-of-javascript-typescript



### Explanation of Code Files (1 to 5)

---

#### **1. `find area of rectangle.ts`**
```typescript
let Length = 5;      // Store the length of the rectangle (5 units)
let Width = 3;       // Store the width of the rectangle (3 units)
let Area = Length * Width; // Calculate area: 5 * 3 = 15
console.log(Area);   // Print the result (15)
```
- **What it does**: Calculates the area of a rectangle using `length × width`.

---

#### **2. `find diameter, circumference and area of a circle.ts`**
```typescript
let radius = 5; // Set circle radius to 5 units
let diameter = 2 * radius; // Calculate diameter: 2 * 5 = 10
let circumference = 2 * Math.PI * radius; // Calculate circumference: 2 * π * 5 ≈ 31.4159
let circle_Area = Math.PI * Math.pow(radius, 2); // Calculate area: π * 5² ≈ 78.5398
console.log(diameter); // Print diameter (10)
console.log(circumference.toFixed(4)); // Print circumference rounded to 4 decimals (31.4159)
console.log((Math.floor(circle_Area * 1000) / 1000).toFixed(3)); // Truncate area to 3 decimals (78.539)
```
- **What it does**: Computes a circle’s diameter, circumference, and area.  
- **Note**: `Math.floor` truncates the area instead of rounding (e.g., `78.5398` becomes `78.539`).

---

#### **3. `find angles of triangle if two angles are given.ts`**
```typescript
let a = 80;     // First angle (80 degrees)
let b = 65;     // Second angle (65 degrees)
let OutPut = 180 - a - b; // Third angle = 180 - 80 - 65 = 35
console.log(OutPut); // Print the result (35)
```
- **What it does**: Finds the third angle of a triangle (angles add up to 180°).

---

#### **4. `get difference between dates in days.ts`**
```typescript
let date1 = new Date('2024-03-19'); // First date: March 19, 2024
let date2 = new Date('2024-03-21'); // Second date: March 21, 2024

// Calculate time difference in milliseconds
let difference_Months = date2.getTime() - date1.getTime(); 
// Convert milliseconds to days (1000 ms * 3600 sec * 24 hrs)
let difference_Days = difference_Months / (1000 * 3600 * 24); 

console.log(difference_Days); // Print result (2 days)
```
- **What it does**: Calculates days between two dates.  
- **Note**: The variable `difference_Months` is incorrectly named (should be `difference_Time`).

---

#### **5. `name uppercase from full name too only initial.ts`**
```typescript
let fullName = "John Doe"; // Store full name
let nameParts = fullName.split(" "); // Split into ["John", "Doe"]
// Get first letter of each part: "J" + "D"
let initial = nameParts[0].charAt(0) + nameParts[1].charAt(0); 
console.log(initial.toUpperCase()); // Convert to uppercase and print ("JD")
```
- **What it does**: Converts a full name to initials (e.g., "John Doe" → "JD").  
- **Note**: Only works for names with **exactly two parts** (e.g., fails for "Mary Ann Smith").
