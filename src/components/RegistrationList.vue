vue
<template>
  <div class="registration-list">

    <div class="search-box">
      <input
        type="text"
        placeholder="Search registrations..."
        :value="searchQuery"
        @input="updateSearch"
      />
    </div>

    <table>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Student ID</th>
          <th>Course Code</th>
          <th>Course Name</th>
          <th>Schedule</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="registration in filteredRegistrations"
          :key="registration.id"
        >
          <td>{{ registration.studentName }}</td>
          <td>{{ registration.studentId }}</td>
          <td>{{ registration.courseCode }}</td>
          <td>{{ registration.courseName }}</td>
          <td>{{ registration.schedule }}</td>
          <td>{{ registration.status }}</td>

          <td>
            <button
              type="button"
              class="edit-btn"
              @click="editRegistration(registration)"
            >
              Edit
            </button>

            <button
              type="button"
              class="delete-btn"
              @click="deleteRegistration(registration)"
            >
              Delete
            </button>
          </td>
        </tr>

        <tr v-if="filteredRegistrations.length === 0">
          <td colspan="7">No registrations found.</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  registrations: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['edit', 'delete'])

const searchQuery = ref('')

function updateSearch(event) {
  searchQuery.value = event.target.value
}

const filteredRegistrations = computed(() => {
  const search = searchQuery.value.trim().toLowerCase()

  if (!search) {
    return props.registrations
  }

  return props.registrations.filter((registration) => {
    return (
      String(registration.studentName || '').toLowerCase().includes(search) ||
      String(registration.studentId || '').toLowerCase().includes(search) ||
      String(registration.courseCode || '').toLowerCase().includes(search) ||
      String(registration.courseName || '').toLowerCase().includes(search) ||
      String(registration.schedule || '').toLowerCase().includes(search) ||
      String(registration.status || '').toLowerCase().includes(search)
    )
  })
})

function getOriginalIndex(registration) {
  return props.registrations.indexOf(registration)
}

function editRegistration(registration) {
  emit('edit', getOriginalIndex(registration))
}

function deleteRegistration(registration) {
  if (window.confirm('Are you sure you want to delete this registration?')) {
    emit('delete', getOriginalIndex(registration))
  }
}
</script>

