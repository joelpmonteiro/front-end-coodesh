<template>
  <div class="container">
    <div class="layout">
      <div
        class="rowMain"
        v-for="(value, index) in searchArticles"
        :key="index"
      >
        <div class="col-5 col-left" v-if="index % 2 == 0">
          <img
            :src="value.imageUrl"
            class="img-fluid rounded-start"
            alt="imagem"
          />
        </div>
        <div class="col-7 col-left">
          <div class="row">
            <h1>{{ value.title }}</h1>
          </div>
          <div class="spacebetween">
            <span>{{ new Date(value.publishedAt).toLocaleDateString() }}</span>
            <span>{{ value.newsSite }}</span>
          </div>
          <div class="row">
            <h5>{{ value.summary }}</h5>
          </div>
          <div class="row">
            <button class="btn btn-secondary">Ver Mais</button>
          </div>
        </div>
        <div class="col-5 col-right" v-if="index % 2 == 1">
          <img
            :src="value.imageUrl"
            class="img-fluid rounded-start"
            alt="imagem"
          />
        </div>
      </div>

      <div class="footer">
        <div class="flexContainer">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="footerBtn">
          <button
            type="button"
            class="btn btn-outline-primary btn-lg"
            @click.prevent="searchNewsArticlesPagination"
          >
            Carregar Mais
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "../../services/axios";
import { mapMutations, mapGetters } from "vuex";
import { remover_acentos_espaco } from "../../services/removeAccents.js";

export default {
  name: "layout",
  props: {
    propSearch: {
      type: String,
      required: true,
    },
    propSelect: { type: Number, required: true },
  },
  data() {
    return {
      articles: [],
      contadorPagination: 1,
    };
  },
  computed: {
    ...mapGetters(["getAllArticles"]),
    searchArticles() {
      return this.articles.filter((item) => this.searchItem(item));
    },
  },
  methods: {
    ...mapMutations(["mutGetAllArticles", "mutGetAllArticlesPush"]),
    searchItem(item) {
      return (
        remover_acentos_espaco(item.title)
          .toLowerCase()
          .match(this.propSearch) ||
        item.title.toLowerCase().match(this.propSearch) ||
        item.title.toUpperCase().match(this.propSearch)
      );
    },
    searchSelect() {
      this.articles.sort((a, b) => {
        const datA = new Date(a.publishedAt);
        const datB = new Date(b.publishedAt);
        console.log(datA.getUTCHours() - datB.getUTCHours());
      });
    },
    async searchNewsArticlesPagination() {
      try {
        this.contadorPagination++;
        const pagination = await axios.getNewsArticlePagination({
          page: this.contadorPagination,
          limit: 10,
        });
        this.articles.push(...pagination.data?.allArticle.docs);
        this.mutGetAllArticlesPush(pagination.data?.allArticle.docs);
        console.log(this.articles);
      } catch (error) {
        this.$swal("Error", error.response.data.msg, "error");
      }
    },
  },
  async mounted() {
    try {
      const all = await axios.getAllArticle();
      console.log(all);
      if (all.status === 200) {
        this.articles = all.data.allArticle.docs;
        //const dat = new Date(this.articles[0].publishedAt);
        this.mutGetAllArticles(this.articles);
      }
    } catch (error) {
      this.$swal("Error", error.response.data.msg, "error");
    }
  },
};
</script>
<style scoped>
/* button.btn-lg {
  margin: -1em 0 0 1em;
  width: 172px;
  height: 45px;
} */
.btn-outline-primary {
  position: relative;
  color: #302e53;
  border-color: #302e53;
}
.btn-outline-primary:hover {
  position: relative;
  color: #fff;
  border-color: #302e53;
  background-color: #302e53;
}
.layout {
  position: relative;
  margin: 5px auto;
  margin-left: 15rem;
}
.container {
  position: relative;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
}
.row {
  position: relative;
  padding: 1em !important;
}
.rowMain {
  position: relative;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 1020px;
  max-width: 1020px;
  text-align: center;
  /* border: 1px solid pink; */
}
.spacebetween {
  position: relative;
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  width: 100%;
  padding: 0 1em 0 1em;
}
.col-left {
  position: relative;
  text-align: left;
}
.col-right {
  position: relative;
  text-align: left;
}
.footer {
  position: relative;
  width: 100%;
  height: auto;
  padding: 1em;
  box-sizing: border-box;
}
button {
  position: relative;
  width: 105px;
  height: 42px;
  margin: -1em 0 0 1em;
}
button.btn-lg {
  position: relative;
  width: 162px !important;
  height: 45px;
}
/* Foo */
.footerBtn {
  position: relative;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 100%;
  min-width: 100%;
  height: 40px;
  margin-top: 1em;
  margin-bottom: 2em;
}
div.flexContainer {
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  padding: 1em;
}

div.flexContainer span {
  position: relative;
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 0px;
  background-color: gray;
  margin-left: calc(50% - 7px);
  margin-bottom: 8px;
}

.flexContainer span:nth-child(1) {
  background-color: #888;
}

.flexContainer span:nth-child(2) {
  background-color: #6c757d;
}

.flexContainer span:nth-child(3) {
  background-color: #6c757d;
}

.flexContainer span:nth-child(4) {
  background-color: #6c757d;
}

/* span {
  last-child: margin-bottom: 0px;
} */
</style>
