<template>
  <div class="programs" id="programs">
    <section class="programs-enumeration">
      <h1 class="programs-enumeration__headline main-headline">
        Перечень программ
      </h1>
      <div class="programs-buttons">
        <button type="button" class="programs-button" @click="goToPrograms">
          Программы
        </button>
        <button type="button" class="programs-button" @click="goToApplications">
          Приложения
        </button>
      </div>
      <ul class="programs-list list">
        <li
          class="programs-list__item"
          v-for="program in programs"
          :key="program.id"
        >
          <h3 class="programs-list__headline">
            {{ program.caption }}
          </h3>
          <ul class="checks-list list">
            <li
              class="checks-list__item"
              v-for="check in program.checks"
              :key="check.id"
              :id="check.numbering"
              :class="{ checkedProgram: check.checked }"
            >
              <label
                class="programs-check"
                @click="activateProgram"
                :id="check.numbering"
              >
                <input
                  class="programs-check__input visually-hidden"
                  type="radio"
                  name="radiocheck"
                  :id="check.numbering"
                  :value="check.numbering"
                  :checked="check.checked"
                />
                <div
                  class="programs-check__headlines"
                  :class="{ subgroupHeadline: check.subgroup }"
                >
                  <h3 class="programs-check__headline" :id="check.numbering">
                    {{ check.count }}
                  </h3>
                  <h3 class="programs-check__headline" :id="check.numbering">
                    {{ check.headline }}
                  </h3>
                </div>
                <p class="programs-check__leader" :id="check.numbering">
                  {{ check.leader }}
                </p>
              </label>
              <section class="materials none">
                <h1 class="main-headline">{{ check.headline }}</h1>
                <div class="materials-condition">
                  <p class="materials-condition__status">
                    Описание программы СОУ
                  </p>
                  <p class="materials-condition__status">Опубликован</p>
                </div>
                <div class="materials-condition">
                  <p class="materials-condition__status">Руководитель:</p>
                  <p class="materials-condition__status">
                    {{ check.leader }}
                  </p>
                </div>
                <ul
                  class="paragraphs-list list"
                  :class="{ paragraphs_color: check.color }"
                >
                  <li
                    class="paragraphs-list__item"
                    v-for="paragraph in check.paragraphs"
                    :key="paragraph.id"
                  >
                    {{ paragraph }}
                  </li>
                </ul>
              </section>
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <button
      type="button"
      class="programs-delimiter"
      @click="moveEnumeration"
    ></button>
    <section class="programs-applications none">
      <h1 class="main-headline">Приложения</h1>
    </section>
  </div>
</template>

<script>
import store from "@/store/index.js";

export default {
  name: "Programs",

  computed: {
    programs() {
      if (store.state.programs) {
        store.state.programs.forEach((p) => {
          p.checks.forEach((check) => {
            check.count = check.numbering.replace(/^[^.]+\./i, "");
            if (check.count.length > 3) {
              check.subgroup = true;
            } else {
              check.subgroup = false;
            }
            if (check.paragraphs) {
              check.color = false;
            } else {
              check.color = true;
            }
          });
        });
      }
      return store.state.programs;
    },
  },
  async mounted() {
    store.dispatch("fetchPrograms");
  },

  methods: {
    activateProgram: function (event) {
      var checks = document.querySelectorAll(".checks-list__item");
      var inputs = document.querySelectorAll(".programs-check__input");
      checks.forEach(function (check) {
        check.classList.remove("checkedProgram");
        inputs.forEach(function (input) {
          if (
            event.target.id === check.id &&
            check.id === input.id &&
            input.checked
          ) {
            check.classList.add("checkedProgram");
            document
              .querySelector(".programs-enumeration")
              .classList.toggle("programs-enumeration-act-mob");
          }
        });
      });
    },

    moveEnumeration: function (event) {
      event.target.classList.toggle("programs-delimiter-act");
      var programs = document.querySelector(".programs-enumeration");
      programs.classList.toggle("programs-enumeration-act");
      programs.classList.remove("programs-enumeration-act-mob");
    },

    goToPrograms: function () {
      document
        .querySelector(".programs-enumeration")
        .classList.remove("programs-enumeration-act-mob");
      document.querySelector(".programs-applications").classList.add("none");
      document
        .querySelector(".programs-button-act")
        .classList.remove("programs-button-act");
    },

    goToApplications: function (event) {
      event.target.classList.add("programs-button-act");
      document.querySelector(".programs-applications").classList.remove("none");
      var checks = document.querySelectorAll(".checks-list__item");
      checks.forEach(function (check) {
        check.classList.remove("checkedProgram");
      });
    },
  },
};
</script>
