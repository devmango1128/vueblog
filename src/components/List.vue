<template>
    <div v-for="data in blogData" :key="data.number">
        <h5>{{ data.title }}</h5>
        <p>{{ data.date }}</p>
    </div>
</template>

<script>
export default {
    props : {
        blogData : Array
    }
}
</script>

<style>

</style>