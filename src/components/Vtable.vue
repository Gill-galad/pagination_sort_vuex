<template>
  <div class="table"></div>
</template>

<script>
export default {
  name: "Vtable",
  props: {
    postsData: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  computed: {}
};
</script>

<style lang="scss" scoped></style>
