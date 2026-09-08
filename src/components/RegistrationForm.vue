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
const status = ref('Active')
const errorMessage = ref('')

watch(
  () => props.registration,
  (value) => {
    if (value) {
      studentName.value = value.studentName || ''
      studentId.value = value.studentId || ''
      courseCode.value = value.courseCode || ''
      courseName.value = value.courseName || ''
      schedule.value = value.schedule || ''
      status.value = value.status === 'Inactive' ? 'Inactive' : 'Active'
      errorMessage.value = ''
    }
  },
  { immediate: true }
)

function submitRegistration() {
  errorMessage.value = ''

  const registration = {
    studentName: studentName.value.trim(),
    studentId: studentId.value.trim(),
    courseCode: courseCode.value.trim(),
    courseName: courseName.value.trim(),
    schedule: schedule.value.trim(),
    status: status.value
  }

  if (!registration.studentName) {
    errorMessage.value = 'Please enter the student name.'
    return
  }

  if (!registration.studentId) {
    errorMessage.value = 'Please enter the student ID.'
    return
  }

  if (!registration.courseCode) {
    errorMessage.value = 'Please enter the course code.'
    return
  }

  if (!registration.courseName) {
    errorMessage.value = 'Please enter the course name.'
    return
  }

  if (!registration.schedule) {
    errorMessage.value = 'Please enter the course schedule.'
    return
  }

  emit('register', registration)

  clearForm()
}

function clearForm() {
  studentName.value = ''
  studentId.value = ''
  courseCode.value = ''
  courseName.value = ''
  schedule.value = ''
  status.value = 'Active'
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

    <div
      v-if="errorMessage"
      class="validation-message"
      role="alert"
    >
      ⚠️ {{ errorMessage }}
    </div>

    <form @submit.prevent="submitRegistration">

      <div class="form-grid">

        <!-- Student Name -->
        <div class="form-group">
          <label>Student Name</label>

          <input
            type="text"
            placeholder="Enter student name"
            :value="studentName"
            @input="studentName = $event.target.value"
          />
        </div>

        <!-- Student ID -->
        <div class="form-group">
          <label>Student ID</label>

          <input
            type="text"
            placeholder="Enter student ID"
            :value="studentId"
            @input="studentId = $event.target.value"
          />
        </div>

        <!-- Course Code -->
        <div class="form-group">
          <label>Course Code</label>

          <input
            type="text"
            placeholder="e.g. CS301"
            :value="courseCode"
            @input="courseCode = $event.target.value"
          />
        </div>

        <!-- Course Name -->
        <div class="form-group">
          <label>Course Name</label>

          <input
            type="text"
            placeholder="Enter course name"
            :value="courseName"
            @input="courseName = $event.target.value"
          />
        </div>

        <!-- Schedule -->
        <div class="form-group full">
          <label>Schedule</label>

          <input
            type="text"
            placeholder="e.g. Monday 8:00 AM - 10:00 AM"
            :value="schedule"
            @input="schedule = $event.target.value"
          />
        </div>

        <!-- Status -->
        <div class="form-group">
          <label>Status</label>

          <select v-model="status" class="status-select">
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

      </div>

      <div class="button-group">

        <button
          type="submit"
          class="btn btn-primary"
        >
          +
          {{ editing ? 'Update Course' : 'Register Course' }}
        </button>

        <button
          type="button"
          class="btn btn-secondary"
          @click="clearForm"
        >
          ↻ Clear
        </button>

      </div>

    </form>

  </section>
</template>

<style scoped>
.status-select {
  width: 100%;
  height: 58px;
  padding: 0 18px;
  border: 2px solid #ddd6fe;
  border-radius: 12px;
  background-color: #faf9ff;
  color: #6b7280;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
}

.status-select:focus {
  border-color: #8b5cf6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15);
}
</style>