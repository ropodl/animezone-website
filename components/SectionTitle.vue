<template>
  <div class="text-h3 text-center mb-3" style="font-family:Logo !important;">
    {{ first }} <span style="color: #FF5722">{{ second }}</span>
  </div>
</template>

<script>
export default {
  props: ["first", "second"]
};
</script>

<style></style>
