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
      <div class="pagination__page" v-for="page in pages" :key="page">{{page}}</div>
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
    return {
      postsPerPage: 10
    };
  },
  computed: {
    pages() {
      return Math.ceil(this.postsData.length / 10);
    }
  }
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
  &__pagination{
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
    .pagination__page{
      padding: 8px;
      border: 1px solid #e7e7e7;
    }
  }
}
</style>
