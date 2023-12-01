<template>
    <div class="container" :class="{'notcontainer': showFrom}">
        <header class="headeritem1" :class="{ 'section-notshow': showFrom }" @click="showFrom = !showFrom">
            <div>
                New message
            </div>
            <div class="header-icons">
                <span class="material-symbols-outlined">
                    remove
                </span>
                <span class="material-symbols-outlined">
                    open_in_full
                </span>
                <span class="material-symbols-outlined" @click="$emit('removeComponents')">
                    close
                </span>
            </div>
        </header>

        <section :class="{ 'section-show': showFrom }">
            <form @submit.prevent='he'>
                <div class="form-body" :class="{ 'show-scrollbar': showCC || showBCC }">
                    <div class="to">
                        <div :class="{ 'tomessage': hiddento, 'hidden-to': !hiddento }">
                            <input type="text" placeholder="Recipients" id="Recipients" @click="hiddento = false">
                        </div>
                        <div class="div" v-if="hiddento == false">
                            <div class="tomessage">
                                <label for="to-message">To</label>
                                <input type="text" id="to-message">
                            </div>
                            <div class="to-Cc-Bcc-false">
                                <div class="to-cc" v-if="!showCC" @click="showCC = true">
                                    Cc
                                </div>
                                <div class="to-Bcc" v-if="!showBCC" @click="showBCC = true">
                                    Bcc
                                </div>
                            </div>
                        </div>
                        <div class="tomessage" v-if="showCC">
                            <label for="Cc">Cc</label>
                            <input type="text" name="Cc" id="Cc">
                        </div>
                        <div class="tomessage" v-if="showBCC">
                            <label for="Bcc">Bcc</label>
                            <input type="text" name="Bcc" id="Bcc">
                        </div>
                    </div>
                    <div class="to-subject">
                        <input type="text" name="Subject" id="Subject" placeholder="Subject">
                    </div>
                    <div class="text-area">
                        <textarea id="description"></textarea>
                    </div>
                </div>
                <div class="footer">
                    <button type="submit">
                        <div>
                            Send
                        </div>
                        <span class="material-symbols-outlined">
                            arrow_drop_down
                        </span>
                    </button>
                    <div class="footer-icons">
                        <div class="icon">
                            <div class="content">Formatting options</div>
                            <span class="material-symbols-outlined">
                                format_color_text
                            </span>
                        </div>
                        <div class="footer-icons-2">
                            <div class="icon">
                                <div class="content">
                                    Attach files
                                </div>
                                <span class="material-symbols-outlined">
                                    attach_file
                                </span>
                            </div>
                            <div class="icon">
                                <div class="content">Insert link</div>
                                <span class="material-symbols-outlined">
                                    link
                                </span>
                            </div>
                            <div class="icon"> 
                                <div class="content">Insert files using Drive</div>
                                <span class="material-symbols-outlined">
                                    sentiment_satisfied
                                </span>
                            </div>
                            <div class="icon">
                                <div class="content">Insert photo</div>
                                <span class="material-symbols-outlined">
                                    add_to_drive
                                </span>
                            </div>
                            <div class="icon">
                                <div class="content">Toggle Confidential mode</div>
                                <span class="material-symbols-outlined">
                                    image
                                </span>
                            </div>
                            <div class="icon">
                                <div class="content">Insert Signature</div>
                                <span class="material-symbols-outlined">
                                    lock_clock
                                </span>
                            </div>
                        </div>
                        <div class="icon">
                            <div class="content">More options</div>
                            <span class="material-symbols-outlined">
                                more_vert
                            </span>
                        </div>
                        <div class="icon">
                            <div class="content">delete</div>
                            <span class="material-symbols-outlined">
                                delete
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showFrom: false,
            showBCC: false,
            showCC: false,
            hiddento: true,
        }
    },
    methods: {
        he() {
            console.log('hello');
        }
    }
}
</script>

<style scoped>
.container {
    width: 600px;
    max-height: max-content;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
}

header {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px;
    background-color: #dee9f8e7;
}

.notcontainer{
    width: 300px;
}

.headeritem1 {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
}

header:hover {
    cursor: pointer;
}

.header-icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80px;
}

.header-icons .material-symbols-outlined {
    padding: 2px;
    font-size: 18px;
}

.header-icons .material-symbols-outlined:hover {
    border-radius: 3px;
    background-color: rgba(119, 136, 153, 0.219);
    cursor: pointer;
}

section {
    background-color: white;
    padding: 0px 16px;
    align-items: center;
    height: 545px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
}

.container .section-notshow {
    width: 300px;
}

.container .section-show {
    display: none;
}

.hidden-to {
    display: none;
}

.tomessage {
    width: 100%;
    padding: 10px 0px;
    display: flex;
    align-items: center;
}

.tomessage #Recipients {
    width: 100%;
    height: 20px;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
}

.tomessage>label {
    padding-right: 4px;
    display: flex;
    align-items: center;
}

.tomessage>input {
    width: 100%;
    border: none;
    outline: none;
}

.to-Cc-Bcc-false {
    padding-left: 5px;
    width: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.to-Cc-Bcc-false>div:hover {
    cursor: pointer;
    text-decoration: underline;
}

.div {
    display: flex;
}

.form-body.show-scrollbar {
    height: 483px;
    width: 585px;
    overflow-y: scroll;
}

section .to {
    color: #444746;
    display: flex;
    flex-direction: column;
}

.to-subject {
    width: 100%;
}

.to-subject #Subject {
    padding: 10px 0px;
    width: 100%;
    height: 20px;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    border-top: 1px rgba(173, 216, 230, 0.39) solid;
    border-bottom: 1px rgba(173, 216, 230, 0.39) solid;
}

#description {
    padding: 10px 0px;
    resize: none;
    width: 418px;
    height: 383px;
    outline: none;
    border: none;
}

.footer {
    padding: 10px 0px 16px;
    display: flex;
    align-items: center;
    height: 30px;
}

.footer>button>div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0px 16px;
    font-size: 15px;
    font-weight: 500;
    border-right: 1px solid rgba(0, 0, 0, 0.411);
    padding-right: 23px;
}

.footer>button {
    display: flex;
    align-items: center;
    height: 36px;
    width: 105px;
    outline: none;
    border: none;
    border-radius: 1.5rem;
    background-color: #0B57D0;
    color: #ffffff;
}

.footer>button>span {
    width: 40px;
}

.footer>button:hover {
    cursor: pointer;
}

.footer-icons {
    width: 100%;
    display: flex;
    align-items: center;
}

.footer-icons-2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    width: 208px;
}

.footer-icons .material-symbols-outlined {
    padding: 5px;
    font-size: 20px;
}

.footer-icons .material-symbols-outlined:hover {
    border-radius: 3px;
    background-color: rgba(119, 136, 153, 0.219);
    cursor: pointer;
}

.footer-icons .icon:first-of-type {
    margin: 0px 0px 0px 10px;
}

.footer-icons>.icon:nth-last-of-type(2) {
    display: flex;
    justify-content: center;
    width: 12px;
    margin-left: 10px;
}

.footer-icons>.icon:last-of-type {
    margin-left: auto;
}


.content{
    display: none;
}

.icon:hover .content{
    display: block;
    position: absolute;
    top: 86%;
    font-size: small;
    padding: 6px;
    background-color: #444746;
    color: #fff;
    margin-top: 4px;
    border-radius: 5px;
    font-weight: 500;
}
</style>