<template>
  <div class="table">
    <div class="table__header">
      <p>ID</p>
      <p>Title</p>
      <p>Body</p>
    </div>
    <div class="table__body">
      <div class="body__row">
        <TableRow v-for="row in postsData" :key="row.id" :tableData="row" />
      </div>
    </div>
    <div class="table__pagination">
      <div class="pagination__page"></div>
    </div>
  </div>
</template>

<script>
import TableRow from "./TableRow";

export default {
  name: "Vtable",
  components: {
    TableRow,
  },
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

<style lang="scss" scoped>
.table {
  margin: 0 auto;
  max-width: 900px;
  .table__header {
    display: flex;
    justify-content: space-around;
    border-bottom: solid 1px #e7e7e7;
    p {
      flex-basis: 33.3%;
      text-align: center;
    }
  }
}
</style>
