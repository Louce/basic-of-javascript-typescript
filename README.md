# basic-of-javascript-typescript




# Code Files Explained (1 to 5)

---

### 1. `find area of rectangle.ts`
- **Purpose**: Calculates the area of a rectangle.
- **Formula**: `Length × Width`  
  *(Length = 5, Width = 3 → Area = 15)*  
- **Output**: `15`

---

### 2. `find diameter, circumference and area of a circle.ts`
- **Purpose**: Calculates circle properties from radius (5 units):
  - **Diameter**: `2 × radius = 10`  
  - **Circumference**: `2 × π × radius ≈ 31.4159` (rounded to 4 decimals)  
  - **Area**: `π × radius² ≈ 78.539` (truncated to 3 decimals, **not rounded**).  
- **Output**: `10`, `31.4159`, `78.539`

---

### 3. `find angles of triangle if two angles are given.ts`
- **Purpose**: Finds the third angle of a triangle.  
- **Formula**: `180° - angle1 - angle2`  
  *(80° + 65° → Third angle = 35°)*  
- **Output**: `35`

---

### 4. `get difference between dates in days.ts`
- **Purpose**: Calculates days between two dates.  
- **Dates**: March 19, 2024 → March 21, 2024.  
- **Result**: `2 days`  
- **Note**: Variable `difference_Months` is misnamed (should be `difference_Time`), but code works.

---

### 5. `name uppercase from full name too only initial.ts`
- **Purpose**: Converts full name to uppercase initials.  
- **Example**: "John Doe" → Split into ["John", "Doe"] → Initials "JD".  
- **Output**: `"JD"`  
- **Limitation**: Only works for **exactly two-part names** (e.g., fails for "Mary Ann Smith").

---

### Key Notes:
- ⚠️ **Circle area** is truncated, not rounded (e.g., `78.5398` → `78.539`).  
- ⚠️ **Date code** has a typo (`difference_Months`) but works.  
- ⚠️ **Initials code** works only for two-part names.
```
