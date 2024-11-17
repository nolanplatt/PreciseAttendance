 ![logo](https://github.com/user-attachments/assets/a80551cc-73c8-4aa3-bbce-793c9bb0c2d0)

## PreciseAttendance🚀

PreciseAttendance is a light-weight, open source attendance system for educational institutions. Designed to prevent students from circumventing an attendance system, PreciseAttendance ensures every student must come to class for their attendance to count. Utilizing a QR code with a customizable refresh-rate, students must be connected to the institution's internet connection, and also must submit their attendance with the correct token provided by the QR code they scanned. This means it is impractical for students to share the link provided by the QR code, ensuring precision. Leverages React, Firebase, and JS. 
## Usage
### Instructor View
1. **Clone repository**  
`git clone https://github.com/nolanplatt/PreciseAttendance`

2. **Ensure all dependencies are installed**  
`cd instructor`  
`npm install`

3. **Add Firebase database config**  
In the firebaseConfig, you need to add your own config for your firebase project.  
Firstly, create a new Firebase project and create a Real Time Database.  
Once done, navigate to your project dashboard, click the gear icon, then “Project Settings.” Under the “General” tab, scroll down to “Your apps” and click on the web icon (</>).  
Write your project name and copy the configuration snippet, and paste into `firebaseConfig`.  
Navigate to `instructor/src`  
Create a new file, `firebase.js`  
Add the following:  
```
/*
Precise Attendance | Instructor View React Application
@author Nolan Platt
nolanplatt.com | github.com/nolanplatt | linkedin.com/nolanplatt
*/
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
```  


4. **Update config.json**  
Finally, update `instructor/src/config.json`. Here, you can update the values to whatever you desire. Customize your endpoint URL, course name, instructor, etc.  

5. **Start React app**  
To start the React application, simply run `npm start`.
  
### Student View





