<template lang="">
    <div class="App" id="App">
        <DataInput/>
        <DataRecord/>
        <footer class="foot">
            <p>made by Jam</p>
        </footer>
    </div>
</template>
<script>
import DataInput from './components/DataInput.vue';
import DataRecord from './components/DataRecord.vue';

export default {
    name:'App',
    data() {
        return {
            test:'hi'
        }
    },
    components:{
        DataInput,
        DataRecord,
    }
}
</script>
<style lang="css">
* {
    margin: 0;
    padding: 0;
    list-style: none;
}

html {
    background-color: pink;
}

footer {
    position: fixed;
    width: 100vw;
    bottom: 0;
    background-color: bisque;
}


/* large Screen */

@media screen and (min-width:786px) {
    .app {
        width: 50%;
        height: 100vh;
        float: left;
    }
    .record {
        width: 50%;
        height: 100vh;
        justify-content: flex-start;
        overflow: scroll;
    }
    .record .container {
        width: 90%;
    }
    footer {
        width: 100vw;
        left: 0;
    }
}
</style>