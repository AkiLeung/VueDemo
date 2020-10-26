<template>
    <div name = "Show">
        <ul >
            <li v-for="good in list" :key="good">
                <!-- <img v-bind:src="good.img"> -->
                <p>{{ good.goodName }}</p>
            </li>
        </ul>
        <v-row>
            <template v-for="n in 4">
                <v-col :key="n" class="mt-2" cols="12">
                <strong>Category {{ n }}</strong>
                </v-col>

                <v-col v-for="j in 6" :key="`${n}${j}`" cols="6" md="2">
                <v-sheet height="150"></v-sheet>
                </v-col>
            </template>
        </v-row>
    </div>
</template>
<script>
export default {
    name:"Show",
    data(){
        var obj = this;
        var url = "";
        if(obj.goodId == 1){
            url = "/json/data1.json";
        } else if(obj.goodId == 2){
            url = "/json/data2.json";
        } else if(obj.goodId == 3){
            url = "/json/data3.json";
        } else{
            url = "/json/data0.json";
        }
        this.$http.get(url).then(function(res){
            obj.list = res.data;
        })
        return{
            list:[]
        }
    },
    props:{
        goodId:Number
    },
    watch:{
        goodId(){
            var obj = this;
            var url = "";
            if(obj.goodId == 1){
                url = "/json/data1.json";
            } else if(obj.goodId == 2){
                url = "/json/data2.json";
            } else if(obj.goodId == 3){
                url = "/json/data3.json";
            } else {
                url = "/json/data0.json";
            }
            this.$http.get(url).then(function(res){
            obj.list = res.data;
            })
            return{
                list:[]
            }
        }
    }
}
</script>