<template>
    <header>
        <fullMessageHeader :changeMessageCompValue="changeMessageCompValue" @backtoindex="backtoindex" @deletedFullmessage="deletedFullmessage"/>
    </header>
    <section>
        <FullMessageBody :changeMessageCompValue="changeMessageCompValue" />
    </section>
</template>

<script>
import FullMessageBody from './fullmessagecomponents/fullMessageBody.vue'
import fullMessageHeader from './fullmessagecomponents/fullMessageHeader.vue'
    export default {
  components: { fullMessageHeader, FullMessageBody },
  props:['changeMessageCompValue'],
  emits:['backtoindex','deletedFullmessage'],
  methods:{
    backtoindex(){
        this.$emit("backtoindex")
    },
    deletedFullmessage(value){
        this.$emit('deletedFullmessage',value)
    }
  }
}
</script>

<style scoped>
    header{
        min-width: 90%;
    }
    section{
        min-width: 90%;
        height: 640px;
        overflow-y: scroll;
        padding-right: 16px;
    }
</style>