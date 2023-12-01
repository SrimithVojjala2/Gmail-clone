<template>
  <div>
    <headerComp :markAsRead="marksAsRead" :alldelete="alldelete" @update-mark-as-read="updateMarkAsRead"
      @updateRemoveall="updateRemoveAll" />
  </div>
  <div class="advance-search-value-container">
    <messageComp v-for="(item, index) in advanceSearchVallist" :id="item.id" :key="item.id" :from="item.title"
      :subject="item.category" :description="item.description" :time="item.rating" :markValue="marksAsRead"
      :alldelete="alldelete" @removeMessage="removeMessage(index)" />
  </div>

  <div class="nothing-to-show">
    dawdawdawd
  </div>
</template>

<script>
import { ref } from "vue";
import headerComp from "../components/bodySectionComponents/headerBodyComp.vue";
import MessageComp from "./bodySectionComponents/messageComp.vue";

export default {
  components: { headerComp, MessageComp },
  props: ["advanceSearchVal"],
  data() {
    return {
      marksAsRead: ref(false),
      alldelete: ref(false),
      advanceSearchVallist: [],
    };
  },
  methods: {
    updateMarkAsRead(value) {
      this.marksAsRead = value;
    },
    updateRemoveAll(value) {
      this.alldelete = value;
      this.marksAsRead = false;
    },
    removeMessage(index) {
      this.advanceSearchVallist.splice(index, 1);
    },
    updatedeletevalue(value) {
      this.alldelete = !value;
    },
    clearData() {
      this.advanceSearchVallist = null;
      this.alldelete = false
    }
  },
  watch: {
    alldelete: {
      handler(newVal) {
        if (newVal) {
          this.clearData();
        }
      },
      immediate: true,
    },
    advanceSearchVal: {
      handler(newVal) {
        this.advanceSearchVallist = newVal;
      },
      immediate: true,
    },
  }
};
</script>

<style scoped>
.advance-search-value-container {
  margin-top: 20px;
  height: 627px;
  overflow-y: scroll;
}
</style>