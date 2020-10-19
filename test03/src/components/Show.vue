<template>
    <div name = "Show">
        <ul >
            <li v-for="good in list" :key="good">
                <!-- <img v-bind:src="good.img"> -->
                <p>{{ good.goodName }}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"Show",
    data(){
        var obj = this;
        var url = "";
        alert(123);
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