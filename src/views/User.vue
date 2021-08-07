<template>
  <div class="user page-size">
    <State
      statusState="Статус: пользователь"
      headlineState="Бутусова Д.И."
      descriptionState="Пользователь имеет доступ на чтение материалов тех программ, к которым привязан (а также в подпрограммах назначенной ему программы)"
    />
    <h1 class="projects-headline">Программа Пансионат</h1>
    <ul class="users-list list">
      <li class="users-list__item" v-for="user in users" :key="user.id">
        <p class="description p">{{ user }}</p>
      </li>
    </ul>
    <h1 class="projects-headline">Новости</h1>
    <ul class="users-list list">
      <li
        class="users-list__item"
        v-for="novelty in noveltys"
        :key="novelty.id"
      >
        <p class="description p">{{ novelty.name }}</p>
        <router-link class="users-link description" :to="novelty.href"
          >Перейти
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import State from "@/components/State";
export default {
  components: {
    State,
  },

  data() {
    return {
      users: [
        "Программа Организация питания",
        "Программа Организация обслуживания в трапезной",
        "Программа «Меню»",
      ],

      noveltys: [
          { name: "Обновление материала в Программе Организации питания", href: "/" },
          { name: "Добавлен новый пользователь в Программу «Меню»", href: "/" }
      ]
    };
  },
};
</script>