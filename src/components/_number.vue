<template>
    <div class="mt-4 mb-4" style="padding:10px">
        <div class="title">
            {{ postData.title }}
            <div class="date">
                {{ postData.date }}
            </div>
        </div>
        <hr>
        <div class="content">
            {{ postData.content }}
        </div>
    </div>
</template>

<script>

export default {
    name: 'App',
    props: {
        blogData : Array
    },
    data() {
        return {
            postData : {}
        }
    },
    created() {
        const number = this.$route.params.number
        this.postData = this.blogData.find(data => data.number == number);
    },
    components: {
    }
}
</script>

<style>
    .content {
        text-align: left;
    }
</style>