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


1. PROJECT DESCRIPTION

The Student Course Registration System is a frontend prototype developed for Software Engineering 1 Module 7.

This project implements the Course Registration entity from the system architecture proposed in Module 6.

The system allows users to create, view, edit, delete, and search course registration records. It also provides form validation, browser localStorage persistence, feedback, record summaries, and a responsive interface.

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

The application implements the required Module 7 functions.

Create

Users can add a complete course registration using the registration form.

Read

Registered course records are displayed in the Registered Courses section.

Update

Users can edit an existing course registration and update its information.

Delete

Users can delete a registration after confirming the deletion.

Search

Users can search and filter registered course records.

Validation

Required fields are checked before a registration can be submitted.

Persistence

Course registration records are saved in browser localStorage so they remain available after refreshing the page.

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
- Visual Studio Code


6. VUE COMPONENTS

The project uses reusable Vue components.

src/
    components/
        AppHeader.vue
        RegistrationForm.vue
        RegistrationList.vue
    App.vue
    main.js
    style.css

AppHeader.vue

Contains the application header, system title, and system description.

RegistrationForm.vue

Contains the course registration form and handles user input and validation.

RegistrationList.vue

Displays registered courses and provides edit and delete actions.

App.vue

Controls the main application state and connects the Vue components.


7. INTERFACE SECTIONS

The application contains the following interface sections:

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


10. PRODUCTION BUILD

To verify that the application can be built successfully, run:

npm run build

A successful build indicates that the Vue application can be compiled for production.

The Module 9 production build was successfully completed.

Build Result:

16 modules transformed
Production build passed


11. GIT AND GITHUB

Git is used for version control and GitHub is used to host the project repository.

Module 7 Repository:

https://github.com/stephanieannjimenez9-create/jimenez-module7-vue-system

The project uses meaningful commit messages to document development progress.


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


13. TESTING CHECKLIST

Test                              Expected Result

Add a complete record             Record appears successfully

Submit an incomplete form         Submission is prevented

Add multiple records              All records are displayed

Edit a record                     Updated values replace previous values

Cancel deletion                   Record remains in the list

Confirm deletion                  Selected record is removed

Search an existing value          Matching record is displayed

Search a missing value            Empty-state message appears

Refresh the browser               Saved records remain available

Resize the browser                Interface remains usable

Filter Active status              Active registrations are displayed

Filter Inactive status            Inactive registrations are displayed


14. MODULE 9 – SOFTWARE EVOLUTION

Module 9 focuses on software evolution and maintenance of the Student Course Registration System developed in Module 7.

The existing system was retained and improved through a software change involving registration status filtering.


Software Change

The system was enhanced with an Active/Inactive status filter for course registration records.

Users can select:

- All
- Active
- Inactive

The filter allows users to view registration records based on their current status.


Maintenance Type

The change represents Perfective Maintenance because the existing system was improved by adding a useful filtering function without changing the main purpose of the application.


Five Tested Features

1. Add Record

Validates complete registration information and adds a new record.

2. Display Records

Displays saved course registration records.

3. Edit Record

Allows an existing registration to be updated.

4. Delete Record

Removes a selected registration after confirmation.

5. Search / Status Filtering

Searches registration records and filters them by Active or Inactive status.


15. AUTOMATED UNIT TESTING

Vitest was used to perform automated unit testing.

The existing Module 8 tests were retained and additional tests were added for the Active and Inactive status filters.

Final Automated Test Result:

Test Files: 1 passed
Tests: 7 passed
Failed: 0

The seven automated tests cover:

1. Complete registration validation
2. Displaying registered courses
3. Editing a registration
4. Deleting a registration
5. Searching registrations
6. Filtering Active registrations
7. Filtering Inactive registrations

Overall automated testing result:

7 Passed
0 Failed


16. MANUAL TEST CASES

Test Case    Feature                    Type       Expected Result                                      Actual Result

TC01         Add Record                 Positive   Valid registration details are accepted and          Passed
                                                   a new record is added.

TC02         Add Record                 Negative   Missing required student information is rejected.    Passed

TC03         Display Records            Positive   A saved course registration appears in the           Passed
                                                   records list.

TC04         Display Records            Edge       No matching or empty records are handled            Passed
                                                   without errors.

TC05         Edit Record                Positive   The selected course registration is updated          Passed
                                                   successfully.

TC06         Edit Record                Negative   Invalid or empty required data is rejected           Passed
                                                   during editing.

TC07         Delete Record              Positive   The selected course registration is deleted           Passed
                                                   after confirmation.

TC08         Delete Record              Edge       Cancelling deletion leaves the selected              Passed
                                                   registration unchanged.

TC09         Search / Validation         Positive   An existing student name or course code is          Passed
                                                   found successfully.

TC10         Search / Validation         Edge       A search with no matching registration displays     Passed
                                                   "No registrations found."

TC11         Active/Inactive Filter      Positive   Selecting Active displays registrations with        Passed
                                                   Active status.

TC12         Active/Inactive Filter      Positive   Selecting Inactive displays registrations with      Passed
                                                   Inactive status, or shows "No registrations found."
                                                   when there are no matching records.


17. DEFECT REPORT

Defect Description

During the software evolution process, the status filtering feature needed to be supported by the registration data and automated tests.

The existing system used the status value "Registered", while the new status filter required Active and Inactive status values.

Expected Behavior

Registration records should use Active or Inactive status so that the status filter can identify and display the correct records.

Actual Behavior

Existing records could contain the previous Registered status, which was not directly compatible with the new Active/Inactive filtering requirement.


18. DEFECT CORRECTION

The defect was corrected by updating the application status handling.

Existing records with the previous Registered status are converted to Active when loaded.

New course registrations are assigned Active status by default.

The RegistrationList component supports the status filtering functionality.

The automated tests were also updated to test both Active and Inactive status filtering.


19. RETESTING RESULT

After the correction was made, the automated tests were executed again using Vitest.

Final result:

Test Files: 1 passed
Tests: 7 passed
Failed: 0

The Active and Inactive filtering tests passed successfully.


20. REGRESSION TESTING

Regression testing was performed after the software change.

The existing Module 8 tests were retained and executed together with the new Module 9 tests.

All seven automated tests passed.

This confirms that the new status filtering functionality did not break the existing registration, display, edit, delete, and search features.

Regression Result:

Passed


21. GIT BRANCH AND COMMIT

The Module 9 changes were developed using the following branch:

module9/software-evolution

The changes were committed using:

Add Active Inactive status filter

Commit ID:

1873c82

The changes were successfully pushed to GitHub.


22. GITHUB REPOSITORY

Public GitHub Repository:

https://github.com/stephanieannjimenez9-create/jimenez-module7-vue-system

Module 9 Branch:

module9/software-evolution


23. EVIDENCE SCREENSHOTS

The final Module 9 report will contain the required screenshots M9-01 to M9-10.

M9-01
Existing Module 7 application running in the browser.

M9-02
Updated architecture showing the evolved system.

M9-03
Updated application showing the implemented software change.

M9-04
Updated source code related to the software evolution change.

M9-05
Automated tests showing the existing tests.

M9-06
Automated tests showing the added Active and Inactive filter tests.

M9-07
Updated manual test cases.

M9-08
Testing and build evidence.

M9-09
Final automated testing and regression result.

M9-10
GitHub Actions successful CI and GitHub commit evidence.


24. LIMITATIONS

This project is a frontend prototype developed for academic purposes.

The current version does not include:

- Production backend
- REST API
- MySQL or MongoDB database
- User authentication
- Server-side data storage
- Multi-user access

Browser localStorage is used instead of a production database.


25. FUTURE IMPROVEMENTS

Future versions of the system may include:

- Backend API integration
- MySQL or MongoDB database
- Student authentication
- Administrator dashboard
- Course schedule conflict detection
- Enrollment limits
- Student account management
- Online registration approval
- Cloud deployment
- Advanced reports
- Database-backed records


26. AUTHOR

Stephanie Ann D. Jimenez

BSCS 3A

Software Engineering 1

Module 9 – Software Evolution


27. ACADEMIC PROJECT

This project was developed as part of the requirements for Software Engineering 1.

The implementation demonstrates the connection between the architectural design created in Module 6, the working frontend prototype developed in Module 7, the software testing activities completed in Module 8, and the software evolution and maintenance activities completed in Module 9.