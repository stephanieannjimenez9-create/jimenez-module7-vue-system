Student Course Registration System

Software Engineering 1 – Module 7: Design and Implementation
Module 9 – Software Evolution


Student Name:
Stephanie Ann D. Jimenez

Section:
BSCS 3A

Selected Entity:
Course Registration

Module 6 Repository:
https://github.com/stephanieannjimenez9-create/jimenez-module6-architecture

Module 7 Repository:
https://github.com/stephanieannjimenez9-create/jimenez-module7-vue-system

Module 9 Branch:
https://github.com/stephanieannjimenez9-create/jimenez-module7-vue-system/tree/module9/software-evolution


1. PROJECT DESCRIPTION

The Student Course Registration System is a frontend prototype developed for Software Engineering 1 Module 7.

This project implements the Course Registration entity from the system architecture proposed in Module 6.

The system allows users to log in, create, view, edit, delete, and search course registration records. It also provides form validation, browser localStorage persistence, Active/Inactive status filtering, feedback, record summaries, and a responsive interface.

The project is a frontend prototype. The backend, API, and database components proposed in Module 6 remain future components.


2. CONNECTION BETWEEN MODULE 6 AND MODULE 7

Module 6 focused on the architecture and proposed design of the Course Registration System.

The Module 6 architecture proposed technologies including:

- Vue.js
- JavaScript
- Backend services
- Database
- Git
- GitHub

For Module 7, the Course Registration entity was selected as the manageable entity to implement.

Module 7 translates the architectural design from Module 6 into a working Vue.js frontend prototype.

Module 6

Module 6 provides the architectural blueprint and long-term design of the Course Registration System.

Module 7

Module 7 implements the Course Registration entity as a functional frontend prototype.

The implemented registration fields are:

- Student Name
- Student ID
- Course Code
- Course Name
- Schedule
- Status

Module 6 Repository:
https://github.com/stephanieannjimenez9-create/jimenez-module6-architecture


3. IMPLEMENTED FEATURES

The application implements the required Module 7 functions and the Module 9 software evolution changes.

Create

Users can add a complete course registration using the registration form.

Read

Registered course records are displayed in the Registered Courses section.

Update

Users can edit an existing course registration and update its information.

Delete

Users can delete a registration after confirming the deletion.

Search

Users can search registered course records using the search field.

Validation

Required fields are checked before a registration can be submitted.

Persistence

Course registration records are saved in browser localStorage so they remain available after refreshing the page.

Status Filtering

Users can filter registration records by All, Active, or Inactive status.

Institutional Login

Users must successfully log in using the demonstration institutional account before accessing the main Course Registration System.

Responsive Interface

The application is designed to remain usable on desktop and smaller screen sizes.

Record Summary

The system displays registration statistics such as total courses and total units.


4. COURSE REGISTRATION FIELDS

Field                  Description

Student Name           Name of the student
Student ID             Student identification number
Course Code            Code assigned to the course
Course Name            Name of the course
Schedule               Course schedule
Status                 Current registration status


5. TECHNOLOGIES USED

- Vue.js
- Vite
- JavaScript
- Tailwind CSS
- CSS
- Browser localStorage
- Git
- GitHub
- GitHub Actions
- Vitest
- Vue Test Utils
- Visual Studio Code


6. VUE COMPONENTS

The project uses reusable Vue components.

src/
    components/
        AppHeader.vue
        LoginForm.vue
        RegistrationForm.vue
        RegistrationList.vue
    App.vue
    main.js
    style.css

AppHeader.vue

Contains the application header, system title, and system description.

LoginForm.vue

Provides the institutional login interface and validates the demonstration login credentials.

RegistrationForm.vue

Contains the course registration form and handles user input and validation.

RegistrationList.vue

Displays registered courses and provides search, status filtering, edit, and delete actions.

App.vue

Controls the main application state, login state, localStorage data, and connects the Vue components.


7. INTERFACE SECTIONS

The application contains the following interface sections:

- Institutional login screen
- Application header
- System title and description
- Course registration form
- Search field
- Status filter
- Registered course list
- Edit button
- Delete button
- Feedback messages
- Record summary
- Reminders section
- Footer with student name and section


8. LOCALSTORAGE PERSISTENCE

The prototype uses browser localStorage for data persistence.

Course registration records are stored in the browser using the key:

module7-records

The saved records remain available after the browser page is refreshed.

Existing records without a valid Active or Inactive status are assigned Active status when loaded.

New course registrations are assigned Active status by default.

localStorage is used because Module 7 only requires a frontend prototype. A production version can later replace localStorage with a backend API and database.


9. INSTALLATION AND SETUP

Prerequisites

The following software should be installed:

- Node.js
- npm
- Git
- Visual Studio Code

Open the Project

Open the downloaded project folder:

jimenez-module7-course-registration

Install Dependencies

Open Git Bash or the VS Code terminal inside the project folder and run:

npm install

Run the Development Server

Run:

npm run dev

Vite will display a local address.

The port may be different if another Vite server is already running.

Open the displayed localhost address in a web browser.

Run Automated Tests

Run:

npm run test:run

Build the Application

Run:

npm run build


10. PRODUCTION BUILD

To verify that the application can be built successfully, run:

npm run build

The Module 9 production build was successfully completed.

Build Result:

18 modules transformed

Production build passed successfully.


11. GIT AND GITHUB

Git is used for version control and GitHub is used to host the project repository.

Module 7 Repository:

https://github.com/stephanieannjimenez9-create/jimenez-module7-vue-system

Module 9 Branch:

https://github.com/stephanieannjimenez9-create/jimenez-module7-vue-system/tree/module9/software-evolution

The project uses meaningful commit messages to document development progress.

Important Module 9 commits include:

1873c82
Add Active Inactive status filter

2d6c133
Update README for Module 9

74dcba1
Update GitHub Actions for Module 9

8de604d
feat: implement institutional login

38a234e
test: update regression tests for evolved version


12. GITHUB ACTIONS

The project uses GitHub Actions for continuous integration.

The workflow file is:

.github/
    workflows/
        build.yml

The workflow installs the project dependencies and runs:

npm ci
npm run build

The purpose of the workflow is to verify that the Vue application can successfully build when changes are pushed to GitHub.

Latest Workflow:

Vue Build Check #9

Latest Commit:

38a234e

Branch:

module9/software-evolution

Status:

Successful


13. TESTING CHECKLIST

Test                              Expected Result

Add a complete record             Record appears successfully

Submit an incomplete form         Submission is prevented and a validation message appears

Add multiple records              All records are displayed

Edit a record                     Updated values replace previous values

Cancel deletion                   Record remains in the list

Confirm deletion                  Selected record is removed

Search an existing value          Matching record is displayed

Search a missing value            No matching record is displayed

Refresh the browser               Saved records remain available

Filter Active status              Active registrations are displayed

Filter Inactive status            Inactive registrations are displayed

Login validation                  Valid login is accepted and invalid or blank credentials are rejected

Responsive interface              Interface remains usable on smaller screen sizes


14. MODULE 9 – SOFTWARE EVOLUTION

Module 9 focuses on software evolution and maintenance of the Student Course Registration System developed in Module 7.

The existing system was retained and improved through Perfective Maintenance.

The main improvements are the addition of an institutional login feature and an Active/Inactive status filter for course registration records.

Version:

1.1.0

Maintenance Type:

Perfective Maintenance


15. CHANGE REQUEST – CR-M9-01

Change Request Title:

Add Institutional Login and Active/Inactive Record Filter

Problem:

The existing Course Registration System could manage, search, and store course registration records, but it did not have an institutional login gate or a direct way to filter records according to their Active or Inactive status.

Desired Outcome:

The system should provide an institutional login before users can access the Course Registration System and should allow users to filter registration records by All, Active, or Inactive status while preserving the existing CRUD operations, search, validation, delete confirmation, localStorage persistence, and responsive interface.

Acceptance Criteria:

1. Users can successfully log in using the valid institutional account.

2. Invalid or incomplete login credentials are rejected and an appropriate error or validation message is displayed.

3. Users can select All, Active, or Inactive from the registration status filter.

4. Selecting Active displays only records with Active status.

5. Selecting Inactive displays only records with Inactive status.

6. Existing Create, Read, Update, Delete, Search, Validation, Delete Confirmation, Persistence, and Responsive features continue to work.

7. Existing records without a valid Active or Inactive status are safely assigned Active status when loaded.

Priority:

Medium

Rationale:

The change improves the usability, organization, and access control of the Course Registration System while keeping the existing system functionality.

Affected Areas:

- Architecture
- User Interface
- Application Logic
- localStorage Data Handling
- Automated Tests
- GitHub Actions
- Documentation


16. IMPACT ANALYSIS

Architecture Impact:

The software evolution introduces a LoginForm component and updates the application flow so that users must log in before accessing the registration system. The existing registration components and localStorage data flow remain in use.

UI Impact:

A new institutional login interface was added. The registration interface was preserved, including the registration form, search field, status filter, registration table, buttons, summaries, and responsive layout.

Logic Impact:

Login validation was added to control access to the main application. The existing Active/Inactive filtering logic remains available for registration records.

Data and localStorage Impact:

The system continues to use the existing localStorage key:

module7-records

Existing records with an unsupported or missing status are assigned Active status when loaded. New registrations are also assigned Active status by default.

Testing Impact:

Two additional automated tests were added for the Login feature:

- Valid institutional login
- Invalid institutional login

The existing regression tests were retained.

CI Impact:

GitHub Actions continues to verify that the evolved Vue application can successfully build after changes are pushed to GitHub.

Documentation Impact:

The README, release information, testing results, and Module 9 report were updated to document the evolved version.


17. DESIGN AND IMPLEMENTATION

The evolved system contains the following main components:

src/
    components/
        AppHeader.vue
        LoginForm.vue
        RegistrationForm.vue
        RegistrationList.vue
    App.vue
    main.js
    style.css

LoginForm.vue

Provides the institutional login interface and validates the predefined demonstration credentials.

App.vue

Controls the login state and displays the main Course Registration System only after successful login.

RegistrationForm.vue

Continues to handle course registration input and required-field validation.

RegistrationList.vue

Continues to display registration records and provides search, Active/Inactive filtering, edit, and delete functionality.

The software evolution was implemented without removing the existing registration features.

The final system preserves:

- Create
- Read
- Update
- Delete
- Search
- Form Validation
- Delete Confirmation
- localStorage Persistence
- Active/Inactive Filtering
- Responsive Interface


18. LOGIN FEATURE

The evolved version includes an institutional login screen.

The login uses predefined demonstration credentials for academic testing.

Institutional Email:

stephanie.jimenez@school.edu

Password:

student123

Successful login displays the Student Course Registration System.

Invalid credentials are rejected with the message:

Invalid institutional account or password.

Blank login fields are also prevented from accessing the system.

Limitation:

The login is a demonstration authentication feature. It is not connected to a real school authentication server, database, or production identity system.


19. ACTIVE / INACTIVE STATUS FILTER

The system includes a status filter for course registration records.

Available options:

- All
- Active
- Inactive

Active:

Displays only registration records with Active status.

Inactive:

Displays only registration records with Inactive status.

All:

Displays all registration records.

New registrations are assigned Active status by default.

Older records without a valid status are safely assigned Active status when loaded.


20. AUTOMATED UNIT TESTING

Vitest was used to perform automated unit testing.

The existing regression tests were retained and additional tests were added for the Login feature.

Final Automated Test Result:

Test Files: 1 passed
Tests: 9 passed
Failed: 0

The nine automated tests cover:

1. Complete registration validation
2. Displaying registered courses
3. Editing a registration
4. Deleting a registration
5. Searching registrations
6. Filtering Active registrations
7. Filtering Inactive registrations
8. Valid institutional login
9. Invalid institutional login

Overall Automated Testing Result:

9 Passed
0 Failed

The final regression test confirms that the new login feature and status filtering did not break the existing tested registration functions.


21. MANUAL TEST CASES

A total of 12 manual test cases were completed for the final evolved version.

TC01 – Add Complete Registration

Type:
Positive

Expected Result:
Complete registration details are accepted and a new record is added.

Actual Result:
Registration was added successfully.

Status:
PASS


TC02 – Incomplete Form Validation

Type:
Negative

Expected Result:
Missing required information is rejected and a validation message is displayed.

Actual Result:
Validation message was displayed.

Status:
PASS


TC03 – Display Multiple Records

Type:
Positive

Expected Result:
Multiple registered records are displayed correctly.

Actual Result:
Multiple records were displayed.

Status:
PASS


TC04 – Edit Registration

Type:
Positive

Expected Result:
The selected registration can be updated successfully.

Actual Result:
Registration was updated successfully.

Status:
PASS


TC05 – Cancel Delete

Type:
Negative

Expected Result:
Cancelling the delete confirmation keeps the selected record.

Actual Result:
Record remained in the table.

Status:
PASS


TC06 – Confirm Delete

Type:
Positive

Expected Result:
Confirming deletion removes the selected record.

Actual Result:
Record was successfully removed.

Status:
PASS


TC07 – Search Existing Record

Type:
Positive

Expected Result:
An existing student name or course information is found.

Actual Result:
Matching record was displayed.

Status:
PASS


TC08 – Search Missing Record

Type:
Negative

Expected Result:
A search with no matching record displays no matching registrations.

Actual Result:
No matching record was displayed.

Status:
PASS


TC09 – Data Persistence

Type:
Positive

Expected Result:
Registered data remains available after refreshing the page.

Actual Result:
Records remained after refresh.

Status:
PASS


TC10 – Active/Inactive Status Filter

Type:
Positive

Expected Result:
Selecting Active or Inactive displays only records matching the selected status.

Actual Result:
Active and Inactive filtering worked correctly.

Status:
PASS


TC11 – Responsive / Mobile View

Type:
Positive

Expected Result:
The interface remains usable on smaller screen sizes.

Actual Result:
The system remained usable in mobile view.

Status:
PASS


TC12 – Login Validation

Type:
Positive/Negative

Expected Result:
Valid institutional credentials allow access, while invalid or blank credentials are rejected.

Actual Result:
Valid login succeeded and invalid or blank credentials were prevented.

Status:
PASS


Manual Testing Summary:

Total Test Cases: 12
Passed: 12
Failed: 0


22. DEFECT REPORT AND CORRECTION

Defect Description:

During the software evolution process, the new status filtering feature required registration records to use Active or Inactive status values.

The previous version could contain records using the status value:

Registered

This value was not directly compatible with the new Active/Inactive filtering requirement.

Expected Behavior:

Registration records should use Active or Inactive status so that the status filter can correctly identify and display records.

Actual Behavior:

Existing records could contain the previous Registered status, which could prevent them from being correctly categorized by the new status filter.

Defect Correction:

The application was updated so that existing records with an unsupported status are converted to Active when loaded.

New course registrations are assigned Active status by default.

The RegistrationList component supports Active and Inactive filtering.

Automated tests were updated to verify both Active and Inactive filtering.


23. RELEASE NOTES – VERSION 1.1.0

Version:

1.1.0

Maintenance Type:

Perfective Maintenance

Release Summary:

The Student Course Registration System was improved to provide a more organized and accessible registration experience.

Added:

- Institutional login screen
- Institutional login validation
- Active/Inactive status filter
- All status filter option
- Automated login tests

Preserved:

- Create registration
- Display registration records
- Edit registration
- Delete registration
- Delete confirmation
- Search
- Form validation
- localStorage persistence
- Responsive interface

Testing:

12 manual test cases completed.

12 manual test cases passed.

9 automated Vitest tests passed.

Production build passed successfully.

GitHub Actions build verification passed successfully.

Compatibility:

Older localStorage records without a valid Active or Inactive status are assigned Active status when loaded.

Known Limitation:

The institutional login is currently a demonstration authentication feature and is not connected to a real school authentication system.


24. PRODUCTION BUILD AND CI RESULTS

Production Build:

The evolved application was successfully built using:

npm run build

Final Build Result:

18 modules transformed

Production build completed successfully.

GitHub Actions:

Workflow Name:

Vue Build Check

Latest Workflow:

Vue Build Check #9

Latest Commit:

38a234e

Branch:

module9/software-evolution

Status:

Successful

The successful GitHub Actions workflow confirms that the evolved Vue application can successfully complete the configured build process.


25. GIT BRANCH, COMMITS, AND VERSION CONTROL

The Module 9 software evolution changes were developed using:

module9/software-evolution

Important Module 9 commits include:

1873c82
Add Active Inactive status filter

2d6c133
Update README for Module 9

74dcba1
Update GitHub Actions for Module 9

8de604d
feat: implement institutional login

38a234e
test: update regression tests for evolved version

The latest Module 9 changes were successfully pushed to the public GitHub repository.

Module 9 Branch:

https://github.com/stephanieannjimenez9-create/jimenez-module7-vue-system/tree/module9/software-evolution


26. GITHUB REPOSITORY AND EVIDENCE

Public GitHub Repository:

https://github.com/stephanieannjimenez9-create/jimenez-module7-vue-system

Module 9 Branch:

https://github.com/stephanieannjimenez9-create/jimenez-module7-vue-system/tree/module9/software-evolution

Required Evidence Screenshots:

M9-01_Previous_Architecture.png

Module 6 architecture baseline used as the previous architecture reference.

M9-02_Existing_System.png

Module 7 working system before the Module 9 software evolution.

M9-03_Module8_Test_Baseline.png

Module 8 testing and build baseline.

M9-04_Change_Request.png

CR-M9-01 change request, problem, desired outcome, and acceptance criteria.

M9-05_Updated_Architecture.png

Updated architecture showing the affected components and data flow.

M9-06_Implementation.png

Relevant implementation code or Git diff showing the software evolution changes.

M9-07_Evolved_System.png

Working evolved system showing the implemented changes.

M9-08_Updated_Test_Cases.png

Final manual test cases and results.

M9-09_Test_Build_Results.png

Final automated test and production build results.

M9-10_GitHub_Actions.png

Successful GitHub Actions workflow and GitHub commit evidence.


27. LIMITATIONS, FUTURE IMPROVEMENTS, AND AUTHOR

Limitations:

This project is a frontend prototype developed for academic purposes.

The current version does not include:

- Production backend
- REST API
- MySQL or MongoDB database
- Real school authentication server
- Server-side authentication
- Server-side data storage
- Multi-user access

The institutional login is currently a demonstration login using predefined credentials.

Browser localStorage is used instead of a production database.

Future Improvements:

Future versions of the system may include:

- Backend API integration
- MySQL or MongoDB database
- Real student authentication
- Secure password management
- Administrator dashboard
- Course schedule conflict detection
- Enrollment limits
- Student account management
- Online registration approval
- Cloud deployment
- Advanced reports
- Database-backed records

Author:

Stephanie Ann D. Jimenez

BSCS 3A

Software Engineering 1

Module 9 – Software Evolution

Academic Project:

This project was developed as part of the requirements for Software Engineering 1.

The implementation demonstrates the connection between the architectural design created in Module 6, the working frontend prototype developed in Module 7, the software testing activities completed in Module 8, and the software evolution and maintenance activities completed in Module 9.