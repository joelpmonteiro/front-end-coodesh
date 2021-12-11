<template>
  <div>
    <headerComponent @send-search="search" />
    <layoutComponent :propSearch="itemSearch" :propSelect="1" />
  </div>
</template>
<script>
import headerComponent from "@/components/header/header.vue";
import layoutComponent from "@/components/layout/layout.vue";
export default {
  name: "home",
  components: { headerComponent, layoutComponent },
  data() {
    return {
      itemSearch: "",
    };
  },
  methods: {
    search(value) {
      //console.log(value);
      this.itemSearch = value;
    },
  },
};
</script>
<style scoped></style>
