<template>
  <div class="table">
    <div class="table__header">
      <p>ID <i class="material-icons">unfold_more</i></p>
      <p>Title <i class="material-icons">unfold_more</i></p>
      <p>Body <i class="material-icons">unfold_more</i></p>
    </div>
    <div class="table__body">
      <div class="body__row">
        <TableRow v-for="row in paginationPosts" :key="row.id" :tableData="row" />
      </div>
    </div>
    <div class="table__pagination">
      <div class="pagination__page" v-for="page in pages" :key="page" :class="{'pagination__page__selected' : page === pageNumber}" @click="pageClick(page)">
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import TableRow from "./TableRow";

export default {
  name: "Vtable",
  components: {
    TableRow
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
      postsPerPage: 10,
      pageNumber: 1
    };
  },
  computed: {
    pages() {
      return Math.ceil(this.postsData.length / 10);
    },
    paginationPosts() {
      let from =  (this.pageNumber -1) * this.postsPerPage;
      let to = from + this.postsPerPage;
      return this.postsData.slice(from, to);
    }
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page;
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
  &__pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
    .pagination__page {
      margin-right: 10px;
      padding: 8px;
      border: 1px solid #e7e7e7;
      &:hover{
        background: darkturquoise;
        cursor: pointer;
        color: #fff;
      }
      &__selected{
        background: darkturquoise;
        color: #fff;
      }
    }
  }
}
</style>
