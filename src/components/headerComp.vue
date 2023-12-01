<template>
    <header>
        <div class="icons" @click="advanceSearchBar = false">
            <div class="icon">
                <span class="material-symbols-outlined" @click.prevent="$emit('isActivated')">
                    menu
                </span>
                <div class="content">Main menu</div>
            </div>
            <div class="gmail-icon" @click.prevent="goToHome">
                <img width="30" height="30" src="https://img.icons8.com/color/30/gmail-new.png" alt="gmail-new" />
                <span class="iconName">Gmail</span>
            </div>
        </div>
        <div class="search-option">
            <div class="searchbar" @click="advanceSearchBar = false">
                <div class="icon">
                    <span class="material-symbols-outlined"> search </span>
                    <div class="content">search</div>
                </div>
                <div class="search-input">
                    <input type="text" placeholder="Enter Keyword to Search" id="search" v-model="normal_searchValue" />
                </div>
            </div>

            <div class="icon tune" v-if="advanceSearchBar === false" @click="advanceSearchBar = true">
                <span class="material-symbols-outlined"> tune </span>
                <div class="content">Show search options</div>
            </div>
            <div v-if="advanceSearchBar === true" class="advanceSearchBar">
                <div class="advancesearchbar-container">
                    <form class="advancesearchbar-form" @submit.prevent="submitSearch">
                        <div class="sizevalue">
                            <div class="advancesearchinput">
                                <span><label for="from">From</label></span>
                                <input type="text" id="from" v-model="formDetails.title" />
                            </div>
                        </div>
                        <div class="sizevalue">
                            <div class="advancesearchinput">
                                <span><label for="to">To</label></span>
                                <input type="text" id="to" v-model="formDetails.to" />
                            </div>
                        </div>
                        <div class="sizevalue">
                            <div class="advancesearchinput">
                                <span><label for="subject">Subject</label></span>
                                <input type="text" id="subject" v-model="formDetails.category" />
                            </div>
                        </div>
                        <div class="sizevalue">
                            <div class="advancesearchinput">
                                <span><label for="hasTheWords">Has The Words</label></span>
                                <input type="text" id="hasTheWords" v-model="formDetails.description" />
                            </div>
                        </div>
                        <div class="sizevalue">
                            <div class="advancesearchinput">
                                <span><label for="Doesnthave">Doesn't have</label></span>
                                <input type="text" id="Doesn't have" v-model="formDetails.doesntHave" />
                            </div>
                        </div>

                        <div class="size-container">
                            <div class="sizevalue">
                                <span><label for="sizevalue">Size</label></span>
                            </div>
                            <div class="size-value-container">
                                <div>
                                    <div class="size-operator1">
                                        <select v-model="formDetails.selected" class="select-size">
                                            <option>greater than</option>
                                            <option>less than</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="size-operator2">
                                    <input type="text" id="sizeval" v-model="formDetails.sizevalue" />
                                </div>
                                <div>
                                    <div class="size-operator3">
                                        <select v-model="formDetails.bytesize" class="select-byte">
                                            <option class="select-size-option">MB</option>
                                            <option class="select-size-option">KB</option>
                                            <option class="select-size-option">Byte</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="date-container">
                            <div class="sizevalue">
                                <span><label for="sizevalue">Date width</label></span>
                            </div>
                            <div class="sizevalue">
                                <div>
                                    <div class="date-operator1">
                                        <select v-model="formDetails.dateInput" class="select-date">
                                            <option>1 Day</option>
                                            <option>3 Days</option>
                                            <option>1 week</option>
                                            <option>2 weeks</option>
                                            <option>1 month</option>
                                            <option>2 months</option>
                                            <option>6 months</option>
                                            <option>1 year</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <div class="date-operator2">
                                        <input type="date" name="date" id="datefilter" v-model="formDetails.date" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="inside-search">
                            <div class="sizevalue">
                                <span><label for="sizevalue">Search</label></span>
                            </div>
                            <div class="insideSearch-more">
                                <div @click="formDetails.insidesearchActive = !formDetails.insidesearchActive"
                                    class="insidesearch-more1">
                                    <div>
                                        <span>{{ formDetails.insidesearchValue }}</span>
                                    </div>
                                    <div>
                                        <span class="insideSearch-more-icon material-symbols-outlined ">
                                            arrow_drop_down
                                        </span>
                                    </div>
                                </div>
                                <div class="insidesearch-more-options" v-if="formDetails.insidesearchActive">
                                    <div class="insidesearch-more-option1">
                                        <div class="optionMore" v-for="option in 8" :key="option"
                                            @click="formDetails.insidesearchValue = formDetails.insidesearchoptions[option - 1]">
                                            <span>{{ formDetails.insidesearchoptions[option - 1] }}</span>
                                        </div>
                                    </div>
                                    <div class="insidesearch-more-options2">
                                        <div class="optionMore"
                                            @click="formDetails.insidesearchValue = 'Mail & spam & Trash'">
                                            <span>Mail & spam & Trash</span>
                                        </div>
                                    </div>
                                    <div class="insidesearch-more-options3">
                                        <div class="optionMore" @click="formDetails.insidesearchValue = 'Read Mail'">
                                            <span>Read Mail</span>
                                        </div>
                                        <div class="optionMore" @click="formDetails.insidesearchValue = 'Unread Mail'">
                                            <span>Unread Mail</span>
                                        </div>
                                    </div>

                                    <div class="insidesearch-more-options4">
                                        <div class="optionMore" @click="formDetails.insidesearchValue = 'Social'">
                                            Social
                                        </div>
                                        <div class="optionMore" @click="formDetails.insidesearchValue = 'Updates'">
                                            Updates
                                        </div>
                                        <div class="optionMore" @click="formDetails.insidesearchValue = 'Forums'">
                                            Forums
                                        </div>
                                        <div class="optionMore" @click="formDetails.insidesearchValue = 'Promotions'">
                                            Promotions
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="checkboxes-advancesearch">
                            <div class="checkbox-advancesearch">
                                <div class="checkbox1-advancesearch">
                                    <input type="checkbox" id="checkbox1" v-model="formDetails.checkboxvalues.checkbox1">
                                    <label for="checkbox1">Has attachment</label>
                                </div>
                                <div class="checkbox2-advancesearch">
                                    <input type="checkbox" name="checkbox2" id="checkbox2"
                                        v-model="formDetails.checkboxvalues.checkbox2">
                                    <label for="checkbox2">Don't include chats</label>
                                </div>
                            </div>
                        </div>

                        <div class="submit-create">
                            <div>
                                <div :class="{ 'btn-active-create-filter': formDetails.checkboxvalues.checkbox1 }"
                                    class="btn-create-filter">Create Filter</div>
                            </div>
                            <div>
                                <button type="submit" class="btn-submit">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="icons-setting" @click="advanceSearchBar = false">
            <div class="icon">
                <span class="material-symbols-outlined" > help </span>
                <div class="content">Support</div>
            </div>
            <div class="icon">
                <span class="material-symbols-outlined"> settings </span>
                <div class="content">Settings</div>
            </div>
            <div class="icon">
                <span class="material-symbols-outlined"> apps </span>
                <div class="content">Google apps</div>
            </div>
            <div class="icon">
                <span class="material-symbols-outlined"> account_circle </span>
                <div class="last-content">
                    <div>Google Account</div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            normal_searchValue: '',
            advanceSearchBar: false,
            formDetails: {
                title: '',
                to: '',
                category: '',
                description: '',
                doesntHave: '',
                selected: "greater than",
                sizevalue: '',
                bytesize: "MB",
                dateInput: "1 Day",
                date: '',
                insidesearchoptions: ['All Mail', 'Inbox', 'Starred', 'Sent Mail', 'Drafts', 'Chats', 'spam', 'Trash', "Mail & Spam & Trash", 'Read Mail', "Unread Mail", "Social", "Updates", "Forms", "Promotions"],
                insidesearchValue: 'All Mail',
                insidesearchActive: false,
                checkboxvalues: {
                    checkbox1: false,
                    checkbox2: false
                }
            },
        }
    },
    methods: {
        range(start, end) {
            return this.insidesearchoptions.from({ length: end - start + 1 }, (_, index) => start + index);
        },

        submitSearch() {
            const { title, category, description } = this.formDetails;
            if (title === '' && category === '' && description === '') {
                const specificFormDetails = {};
                this.$emit('advanceSearchValue', specificFormDetails)
                this.advanceSearchBar = false
            }
            else {
                const specificFormDetails = {
                    title,
                    category,
                    description,
                };
                this.$emit('advanceSearchValue', specificFormDetails)
                this.formDetails = {
                    title: '',
                    to: '',
                    category: '',
                    description: '',
                    doesntHave: '',
                    selected: "greater than",
                    sizevalue: '',
                    bytesize: "MB",
                    dateInput: "1 Day",
                    date: '',
                    insidesearchoptions: ['All Mail', 'Inbox', 'Starred', 'Sent Mail', 'Drafts', 'Chats', 'spam', 'Trash', "Mail & Spam & Trash", 'Read Mail', "Unread Mail", "Social", "Updates", "Forms", "Promotions"],
                    insidesearchValue: 'All Mail',
                    insidesearchActive: false,
                    checkboxvalues: {
                        checkbox1: false,
                        checkbox2: false
                    }
                },
                    this.advanceSearchBar = false
            }
        },
        goToHome(){
            this.$emit('goToHome')
            this.advanceSearchBar = false
        }
    },
    emit: ["isActivated",'goToHome'],
    watch: {
        'formDetails.insidesearchValue': function (newValue, oldValue) {
            this.formDetails.insidesearchActive = false
        },
    },
}

</script>

<style scoped>
.gmail-icon{
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
}
.material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
    padding: 10px;
}

.material-symbols-outlined:hover {
    background-color: lightgrey;
    border-radius: 50%;
    cursor: pointer;
}

header {
    font-family: sans-serif;
    display: flex;
    align-items: center;
    height: 50px;
}

.icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: max-content;
    margin-right: 80px;
}

.icons .iconName {
    /* margin-right: 10px; */
    font-size: 22px;
    font-weight: 500;
    color: rgb(85, 84, 84);
}

.icons img {
    margin-right: 10px;
    margin-left: 10px;
}

.content {
    display: none;
}

.last-content{
    display: none;
}

.icon:hover .last-content{
    width: max-content;
    display: block;
    padding: 10px 5px;
    position: absolute;
    font-size: small;
    right: 20px;
    background-color: #444746;
    color: #fff;
    margin-top: 4px;
    border-radius: 5px;
    font-weight: 500;
    z-index: 1;
    font-weight: 600;
}

.icon:hover .last-content div:last-of-type{
    color:#ccc;
    padding-top: 7px;
    font-size: 12px;
}
.icon:hover .content {
    width: max-content;
    display: block;
    padding: 6px;
    position: absolute;
    font-size: small;
    background-color: #444746;
    color: #fff;
    margin-top: 4px;
    border-radius: 5px;
    font-weight: 500;
    z-index: 1;
}

.search-option {
    display: flex;
    background-color: #eaf1fb;
    border-radius: 2rem;
    /* padding: 3px; */
    min-width: 300px;
    width: 700px;
    position: relative;
}

.advanceSearchBar {
    position: absolute;
    padding: 24px;
    top: 55px;
    left: auto;
    min-width: 100%;
    background-color: #fff;
    box-shadow: 1px 1px 5px 1px #00000028;
    z-index: 1;
}

.advanceSearchBar .advancesearchinput {
    margin: 0px 0px 25px 0px;
    height: 20px;
    display: flex;
}

.advancesearchbar-form {
    font-size: 14px;
}

.advanceSearchBar .advancesearchinput span {
    margin: 0px 20px 0px 0px;
    font-weight: 400;
    font-size: 14px;
    color: #5f6368;
    width: 30%;
}

.advanceSearchBar .advancesearchinput>input {
    border: none;
    outline: none;
    border-bottom: 1px solid #d9d9d9 !important;
    width: 100%;
}

.search-option .search-input {
    display: flex;
    align-items: center;
    width: 100%;
}

.search-option .search-input #search {
    height: 17px;
    border: none;
    outline: none;
    background-color: #eaf1fb;
    width: 100%;
}

.icons-setting {
    margin-left: auto;
    display: flex;
}

.searchbar {
    display: flex;
    flex: 1;
}

.size-container {
    display: flex;
    flex: 1;
    width: 100%;
    align-items: center;
    margin: 25px 0px 0px 0px;
}

.size-container .sizevalue {
    min-width: 20%;
    height: 20px;
    display: flex;
    align-items: center;
    margin: 0px 32px 0px 0px;
}

.size-container .sizevalue>span {
    font-size: 14px;
    font-weight: 400;
    opacity: 0.8;
}

.size-value-container {
    display: flex;
    align-items: center;
    flex: 1;
}

.size-value-container .size-operator1 select {
    padding: 2px;
    min-width: 138px;
    outline: none;
    border: none;
    color: #202124;
    font-weight: 400;
    font-size: 14px;
    /* background-color: #2021240F; */
    height: 28px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #d9d9d9 !important;
    margin: 0px 24px 0px 0px;
}

.size-value-container .size-operator1 select:hover {
    border: none;
    border-radius: 4px;
    background-color: rgba(119, 136, 153, 0.123);
}

.size-value-container .size-operator2 {
    display: flex;
    align-items: center;
    flex: 1;
}

.size-value-container .size-operator2 input {
    display: flex;
    flex: 1;
    align-items: center;
    min-width: 130px;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid #d9d9d9 !important;
    height: 28px;
}

.size-value-container .size-operator3 {
    display: flex;
    flex: 1;
    align-items: center;
    margin: 0px 0px 0px 24px;
}

.size-value-container .size-operator3 select {
    outline: none;
    border: none;
    height: 28px;
    font-size: 14px;
    color: #333;
    width: 70px;
    align-items: center;
    border-bottom: 1px solid #ccc;
}

.size-value-container .size-operator3 select:hover {
    border: none;
    border-radius: 4px;
    background-color: rgba(119, 136, 153, 0.123);
}

.date-container {
    min-width: 30%;
    width: 100%;
    display: flex;
    /* flex: 1; */
    align-items: center;
    height: 28px;
    margin: 28px 0px 0px 0px;
}

.date-container>.sizevalue {
    min-width: 20%;
    height: 20px;
    display: flex;
    align-items: center;
    margin: 0px 32px 0px 0px;
}

.date-container .sizevalue span {
    font-size: 14px;
    font-weight: 400;
    opacity: 0.8;
}

.date-operator1>select {
    outline: none;
    border: none;
    height: 28px;
    font-size: 14px;
    color: #333;
    display: flex;
    width: 100%;
    align-items: center;
    margin: 0px 20px 0px 0px;
    border-bottom: 1px solid #ccc;
}

.date-operator1 {
    display: flex;
    flex: 1;
    width: 270px;
}

.date-operator1 select:hover {
    display: flex;
    border-radius: 4px;
    background-color: rgba(119, 136, 153, 0.123);
    border-bottom-color: rgba(119, 136, 153, 0.123);
}

.date-operator2 {
    display: flex;
    flex: 1;
}

.date-operator2>input[type="date"] {
    appearance: none;
    padding: 4px;
    font-size: 14px;
    border: none;
    outline: none;
    display: flex;
    width: 100%;

}

.inside-search {
    min-width: 30%;
    width: 100%;
    display: flex;
    /* flex: 1; */
    align-items: center;
    height: 28px;
    margin: 28px 0px 0px 0px;
}

.inside-search .sizevalue {
    min-width: 20%;
    height: 20px;
    display: flex;
    align-items: center;
    margin: 0px 32px 0px 0px;
}

.inside-search .sizevalue span {
    font-size: 14px;
    font-weight: 400;
    opacity: 0.8;
}

.insideSearch-more {
    display: flex;
    align-items: center;
    flex: 1;
    max-width: 100%;
}

.insideSearch-more:hover {
    transition: 0.3s;
    background-color: #5f636815;
    border-radius: 4px;
}

.insidesearch-more1 {
    height: 20px;
    padding: 4px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
}

.insidesearch-more-options {
    overflow-y: scroll;
    left: auto;
    top: 400px;
    width: 300px;
    height: 290px;
    position: absolute;
    background-color: white;
    padding-top: 10px;
    padding-right: 10px;
    letter-spacing: 0.4px;
    box-shadow: 0px 0px 3px 1px #00000065;
}

.insidesearch-more-options .insidesearch-more-option1 .optionMore {
    padding-bottom: 6px;
    padding-top: 6px;
    color: #202124;
    padding-left: 48px;
    /* padding-right: 48px; */
}

.insidesearch-more-options .insidesearch-more-option1 .optionMore:hover {
    background-color: #5f636827;
}

.insidesearch-more-options2 {
    margin-top: 5px;
    padding-bottom: 8px;
    padding-top: 8px;
    color: #202124;
    /* padding-left: 48px;
    padding-right: 48px; */
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}

.insidesearch-more-options2>.optionMore {
    padding-bottom: 6px;
    padding-top: 6px;
    color: #202124;
    padding-left: 48px;
}

.insidesearch-more-options3 {
    margin-top: 5px;
    padding-bottom: 5px;
    padding-top: 5px;
    color: #202124;
    border-bottom: 1px solid #ccc;
}

.insidesearch-more-options3>.optionMore {
    padding-bottom: 6px;
    padding-top: 6px;
    color: #202124;
    padding-left: 48px;
}

.insidesearch-more-options4 {
    margin-top: 5px;
    padding-bottom: 5px;
    padding-top: 5px;
    color: #202124;
}

.insidesearch-more-options4>.optionMore {
    padding-bottom: 6px;
    padding-top: 6px;
    color: #202124;
    padding-left: 48px;
}

.optionMore {
    padding-top: 2px;
    padding-bottom: 2px;
}

.optionMore:hover {
    background-color: #5f636838;
}

.checkbox-advancesearch {
    display: flex;
    justify-content: space-evenly;
    font-size: 14px;
    align-items: center;
    margin-right: 50px;
}

.checkboxes-advancesearch {
    display: flex;
    flex: 1;
    align-items: center;
    height: 24px;
    padding-top: 25px;
    padding-bottom: 25px;
    color: #202124;
}

.checkbox1-advancesearch {
    height: 30px;
    font-size: medium;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 40px;
}

.checkbox1-advancesearch input {
    margin-right: 20px;
}

.checkbox2-advancesearch {
    height: 30px;
    font-size: medium;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 40px;
}

.checkbox2-advancesearch input {
    margin-right: 20px;
}

.submit-create {
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.btn-create-filter {
    outline: none;
    border: none;
    cursor: pointer;
    background-color: white;
    font-weight: 500;
    letter-spacing: 0.3px;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin: 0px 8px 0px 0px;
    padding: 11px;
    color: #3C404361;
}

.btn-submit {
    height: 36px;
    width: 80px;
    padding: 0px 16px;
    background-color: #1A73EB;
    outline: none;
    border: none;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
}

.btn-active-create-filter {
    color: #444746;
}

.btn-active-create-filter:hover {
    background-color: #5f636827;
    outline: none;
    border: none;
    cursor: pointer;
    font-weight: 500;
    letter-spacing: 0.3px;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin: 0px 8px 0px 0px;
    padding: 11px;
    border-radius: 5px;
    transition: 0.3s;
}
</style>