<template>
  <div class="editor page-size">
    <State
      statusState="Статус: редактор"
      headlineState="Бортников С.В."
      descriptionState="Редактор может создавать и редактировать материалы своей программы"
    />

    <section class="editor-materials">
      <h2 class="projects-headline">Материалы Программы Духовного блока</h2>
      <ul class="editors-list list">
        <li
          class="editors-list__item flex"
          :class="{ none: editor.none }"
          v-for="editor in editors"
          :key="editor.id"
          :id="editor.id"
        >
          <p class="editors-list__material description">
            {{ editor.material }}
          </p>
          <div class="edit-buttons">
            <router-link
              to="/creation"
              class="edit-buttons__button edit-link"
            ></router-link>
            <button
              class="edit-buttons__button close-button"
              @click="closeItem('.editors-list__item', $event)"
              :id="editor.id"
              type="button"
            ></button>
          </div>
          <Files :files="editor.files" />
        </li>
      </ul>
      <button
        class="editor-materials__button blue-button"
        type="button"
        @click="addItem('.editors-list__item')"
      >
        Создать материал
      </button>
    </section>
  </div>
</template>

<script>
import State from "@/components/State";
import Files from "@/components/Files";
import store from "@/store/index.js";

export default {
  components: {
    State,
    Files,
  },

  computed: {
    editors() {
      if (store.state.editors) {
        store.state.editors.forEach((p, i) => {
          p.id = i;
          if (p.id > 1) {
            p.none = true;
          }
        });
      }
      return store.state.editors;
    },
  },
  async mounted() {
    store.dispatch("fetchEditors");
  },

  methods: {
    closeItem: function (data, event) {
      var items = document.querySelectorAll(data);
      items.forEach(function (item) {
        if (item.id === event.target.id) {
          item.classList.toggle("none");
          item.classList.toggle("flex");
        }
      });
    },

    addItem: function (data) {
      var items = document.querySelectorAll(data);
      var ids = [];
      items.forEach(function (item) {
        if (item.classList.contains("none")) {
          ids.push(Number.parseInt(item.id));
          if (Math.min(ids)) {
            item.classList.remove("none");
            item.classList.add("flex");
          }
        }
      });
    },
  },
};
</script>