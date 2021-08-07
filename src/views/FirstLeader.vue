<template>
  <div class="first-leader page-size">
    <State
      statusState="Статус: пр"
      headlineState="Первый руководитель"
      descriptionState="Пр имеет доступ на чтение ко всем опубликованным материалам всех программ"
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
