**--- Two ways to run the project**: \\
1. npm start OR
2. If you have docker installed in your computer
   - **docker-compose up**

To run the test follow this commands: 
1. cd backend 
2. npm test

How to access in browser: **http://localhost:8080/**


**Task achieved** :
1. Working hours: From monday to friday 9 to 17, holiday is not working hour, company is open on all thursay even if it is holiday
2. Turnaroud time: Adding hours on the working time
3. User can only report a problem in the working hour
4. Not using third party library to automatically add time or days
Additional task: User can forcefully report a problem even if it is not working time

Followed **Test Driven Developement** while writing the code,
Tried to make my **code as clean as possible**

**Technology stack:**
1. Backend : Node, express, dotenv (useful in protecting the secret constant values)
2. Frontend : HTML, CSS, JavaScript
3. Containarization: Docker
4. Testing : Jest
5. Third Pary API: calendarific holiday API (Fetches all the holidays for the year of 2024)

Two backend APIs:
1. http://localhost:3001/calculateDueDate/
2. http://localhost:3001/calculateDueDate-force/

