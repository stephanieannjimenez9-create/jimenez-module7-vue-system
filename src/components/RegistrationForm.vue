<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  registration: {
    type: Object,
    default: null
  },

  editing: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['register'])

const studentName = ref('')
const studentId = ref('')
const courseCode = ref('')
const courseName = ref('')
const schedule = ref('')

const errorMessage = ref('')

watch(
  () => props.registration,
  (value) => {
    if (value) {
      studentName.value = value.studentName
      studentId.value = value.studentId
      courseCode.value = value.courseCode
      courseName.value = value.courseName
      schedule.value = value.schedule

      errorMessage.value = ''
    }
  },
  { immediate: true }
)

/* =========================================
   SUBMIT REGISTRATION
   ========================================= */

function submitRegistration() {
  errorMessage.value = ''

  if (!studentName.value.trim()) {
    errorMessage.value = 'Please enter the student name.'
    return
  }

  if (!studentId.value.trim()) {
    errorMessage.value = 'Please enter the student ID.'
    return
  }

  if (!courseCode.value.trim()) {
    errorMessage.value = 'Please enter the course code.'
    return
  }

  if (!courseName.value.trim()) {
    errorMessage.value = 'Please enter the course name.'
    return
  }

  if (!schedule.value.trim()) {
    errorMessage.value = 'Please enter the course schedule.'
    return
  }

  emit('register', {
    studentName: studentName.value.trim(),
    studentId: studentId.value.trim(),
    courseCode: courseCode.value.trim(),
    courseName: courseName.value.trim(),
    schedule: schedule.value.trim()
  })

  clearForm()
}

/* =========================================
   CLEAR FORM
   ========================================= */

function clearForm() {
  studentName.value = ''
  studentId.value = ''
  courseCode.value = ''
  courseName.value = ''
  schedule.value = ''

  errorMessage.value = ''
}
</script>

<template>
  <section class="card form-card">

    <div class="section-title">
      <span>👤</span>

      <h2>
        {{ editing ? 'Edit Registration' : 'Register Course' }}
      </h2>
    </div>

    <div class="title-line"></div>

    <!-- VALIDATION MESSAGE -->
    <div
      v-if="errorMessage"
      class="validation-message"
      role="alert"
    >
      ⚠️ {{ errorMessage }}
    </div>

    <form @submit.prevent="submitRegistration">

      <div class="form-grid">

        <!-- STUDENT NAME -->
        <div class="form-group">
          <label>
            ♙ Student Name
          </label>

          <input
            v-model="studentName"
            type="text"
            placeholder="Enter student name"
          />
        </div>

        <!-- STUDENT ID -->
        <div class="form-group">
          <label>
            ▣ Student ID
          </label>

          <input
            v-model="studentId"
            type="text"
            placeholder="Enter student ID"
          />
        </div>

        <!-- COURSE CODE -->
        <div class="form-group">
          <label>
            &lt;/&gt; Course Code
          </label>

          <input
            v-model="courseCode"
            type="text"
            placeholder="e.g. CS301"
          />
        </div>

        <!-- COURSE NAME -->
        <div class="form-group">
          <label>
            ▢ Course Name
          </label>

          <input
            v-model="courseName"
            type="text"
            placeholder="Enter course name"
          />
        </div>

        <!-- SCHEDULE -->
        <div class="form-group full">
          <label>
            ◷ Schedule
          </label>

          <input
            v-model="schedule"
            type="text"
            placeholder="e.g. Monday 8:00 AM - 10:00 AM"
          />
        </div>

      </div>

      <!-- BUTTONS -->
      <div class="button-group">

        <button
          type="submit"
          class="btn btn-primary"
        >
          ＋
          {{ editing ? 'Update Course' : 'Register Course' }}
        </button>

        <button
          type="button"
          class="btn btn-secondary"
          @click="clearForm"
        >
          ⟳ Clear
        </button>

      </div>

    </form>

  </section>
</template>