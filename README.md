# Student Course Registration System

## Software Engineering 1 – Module 7: Design and Implementation

**Student Name:** Stephanie Ann D. Jimenez  
**Section:** BSCS 3A  
**Selected Entity:** Course Registration  

**Module 6 Repository:**  
https://github.com/stephanieannjimenez9-create/jimenez-module6-architecture

**Module 7 Repository:**  
https://github.com/stephanieannjimenez9-create/jimenez-module7-vue-system

---

## 1. Project Description

The Student Course Registration System is a frontend prototype developed for Software Engineering 1 Module 7.

This project implements the **Course Registration** entity from the system architecture proposed in Module 6.

The system allows users to create, view, edit, delete, and search course registration records. It also provides form validation, browser localStorage persistence, feedback, record summaries, and a responsive interface.

The project is a frontend prototype. The backend, API, and database components proposed in Module 6 remain future components.

---

## 2. Connection Between Module 6 and Module 7

Module 6 focused on the architecture and proposed design of the **Course Registration System**.

The Module 6 architecture proposed technologies including:

- Vue.js
- JavaScript
- Backend services
- Database
- Git
- GitHub

For Module 7, the **Course Registration** entity was selected as the manageable entity to implement.

Module 7 translates the architectural design from Module 6 into a working Vue.js frontend prototype.

### Module 6

Module 6 provides the architectural blueprint and long-term design of the Course Registration System.

### Module 7

Module 7 implements the Course Registration entity as a functional frontend prototype.

The implemented registration fields are:

- Student Name
- Student ID
- Course Code
- Course Name
- Schedule
- Status

### Module 6 Repository

https://github.com/stephanieannjimenez9-create/jimenez-module6-architecture

---

## 3. Implemented Features

The application implements the required Module 7 functions.

### Create

Users can add a complete course registration using the registration form.

### Read

Registered course records are displayed in the Registered Courses section.

### Update

Users can edit an existing course registration and update its information.

### Delete

Users can delete a registration after confirming the deletion.

### Search

Users can search and filter registered course records.

### Validation

Required fields are checked before a registration can be submitted.

### Persistence

Course registration records are saved in browser localStorage so they remain available after refreshing the page.

### Responsive Interface

The application is designed to remain usable on desktop and smaller screen sizes.

### Record Summary

The system displays registration statistics such as total courses and total units.

---

## 4. Course Registration Fields

| Field | Description |
|---|---|
| Student Name | Name of the student |
| Student ID | Student identification number |
| Course Code | Code assigned to the course |
| Course Name | Name of the course |
| Schedule | Course schedule |
| Status | Current registration status |

---

## 5. Technologies Used

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

---

## 6. Vue Components

The project uses reusable Vue components.

```text
src/
├── components/
│   ├── AppHeader.vue
│   ├── RegistrationForm.vue
│   └── RegistrationList.vue
├── App.vue
├── main.js
└── style.css
```

### AppHeader.vue

Contains the application header, system title, and system description.

### RegistrationForm.vue

Contains the course registration form and handles user input and validation.

### RegistrationList.vue

Displays registered courses and provides edit and delete actions.

### App.vue

Controls the main application state and connects the Vue components.

---

## 7. Interface Sections

The application contains the following interface sections:

- Application header
- System title and description
- Course registration form
- Search field
- Registered course list
- Edit button
- Delete button
- Feedback messages
- Record summary
- Reminders section
- Footer with student name and section

---

## 8. localStorage Persistence

The prototype uses browser localStorage for data persistence.

Course registration records are stored in the browser using the key:

```text
module7-records
```

The saved records remain available after the browser page is refreshed.

localStorage is used because Module 7 only requires a frontend prototype. A production version can later replace localStorage with a backend API and database.

---

## 9. Installation and Setup

### Prerequisites

The following software should be installed:

- Node.js
- npm
- Git
- Visual Studio Code

### Open the Project

Open the downloaded project folder:

```text
jimenez-module7-course-registration
```

### Install Dependencies

Open Git Bash or the VS Code terminal inside the project folder and run:

```bash
npm install
```

### Run the Development Server

Run:

```bash
npm run dev
```

Vite will display a local address, for example:

```text
http://localhost:5177/
```

The port may be different if another Vite server is already running.

Open the displayed localhost address in a web browser.

---

## 10. Production Build

To verify that the application can be built successfully, run:

```bash
npm run build
```

A successful build indicates that the Vue application can be compiled for production.

---

## 11. Git and GitHub

Git is used for version control and GitHub is used to host the project repository.

### Module 7 Repository

https://github.com/stephanieannjimenez9-create/jimenez-module7-vue-system

The repository follows the required naming format:

```text
surname-module7-vue-system
```

The project uses meaningful commit messages to document development progress.

---

## 12. GitHub Actions

The project uses GitHub Actions for a simple continuous-integration build check.

The workflow file is:

```text
.github/
└── workflows/
    └── build.yml
```

The workflow installs the project dependencies and runs:

```bash
npm ci
npm run build
```

The purpose of the workflow is to verify that the Vue application can successfully build when changes are pushed to GitHub.

---

## 13. Testing Checklist

| Test | Expected Result |
|---|---|
| Add a complete record | Record appears successfully |
| Submit an incomplete form | Submission is prevented |
| Add multiple records | All records are displayed |
| Edit a record | Updated values replace the previous values |
| Cancel deletion | Record remains in the list |
| Confirm deletion | Selected record is removed |
| Search an existing value | Matching record is displayed |
| Search a missing value | Empty-state message appears |
| Refresh the browser | Saved records remain available |
| Resize the browser | Interface remains usable |

---

## 14. Evidence Screenshots

The following screenshots are required for the Module 7 submission:

| Filename | Evidence |
|---|---|
| `01-running-application.png` | Complete application running in the browser |
| `02-add-record.png` | Completed form and newly added record |
| `03-record-list.png` | Multiple records displayed |
| `04-edit-record.png` | Existing record being edited |
| `05-delete-confirmation.png` | Delete confirmation message |
| `06-search-function.png` | Working search or filter |
| `07-localstorage.png` | Saved data shown in browser Developer Tools |
| `08-responsive-view.png` | Application at a smaller screen width |
| `09-github-repository.png` | Public GitHub repository and project files |
| `10-commit-history.png` | GitHub commit history with at least five meaningful commits |

---

## 15. Known Limitations

This project is a frontend prototype developed for academic purposes.

The current version does not include:

- Production backend
- REST API
- MySQL or MongoDB database
- User authentication
- Server-side data storage
- Multi-user access

Browser localStorage is used instead of a production database.

---

## 16. Future Improvements

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

---

## 17. Author

**Stephanie Ann D. Jimenez**  
**BSCS 3A**

Software Engineering 1  
Module 7 – Design and Implementation

---

## 18. Academic Project

This project was developed as part of the requirements for:

**Software Engineering 1 – Module 7: Design and Implementation**

The implementation demonstrates the connection between the architectural design created in Module 6 and the working frontend prototype developed in Module 7.