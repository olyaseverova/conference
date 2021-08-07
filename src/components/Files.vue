<template>
  <ul class="files-list list">
    <li class="files-list__item" v-for="file in files" :key="file.id">
      <a class="file description" href="#">{{ file }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Files",
  props: ["files"],
};
</script>