<template>
  <header>
    <div class="Checkbox-container">
      <input type="checkbox" class="markAsRead" :checked="markAsRead" @change="updatevalue" />

      <div class="icon-checkboxcontainer">
        <span class="material-symbols-outlined" @click="toggleDropdown">
          arrow_drop_down
        </span>
        <div class="content">select</div>
      </div>
    </div>
    <div v-if="showDropdown" class="dropdown">
      <!-- Your dropdown content goes here -->
      <ul>
        <li>All</li>
        <li>None</li>
        <li>Read</li>
        <li>Unread</li>
        <li>Starred</li>
        <li>Unstarred</li>
      </ul>
    </div>
    <div v-if="markAsRead == true" class="checkboxtrue-container">
      <div class="icon-box">
        <div class="icon">
          <span class="material-symbols-outlined icon"> archive </span>
          <div class="content">Archieve</div>
        </div>
        <div class="icon">
          <span class="material-symbols-outlined icon"> report </span>
          <div class="content">Report Spam</div>
        </div>
        <div class="icon">
          <span class="material-symbols-outlined icon" @click="deleted">
            delete
          </span>
          <div class="content">Delete</div>
        </div>
      </div>
      <div class="icon-box">
        <div class="icon">
          <span class="material-symbols-outlined icon"> drafts </span>
          <div class="content">Mark as Unread</div>
        </div>
        <div class="icon">
          <span class="material-symbols-outlined icon"> schedule </span>
          <div class="content">Snooze</div>
        </div>
        <div class="icon">
          <span class="material-symbols-outlined icon"> add_task </span>
          <div class="content">Add to Tasks</div>
        </div>
      </div>
      <div class="icon-box">
        <div class="icon">
          <span class="material-symbols-outlined icon"> drive_file_move </span>
          <div class="content">Move to</div>
        </div>
        <div class="icon">
          <span class="material-symbols-outlined icon"> label </span>
          <div class="content">Label</div>
        </div>
        <div>
          <div class="icon">
            <span class="material-symbols-outlined icon" @click="checkboxfalse">
              more_vert
            </span>
            <div class="content">More</div>
          </div>
          <div v-if="checkboxtrue_more" class="checkboxtrue_more">
            <div class="checkboxtrue_moreContainer">
              <div class="checkboxtrue_item">
                <span class="material-symbols-outlined">
                  mark_email_unread
                </span>
                <p>Mark as Unread</p>
              </div>
              <div class="checkboxtrue_item">
                <span class="material-symbols-outlined"> label_important </span>
                <p>Mark as Important</p>
              </div>
              <div class="checkboxtrue_item">
                <span class="material-symbols-outlined"> grade </span>
                <p>Star</p>
              </div>
              <div class="checkboxtrue_item">
                <span class="material-symbols-outlined"> filter_list </span>
                <p>Filter message like these</p>
              </div>
              <div class="checkboxtrue_item">
                <span class="material-symbols-outlined"> volume_off </span>
                <p>Mute</p>
              </div>
              <div class="checkboxtrue_item">
                <span class="material-symbols-outlined"> attachment </span>
                <p>Forward as attachment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="checkboxfalse-container">
      <div class="icon">
        <span class="material-symbols-outlined"> refresh </span>
        <div class="content">Refresh</div>
      </div>
      <div class="icon">
        <span class="material-symbols-outlined" @click="checkboxfalse">
          more_vert
        </span>
        <div class="content">More</div>
      </div>
      <div v-if="checkboxfalse_More" class="checkboxfalse_more">
        <div>
          <span class="material-symbols-outlined"> drafts </span>
          <p>Mark as Read</p>
        </div>
        <div>
          <p>Select messages to see more actions</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ["markAsRead", "checklistval"],
  data() {
    return {
      showDropdown: false,
      checkboxfalse_More: false,
      checkboxtrue_more: false,
      delete: false,
      checklistvalue: false,
      refreshVal:false,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
      this.checkboxfalse_More = false;
      this.checkboxtrue_more = false;
    },
    checkboxfalse() {
      if (this.markAsRead) {
        this.checkboxtrue_more = !this.checkboxtrue_more;
        this.showDropdown = false;
        this.checkboxfalse_More = false;
      } else {
        this.checkboxfalse_More = !this.checkboxfalse_More;
        this.showDropdown = false;
        this.checkboxtrue_more = false;
      }
    },
    updatevalue(event) {
      this.$emit("update-mark-as-read", event.target.checked);
    },
    deleted() {
      this.delete = true;
      this.$emit("updateRemoveall", this.delete);
    },
    handlevalue() {
      if (this.markAsRead) {
        return this.markAsRead;
      } else if (!this.markAsRead && this.checklistvalue) {
        return this.checklistvalue;
      }
    },
  },
  watch: {
    checklistval(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.checklistvalue = newVal;
      }
    },
  },
};
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 0, "opsz" 10;
  font-size: 18px;
  padding: 5px;
  /* margin-left: 30px;
    margin-right: 20px; */
}

.material-symbols-outlined:hover {
  background-color: rgba(119, 136, 153, 0.219);
  border-radius: 50%;
  cursor: pointer;
}

header {
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 5px;
  display: flex;
  flex: 1;
  align-items: center;
}

.Checkbox-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-left: 10px;
}

.content {
  display: none;
  position: absolute;
  font-size: small;
  padding: 6px;
  background-color: #444746;
  color: #fff;
  margin-top: 4px;
  border-radius: 5px;
  font-weight: 500;
}

.dropdown {
  position: absolute;
  margin-top: 220px;
  margin-left: 10px;
  top: auto;
  left: auto;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: small;
  width: 150px;
}

.Checkbox-container>span {
  padding: 0;
  border-radius: 0%;
}

.dropdown ul {
  list-style: none;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 0;
  font-weight: 400;
  font-size: 14px;
}

.dropdown li {
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 12px;
  padding-left: 30%;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
  height: 7px;
  border: none;
}

.dropdown li:hover {
  background-color: rgba(119, 136, 153, 0.219);
}

.dropdown li:last-child {
  border-bottom: none;
}

.checkboxtrue-container {
  width: 30vh;
  display: flex;
  align-items: center;
}

.checkboxfalse-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60px;
}

.checkboxfalse_more {
  position: absolute;
  margin-top: 150px;
  margin-left: 40px;
  top: auto;
  left: auto;
  height: 120px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.555);
  width: 250px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
}

.checkboxfalse_more div:first-of-type:hover {
  background-color: rgba(119, 136, 153, 0.219);
}

.checkboxfalse_more span:hover {
  background-color: none;
}

.checkboxfalse_more div:first-of-type {
  display: flex;
  font-size: 15px;
  font-weight: 400;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 20px;
}

.checkboxfalse_more div:first-of-type span {
  margin-right: 13px;
  font-size: 16px;
}

.checkboxfalse_more div:last-of-type {
  font-size: 14px;
  padding: 19px;
  text-align: center;
  font-weight: 500;
  font-style: italic;
  opacity: 70%;
  border-top: #ccc 1px solid;
}

.checkboxtrue_more {
  position: absolute;
  top: auto;
  left: auto;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 250px;
  z-index: 1;
}

.checkboxtrue_moreContainer {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.555);
}

.checkboxtrue_moreContainer .checkboxtrue_item {
  display: flex;
  align-items: center;
  padding: 5px;
}

.checkboxtrue_moreContainer .checkboxtrue_item:hover {
  background-color: rgba(119, 136, 153, 0.219);
  cursor: pointer;
}

.checkboxtrue_moreContainer .checkboxtrue_item>p {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400px;
}

.checkboxtrue_moreContainer .checkboxtrue_item>span {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
}

.checkboxtrue_moreContainer .checkboxtrue_item>span:hover {
  border-radius: 0;
  background-color: unset;
}

.checkboxtrue-container .icon-box {
  border-right: 1px rgba(173, 216, 230, 0.39) solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

div.icon-box:last-of-type {
  border: none;
}

.icon {
  font-size: 18px;
  margin-left: 5px;
  margin-right: 5px;
}

.icon:hover .content {
  display: block;
}

.icon-checkboxcontainer:hover .content {
  display: block;
}
</style>