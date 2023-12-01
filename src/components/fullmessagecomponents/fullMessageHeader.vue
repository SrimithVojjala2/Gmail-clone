<template>
    <header class="header">
        <div class="icon-back">
            <div class="icon" @click="backtoindex">
                <span class="material-symbols-outlined"> arrow_left_alt </span>
                <div class="content">Back to Inbox</div>
            </div>
        </div>
        <div class="container">
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
                        <span class="material-symbols-outlined icon" @click="checkbox_more = !checkbox_more">
                            more_vert
                        </span>
                        <div class="content">More</div>
                    </div>
                    <div v-if="checkbox_more" class="checkbox_more">
                        <div class="checkbox_Container">
                            <div class="checkbox_item">
                                <span class="material-symbols-outlined">
                                    mark_email_unread
                                </span>
                                <p>Mark as Unread</p>
                            </div>
                            <div class="checkbox_item">
                                <span class="material-symbols-outlined"> label_important </span>
                                <p>Mark as Important</p>
                            </div>
                            <div class="checkbox_item">
                                <span class="material-symbols-outlined"> grade </span>
                                <p>Star</p>
                            </div>
                            <div class="checkbox_item">
                                <span class="material-symbols-outlined"> filter_list </span>
                                <p>Filter message like these</p>
                            </div>
                            <div class="checkbox_item">
                                <span class="material-symbols-outlined"> volume_off </span>
                                <p>Mute</p>
                            </div>
                            <div class="checkbox_item">
                                <span class="material-symbols-outlined"> attachment </span>
                                <p>Forward as attachment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
  
<script>
export default {
    data() {
        return {
            checkbox_more: false
        }
    },
    props: ['changeMessageCompValue'],
    emits: ['backtoindex','deletedFullmessage'],
    methods: {
        backtoindex() {
            this.$emit("backtoindex")
        },
        deleted(){
            this.$emit('deletedFullmessage',this.changeMessageCompValue)
        }
    }
};
</script>
  
<style scoped>
.header {
    margin-top: 15px;
    margin-left: 15px;
    margin-bottom: 5px;
    display: flex;
    width: 100%;
    align-items: center;
}

.container {
    display: flex;
    width: 100%;
    align-items: center;
}

.icon-box {
    border-right: 1px rgba(173, 216, 230, 0.39) solid;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 20px 0px -12px;
    padding: 0px 8px 0px 0px;
    border-right: 1px rgba(173, 216, 230, 0.39) solid;
}

div.icon-box:last-of-type {
    border: none;
}

.icon-back {
    margin-right: 20px;
}


.icon {
    font-size: 18px;
    margin-left: 5px;
    margin-right: 5px;
}

.icon:hover .content {
    display: block;
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

.icon:hover .content {
    display: block;
}

.material-symbols-outlined {
    font-size: 18px;
    padding: 8px;
}

.material-symbols-outlined:hover {
    background-color: rgba(119, 136, 153, 0.219);
    border-radius: 50%;
    cursor: pointer;
}

.checkbox_more {
    position: absolute;
    top: auto;
    left: auto;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 220px;
    z-index: 1;
}

.checkbox_Container {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.24);
}

.container .checkbox_item {
    display: flex;
    align-items: center;
    padding: 5px;
}

.container .checkbox_item:hover {
    background-color: rgba(119, 136, 153, 0.116);
    cursor: pointer;
}

.container .checkbox_item>p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 400px;
}

.container .checkbox_item>span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
}

.container .checkbox_item>span:hover {
    border-radius: 0;
    background-color: unset;
}
</style>