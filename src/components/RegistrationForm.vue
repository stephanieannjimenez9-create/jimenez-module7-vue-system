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

watch(
  () => props.registration,
  (value) => {
    if (value) {
      studentName.value = value.studentName
      studentId.value = value.studentId
      courseCode.value = value.courseCode
      courseName.value = value.courseName
      schedule.value = value.schedule
    }
  },
  { immediate: true }
)

function submitRegistration() {
  if (
    !studentName.value ||
    !studentId.value ||
    !courseCode.value ||
    !courseName.value ||
    !schedule.value
  ) {
    alert('Please complete all fields.')
    return
  }

  emit('register', {
    studentName: studentName.value,
    studentId: studentId.value,
    courseCode: courseCode.value,
    courseName: courseName.value,
    schedule: schedule.value
  })

  clearForm()
}

function clearForm() {
  studentName.value = ''
  studentId.value = ''
  courseCode.value = ''
  courseName.value = ''
  schedule.value = ''
}
</script>

<template>
  <section class="card form-card">

    <div class="section-title">
      <span>👤</span>
      <h2>{{ editing ? 'Edit Registration' : 'Register Course' }}</h2>
    </div>

    <div class="title-line"></div>

    <form @submit.prevent="submitRegistration">

      <div class="form-grid">

        <div class="form-group">
          <label>♙ Student Name</label>

          <input
            v-model="studentName"
            type="text"
            placeholder="Enter student name"
          />
        </div>

        <div class="form-group">
          <label>▣ Student ID</label>

          <input
            v-model="studentId"
            type="text"
            placeholder="Enter student ID"
          />
        </div>

        <div class="form-group">
          <label>&lt;/&gt; Course Code</label>

          <input
            v-model="courseCode"
            type="text"
            placeholder="e.g. CS301"
          />
        </div>

        <div class="form-group">
          <label>▢ Course Name</label>

          <input
            v-model="courseName"
            type="text"
            placeholder="Enter course name"
          />
        </div>

        <div class="form-group full">
          <label>◷ Schedule</label>

          <input
            v-model="schedule"
            type="text"
            placeholder="e.g. Monday 8:00 AM - 10:00 AM"
          />
        </div>

      </div>

      <div class="button-group">

        <button
          type="submit"
          class="btn btn-primary"
        >
          ＋ {{ editing ? 'Update Course' : 'Register Course' }}
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