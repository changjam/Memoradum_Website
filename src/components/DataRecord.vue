<template lang="">
    <div class="record" id="record">
        <h2 class="title" id="title">
            紀錄
        </h2>
        <div class="container" v-for="(item, index) in Records" :key="item.id">
            <div class="Box d">
                <h3 class="text">日期：</h3>
                <p class="date">{{item.date}}</p>
            </div>
            <div class="Box t">
                <h3 class="text">時間：</h3>
                <p class="time"></p>
                {{item.time1}}~{{item.time2}}
                <p class="time"></p>
            </div>
            <div class="Box c">
                <h3 class="text">內容：</h3>
                <p class="content">{{item.content}}</p>
            </div>
            <div class="id">{{index+1}}</div>
            <a href="javascript: ;" class="copy_btn" @click="BtnCopy(index)">c</a>
            <a href="javascript: ;" class="edit_btn" @click="BtnEdit(index)">e</a>
            <a href="javascript: ;" class="delete_btn" @click="BtnDelete(index)">x</a>
        </div>
    </div>
</template>
<script>
export default {
    name:'DataRecord',
    data() {
        return {
        }
    },
    methods: {
        BtnCopy(i) {
            this.$store.commit('CopyData',i)
        },
        BtnEdit(i) {
            this.BtnCopy(i);
            this.BtnName = '確認修改';
            this.ModifyIndex = i;
        },
        BtnDelete(i) {
            this.Records.splice(i, 1);
        },
    },
    computed:{
        // OneRecord(){
        //     return this.$store.state.OneRecord;
        // },
        Records(){
            return this.$store.state.Records;
        },
        date(){
            return this.$store.state.date;
        },
        time_start(){
            return this.$store.state.time_start;
        },
        time_end(){
            return this.$store.state.time_end;
        },
        content(){
            return this.$store.state.content;
        },
        BtnName:{
            get(){
                return this.$store.state.BtnName;
            },
            set(value){
                this.$store.commit('SetBtnName',value);
            }
        },
        ModifyIndex:{
            get(){
                return this.$store.state.ModifyIndex;
            },
            set(value){
                this.$store.commit('SetModifyIndex',value);
            }
        },
    }
}
</script>
<style lang="css">
.record {
    background-color: pink;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.record .container {
    background-color: royalblue;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    width: 90%;
    padding: 20px 0;
    position: relative;
}

.record .container .Box {
    width: 60%;
}

.record .container .Box.t .time {
    display: inline;
}

.record .container .Box.c {
    word-wrap: break-word;
    word-break: normal;
}

.record .container .id,
.record .container a {
    text-decoration: none;
    position: absolute;
    width: 20px;
    height: 20px;
    left: 10px;
    background-color: wheat;
    border: 1px solid wheat;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    color: black;
}

.record .container .id {
    /* background-color: #fff; */
    top: 5px;
}

.record .container .copy_btn {
    bottom: 75px;
}

.record .container .edit_btn {
    bottom: 40px;
}

.record .container .delete_btn {
    bottom: 5px;
}
</style>