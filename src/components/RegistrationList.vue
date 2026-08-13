<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')

const props = defineProps({
  registrations: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['delete', 'edit'])

/* =========================================
   DELETE
   ========================================= */

function deleteRegistration(index) {
  if (confirm('Are you sure you want to delete this registration?')) {
    emit('delete', index)
  }
}

/* =========================================
   EDIT
   ========================================= */

function editRegistration(index) {
  emit('edit', index)
}

/* =========================================
   SEARCH / FILTER
   ========================================= */

const filteredRegistrations = computed(() => {
  const search = searchQuery.value.toLowerCase().trim()

  if (!search) {
    return props.registrations
  }

  return props.registrations.filter((registration) =>
    registration.studentName?.toLowerCase().includes(search) ||
    registration.studentId?.toLowerCase().includes(search) ||
    registration.courseCode?.toLowerCase().includes(search) ||
    registration.courseName?.toLowerCase().includes(search) ||
    registration.schedule?.toLowerCase().includes(search)
  )
})
</script>

<template>
  <div class="right-column">

    <!-- REGISTERED COURSES -->
    <section class="card registration-card">

      <!-- TITLE -->
      <div class="section-title">
        <span>☷</span>

        <h2>Registered Courses</h2>

        <span class="count">
          {{ registrations.length }}
        </span>
      </div>

      <!-- SEARCH -->
      <div class="search-box">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="🔎 Search student, ID, course, or schedule..."
        />
      </div>

      <!-- NO REGISTRATIONS -->
      <div
        v-if="registrations.length === 0"
        class="empty-state"
      >
        No course registrations yet.
      </div>

      <!-- NO SEARCH RESULTS -->
      <div
        v-else-if="filteredRegistrations.length === 0"
        class="empty-state"
      >
        No courses found for "{{ searchQuery }}".
      </div>

      <!-- TABLE -->
      <div
        v-else
        class="table-container"
      >

        <table>

          <thead>
            <tr>
              <th>#</th>
              <th>Student</th>
              <th>Student ID</th>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Schedule</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            <tr
              v-for="(registration, index) in filteredRegistrations"
              :key="registration.id || index"
            >

              <td>
                {{ index + 1 }}
              </td>

              <td>
                {{ registration.studentName }}
              </td>

              <td>
                {{ registration.studentId }}
              </td>

              <td>
                <strong>
                  {{ registration.courseCode }}
                </strong>
              </td>

              <td>
                {{ registration.courseName }}
              </td>

              <td>
                {{ registration.schedule }}
              </td>

              <td>

                <div class="action-buttons">

                  <!-- EDIT -->
                  <button
                    type="button"
                    class="edit-btn"
                    @click="editRegistration(index)"
                    title="Edit registration"
                  >
                    ✎
                  </button>

                  <!-- DELETE -->
                  <button
                    type="button"
                    class="delete-btn"
                    @click="deleteRegistration(index)"
                    title="Delete registration"
                  >
                    🗑
                  </button>

                </div>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </section>

    <!-- STATISTICS -->
    <div class="statistics">

      <!-- TOTAL COURSES -->
      <div class="stat-card blue">

        <div class="stat-icon">
          📋
        </div>

        <div>
          <strong>
            {{ registrations.length }}
          </strong>

          <span>
            Total Courses
          </span>
        </div>

      </div>

      <!-- TOTAL UNITS -->
      <div class="stat-card green">

        <div class="stat-icon">
          ✓
        </div>

        <div>
          <strong>
            {{ registrations.length * 3 }}
          </strong>

          <span>
            Total Units
          </span>
        </div>

      </div>

      <!-- CURRENT TERM -->
      <div class="stat-card purple">

        <div class="stat-icon">
          📅
        </div>

        <div>
          <strong>
            AY 2026-2027
          </strong>

          <span>
            Current Term
          </span>
        </div>

      </div>

    </div>

  </div>
</template>