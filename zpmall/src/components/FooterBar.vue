<template>
        <van-tabbar fixed route inactive-color="#333">
            <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="shop-o" to="/category">分类</van-tabbar-item>
            <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="manager-o" to="/profile">我的</van-tabbar-item>
        </van-tabbar>
</template>

<script>
    export default {
        data() {
            return {
            };
        },
        computed:{
        },
        created(){
        },
        methods: {
        }
    };
</script>

<style scoped>

</style>