<template>
    <header class="header">
        <div class="header-subject">
            <div>
                <span>{{ dataItem.category }} </span>
            </div>
            <div class="header-small">
                <div class="small-category">
                    {{ changeMessageCompValue[1] }}
                </div>
                <div class="small-category-btn-danger">
                    <span class="material-symbols-outlined"> close </span>
                </div>
            </div>
        </div>
        <div class="header-icons">
            <div class="icon">
                <span class="material-symbols-outlined"> print </span>
                <div class="content">Print all</div>
            </div>
            <div class="icon">
                <span class="material-symbols-outlined"> open_in_new </span>
                <div class="content">New window</div>
            </div>
        </div>
    </header>

    <section class="section">
        <div class="profile-icon">
            <span class="material-symbols-outlined">
                account_circle
            </span>
        </div>
        <div class="upper-body-container">
            <div class="upper-subject-container">
                <div class="two-parts-upper-subject">
                    <div class="upper-subject-1">
                        <span>{{ dataItem.title }}</span>
                    </div>
                    <div class="upper-subject-2">
                        <span class="material-symbols-outlined">
                            chevron_left
                        </span>
                        <span>{{ dataItem.title }}@gmail.com</span>
                        <span class="material-symbols-outlined">
                            navigate_next
                        </span>
                    </div>
                    <div class="upper-subject-3">
                        <a href="#">Unsubscribe</a>
                    </div>
                </div>
                <div class="upper-tome-part">
                    <div class="tome">
                        <span>to </span>
                        <span>me</span>
                    </div>
                    <div class="tome-icon">
                        <span class="material-symbols-outlined">
                            arrow_drop_down
                        </span>
                        <div class="content">show more</div>
                    </div>
                </div>
            </div>
            <div class="upper-body-icons">
                <div class="upper-body-icon">
                    <span class="material-symbols-outlined">
                        star
                    </span>
                    <div class="content">Not starred</div>
                </div>
                <div class="upper-body-icon">
                    <span class="material-symbols-outlined">
                        reply
                    </span>
                    <div class="content">Reply</div>
                </div>
                <div class="upper-body-icon">
                    <span class="material-symbols-outlined">
                        more_vert
                    </span>
                    <div class="content">More</div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="section-lower">
        <div class="lower-body-container">
            {{ dataItem.description}}
        </div>
    </section>
</template>

<script>
import axios from "axios";
export default {
    props: ["changeMessageCompValue"],
    data() {
        return {
            dataItem: [],
            dataId: null,
        };
    },
    methods: {
        loadData() {
            axios
                .get("https://dummyjson.com/products?limit=50")
                .then((response) => {
                    const dataItems = response.data.products;
                    this.dataItem = dataItems.find((obj) => obj.id === this.dataId);
                })
                .catch((error) => {
                    alert(error);
                });
        },
    },
    mounted() {
        this.dataId = this.changeMessageCompValue[0];
        this.loadData();
    },
};
</script>

<style scoped>
.header {
    display: flex;
    min-width: 70%;
    align-items: center;
    justify-content: space-between;
}

.header .header-subject {
    padding: 20px 0px 8px 72px;
    user-select: text;
    display: flex;
    align-items: center;
    word-break: normal;
}

.header .header-subject>div:first-of-type {
    font-size: 22px;
    padding: 0px 10px 0px 0px;
    color: #1f1f1f;
}

.header-small {
    width: 60px;
    display: flex;
    align-items: center;
    color: #666666;
    background-color: #dddddd;
    border-radius: 4px;
    height: 18px;
}

.header-small .small-category {
    font-size: 12px;
    font-weight: 400;
    padding: 0px 4px 0px 4px;
    height: 18px;
    width: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.header-small .small-category:hover {
    background-color: #3b3939e1;
    color: #dddddd;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    cursor: pointer;
}

.header-small .small-category-btn-danger {
    padding: 0px 4px 0px 2.5px;
    height: 18px;
    width: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.header-small .small-category-btn-danger:hover {
    background-color: #3b3939e1;
    color: #dddddd;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: pointer;
    transition: 10ms;
}

.header-small .small-category-btn-danger .material-symbols-outlined {
    font-size: 12px;
}

.header-icons {
    display: flex;
    align-items: center;
    padding-right: 7px;
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

.header-icons .icon {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-icons .icon:hover {
    background-color: rgba(119, 136, 153, 0.219);
    transition: 0.2s;
    border-radius: 50%;
    cursor: pointer;
}

.header-icons .icon:hover .content {
    display: block;
    margin-top: 75px;
}

.section {
    display: flex;
}

.section .profile-icon {
    padding: 0px 16px;
}

.section .profile-icon .material-symbols-outlined {
    font-size: 40px;
    padding: 20px 0px 0px 0px;
}

.section .upper-body-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px 0px 0px 0px;
}

.section .upper-body-container .upper-subject-container .two-parts-upper-subject {
    display: flex;
}

.section .upper-body-container .upper-subject-container .two-parts-upper-subject .upper-subject-1 {
    font-size: 14px;
    color: #1f1f1f;
    font-weight: 500;
    display: flex;
    margin-right: 1px;
    margin-right: 1px;
    height: 15px;
}

.section .upper-body-container .upper-subject-container .two-parts-upper-subject .upper-subject-2 {
    display: flex;
    font-size: 12px;
    color: #5e5e5e;
    font-weight: 400;
    margin-right: 1px;
    height: 15px;
    align-items: center;

}

.section .upper-body-container .upper-subject-container .two-parts-upper-subject .upper-subject-2 .material-symbols-outlined {
    font-size: 12px;
}

.section .upper-body-container .upper-subject-container .two-parts-upper-subject .upper-subject-3 a {
    font-size: 10px;
    display: flex;
    height: 15px;
    align-items: center;
    font-weight: 500;
    color: #777777;
}

.upper-body-icons {
    display: flex;
    height: 15px;
    align-items: center;
}

.upper-body-icons .upper-body-icon {
    margin-right: 10px;
}

.upper-body-icons .upper-body-icon .material-symbols-outlined {
    padding: 5px;
    display: flex;
    align-items: center;
}

.upper-body-icons .upper-body-icon:hover {
    background-color: rgba(119, 136, 153, 0.219);
    border-radius: 50%;
    cursor: pointer;
}

.upper-body-icons .upper-body-icon:hover .content {
    display: block;
}

.upper-tome-part{
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #5e5e5e;
}

.upper-tome-part .tome-icon{
    display: flex;
    align-items: center;
    font-size: 12px;
}

.upper-tome-part .tome-icon:hover{
    background-color: #77777717;
    border-radius: 4px;
    cursor: pointer;
}
.upper-tome-part .tome-icon:hover .content{
    display: block;
    margin-top: 58px;
    transition: 4s;
}

.section-lower{
    margin-left: 70px;
    padding: 1px;
    font-size: 14px;
    color: #222222;
    background-color: #ffffff;
    width: 90%;
}

.section-lower .lower-body-container{
    width: 70%;
}
</style>