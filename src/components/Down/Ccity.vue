<template>
    <div class="content">
        <div class="nav">
            <div class="one">
             <ul>
                 <li v-for="item in List" :key='item.id'>{{item.name}}</li>
             </ul>
             </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Ccity',
    props:[
        'List'
    ]
}
</script>

<style scoped>
.content{
    position: absolute;
    left: 0;
    height: 100%;
    background: rgba(200,200,200,0.7)
    }
 .content  .nav{
        width: 100%;
        border-top:2px solid #ccc; 
    }
    .nav ul li{
        background-color: #fff;
        height: 30px;
        line-height: 30px;
        padding: 5px 15px;
        border-bottom:1px solid #ccc; 
    }
</style>