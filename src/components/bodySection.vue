<template>
  <div>
    <headerComp
      :markAsRead="marksAsRead"
      :alldelete="alldelete"
      @update-mark-as-read="updateMarkAsRead"
      @updateRemoveall="updateRemoveAll"
    />
  </div>
  <div>
    <MainBodyComp
      :markValue="marksAsRead"
      :alldelete="alldelete"
      @updatedeletevalue="updatedeletevalue"
      @sendchecklist="sendchecklist"
      @changeMessageComp="changeMessageComp"
    />
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import headerComp from "../components/bodySectionComponents/headerBodyComp.vue";
import MainBodyComp from "./bodySectionComponents/mainBodyComp.vue";
export default {
  components: { headerComp, MainBodyComp },
  emits:["changeMessageComp"],
  data() {
    return {
      marksAsRead: ref(false),
      alldelete: ref(false),
      checklistval: reactive([]),
      refreshVal: null,
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
    updatedeletevalue(value) {
      this.alldelete = !value;
    },
    sendchecklist(value, value1) {
      if (value) {
        // If value is true, add the entry if it doesn't exist
        const entryExists = this.checklistval.some(
          (item) => item.value === value && item.value1 === value1
        );
        if (!entryExists) {
          this.checklistval.push({ value, value1 });
        }
      } else {
        // If value is false, remove the entry if it exists
        const existingIndex = this.checklistval.findIndex(
          (item) => item.value === value1
        );
        if (existingIndex !== -1) {
          this.checklistval.splice(existingIndex, 1);
        }
      }
    },
    changeMessageComp(value){
      this.$emit('changeMessageComp',value)
    },
  },
};
</script>

<style scoped></style>