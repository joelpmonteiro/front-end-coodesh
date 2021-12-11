<template>
  <header class="container-fluid">
    <div class="row justify-content-end">
      <div class="col-2">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            aria-label="Search"
            id="search"
            v-model="search"
            @change.prevent="sendSearch"
          />
          <span class="input-group-text wdtspan">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="mx-3"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>Search</title>
                <circle cx="10.5" cy="10.5" r="7.5"></circle>
                <path d="M21 21l-5.2-5.2"></path>
              </svg>
            </button>
          </span>
        </div>
      </div>
      <div class="col-1">
        <select
          class="form-select"
          name="Order"
          id="Order"
          @change.prevent="searchSelect"
          v-model="select"
        >
          <option value="-1" selected disabled>Sort</option>
          <option value="1">Mais antigas</option>
          <option value="2">Mais novos</option>
        </select>
      </div>
    </div>
    <div class="size pt-5">
      <font-awesome-icon icon="rocket" size="4x" />
    </div>
    <div class="p-2">
      <label>Space Flight News</label>
    </div>
    <hr />
  </header>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "headerComponent",
  data() {
    return {
      search: "",
      select: 0,
      article: [],
    };
  },
  computed: {
    ...mapGetters(["getAllArticles"]),
  },
  methods: {
    sendSearch() {
      this.$emit("send-search", this.search);
    },
    sendSelectItem() {
      this.$emit("send-select-item", this.select);
    },
    searchSelect() {
      if (parseInt(this.select) == 2) {
        this.getAllArticles.sort((a, b) => {
          const datA = new Date(a.publishedAt);
          const datB = new Date(b.publishedAt);
          return datA.getUTCHours() - datB.getUTCHours();
        });
      } else {
        this.getAllArticles.sort((a, b) => {
          const datA = new Date(a.publishedAt);
          const datB = new Date(b.publishedAt);
          return datB.getUTCHours() - datA.getUTCHours();
        });
      }
    },
  },
};
</script>

<style scoped>
.size {
  position: relative;
  display: block;
  /* padding-top: 8rem; */
}

.layer {
  border-radius: 50%;
  border: 1px solid currentColor;
}

.fa-rocket {
  border-radius: 50%;
  border: 1px solid currentColor;
  padding: 1% 1% 1% 1%;
}
button {
  border: none;
  background: transparent;
}
</style>
