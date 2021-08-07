<template>
  <div class="authorization page-size">
    <h1 class="big-headline">Авторизация</h1>
    <form class="sign-up" method="post" action="" enctype="multipart/form-data">
      <div class="sign-up__group sign-up__group-login">
        <input
          id="login"
          placeholder="Логин"
          type="text"
          class="sign-up__input"
          v-model.trim="login"
          @keyup="keyupLogin"
          @keyup.delete="deleteLogin"
        />
      </div>
      <div class="sign-up__group sign-up__group-password">
        <input
          id="password"
          type="password"
          class="sign-up__input"
          placeholder="••••••••••"
          v-model.trim="password"
          @focus="clickPassword"
          @click="clickPassword"
          @keyup="keyupPassword"
          @keyup.delete="deletePassword"
        />
        <button
          class="sign-up__eye"
          type="button"
          @click="activatePassword"
        ></button>
        <p class="sign-up__text none">
          Минимум 8 знаков (латинские буквы и цифры)
        </p>
      </div>
      <label class="sign-up__label" for="checkbox">
        <input
          class="sign-up__checkbox visually-hidden"
          type="checkbox"
          id="checkbox"
        />
        <div class="sign-up__box"></div>
        <p>Запомнить меня</p>
      </label>
      <button class="sign-up__button blue-button" @click="checkForm" type="submit" disabled>
        Войти
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: "",
      password: "",
    };
  },

  methods: {
    activatePassword: function (event) {
      var passwordElement = document.getElementById("password");
      if (passwordElement.value) {
        event.target.classList.toggle("sign-up__eye-open");
        if (passwordElement.type === "password") {
          passwordElement.type = "text";
        } else {
          passwordElement.type = "password";
        }
      }
    },
    clickPassword: function () {
      var loginElement = document.querySelector(".sign-up__group-login");
      var passwordElement = document.querySelector(".sign-up__group-password");
      if (this.login.length < 1) {
        loginElement.classList.add("incorrectLogin");
      }
      passwordElement.classList.add("incorrectPassword");
    },

    keyupLogin: function () {
      var incorrectLogin = document.querySelector(".incorrectLogin");
      var incorrectPassword = document.querySelector(".incorrectPassword");
      var buttonForm = document.querySelector(".sign-up__button");
      if (incorrectLogin) {
        incorrectLogin.classList.remove("incorrectLogin");
        if (!incorrectPassword) {
          buttonForm.removeAttribute("disabled");
        }
      }
    },

    keyupPassword: function (event) {
      var passwordElement = document.querySelector(".sign-up__group-password");
      var incorrectLogin = document.querySelector(".incorrectLogin");
      var buttonForm = document.querySelector(".sign-up__button");
      if (
        this.password.length > 7 &&
        this.password.search(/\d/) > -1 &&
        this.password.search(/^\w+$/) > -1
      ) {
        passwordElement.classList.remove("incorrectPassword");
        if (!incorrectLogin) {
          buttonForm.removeAttribute("disabled");
        }
      }
      if (event.key != "Tab" && event.key != "Shift") {
        document
          .querySelector(".sign-up__eye")
          .classList.add("sign-up__eye-hover");
      }
    },

    deletePassword: function () {
      var passwordElement = document.querySelector(".sign-up__group-password");
      var buttonForm = document.querySelector(".sign-up__button");
      if (
        !this.password ||
        this.password.length < 8 ||
        this.password.search(/\d/) < 0 ||
        this.password.search(/^\w+$/) < 0
      ) {
        passwordElement.classList.add("incorrectPassword");
        buttonForm.setAttribute("disabled", "disabled");
      }
    },

    deleteLogin: function () {
      var loginElement = document.querySelector(".sign-up__group-login");
      var buttonForm = document.querySelector(".sign-up__button");
      if (this.login.length < 1) {
        loginElement.classList.add("incorrectLogin");
        buttonForm.setAttribute("disabled", "disabled");
      }
    },
  },
};
</script>
