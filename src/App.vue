<script setup>
import { ref, computed, onMounted } from 'vue'

import AppHeader from './components/AppHeader.vue'
import RegistrationForm from './components/RegistrationForm.vue'
import RegistrationList from './components/RegistrationList.vue'

/* =========================================
   REGISTRATIONS
   ========================================= */

const registrations = ref([])

/* =========================================
   LOAD DATA FROM LOCALSTORAGE
   ========================================= */

onMounted(() => {
  const saved = localStorage.getItem('module7-records')

  registrations.value = saved
    ? JSON.parse(saved)
    : []
})

/* =========================================
   SAVE DATA TO LOCALSTORAGE
   ========================================= */

function saveRegistrations() {
  localStorage.setItem(
    'module7-records',
    JSON.stringify(registrations.value)
  )
}

/* =========================================
   CREATE / ADD
   ========================================= */

function addRegistration(registration) {
  registrations.value.push({
    id: Date.now(),
    ...registration,
    status: 'Registered'
  })

  saveRegistrations()

  alert('Course registration added successfully!')
}

/* =========================================
   DELETE
   ========================================= */

function deleteRegistration(index) {
  registrations.value.splice(index, 1)

  saveRegistrations()
}

/* =========================================
   EDIT / UPDATE
   ========================================= */

function editRegistration(index) {
  const registration = registrations.value[index]

  const studentName = prompt(
    'Student Name:',
    registration.studentName
  )

  if (studentName === null) return

  const studentId = prompt(
    'Student ID:',
    registration.studentId
  )

  if (studentId === null) return

  const courseCode = prompt(
    'Course Code:',
    registration.courseCode
  )

  if (courseCode === null) return

  const courseName = prompt(
    'Course Name:',
    registration.courseName
  )

  if (courseName === null) return

  const schedule = prompt(
    'Schedule:',
    registration.schedule
  )

  if (schedule === null) return

  /* VALIDATION */

  if (
    !studentName.trim() ||
    !studentId.trim() ||
    !courseCode.trim() ||
    !courseName.trim() ||
    !schedule.trim()
  ) {
    alert('Please complete all required fields.')

    return
  }

  /* UPDATE RECORD */

  registrations.value[index] = {
    ...registration,
    studentName: studentName.trim(),
    studentId: studentId.trim(),
    courseCode: courseCode.trim(),
    courseName: courseName.trim(),
    schedule: schedule.trim()
  }

  saveRegistrations()

  alert('Registration updated successfully!')
}

/* =========================================
   STATISTICS
   ========================================= */

const totalCourses = computed(() => {
  return registrations.value.length
})

const totalUnits = computed(() => {
  return registrations.value.length * 3
})
</script>

<template>
  <div class="app">

    <!-- HEADER -->
    <AppHeader />

    <!-- MAIN CONTENT -->
    <main class="container">

      <!-- REGISTRATION FORM -->
      <RegistrationForm
        @register="addRegistration"
      />

      <!-- REGISTERED COURSES -->
      <RegistrationList
        :registrations="registrations"
        @delete="deleteRegistration"
        @edit="editRegistration"
      />

      <!-- STATISTICS -->
      <section class="stats-grid">

        <!-- TOTAL COURSES -->
        <div class="stat-card">

          <div class="stat-icon">
            📋
          </div>

          <div class="stat-info">

            <div class="stat-number">
              {{ totalCourses }}
            </div>

            <div class="stat-label">
              Total Courses
            </div>

          </div>

        </div>

        <!-- TOTAL UNITS -->
        <div class="stat-card">

          <div class="stat-icon">
            ✓
          </div>

          <div class="stat-info">

            <div class="stat-number">
              {{ totalUnits }}
            </div>

            <div class="stat-label">
              Total Units
            </div>

          </div>

        </div>

        <!-- CURRENT TERM -->
        <div class="stat-card">

          <div class="stat-icon">
            📅
          </div>

          <div class="stat-info">

            <div class="stat-term">
              AY 2026-2027
            </div>

            <div class="stat-label">
              Current Term
            </div>

          </div>

        </div>

      </section>

      <!-- REMINDERS -->
      <section class="reminders">

        <h3>
          🔔 Reminders
        </h3>

        <ul>

          <li>
            Check your schedule for conflicts before registering.
          </li>

          <li>
            Late registration may result in additional fees.
          </li>

          <li>
            Contact the registrar for any concerns.
          </li>

        </ul>

      </section>

    </main>

    <!-- FOOTER -->
    <footer class="footer">

      <p>
        © 2026 Course Registration System | All Rights Reserved
      </p>

      <p>
        Developed by
        <strong>
          Stephanie Ann D. Jimenez | BSCS 3A 💙
        </strong>
      </p>

    </footer>

  </div>
</template>