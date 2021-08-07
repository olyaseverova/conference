<template>
  <div class="leader page-size">
    <State
      statusState="Статус: руководитель программы"
      descriptionState="Руководитель программы может управлять доступом в рамках своей программы"
      headlineState="Бортников С.В."
    />

    <section class="projects">
      <h2 class="projects-headline">Программы Духовного блока</h2>
      <ul class="projects-list list ul">
        <li
          class="projects-list__item flex"
          v-for="project in projects"
          :key="project.id"
          :id="project.id"
        >
          <p class="projects-list__name description p">{{ project.name }}</p>
          <p class="shown-name description" :id="project.idLeaders">
            {{ project.leader_name }}
          </p>
          <Persons
            :persons="project.leaders"
            :id="project.idLeaders"
            generalId="LeadersList"
            :name="project.idLeaders"
            type="radio"
            @leaderName="changeLeaderName"
          />
          <Persons
            :persons="project.editors"
            :id="project.idEditors"
            generalId="EditorsList"
            :name="project.idEditors"
            type="radio"
          />
          <Persons
            :persons="project.readers"
            :id="project.idReaders"
            generalId="ReadersList"
            :name="project.idReaders"
            type="checkbox"
          />
          <div class="projects-buttons">
            <button
              class="projects-list__button projects-list__leader"
              @click="showList"
              :id="project.idLeaders"
              type="button"
            ></button>
            <button
              class="projects-list__button projects-list__editor"
              @click="showList"
              :id="project.idEditors"
              type="button"
            ></button>
            <button
              class="projects-list__button projects-list__reader"
              @click="showList"
              :id="project.idReaders"
              type="button"
            ></button>
          </div>
          <Files :files="project.files" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import State from "@/components/State";
import Persons from "@/components/Persons";
import Files from "@/components/Files";
import store from "@/store/index.js";

export default {
  components: {
    State,
    Persons,
    Files,
  },

  computed: {
    projects() {
      if (store.state.projects) {
        store.state.projects.forEach((p, i) => {
          p.id = i;
          p.idLeaders = i + "leaders";
          p.idEditors = i + "editors";
          p.idReaders = i + "readers";
          p.leaders.forEach((leader, number) => {
            leader.id = i + "_" + number + "leader";
            if (leader.checked) {
              p.leader_name = leader.name;
            }
          });
          p.readers.forEach((reader, number) => {
            reader.id = number + "reader";
          });
          p.editors.forEach((editor, number) => {
            editor.id = number + "editor";
          });
        });
      }
      return store.state.projects;
    },
  },
  async mounted() {
    store.dispatch("fetchProjects");
  },

  methods: {
    showList: function (event) {
      var personsAll = document.querySelectorAll(".persons-list");
      event.target.classList.toggle("active-button");
      personsAll.forEach(function (personsList) {
        if (personsList.id === event.target.id) {
          personsList.classList.toggle("none");
        } else {
          personsList.classList.add("none");
        }
      });
    },

    changeLeaderName: function (data) {
      var leaderNames = document.querySelectorAll(".shown-name");
      var dataId = data.id.split(/_\d+/).join("") + "s";
      leaderNames.forEach(function (name) {
        if (name.id === dataId) {
          name.innerHTML = data.textContent;
        }
      });
    },
  },
};
</script>