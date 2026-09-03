import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'

import RegistrationForm from '../src/components/RegistrationForm.vue'
import RegistrationList from '../src/components/RegistrationList.vue'
import LoginForm from '../src/components/LoginForm.vue'

describe('Module 7 Course Registration System - Module 9 Testing', () => {
  const sampleRegistration = {
    id: 1,
    studentName: 'Stephanie Jimenez',
    studentId: '2026-001',
    courseCode: 'CS301',
    courseName: 'Software Engineering',
    schedule: 'Monday 8:00 AM - 10:00 AM',
    status: 'Active'
  }

  const registrations = [
    sampleRegistration,
    {
      id: 2,
      studentName: 'Juan Dela Cruz',
      studentId: '2026-002',
      courseCode: 'CS302',
      courseName: 'Web Development',
      schedule: 'Tuesday 10:00 AM - 12:00 PM',
      status: 'Active'
    }
  ]

  const statusRegistrations = [
    sampleRegistration,
    {
      id: 2,
      studentName: 'Juan Dela Cruz',
      studentId: '2026-002',
      courseCode: 'CS302',
      courseName: 'Web Development',
      schedule: 'Tuesday 10:00 AM - 12:00 PM',
      status: 'Inactive'
    }
  ]

  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('should validate and emit a registration with complete information', async () => {
    const wrapper = mount(RegistrationForm)

    const inputs = wrapper.findAll('input')

    expect(inputs.length).toBe(5)

    await inputs[0].setValue('Stephanie Jimenez')
    await inputs[1].setValue('2026-001')
    await inputs[2].setValue('CS301')
    await inputs[3].setValue('Software Engineering')
    await inputs[4].setValue('Monday 8:00 AM - 10:00 AM')

    await wrapper.find('form').trigger('submit')

    expect(wrapper.emitted('register')).toBeTruthy()

    expect(wrapper.emitted('register')[0][0]).toEqual({
      studentName: 'Stephanie Jimenez',
      studentId: '2026-001',
      courseCode: 'CS301',
      courseName: 'Software Engineering',
      schedule: 'Monday 8:00 AM - 10:00 AM'
    })

    wrapper.unmount()
  })

  it('should display registered courses correctly', () => {
    const wrapper = mount(RegistrationList, {
      props: {
        registrations
      }
    })

    expect(wrapper.text()).toContain('Stephanie Jimenez')
    expect(wrapper.text()).toContain('CS301')
    expect(wrapper.text()).toContain('Juan Dela Cruz')
    expect(wrapper.text()).toContain('CS302')

    wrapper.unmount()
  })

  it('should emit the edit event when the edit button is clicked', async () => {
    const wrapper = mount(RegistrationList, {
      props: {
        registrations
      }
    })

    const editButtons = wrapper.findAll('.edit-btn')

    expect(editButtons.length).toBe(2)

    await editButtons[0].trigger('click')

    expect(wrapper.emitted('edit')).toBeTruthy()
    expect(wrapper.emitted('edit')[0]).toEqual([0])

    wrapper.unmount()
  })

  it('should emit the delete event when deletion is confirmed', async () => {
    const confirmMock = vi.fn(() => true)
    vi.stubGlobal('confirm', confirmMock)

    const wrapper = mount(RegistrationList, {
      props: {
        registrations
      }
    })

    const deleteButtons = wrapper.findAll('.delete-btn')

    expect(deleteButtons.length).toBe(2)

    await deleteButtons[0].trigger('click')

    expect(confirmMock).toHaveBeenCalled()
    expect(wrapper.emitted('delete')).toBeTruthy()
    expect(wrapper.emitted('delete')[0]).toEqual([0])

    wrapper.unmount()
  })

  it('should filter registrations using the search field', async () => {
    const wrapper = mount(RegistrationList, {
      props: {
        registrations
      }
    })

    const searchInput = wrapper.find('.search-box input')

    expect(searchInput.exists()).toBe(true)

    await searchInput.setValue('CS302')

    expect(wrapper.vm.searchQuery).toBe('CS302')
    expect(wrapper.vm.filteredRegistrations).toHaveLength(1)
    expect(wrapper.vm.filteredRegistrations[0].studentName).toBe(
      'Juan Dela Cruz'
    )
    expect(wrapper.vm.filteredRegistrations[0].courseCode).toBe('CS302')

    wrapper.unmount()
  })

  it('should filter registrations by Active status', async () => {
    const wrapper = mount(RegistrationList, {
      props: {
        registrations: statusRegistrations
      }
    })

    const statusFilter = wrapper.find('.status-filter')

    await statusFilter.setValue('Active')

    expect(wrapper.vm.filteredRegistrations).toHaveLength(1)
    expect(wrapper.vm.filteredRegistrations[0].status).toBe('Active')
    expect(wrapper.vm.filteredRegistrations[0].studentName).toBe(
      'Stephanie Jimenez'
    )

    wrapper.unmount()
  })

  it('should filter registrations by Inactive status', async () => {
    const wrapper = mount(RegistrationList, {
      props: {
        registrations: statusRegistrations
      }
    })

    const statusFilter = wrapper.find('.status-filter')

    await statusFilter.setValue('Inactive')

    expect(wrapper.vm.filteredRegistrations).toHaveLength(1)
    expect(wrapper.vm.filteredRegistrations[0].status).toBe('Inactive')
    expect(wrapper.vm.filteredRegistrations[0].studentName).toBe(
      'Juan Dela Cruz'
    )

    wrapper.unmount()
  })

  it('should allow login with valid institutional credentials', async () => {
    const wrapper = mount(LoginForm)

    const inputs = wrapper.findAll('input')

    await inputs[0].setValue('stephanie.jimenez@school.edu')
    await inputs[1].setValue('student123')

    await wrapper.find('form').trigger('submit')

    expect(wrapper.emitted('login')).toBeTruthy()

    wrapper.unmount()
  })

  it('should reject login with invalid credentials', async () => {
    const wrapper = mount(LoginForm)

    const inputs = wrapper.findAll('input')

    await inputs[0].setValue('wrong@email.com')
    await inputs[1].setValue('wrongpassword')

    await wrapper.find('form').trigger('submit')

    expect(wrapper.emitted('login')).toBeFalsy()
    expect(wrapper.text()).toContain(
      'Invalid institutional account or password.'
    )

    wrapper.unmount()
  })
})