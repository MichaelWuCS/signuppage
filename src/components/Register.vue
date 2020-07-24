<template>
  <div>
    <input class="inputBox" v-model="username" type="text" placeholder="Username" />
    <p id="usernameError" v-show="!usernameIsValid">Username must be between 3-16 characters long</p>
    <br />
    <input class="inputBox" v-model="email" type="email" placeholder="Email" />
    <p id="emailError" v-show="!emailIsValid">Please enter a valid email</p>
    <br />
    <input class="inputBox" v-model="password" type="password" placeholder="Password" />
    <p id="passwordError" v-show="!passwordIsValid">
      Passwords must contain at least one uppercase, one lowercase, one number,
      and be at least 3 characters in length
    </p>
    <br />
    <input
      class="inputBox"
      v-model="confirmPassword"
      type="password"
      placeholder="Confirm Password"
    />
    <p id="confirmPasswordError" v-show="!passwordsMatch">Your passwords must match each other</p>
    <br />
    <br />
    <button
      id="registerButton"
      type="button"
      @click="registerUser"
      :disabled="!formValidation"
    >Register!</button>
    <br />
    <br />
    <button id="resetButton" type="button" @click="clearForms">Clear</button>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "Register",
  props: {},
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      users: []
    };
  },
  methods: {
    registerUser() {
      this.$store.dispatch("setUserAsync", {
        user: this.username,
        email: this.email,
        password: this.password
      });
      this.clearForms();
    },
    clearForms() {
      this.username = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
    }
  },
  computed: {
    formValidation() {
      if (
        this.usernameIsValid &&
        this.emailIsValid &&
        this.passwordIsValid &&
        this.passwordsMatch &&
        this.password.length !== 0
      ) {
        return true;
      }
      return false;
    },
    usernameIsValid() {
      if (this.username.length > 2 && this.username.length < 17) {
        return true;
      }
      if (this.username.length === 0) {
        return true;
      }
      return false;
    },
    emailIsValid() {
      if (this.email.length > 2 && this.email.length < 26) {
        for (let i = 0; i < this.email.length; i++) {
          if (this.email.charAt(i) === "@") {
            return true;
          }
        }
      }
      if (this.email.length === 0) {
        return true;
      }
      return false;
    },
    passwordIsValid() {
      let uppercaseBool = false;
      let lowercaseBool;
      let numberBool = false;
      if (this.password.length > 2 && this.password.length < 26) {
        for (let i = 0; i < this.password.length; i++) {
          if (
            this.password.charAt(i) === this.password.charAt(i).toUpperCase()
          ) {
            uppercaseBool = true;
          }
          if (
            this.password.charAt(i) === this.password.charAt(i).toLowerCase()
          ) {
            lowercaseBool = true;
          }
          if (parseInt(this.password.charAt(i))) {
            numberBool = true;
          }
        }
        if (uppercaseBool && lowercaseBool && numberBool) {
          return true;
        }
      }
      if (this.password.length === 0) {
        return true;
      }
      return false;
    },
    passwordsMatch() {
      return this.password === this.confirmPassword;
    },
    passwordToAsterisks() {
      let asteriskString = "";
      for (let i = 0; i < this.password.length; i++) {
        asteriskString += "*";
      }
      return asteriskString;
    },
    confirmPasswordToAsterisks() {
      let asteriskString = "";
      for (let i = 0; i < this.confirmPassword.length; i++) {
        asteriskString += "*";
      }
      return asteriskString;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.inputBox {
  margin-bottom: 0px;
  max-width: 300px;
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #dddddd;
  border-radius: 5px;
}

#usernameError {
  font-size: 0.85em;
  color: #c92432;
  margin: 10px 0;
  text-align: left;
}

#emailError {
  font-size: 0.85em;
  color: #c92432;
  margin: 10px 0;
  text-align: left;
}

#passwordError {
  font-size: 0.85em;
  color: #c92432;
  margin: 10px 0;
  text-align: left;
}

#confirmPasswordError {
  font-size: 0.85em;
  color: #c92432;
  margin: 10px 0;
  text-align: left;
}
</style>
