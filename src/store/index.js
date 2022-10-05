import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        Records:[],
        date:'',
        time_start: "",
        time_end: "",
        content: "",
        BtnName: "新增",
        id: 0,
        ModifyIndex:0,
    },
    actions:{
        setDate(context,value){
            context.commit('SetDate',value);
        },
        setTime_Start(context,value){
            context.commit('SetTime_Start',value);
        },
        setTime_End(context,value){
            context.commit('SetTime_End',value);
        },
        setContent(context,value){
            context.commit('SetContent',value);
        },
        setBtnName(context,value){
            context.commit('SetBtnName',value);
        },
        setModifyIndex(context,value){
            context.commit('SetModifyIndex',value);
        },
        addRecord(context,value){
            context.commit('AddRecord',value);
        },
        modifyRecord(context,value){
            context.commit('ModifyRecord',value);
        }

    },
    mutations:{
        SetDate(state,value){
            state.date = value;   
        },
        SetTime_Start(state,value){
            state.time_start = value;   
        },
        SetTime_End(state,value){
            state.time_end = value;   
        },
        SetContent(state,value){
            state.content = value;   
        },
        SetBtnName(state,value){
            state.BtnName = value;   
        },
        SetId(state,value){
            state.id = value;   
        },
        SetModifyIndex(state,value){
            state.ModifyIndex = value;   
        },
        AddRecord(state,value){
            state.Records.unshift(value);
            state.id = state.id + 1;
        },
        ModifyRecord(state,value){
            let i = state.ModifyIndex;
            state.Records[i].date = value.date;
            state.Records[i].time1 = value.time1;
            state.Records[i].time2 = value.time2;
            state.Records[i].content = value.content;
        },
        CopyData(state,value){
            let i = value;
            state.date = state.Records[i].date;
            state.time_start = state.Records[i].time1;
            state.time_end = state.Records[i].time2;
            state.content = state.Records[i].content;
        },
        Clear(state){
            state.date = "";
            state.time_start = "";
            state.time_end = "";
            state.content = "";
        }
    }
})