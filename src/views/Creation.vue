<template>
  <div class="creation page-size">
    <div class="creation-links">
      <router-link class="creation-links__router description link" to="/editor"
        >Редактор</router-link
      >
      <p class="creation-links__text description">/</p>
      <p class="creation-links__text description">{{ mainHeadline }}</p>
    </div>
    <h1 class="big-headline">{{ mainHeadline }}</h1>
    <form
      class="creation-form"
      method="post"
      action=""
      enctype="multipart/form-data"
    >
      <input
        class="creation-form__input input-title"
        type="text"
        placeholder="Название материала"
        v-model.trim="title"
        @click="removePlaceholder"
      />
      <input
        class="creation-form__input input-author"
        type="text"
        placeholder="Автор"
        v-model.trim="author"
        @click="removePlaceholder"
      />
      <div class="textarea-styles">
        <textarea
          name="text"
          placeholder="Текст материала"
          class="creation-form__textarea"
          @click="removePlaceholder"
        ></textarea>
        <button
          type="button"
          class="textarea-menu"
          @click="activateMenu"
        ></button>
        <ul class="styles-list list none">
          <li class="styles-list__item" v-for="style in styles" :key="style.id">
            <button
              type="button"
              class="style-button"
              @click="changeTextType"
              :id="style"
            ></button>
          </li>
        </ul>
      </div>
      <ul class="images-list list">
        <li
          class="images-list__item"
          v-for="image in images"
          :key="image.id"
          :id="image.id"
        >
          <div class="images-list__wrapper">
            <p class="images-list__type p">{{ image.name }}</p>
            <button
              class="images-list__button close-button"
              @click="closeItem('.images-list__item', $event)"
              :id="image.id"
              type="button"
            ></button>
          </div>
        </li>
      </ul>
      <button class="creation-form__button blue-button" type="submit">
        Сохранить
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainHeadline: "Создание материала",
      styles: ["pin", "bold", "italic", "underline", "fill", "file"],
      images: [
        { name: "SVG", id: "0" },
        { name: "PNG", id: "1" },
        { name: "SVG", id: "2" },
      ],
    };
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

    changeTextType: function (event) {
      var textareaElement = document.querySelector(".creation-form__textarea");
      var classText = event.target.id;
      if (textareaElement.value) {
        if (textareaElement.classList.contains(classText)) {
          textareaElement.classList.remove(classText);
        } else {
          textareaElement.classList.add(classText);
        }
      }
      document.querySelector(".styles-list").classList.toggle("none");
      document
        .querySelector(".textarea-menu")
        .classList.toggle("textarea-menu-act");
    },

    removePlaceholder: function (event) {
      event.target.placeholder = "";
    },

    activateMenu: function (event) {
      event.target.classList.toggle("textarea-menu-act");
      document.querySelector(".styles-list").classList.toggle("none");
    },
  },
};
</script>