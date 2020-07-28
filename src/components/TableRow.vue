<template>
  <div class="table__row">
    <div class="row row__id">{{ tableData.id }}</div>
    <div class="row row__title">{{ tableData.title }}</div>
    <div class="row row__descr">{{ tableData.body }}</div>
  </div>
</template>

<script>
export default {
  name: "TableRow",
  props: {
    tableData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.table__row {
  display: flex;
  justify-content: space-around;
  .row {
    text-align: center;
    flex-basis: 33.3%;
  }
}
</style>
