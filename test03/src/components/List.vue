<template>
    <div name = "Main">
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
    name:"Main",
    data(){
        var obj = this;
        var url = "";
        if(obj.goodId == 1){
            url = "json/bjb.json";
        } else if(obj.goodId == 2){
            url = "json/bjb.json";
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
                url = "json/bjb.json";
            } else if(obj.goodId == 2){
                url = "json/bjb.json";
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