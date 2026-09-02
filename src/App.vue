<script setup>
import { ref, computed, onMounted } from 'vue'

import AppHeader from './components/AppHeader.vue'
import RegistrationForm from './components/RegistrationForm.vue'
import RegistrationList from './components/RegistrationList.vue'

const registrations = ref([])

onMounted(() => {
  const saved = localStorage.getItem('module7-records')

  registrations.value = saved
    ? JSON.parse(saved).map((registration) => ({
        ...registration,
        status:
          registration.status === 'Active' ||
          registration.status === 'Inactive'
            ? registration.status
            : 'Active'
      }))
    : []

  saveRegistrations()
})

function saveRegistrations() {
  localStorage.setItem(
    'module7-records',
    JSON.stringify(registrations.value)
  )
}

function addRegistration(registration) {
  registrations.value.push({
    id: Date.now(),
    ...registration,
    status: 'Active'
  })

  saveRegistrations()

  alert('Course registration added successfully!')
}

function deleteRegistration(index) {
  registrations.value.splice(index, 1)

  saveRegistrations()
}

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

const totalCourses = computed(() => {
  return registrations.value.length
})

const totalUnits = computed(() => {
  return registrations.value.length * 3
})
</script>

<template>
  <div class="app">
    <AppHeader />

    <main class="container">

      <RegistrationForm
        @register="addRegistration"
      />

      <RegistrationList
        :registrations="registrations"
        @delete="deleteRegistration"
        @edit="editRegistration"
      />

      <section class="stats-grid">

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