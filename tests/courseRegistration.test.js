import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'

import RegistrationForm from '../src/components/RegistrationForm.vue'
import RegistrationList from '../src/components/RegistrationList.vue'
import LoginForm from '../src/components/LoginForm.vue'

describe('Module 7 Course Registration System - Module 9 Testing', () => {

  it('should validate and emit a registration with complete information', async () => {
    const wrapper = mount(RegistrationForm)

    const inputs = wrapper.findAll('input')

    await inputs[0].setValue('Stephanie Jimenez')
    await inputs[1].setValue('2026-001')
    await inputs[2].setValue('CS301')
    await inputs[3].setValue('Software Engineering')
    await inputs[4].setValue('Monday 8:00 AM - 10:00 AM')

    await wrapper.find('select').setValue('Active')

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('register')).toBeTruthy()

    expect(wrapper.emitted('register')[0][0]).toEqual({
      studentName: 'Stephanie Jimenez',
      studentId: '2026-001',
      courseCode: 'CS301',
      courseName: 'Software Engineering',
      schedule: 'Monday 8:00 AM - 10:00 AM',
      status: 'Active',
    })
  })

  it('should display registered courses correctly', () => {
    const registrations = [
      {
        id: 1,
        studentName: 'Stephanie Jimenez',
        studentId: '2026-001',
        courseCode: 'CS301',
        courseName: 'Software Engineering',
        schedule: 'Monday 8:00 AM - 10:00 AM',
        status: 'Active',
      },
      {
        id: 2,
        studentName: 'Juan Dela Cruz',
        studentId: '2026-002',
        courseCode: 'CS302',
        courseName: 'Database Systems',
        schedule: 'Tuesday 1:00 PM - 3:00 PM',
        status: 'Inactive',
      },
    ]

    const wrapper = mount(RegistrationList, {
      props: {
        registrations,
      },
    })

    expect(wrapper.text()).toContain('Stephanie Jimenez')
    expect(wrapper.text()).toContain('Juan Dela Cruz')
    expect(wrapper.text()).toContain('CS301')
    expect(wrapper.text()).toContain('CS302')
  })

  it('should emit the edit event when the edit button is clicked', async () => {
    const registration = {
      id: 1,
      studentName: 'Stephanie Jimenez',
      studentId: '2026-001',
      courseCode: 'CS301',
      courseName: 'Software Engineering',
      schedule: 'Monday 8:00 AM - 10:00 AM',
      status: 'Active',
    }

    const wrapper = mount(RegistrationList, {
      props: {
        registrations: [registration],
      },
    })

    const editButton = wrapper.find('button')

    await editButton.trigger('click')

    expect(wrapper.emitted('edit')).toBeTruthy()
  })

  it('should emit the delete event when deletion is confirmed', async () => {
    vi.spyOn(window, 'confirm').mockReturnValue(true)

    const registration = {
      id: 1,
      studentName: 'Stephanie Jimenez',
      studentId: '2026-001',
      courseCode: 'CS301',
      courseName: 'Software Engineering',
      schedule: 'Monday 8:00 AM - 10:00 AM',
      status: 'Active',
    }

    const wrapper = mount(RegistrationList, {
      props: {
        registrations: [registration],
      },
    })

    const buttons = wrapper.findAll('button')
    const deleteButton = buttons[buttons.length - 1]

    await deleteButton.trigger('click')

    expect(wrapper.emitted('delete')).toBeTruthy()

    vi.restoreAllMocks()
  })

  it('should filter registrations using the search field', async () => {
    const registrations = [
      {
        id: 1,
        studentName: 'Stephanie Jimenez',
        studentId: '2026-001',
        courseCode: 'CS301',
        courseName: 'Software Engineering',
        schedule: 'Monday 8:00 AM - 10:00 AM',
        status: 'Active',
      },
      {
        id: 2,
        studentName: 'Juan Dela Cruz',
        studentId: '2026-002',
        courseCode: 'CS302',
        courseName: 'Database Systems',
        schedule: 'Tuesday 1:00 PM - 3:00 PM',
        status: 'Inactive',
      },
    ]

    const wrapper = mount(RegistrationList, {
      props: {
        registrations,
      },
    })

    const searchInput = wrapper.find('input')

    await searchInput.setValue('Stephanie')

    expect(wrapper.text()).toContain('Stephanie Jimenez')
    expect(wrapper.text()).not.toContain('Juan Dela Cruz')
  })

  it('should filter registrations by Active status', async () => {
    const registrations = [
      {
        id: 1,
        studentName: 'Stephanie Jimenez',
        studentId: '2026-001',
        courseCode: 'CS301',
        courseName: 'Software Engineering',
        schedule: 'Monday 8:00 AM - 10:00 AM',
        status: 'Active',
      },
      {
        id: 2,
        studentName: 'Juan Dela Cruz',
        studentId: '2026-002',
        courseCode: 'CS302',
        courseName: 'Database Systems',
        schedule: 'Tuesday 1:00 PM - 3:00 PM',
        status: 'Inactive',
      },
    ]

    const wrapper = mount(RegistrationList, {
      props: {
        registrations,
      },
    })

    const select = wrapper.find('select')

    await select.setValue('Active')

    expect(wrapper.text()).toContain('Stephanie Jimenez')
    expect(wrapper.text()).not.toContain('Juan Dela Cruz')
  })

  it('should filter registrations by Inactive status', async () => {
    const registrations = [
      {
        id: 1,
        studentName: 'Stephanie Jimenez',
        studentId: '2026-001',
        courseCode: 'CS301',
        courseName: 'Software Engineering',
        schedule: 'Monday 8:00 AM - 10:00 AM',
        status: 'Active',
      },
      {
        id: 2,
        studentName: 'Juan Dela Cruz',
        studentId: '2026-002',
        courseCode: 'CS302',
        courseName: 'Database Systems',
        schedule: 'Tuesday 1:00 PM - 3:00 PM',
        status: 'Inactive',
      },
    ]

    const wrapper = mount(RegistrationList, {
      props: {
        registrations,
      },
    })

    const select = wrapper.find('select')

    await select.setValue('Inactive')

    expect(wrapper.text()).toContain('Juan Dela Cruz')
    expect(wrapper.text()).not.toContain('Stephanie Jimenez')
  })

  it('should allow login with valid institutional credentials', async () => {
    const wrapper = mount(LoginForm)

    const inputs = wrapper.findAll(
      'input[type="email"], input[type="password"]'
    )

    await inputs[0].setValue('stephanie.jimenez@school.edu')
    await inputs[1].setValue('student123')

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('login')).toBeTruthy()
  })

  it('should reject login with invalid credentials', async () => {
    const wrapper = mount(LoginForm)

    const inputs = wrapper.findAll(
      'input[type="email"], input[type="password"]'
    )

    await inputs[0].setValue('wrong@example.com')
    await inputs[1].setValue('wrongpassword')

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('login')).toBeFalsy()

    expect(wrapper.text()).toContain(
      'Invalid institutional account or password.'
    )
  })

  it('should register a course with Inactive status', async () => {
    const wrapper = mount(RegistrationForm)

    const inputs = wrapper.findAll('input')

    await inputs[0].setValue('Maria Santos')
    await inputs[1].setValue('2026-003')
    await inputs[2].setValue('CS303')
    await inputs[3].setValue('Web Development')
    await inputs[4].setValue('Wednesday 9:00 AM - 11:00 AM')

    await wrapper.find('select').setValue('Inactive')

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('register')).toBeTruthy()

    expect(wrapper.emitted('register')[0][0].status).toBe('Inactive')
  })

  it('should display the selected status when editing a registration', () => {
    const registration = {
      id: 1,
      studentName: 'Stephanie Jimenez',
      studentId: '2026-001',
      courseCode: 'CS301',
      courseName: 'Software Engineering',
      schedule: 'Monday 8:00 AM - 10:00 AM',
      status: 'Inactive',
    }

    const wrapper = mount(RegistrationForm, {
      props: {
        registration,
        editing: true,
      },
    })

    expect(wrapper.find('select').element.value).toBe('Inactive')
  })

  it('should reject registration when the schedule is missing', async () => {
    const wrapper = mount(RegistrationForm)

    const inputs = wrapper.findAll('input')

    await inputs[0].setValue('Stephanie Jimenez')
    await inputs[1].setValue('2026-001')
    await inputs[2].setValue('CS301')
    await inputs[3].setValue('Software Engineering')

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('register')).toBeFalsy()

    expect(wrapper.text()).toContain(
      'Please enter the course schedule.'
    )
  })

})