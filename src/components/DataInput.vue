<template lang="">
    <div class="app" id="app">
        <div class="head">
            <h1 class="title">
                備忘錄
            </h1>
            <div class="Box d">
                <h3 class="text">日期</h3>
                <input type="date" class="box d" id="date" v-model="date">
            </div>
            <div class="Box t">
                <h3 class="text">時間</h3>
                <input type="time" class="box t" id="time_s" v-model="time_start"> 到
                <input type="time" class="box t" id="time_e" v-model="time_end">
            </div>
            <div class="Box c">
                <h3 class="text">內容</h3>
                <textarea name="content" id="content" class="box c" v-model="content"></textarea>
            </div>
            <div class="btn">
                <button class="btn_add" id="btn_add" @click="BtnAdd">{{BtnName}}</button>
                <button class="btn_clear" id="btn_clear" @click="BtnClear">清空</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'DataInput',
    data() {
        return {
            OneRecord:{},
        }
    },
    methods: {
        BtnAdd() {
            this.OneRecord={
                id: this.id,
                date: this.date,
                time1: this.time_start,
                time2: this.time_end,
                content: this.content,
            }
            // 判斷當前狀態為新增或修改
            if (this.BtnName === "新增") {
                this.$store.dispatch('addRecord',this.OneRecord)
            } else if (this.BtnName === "確認修改") {
                this.$store.dispatch('modifyRecord',this.OneRecord)
                this.BtnName = "新增";
            }
            this.BtnClear();
        },
        BtnClear() {
            this.$store.commit('Clear');
        },
    },
    computed:{
        Records(){
            return this.$store.state.Records;
        },
        date:{
            get(){
                return this.$store.state.date;
            },
            set(value){
                this.$store.dispatch('setDate',value);
            }
        },
        time_start:{
             get(){
                return this.$store.state.time_start;
            },
            set(value){
                this.$store.dispatch('setTime_Start',value);
            }
        },
        time_end:{
             get(){
                return this.$store.state.time_end;
            },
            set(value){
                this.$store.dispatch('setTime_End',value);
            }
        },
        content:{
             get(){
                return this.$store.state.content;
            },
            set(value){
                this.$store.dispatch('setContent',value);
            }
        },
        BtnName:{
            get(){
                return this.$store.state.BtnName;
            },
            set(value){
                this.$store.dispatch('setBtnName',value);
            }
            
        },
        id(){
            return this.$store.state.id;
        }
    }
}
</script>
<style lang="css">
.app {
    background-color: #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.app .Box {
    margin-bottom: 10px;
}

.app .Box.t {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.app .box {
    width: 200px;
}

.app .box.c {
    height: 100px;
}

.app .btn {
    height: 70px;
    width: 200px;
    display: flex;
    flex-direction: column;
}

.app .btn .btn_add,
.btn_clear {
    width: 100%;
    height: 100%;
    background-color: black;
    color: white;
    margin-bottom: 10px;
    cursor: pointer;
}
</style>