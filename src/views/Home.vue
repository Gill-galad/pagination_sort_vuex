<template>
  <div class="home">
    <Vtable :postsData="POSTS" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Vtable from "../components/Vtable";

export default {
  name: "Home",
  components: {
    Vtable
  },
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters(["POSTS"])
  },
  methods: {
    ...mapActions(["GET_POSTS_FROM_API"])
  },
  mounted() {
    this.GET_POSTS_FROM_API();
  }
};
</script>
