<template>
    <div class="container" :class="{ 'checked': checklist }">
        <div class="checkbox-container">
            <div class="checkbox">
                <input type="checkbox" v-model="checklist" class="icon" @change="sendchecklist" />
                <div class="content">Select</div>
            </div>
            <div class="starred">
                <div>
                    <span class="material-symbols-outlined star">star</span>
                    <div class="content">Starred</div>
                </div>
            </div>
        </div>
        <div class="from" @click="$emit('changeMessageComp', id)">
            <div class="from-p">{{ from }}</div>
        </div>
        <div class="subject-description" @click="$emit('changeMessageComp', id)">
            <div>
                <div class="subject">{{ subject }}</div>
            </div>
            <div>
                <p>-</p>
            </div>
            <div>
                <div class="description">
                    {{ description }}
                </div>
            </div>
        </div>
        <div class="time" @click="$emit('changeMessageComp', id)">
            {{ time }}
        </div>
        <div class="message-options">
            <div class="icon">
                <span class="material-symbols-outlined">archive</span>
                <div class="content">Archieve</div>
            </div>
            <div class="icon">
                <span class="material-symbols-outlined" @click="$emit('removeMessage'), checklist = false">delete</span>
                <div class="content">Delete</div>
            </div>
            <div class="icon">
                <span class="material-symbols-outlined">mark_email_unread</span>
                <div class="content">Mark as unread</div>
            </div>
            <div class="icon">
                <span class="material-symbols-outlined">schedule</span>
                <div class="content">Snooze</div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: ["from", "subject", "description", "time", "markValue", "id"],
    emits: ["removeMessage", 'sendchecklist', "updatecheckboxlist","changeMessageComp"],
    data() {
        return {
            checklist: false,
        };
    },
    watch: {
        markValue(newValue) {
            this.checklist = newValue;
        },
    },
    methods: {
        sendchecklist() {
            this.$emit("updatecheckboxlist", this.checklist);
            this.$emit('sendchecklist', this.checklist)
        },
    },
};
</script>
  
<style scoped>
.star {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: 200;
}

.message-options .material-symbols-outlined {
    font-size: 20px;
    padding: 5px;
}

.material-symbols-outlined:hover {
    background-color: rgba(119, 136, 153, 0.219);
    border-radius: 50%;
}

.container {
    padding: 5px 5px 5px 10px;
    margin-right: 10px;
    margin-bottom: 1px;
    height: 25px;
    display: flex;
    align-items: center;
    background-color: #f2f6fc;
    white-space: nowrap;
    min-width: 400px;
    max-width: 100%;
}

.checked {
    background-color: #c2dbff;
    color: #202124;
}

.container:hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.301);
    cursor: pointer;
}

.checkbox-container {
    padding-left: 15px;
    display: flex;
    align-items: center;
}

.checkbox {
    padding-right: 10px;
    padding-top: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.checkbox input:hover {
    cursor: pointer;
}

.checkbox:hover .content {
    display: block;
    margin-top: 40px;
    position: absolute;
    font-size: small;
    padding: 4px;
    background-color: #444746;
    color: #fff;
    border-radius: 5px;
}

.starred {
    padding-right: 10px;
}

.from {
    display: flex;
    color: #202124;
    font-size: 14px;
    font-weight: 400;
    padding: 10px;
    width: 170px;
}

.from-p {
    min-width: 60px;
    max-width: 138px;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

}

.subject-description {
    max-width: 80%;
    font-size: 13px;
    display: flex;
    align-items: center;
    flex: 1;
    padding: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.subject {
    color: #202124;
    font-size: 14px;
    letter-spacing: 0.1px;
    font-weight: 400;
    margin-right: 3px;
}

.description {
    color: #202124;

    margin-left: 3px;
    letter-spacing: 0.5px;
    font-weight: 300;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.time {
    width: 40px;
    margin-left: auto;
    font-size: 14px;
    font-weight: 300;

    float: left;
    padding-left: 14px;
}

.message-options {
    position: relative;
    display: none;
}

.container:hover .message-options {
    /* padding-left: auto; */
    display: flex;
    width: 100px;
    justify-content: space-between;
    align-items: center;
    margin-right: 120px;
}

.container:hover .message-options .icon {
    padding: 10px;
}

.container:hover .time {
    display: none;
}

.container:hover .description {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /* Prevent text from wrapping */
    max-width: 800px;

}

.content {
    display: none;
}

.container .starred:hover .content {
    display: block;
    position: absolute;
    top: auto;
    left: auto;
    padding: 4px;
    background-color: #444746;
    color: #fff;
    font-size: small;
    border-radius: 5px;
}

.container:hover .icon:hover .content {
    display: block;
    position: absolute;
    font-size: small;
    padding: 4px;
    background-color: #444746;
    color: #fff;
    border-radius: 5px;
}
</style>
  