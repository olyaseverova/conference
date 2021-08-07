<template>
  <header class="main-header">
    <button type="button" class="hamburger" @click="openMenu">
      <span class="bar bar1"></span>
      <span class="bar bar2"></span>
      <span class="bar bar3"></span>
      <span class="bar bar4"></span>
    </button>
    <ul class="tabs-list list none">
      <li v-for="tab in tabs" class="tabs-list__item" :key="tab.id">
        <router-link
          :to="tab.href"
          class="tabs-list__link link"
          @click="closeMenu"
          >{{ tab.name }}</router-link
        >
      </li>
    </ul>
  </header>
  <router-view />
</template>

<script>
export default {
  methods: {
    openMenu: function (event) {
      event.target.classList.toggle("active-hamburger");
      document.querySelector(".tabs-list").classList.toggle("none");
    },

    closeMenu: function (event) {
      event.target.classList.toggle("none");
      document.querySelector(".hamburger").classList.toggle("active-hamburger");
    },
  },

  data() {
    return {
      tabs: [
        { name: "Программы", href: "/" },
        { name: "Совещания", href: "/conference" },
        { name: "Личный кабинет", href: "/authorization" },
      ],
    };
  },
};
</script>
