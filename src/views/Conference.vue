<template>
  <div class="conference" id="conference">
    <h1 class="conference__big-headline big-headline">
      {{ conference_headline }}
    </h1>
    <section class="calendar">
      <p class="main-caption">{{ calendar_caption }}</p>
      <button
        type="button"
        class="calendar__button"
        @click="activateCalendar"
      ></button>
      <ul class="calendar-list list none">
        <li
          class="calendar-list__item"
          v-for="day in conference.days"
          :key="day.id"
        >
          <button
            type="button"
            class="calendar-list-button"
            :class="{ selected_day: day.status }"
          >
            {{ day.number }}
          </button>
        </li>
      </ul>
    </section>
    <ul class="captions-list list">
      <li
        class="captions-list__item main-caption"
        v-for="caption in conference.captions"
        :key="caption.id"
      >
        {{ caption }}
      </li>
    </ul>
    <section class="plans">
      <ul class="plans-list list">
        <li
          class="plans-list__item"
          v-for="plan in conference.plans"
          :key="plan.id"
          :id="plan.id"
          :class="{ checkedPlan: plan.checked }"
        >
          <label class="plans-check" @click="activatePlan" :id="plan.id">
            <input
              type="checkbox"
              class="plans-check__input visually-hidden"
              v-model="plan.checked"
              :id="plan.id"
              @focus="focusPlan"
              @blur="blurPlan"
            />
            <div class="plans-check__box" :id="plan.id"></div>
            <h3 class="plans-check__program" :id="plan.id">
              {{ plan.program }}
            </h3>
            <h3 class="plans-check__leader" :id="plan.id">{{ plan.leader }}</h3>
          </label>
          <ul class="subgroups-list list none">
            <li
              class="subgroups-list__item"
              v-for="subgroup in plan.subgroups"
              :key="subgroup.id"
            >
              <p class="subgroups-list__program">{{ subgroup.program }}</p>
              <p class="subgroups-list__leader">{{ subgroup.leader }}</p>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import store from "@/store/index.js";

export default {
  name: "Сonference",

  computed: {
    conference() {
      if (store.state.conference.plans) {
        store.state.conference.plans.forEach((p, i) => {
          p.id = i;
        });
      }
      return store.state.conference;
    },
  },
  async mounted() {
    store.dispatch("fetchConference");
  },

  data() {
    return {
      focused: false,
      conference_headline: "Регламент совещания",
      calendar_caption: "22 ноября 2020",
    };
  },

  methods: {
    activateCalendar: function () {
      var calendarList = document.querySelector(".calendar-list");
      if (calendarList.classList.contains("none")) {
        calendarList.classList.remove("none");
        calendarList.classList.add("flex");
      } else {
        calendarList.classList.add("none");
        calendarList.classList.remove("flex");
      }
    },

    activatePlan: function (event) {
      var plans = document.querySelectorAll(".plans-list__item");
      var inputs = document.querySelectorAll(".plans-check__input");
      plans.forEach(function (plan) {
        inputs.forEach(function (input) {
          if (
            event.target.id === plan.id &&
            plan.id === input.id &&
            input.checked
          ) {
            plan.classList.add("checkedPlan");
          }
        });
      });
    },

    focusPlan(event) {
      var plans = document.querySelectorAll(".plans-list__item");
      plans.forEach(function (plan) {
        if (event.target.id === plan.id) {
          plan.classList.add("focusPLan");
        }
      });
      this.focused = true;
    },

    blurPlan(event) {
      var plans = document.querySelectorAll(".plans-list__item");
      plans.forEach(function (plan) {
        if (event.target.id === plan.id) {
          plan.classList.remove("focusPLan");
        }
      });
      this.focused = false;
    },
  },
};
</script>
