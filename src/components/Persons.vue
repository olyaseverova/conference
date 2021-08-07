<template>
  <div class="persons" :id="generalId">
    <ul class="persons-list list none" :id="id">
      <li class="persons-list__item" v-for="person in persons" :key="person.id">
        <label class="persons-list__label" :id="person.id" @click="leaderName">
          <p class="persons-list__name description" :id="person.id">
            {{ person.name }}
          </p>
          <input
            class="persons-list__input visually-hidden"
            :type="type"
            :name="name"
            :id="person.id"
            :value="person.id"
            :checked="person.checked"
          />
          <div class="persons-list__box" :id="person.id"></div>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Persons",
  props: ["id", "persons", "type", "generalId", "name"],

  methods: {
    leaderName: function (event) {
      var _this = this;
      var namesList = event.target.querySelectorAll(".persons-list__name");
      namesList.forEach(function (name) {
        if (event.target.id === name.id) {
          _this.$emit("leaderName", name);
        }
      });
    },
  },
};
</script>
