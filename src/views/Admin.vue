<template>
  <div class="admin page-size">
    <State
      statusState="Статус: админ"
      headlineState="Бортников С.В."
      descriptionState="Админ имеет доступ ко всем программам и материалам"
    />
    <router-link class="admin__button blue-button" to="/"
      >Перейти к программам
    </router-link>
  </div>
</template>

<script>
import State from "@/components/State";
export default {
  components: {
    State,
  },
};
</script>
