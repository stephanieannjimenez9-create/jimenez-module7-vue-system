<script setup>
import { ref } from 'vue'

const emit = defineEmits(['login'])

const username = ref('')
const password = ref('')
const errorMessage = ref('')

function login() {
  errorMessage.value = ''

  if (!username.value.trim() || !password.value.trim()) {
    errorMessage.value = 'Please enter your institutional email and password.'
    return
  }

  if (
    username.value === 'stephanie.jimenez@school.edu' &&
    password.value === 'student123'
  ) {
    emit('login')
  } else {
    errorMessage.value = 'Invalid institutional account or password.'
  }
}
</script>

<template>
  <div class="login-page">

    <div class="background-circle circle-one"></div>
    <div class="background-circle circle-two"></div>

    <div class="login-layout">

      <div class="hero-section">

        <div class="hero-content">

          <h1>
            Course
            <span>Registration</span>
            System
          </h1>

          <div class="blue-line"></div>

          <p class="hero-description">
            Manage your course registrations
            easily and efficiently.
          </p>

          <div class="features">

            <div class="feature">
              <div class="feature-icon">📖</div>
              <span>Register Courses</span>
            </div>

            <div class="feature">
              <div class="feature-icon">📅</div>
              <span>View Schedules</span>
            </div>

            <div class="feature">
              <div class="feature-icon">📊</div>
              <span>Track Progress</span>
            </div>

            <div class="feature">
              <div class="feature-icon">🛡️</div>
              <span>Secure & Reliable</span>
            </div>

          </div>

          <div class="education-illustration">

            <div class="plant">
              <div class="leaf leaf-one"></div>
              <div class="leaf leaf-two"></div>
              <div class="leaf leaf-three"></div>
              <div class="plant-pot"></div>
            </div>

            <div class="laptop">
              <div class="laptop-screen">
                <div class="screen-title">
                  COURSE REGISTRATION
                </div>

                <div class="screen-user"></div>

                <div class="screen-line"></div>
                <div class="screen-line short"></div>

                <div class="check-row">
                  <span>✓</span>
                  <div></div>
                </div>

                <div class="check-row">
                  <span>✓</span>
                  <div></div>
                </div>

                <div class="check-row">
                  <span>✓</span>
                  <div></div>
                </div>
              </div>

              <div class="keyboard"></div>
              <div class="laptop-base"></div>
            </div>

            <div class="books">
              <div class="book book-one"></div>
              <div class="book book-two"></div>
              <div class="book book-three"></div>
            </div>

          </div>

        </div>

      </div>

      <div class="login-section">

        <div class="login-card">

          <div class="lock-circle">
            🔒
          </div>

          <h2>Log In</h2>

          <div class="small-line"></div>

          <h3>Welcome!</h3>

          <p class="system-name">
            Course Registration System
          </p>

          <div
            v-if="errorMessage"
            class="error-message"
          >
            ⚠️ {{ errorMessage }}
          </div>

          <form @submit.prevent="login">

            <div class="input-group">

              <label>Institutional Email</label>

              <div class="input-wrapper">
                <span class="input-icon">✉</span>

                <input
                  v-model="username"
                  type="email"
                  placeholder="Enter your institutional email"
                />
              </div>

            </div>

            <div class="input-group">

              <label>Password</label>

              <div class="input-wrapper">
                <span class="input-icon">🔒</span>

                <input
                  v-model="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>

            </div>

            <div class="login-options">

              <label class="remember">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <a href="#" @click.prevent>
                Forgot password?
              </a>

            </div>

            <button
              type="submit"
              class="login-button"
            >
              Log In
            </button>

          </form>

          <div class="or-divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <button
            type="button"
            class="institutional-button"
          >
            <span>🏛️</span>
            Institutional Account
          </button>

          <p class="account-note">
            Use your institutional email account
            provided by your school to access this system.
          </p>

          <p class="administrator">
            Don't have an account?
            <a href="#" @click.prevent>
              Contact administrator.
            </a>
          </p>

        </div>

      </div>

    </div>

    <footer>
      © 2026 Course Registration System | All Rights Reserved
    </footer>

  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

.login-page {
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(135deg, #f7faff 0%, #eef5ff 55%, #e5efff 100%);
  color: #14213d;
}

.login-layout {
  min-height: calc(100vh - 60px);
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 40px;
  max-width: 1450px;
  margin: auto;
  padding: 55px 70px 40px;
  position: relative;
  z-index: 2;
}

.hero-section {
  display: flex;
  align-items: center;
  min-height: 650px;
}

.hero-content {
  width: 100%;
  position: relative;
}

.hero-content h1 {
  font-size: clamp(48px, 5vw, 76px);
  line-height: 1.05;
  margin: 0;
  font-weight: 800;
  letter-spacing: -2px;
}

.hero-content h1 span {
  display: block;
  color: #1465e9;
}

.blue-line {
  width: 68px;
  height: 4px;
  background: #1465e9;
  margin: 28px 0;
  border-radius: 10px;
}

.hero-description {
  font-size: 20px;
  line-height: 1.7;
  color: #596b89;
  max-width: 450px;
  margin-bottom: 35px;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.feature {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 17px;
  font-weight: 600;
}

.feature-icon {
  width: 45px;
  height: 45px;
  border-radius: 9px;
  background: linear-gradient(135deg, #1465e9, #3182f6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  box-shadow: 0 7px 18px rgba(20, 101, 233, 0.2);
}

.education-illustration {
  position: absolute;
  left: 42%;
  bottom: -10px;
  width: 450px;
  height: 320px;
}

.education-illustration::before {
  content: "";
  position: absolute;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  background: rgba(190, 216, 255, 0.42);
  left: 40px;
  top: -20px;
}

.laptop {
  position: absolute;
  left: 110px;
  bottom: 25px;
  width: 285px;
  z-index: 3;
}

.laptop-screen {
  height: 190px;
  border: 9px solid #172640;
  border-bottom: 13px solid #172640;
  border-radius: 15px 15px 5px 5px;
  background: white;
  padding: 18px;
  box-shadow: 0 10px 25px rgba(30, 60, 100, 0.15);
}

.screen-title {
  color: #1465e9;
  font-size: 11px;
  font-weight: 800;
  margin-bottom: 12px;
}

.screen-user {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #dbeaff;
  margin-bottom: 8px;
}

.screen-line {
  height: 7px;
  width: 100px;
  background: #dce8f8;
  border-radius: 5px;
  margin-bottom: 6px;
}

.screen-line.short {
  width: 70px;
}

.check-row {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 8px;
}

.check-row span {
  width: 18px;
  height: 18px;
  border-radius: 4px;
  background: #1465e9;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
}

.check-row div {
  height: 6px;
  width: 90px;
  background: #dce8f8;
  border-radius: 5px;
}

.keyboard {
  position: absolute;
  width: 300px;
  height: 22px;
  background: #aabbd3;
  left: -8px;
  bottom: -15px;
  transform: perspective(300px) rotateX(55deg);
  border-radius: 3px;
}

.laptop-base {
  width: 320px;
  height: 15px;
  background: #c6d3e4;
  position: absolute;
  left: -18px;
  bottom: -28px;
  border-radius: 0 0 20px 20px;
}

.books {
  position: absolute;
  right: -10px;
  bottom: 12px;
  z-index: 4;
}

.book {
  width: 150px;
  height: 27px;
  border-radius: 5px;
  margin-top: 5px;
  box-shadow: 0 5px 10px rgba(30, 60, 100, 0.15);
}

.book-one {
  background: #1465e9;
  transform: rotate(3deg);
}

.book-two {
  background: #4d8ff2;
  transform: rotate(-2deg);
}

.book-three {
  background: #e6b929;
  transform: rotate(2deg);
}

.plant {
  position: absolute;
  left: 30px;
  bottom: 30px;
  width: 90px;
  height: 150px;
  z-index: 4;
}

.plant-pot {
  position: absolute;
  bottom: 0;
  left: 22px;
  width: 50px;
  height: 55px;
  background: linear-gradient(90deg, #d6e1ef, #ffffff);
  clip-path: polygon(10% 0, 90% 0, 75% 100%, 25% 100%);
}

.leaf {
  position: absolute;
  width: 28px;
  height: 60px;
  background: #4d91ef;
  border-radius: 100% 0 100% 0;
  transform-origin: bottom center;
}

.leaf-one {
  left: 30px;
  bottom: 45px;
  transform: rotate(-28deg);
}

.leaf-two {
  left: 45px;
  bottom: 48px;
  transform: rotate(28deg);
}

.leaf-three {
  left: 40px;
  bottom: 58px;
}

.login-section {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 5;
}

.login-card {
  width: 100%;
  max-width: 560px;
  background: rgba(255, 255, 255, 0.97);
  border-radius: 22px;
  padding: 42px 50px;
  box-shadow: 0 25px 60px rgba(60, 90, 130, 0.16);
}

.lock-circle {
  width: 92px;
  height: 92px;
  margin: 0 auto 18px;
  border-radius: 50%;
  background: #e4efff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 39px;
}

.login-card h2 {
  text-align: center;
  font-size: 40px;
  margin: 0;
  color: #172640;
}

.small-line {
  width: 55px;
  height: 4px;
  background: #1465e9;
  border-radius: 10px;
  margin: 18px auto 25px;
}

.login-card h3 {
  text-align: center;
  font-size: 20px;
  margin: 0;
}

.system-name {
  text-align: center;
  color: #1465e9;
  font-size: 19px;
  font-weight: 700;
  margin: 8px 0 30px;
}

.input-group {
  margin-bottom: 22px;
}

.input-group label {
  display: block;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 9px;
}

.input-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 17px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #74839b;
}

.input-wrapper input {
  width: 100%;
  height: 56px;
  border: 1px solid #cbd6e5;
  border-radius: 9px;
  padding: 0 18px 0 50px;
  font-size: 16px;
  outline: none;
  color: #172640;
  background: white;
}

.input-wrapper input:focus {
  border-color: #1465e9;
  box-shadow: 0 0 0 3px rgba(20, 101, 233, 0.1);
}

.login-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0 25px;
  font-size: 14px;
}

.remember {
  display: flex;
  align-items: center;
  gap: 7px;
}

.remember input {
  width: 17px;
  height: 17px;
}

.login-options a,
.administrator a {
  color: #1465e9;
  text-decoration: none;
  font-weight: 600;
}

.login-button {
  width: 100%;
  height: 55px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #1465e9, #2478ed);
  color: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}

.or-divider {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 28px 0 20px;
  color: #71809a;
}

.or-divider span {
  flex: 1;
  height: 1px;
  background: #dce3ed;
}

.or-divider p {
  margin: 0;
  font-size: 14px;
}

.institutional-button {
  width: 100%;
  height: 55px;
  border: none;
  border-radius: 8px;
  background: #e4efff;
  color: #1465e9;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
}

.institutional-button span {
  margin-right: 10px;
}

.account-note {
  text-align: center;
  color: #66758e;
  font-size: 13px;
  line-height: 1.5;
  margin: 15px 20px 22px;
}

.administrator {
  text-align: center;
  color: #687890;
  font-size: 14px;
  margin: 0;
}

.error-message {
  background: #fff0f0;
  border: 1px solid #ffcaca;
  color: #c62828;
  padding: 11px 14px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 14px;
}

.background-circle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.circle-one {
  width: 420px;
  height: 420px;
  background: rgba(190, 216, 255, 0.3);
  top: -190px;
  right: -130px;
}

.circle-two {
  width: 430px;
  height: 170px;
  background: rgba(70, 135, 235, 0.18);
  bottom: -100px;
  left: -50px;
  transform: rotate(-8deg);
}

footer {
  position: relative;
  z-index: 3;
  text-align: center;
  color: #ffffff;
  font-size: 14px;
  padding: 15px;
  background: linear-gradient(
    180deg,
    rgba(70, 135, 235, 0.45),
    rgba(55, 120, 225, 0.75)
  );
}

@media (max-width: 1050px) {
  .login-layout {
    grid-template-columns: 1fr;
    padding: 40px 30px;
  }

  .hero-section {
    min-height: auto;
  }

  .hero-content {
    text-align: center;
  }

  .blue-line {
    margin: 20px auto;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .features {
    align-items: center;
  }

  .education-illustration {
    display: none;
  }
}

@media (max-width: 600px) {
  .login-layout {
    padding: 25px 15px;
  }

  .hero-content h1 {
    font-size: 43px;
  }

  .login-card {
    padding: 30px 22px;
    border-radius: 17px;
  }

  .login-card h2 {
    font-size: 32px;
  }

  .lock-circle {
    width: 75px;
    height: 75px;
    font-size: 30px;
  }

  .login-options {
    font-size: 13px;
  }

  footer {
    font-size: 12px;
  }
}
</style>