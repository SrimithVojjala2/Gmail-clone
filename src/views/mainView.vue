<template>
  <div class="app-container">
    <header class="navbar">
      <navComponent @isActivated="activation" @advanceSearchValue="advanceSearchValue" @goToHome='goToHome' />
    </header>

    <div class="content-container">
      <section class="sidebar-container">
        <sidebar :isActive="isActive" @addComponent="addComponents" />
      </section>
      <div :class="{ 'body-container': isActive, 'nobody-container': !isActive }">
        <KeepAlive>
          <section>
            <BodySection v-if="!changeMessageCompValue && !advanceSearchVal" @changeMessageComp="changeMessageComp" />
            <fullmessageComponent v-if="changeMessageCompValue && !advanceSearchVal"
              :changeMessageCompValue="changeMessageCompValue" @backtoindex="backtoindex"
              @deletedFullmessage="deletedFullmessage" />
            <advanceSearchMessageComponent v-if="advanceSearchVal" :advanceSearchVal="advanceSearchVal" />
          </section>
        </KeepAlive>
      </div>
    </div>

    <div class="composemail-container">
      <div class="composeMail" v-for="(component, index) in components" :key="index">
        <ComposeMail @removeComponents="removeComponent(index)" />
      </div>
    </div>
  </div>
</template>

<script>
import BodySection from "../components/bodySection.vue";
import ComposeMail from "../components/composeMail.vue";
import navComponent from "../components/headerComp.vue";
import Sidebar from "../components/sidebar.vue";
import axios from "axios";
import fullmessageComponent from "@/components/fullmessageComponent.vue";
import advanceSearchMessageComponent from "../components/advanceSearchMessageComponent.vue";
export default {
  components: {
    navComponent,
    Sidebar,
    BodySection,
    ComposeMail,
    fullmessageComponent,
    advanceSearchMessageComponent,
  },
  data() {
    return {
      isActive: false,
      components: [],
      advanceSearchVal: null,
      advanceSearchValLength: "",
      changeMessageCompValue: "",
      listofall: [],
      test: {
        title: "",
        category: "",
        description: "",
      },
    };
  },
  methods: {
    activation() {
      this.isActive = !this.isActive;
    },
    addComponents() {
      this.components.push({});
    },
    removeComponent(index) {
      this.components.splice(index, 1);
    },

    advanceSearchValue(value) {
      const hasParameters = Object.keys(value).length > 0;
      if (!hasParameters) {
        alert("Please provide valid search parameters.");
        return;
      }
      axios
        .get("https://dummyjson.com/products?limit=50")
        .then((response) => {
          const responseData = response.data.products;
          this.advanceSearchVal = this.filterData(responseData, value);
          console.log(this.advanceSearchVal);
        })
        .catch((error) => {
          console.error("Error fetching data:", error.message);
        });
    },

    filterData(data, params) {
      return data.filter((item) => {
        return Object.keys(params).every((key) => {
          const itemValue = String(item[key]);
          const paramValue = String(params[key]).toLowerCase();
          return itemValue.toLowerCase().includes(paramValue);
        });
      });
    },

    changeMessageComp(value) {
      this.changeMessageCompValue = value;
    },

    backtoindex() {
      this.changeMessageCompValue = 0;
    },
    deletedFullmessage(value) {
      this.changeMessageCompValue = 0;
    },
    goToHome() {
      this.advanceSearchVal = null
    }
  },

  watch: {},
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.navbar {
  padding: 10px 10px 0px 20px;
}

.content-container {
  display: flex;
  flex: 1;
}

.sidebar-container {
  flex: 0 0 auto;
}

.body-container {
  min-width: 60%;
  max-width: 100%;
  margin-top: 10px;
  margin-right: 15px;
  margin-left: -25px;
  margin-bottom: 10px;
  flex: 1;
  background-color: white;
  border-radius: 1.5rem;
}

.nobody-container {
  min-width: 60%;
  max-width: 100%;
  margin-top: 10px;
  margin-right: 15px;
  margin-left: -200px;
  margin-bottom: 10px;
  flex: 1;
  background-color: white;
  border-radius: 1.5rem;
}

.composemail-container {
  display: flex;
}

.composeMail {
  position: absolute;
  bottom: 1px;
  right: 70px;
}
</style>
