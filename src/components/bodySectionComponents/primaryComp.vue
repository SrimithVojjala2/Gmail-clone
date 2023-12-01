
<template>
  <div>
    <messageComp
      v-for="(item, index) in list"
      :id="item.id"
      :key="item.id"
      :from="item.title"
      :subject="item.category"
      :description="item.description"
      :time="item.rating"
      :markValue="markValue"
      @removeMessage="removeMessage(index)"
      @updatecheckboxlist="(test) => addcheckboxlist(index, test)"
      @sendchecklist="(checklist) => sendchecklist(index, checklist)"
      @changeMessageComp="changeMessageComp"
    />
  </div>
</template>

<script>
import axios from "axios";
import messageComp from "../bodySectionComponents/messageComp.vue";
export default {
  components: { messageComp },
  props: ["markValue", "alldelete"

],
  emits: ["updatealldeletedata", "sendchecklist", "changeMessageComp"],
  data() {
    return {
      checkedlist: [],
      markvaluelist: [],
      list: [],
    };
  },
  created() {
    // Call the loadData method when the component is created
    this.loadData();
  },

  methods: {
    loadData() {
      axios
        .get("https://dummyjson.com/products?limit=50")
        .then((response) => {
          this.list = response.data.products;
        })
        .catch((error) => {
          alert(error);
        });
    },
    removeMessage(index) {
      this.list.splice(index, 1);

      // Check if all items are deleted
      if (this.list.length === 0) {
        // Emit event to update alldelete prop
        this.$emit("updatealldelete", true);
      }
    },
    addcheckboxlist(index, test) {
      if (test) {
        const existingIndex = this.checkedlist.findIndex(
          (item) => item[0] === index
        );

        if (existingIndex !== -1) {
          // If the index is already present and test is true, replace the value
          this.checkedlist[existingIndex][1] = test;
        } else {
          // If the index is not present and test is true, add the new value
          this.checkedlist.push([index, test]);
        }
      } else {
        // If test is false, remove the entry from the checkedlist
        const existingIndex = this.checkedlist.findIndex(
          (item) => item[0] === index
        );

        if (existingIndex !== -1) {
          this.checkedlist.splice(existingIndex, 1);
        }
      }
    },
    markvaluelists() {
      for (var i = 0; i < this.list.length; i++) {
        this.markvaluelist.push(i);
      }
    },
    clearData() {
      this.list = [];
    },
    sendchecklist(index, value) {
      this.$emit("sendchecklist", value, index);
    },
    changeMessageComp(value) {
      this.$emit("changeMessageComp", [value, "primary"]);
    },
  },
  watch: {
    marksAsRead: function (newValue) {
      this.marksAsRead = newValue;
    },
    markValue(newmarkValue) {
      if (newmarkValue) {
        // If markValue becomes true, call markvaluelists function
        this.markvaluelists();
      } else if (newmarkValue === false) {
        this.markvaluelist = [];
      }
    },
    alldelete(newVal) {
      if (newVal) {
        this.clearData();
      }
    },
    list() {
      if (this.list) {
        this.$emit("updatealldeletedata", true);
      }
    },
  },
};
</script>

<style scoped></style>
