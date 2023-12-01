<template>
    <section :class="{ 'isSide': !isActive, 'with-scrollbar': isMore && isCategories }">
        <div>
            <div class="Compose">
                <button @click="$emit('addComponent')">
                    <span class="edit material-symbols-outlined">
                        edit
                    </span>
                    <p v-if="isActive">Compose</p>
                </button>
            </div>
        </div>
        <div class="icons">
            <div :class="{ 'icon': isActive, 'isNoticon': !isActive }">
                <span class="material-symbols-outlined">
                    image
                </span>
                <p v-if="isActive">Inbox</p>
                <p class="content">Inbox</p>
            </div>
            <div :class="{ 'icon': isActive, 'isNoticon': !isActive }">
                <span class="material-symbols-outlined">
                    grade
                </span>
                <p v-if="isActive">Starred</p>
                <p class="content">Starred</p>
            </div>
            <div :class="{ 'icon': isActive, 'isNoticon': !isActive }">
                <span class="material-symbols-outlined">
                    schedule
                </span>
                <p v-if="isActive">Snoozed</p>
                <p class="content">Snoozed</p>
            </div>
            <div :class="{ 'icon': isActive, 'isNoticon': !isActive }">
                <span class="material-symbols-outlined">
                    send
                </span>
                <p v-if="isActive">sent</p>
                <p class="content">sent</p>
            </div>
            <div :class="{ 'icon': isActive, 'isNoticon': !isActive }" @click="changeLessMore">
                <span class="material-symbols-outlined" v-if="(isActive && !isMore) || (!isActive && !isMore)">
                    keyboard_arrow_down
                </span>
                <span class="material-symbols-outlined" v-else-if="(isMore && isActive) || (isMore && !isActive)">
                    expand_less
                </span>

                <p v-if="isMore && isActive">Less</p>
                <p v-else-if="isActive && !isMore">More</p>
            </div>

            <div v-if="isMore" class="icons">
                <div :class="{ 'icon': isActive, 'isNoticon': !isActive }">
                    <span class="material-symbols-outlined">
                        label_important
                    </span>
                    <p v-if="isActive">Important</p>
                    <p class="content">Important</p>
                </div>
                <div :class="{ 'icon': isActive, 'isNoticon': !isActive }">
                    <span class="material-symbols-outlined">
                        chat
                    </span>
                    <p v-if="isActive">Chats</p>
                    <p class="content">Chats</p>
                </div>
                <div :class="{ 'icon': isActive, 'isNoticon': !isActive }">
                    <span class="material-symbols-outlined">
                        schedule_send
                    </span>
                    <p v-if="isActive">Scheduled</p>
                    <p class="content">Scheduled</p>
                </div>
                <div :class="{ 'icon': isActive, 'isNoticon': !isActive }">
                    <span class="material-symbols-outlined">
                        note
                    </span>
                    <p v-if="isActive">Drafts</p>
                    <p class="content">Drafts</p>
                </div>
                <div :class="{ 'icon': isActive, 'isNoticon': !isActive }">
                    <span class="material-symbols-outlined">
                        all_inbox
                    </span>
                    <p v-if="isActive">All Mail</p>
                    <p class="content">All Mail</p>
                </div>
                <div :class="{ 'icon': isActive, 'isNoticon': !isActive }">
                    <span class="material-symbols-outlined">
                        report
                    </span>
                    <p v-if="isActive">Spam</p>
                    <p class="content">Spam</p>
                </div>
                <div :class="{ 'icon': isActive, 'isNoticon': !isActive }">
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                    <p v-if="isActive">Trash</p>
                    <p class="content">Trash</p>
                </div>
                <div :class="{ 'icon': isActive, 'isNoticon': !isActive }" @click="isCategories = !isCategories">
                    <span class="material-symbols-outlined">
                        label
                    </span>
                    <p v-if="isActive">Categories</p>
                    <p class="content">Categories</p>
                </div>
                <div class="label-container" v-if="isCategories">
                    <div :class="{ 'icon': isActive, 'isNoticon': !isActive }">
                        <span class="material-symbols-outlined">
                            group
                        </span>
                        <p v-if="isActive">Social</p>
                        <p class="content">Social</p>
                    </div>
                    <div :class="{ 'icon': isActive, 'isNoticon': !isActive }">
                        <span class="material-symbols-outlined">
                            error
                        </span>
                        <p v-if="isActive">Updates</p>
                        <p class="content">Updates</p>
                    </div>
                    <div :class="{ 'icon': isActive, 'isNoticon': !isActive }">
                        <span class="material-symbols-outlined">
                            forum
                        </span>
                        <p v-if="isActive">Forums</p>
                        <p class="content">Forums</p>
                    </div>
                    <div :class="{ 'icon': isActive, 'isNoticon': !isActive }">
                        <span class="material-symbols-outlined">
                            sell
                        </span>
                        <p v-if="isActive">Promotions</p>
                        <p class="content">Promotions</p>
                    </div>
                </div>
                <div :class="{ 'icon': isActive, 'isNoticon': !isActive }">
                    <span class="material-symbols-outlined">
                        settings
                    </span>
                    <p v-if="isActive">Manage labels</p>
                    <p class="content">Manage labels</p>
                </div>
                <div :class="{ 'icon': isActive, 'isNoticon': !isActive }">
                    <span class="material-symbols-outlined">
                        add
                    </span>
                    <p v-if="isActive">Create new label</p>
                    <p class="content">Create new label</p>
                </div>
            </div>

            <div :class="{ 'label': isActive, 'isNoticon': !isActive }" class="last-label">
                <p v-if="isActive">label</p>
                <span class="material-symbols-outlined">
                    add
                </span>
                <p class="content">Create new label</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            isClicked: false,
            isMore: false,
            isCategories: false,
            isTemp: false,
        }
    },
    props: ['isActive'],
    emits: ['addComponent'],
    methods: {
        changeLessMore() {
            this.isMore = !this.isMore
        },

        onFunction() {
            if (this.isActive === false) {

            }
        },

        leaveFunction() {
            if (this.isActive && this.isTemp) {
                return this.isTemp = !this.isTemp
            }
        }
    },
}
</script>

<style scoped>
.material-symbols-outlined {
    font-variation-settings:
        'FILL' 0,
        'wght' 200,
        'GRAD' 0,
        'opsz' 10;
    font-size: 20px;
    /* margin-left: 30px;
    margin-right: 20px; */
}

.Compose {
    margin: 8px 0px 16px;
    padding: 0px 0px 0px 8px;
}

.Compose p {
    font-weight: normal;
}

section {
    width: 270px;
    margin-top: 15px;
}

.with-scrollbar {
    max-height: 680px;
    overflow-y: scroll;
}

.isSide {
    margin-right: 10px;
}

.isSide button {
    width: 20%;
}

.icons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 200px;
    transition: 10ms;
}


.icons .icon {
    display: flex;
    align-items: center;
    padding: 0px 12px 0px 26px;
    padding-left: 35px;
    height: 32px;
    min-width: 95%;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    /* transition: 100ms; */
}


.icons .icon:hover {
    background-color: rgba(119, 136, 153, 0.315);
    cursor: pointer;
}

.icons .icon>p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #202124;
    margin-left: 18px;
    margin-bottom: 2px;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
}

.icons .content {
    display: none;
}

.icons .icon .content {
    display: none;
    position: absolute;
    padding: 6px;
    left: 220px;
    background-color: #444746;
    color: #fff;
    border-radius: 5px;
}

.isNoticon .content {
    display: none;
}

.icons .icon:hover .content {
    transition:1s;
    display: block;
    opacity: 1;
    font-weight: 400;
}

.label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    width: 80%;
    padding-left: 30px;
    height: 20px;
}

.label>span {
    margin-left: auto;
    margin-right: 5px;
    font-size: large;
    padding: 4px;
}



.label>span:hover {
    background-color: rgba(119, 136, 153, 0.288);
    border-radius: 50%;
    cursor: pointer;
    transition-delay: 10ms;
}

button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
    padding: 5px;
    width: 140px;
    border-radius: 10px;
    outline: none;
    border: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    height: 50px;
    background-color: #C2E7FF;
}

button:hover {
    box-shadow: 1px 1px 10px 1px #00000050;
}

.isNoticon {
    padding: 6px;
    margin-left: 25px;
    display: flex;
    justify-content: center;
    align-content: center;
}


.isNoticon:hover {
    height: 20px;
    width: 20px;
    background-color: rgba(119, 136, 153, 0.39);
    cursor: pointer;
    transition: 20ms;
    border-radius: 50%;

}


.edit {
    font-size: 25px;
    margin: 0%;
}

.label-container {
    width: 100%;
}

.label-container .isNoticon {
    width: max-content;
}

.label-container .material-symbols-outlined {
    padding: 0%;
}

.label-container .icon {
    padding-left: 45px;

}
</style>