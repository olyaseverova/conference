import { createStore } from 'vuex'

export default createStore({
    actions: {
        async fetchConference(ctx) { ctx.commit('updateConference', await (await fetch("conference.json")).json()) },
        async fetchPrograms(ctx) { ctx.commit('updatePrograms', await (await fetch("programs.json")).json()) },
        async fetchProjects(ctx) { ctx.commit('updateProjects', await (await fetch("projects.json")).json()) },
        async fetchEditors(ctx) { ctx.commit('updateEditors', await (await fetch("editors.json")).json()) }
    },
    mutations: {
        updateConference(state, data) { state.conference = data },
        updatePrograms(state, data) { state.programs = data },
        updateProjects(state, data) { state.projects = data },
        updateEditors(state, data) { state.editors = data }
    },
    state: {
        conference: [],
        programs: [],
        projects: [],
        editors: []
    },
})
