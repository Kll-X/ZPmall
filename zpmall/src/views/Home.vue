<template>
    <div class="home">
        <!-- 头部 -->
        <van-nav-bar title="首页" right-text="未登录" @click-right="onClickRight" fixed>
            <van-icon name="search" slot="left"/>
        </van-nav-bar>

        <!-- 轮播图-->
        <div class="carousel">
            <van-swipe :autoplay="2000">
                <van-swipe-item class="carousel-item" v-for="(image, index) in carouselItem" :key="index">
                    <img v-lazy="image.imgSrc"/>
                </van-swipe-item>
            </van-swipe>
        </div>

        <!-- 热门商品-->

    </div>
</template>

<script>
    import axios from 'axios'
    import url from '@/server.config.js'

    export default {
        data() {
            return {
                carouselItem: [
                    // 轮播图
                    {
                        name: "img1",
                        imgSrc:
                            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1041994715,1243354266&fm=26&gp=0.jpg"
                    },
                    {
                        name: "img2",
                        imgSrc:
                            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=116744544,2055858210&fm=26&gp=0.jpg"
                    },
                    {
                        name: "img3",
                        imgSrc:
                            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1490457979,856070595&fm=200&gp=0.jpg"
                    }
                ],
            }
        },
        beforeCreate() {
            axios.get(url.getVarietyItem).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        },
        components: {},
        methods: {
            onClickRight() {
                console.log('跳转登录也米娜')
            }
        }
    }
</script>

<style scoped lang="scss">
    .carousel {
        margin-top: 1rem;
        height: 3rem;

        &-item {
            img {
                width: 100%;
                height: 3rem;
            }
        }
    }
</style>
