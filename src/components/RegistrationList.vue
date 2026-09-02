<template>
  <div class="registration-list">

    <div class="search-box">

      <input
        type="text"
        placeholder="Search registrations..."
        :value="searchQuery"
        @input="updateSearch"
      />

      <div class="status-filter-group">
        <label for="status-filter">Status:</label>

        <select
          id="status-filter"
          class="status-filter"
          :value="statusFilter"
          @change="statusFilter = $event.target.value"
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

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
const statusFilter = ref('All')

function updateSearch(event) {
  searchQuery.value = event.target.value
}

const filteredRegistrations = computed(() => {
  const search = searchQuery.value.trim().toLowerCase()

  return props.registrations.filter((registration) => {

    const matchesSearch =
      !search ||
      String(registration.studentName || '')
        .toLowerCase()
        .includes(search) ||

      String(registration.studentId || '')
        .toLowerCase()
        .includes(search) ||

      String(registration.courseCode || '')
        .toLowerCase()
        .includes(search) ||

      String(registration.courseName || '')
        .toLowerCase()
        .includes(search) ||

      String(registration.schedule || '')
        .toLowerCase()
        .includes(search) ||

      String(registration.status || '')
        .toLowerCase()
        .includes(search)

    const matchesStatus =
      statusFilter.value === 'All' ||
      String(registration.status || '').toLowerCase() ===
        statusFilter.value.toLowerCase()

    return matchesSearch && matchesStatus
  })
})

function getOriginalIndex(registration) {
  return props.registrations.indexOf(registration)
}

function editRegistration(registration) {
  emit('edit', getOriginalIndex(registration))
}

function deleteRegistration(registration) {
  if (
    window.confirm(
      'Are you sure you want to delete this registration?'
    )
  ) {
    emit('delete', getOriginalIndex(registration))
  }
}
</script>


<style scoped>
.search-box {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  margin-bottom: 15px;
}

.search-box input {
  flex: 1;
}

.status-filter-group {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

.status-filter-group label {
  font-weight: 600;
  font-size: 14px;
}

.status-filter {
  min-width: 130px;
  height: 44px;
  padding: 0 12px;
  border: 1px solid #cfc5ff;
  border-radius: 8px;
  background: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
}

.status-filter:focus {
  border-color: #6c4df6;
  box-shadow: 0 0 0 2px rgba(108, 77, 246, 0.15);
}

@media (max-width: 700px) {
  .search-box {
    flex-direction: column;
    align-items: stretch;
  }

  .status-filter-group {
    justify-content: space-between;
  }

  .status-filter {
    flex: 1;
  }
}
</style>