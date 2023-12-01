<template>
  <div class="mainBodyContainer">
    <!-- <div class="showallmarkvalue">
    </div> -->
    <div class="container">
      <div
        class="Components"
        :class="{ active: activeDiv === 'Primary' }"
        @click="setActiveDiv('Primary')"
      >
        <span
          class="material-symbols-outlined"
          :class="{ active: activeDiv === 'Primary' }"
        >
          image
        </span>
        <p :class="{ active: activeDiv === 'Primary' }">Primary</p>
      </div>
      <div
        class="Components"
        :class="{ active: activeDiv === 'Promotions' }"
        @click="setActiveDiv('Promotions')"
      >
        <span
          class="material-symbols-outlined"
          :class="{ active: activeDiv === 'Promotions' }"
        >
          sell
        </span>
        <p :class="{ active: activeDiv === 'Promotions' }">Promotions</p>
      </div>
      <div
        class="Components"
        :class="{ active: activeDiv === 'Social' }"
        @click="setActiveDiv('Social')"
      >
        <span
          class="material-symbols-outlined"
          :class="{ active: activeDiv === 'Social' }"
        >
          group
        </span>
        <p :class="{ active: activeDiv === 'Social' }">Social</p>
      </div>
    </div>

    <div class="content-container">
      <keep-alive>
        <component
          :is="activeTab"
          :markValue="markValue"
          :alldelete="alldelete"
          @updatealldeletedata="updatealldeletedata"
          @sendchecklist="sendchecklist"
          @changeMessageComp="changeMessageComp"
        />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Primary from "./primaryComp.vue";
import Promotions from "./promotionsCompo.vue";
import Social from "./socialComp.vue";
export default {
  components: { Primary, Promotions, Social },
  props: ["markValue", "alldelete", "checklistval"],
  data() {
    return {
      activeDiv: "Primary",
      activeTab: "Primary",
    };
  },
  methods: {
    setActiveDiv(divName) {
      if (this.activeDiv !== divName) {
        this.activeDiv = divName === this.activeDiv ? null : divName;
        this.activeTab = divName;
      }
    },
    updatealldeletedata(value) {
      this.$emit("updatedeletevalue", value);
    },
    sendchecklist(value, value1) {
      this.$emit("sendchecklist", value, value1);
    },
    changeMessageComp(value){
      this.$emit("changeMessageComp",value)
    }
  },
  // watch: {
  //   alldelete(newValue) {
  //     if (newValue) {
  //       this.$emit("removeallmarkvaluelist", true);
  //     }
  //   },
  // },
};
</script>

<style scoped>
.material-symbols-outlined {
  margin-left: 20px;
}

.mainBodyContainer {
  height: 645px;
  overflow-y: scroll;
}

.mainBodyContainer::-webkit-scrollbar {
  width: 12px;
  padding-left: 5px;
  /* Set the width of the scrollbar */
}

.mainBodyContainer::-webkit-scrollbar-thumb {
  background-color: #888;
  /* Color of the scrollbar thumb */
  border-radius: 3px;
  /* Border radius of the thumb */
}

.mainBodyContainer::-webkit-scrollbar-track {
  background-color: #f1f1f1;
  /* Color of the scrollbar track */
}

.container {
  display: flex;
  justify-content: flex-start;
  align-items: left;
  flex: 1;
}

.container .Components {
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
}

.container .Components.active {
  border-bottom: 2px solid #0b57d0;
}

.container .material-symbols-outlined.active {
  color: #0b57d0;
}

.container p.active {
  color: #0b57d0;
}

.container .Components span {
  margin-right: 20px;
}

.container .Components:hover {
  background-color: rgba(119, 136, 153, 0.096);
  cursor: pointer;
}
</style>
