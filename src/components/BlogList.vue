<template>
    <div v-for="data in blogData" :key="data.number">
        <div class="title">
            <a class="card-body p-2" @click=moveToPage(data.number)>
                {{ data.title }}
            </a>
            <div class="date">{{ data.date }}</div>
        </div>
        <hr>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
    props : {
        blogData : Array
    },
    setup() {

        const router = useRouter()

        const moveToPage = (number) => {
            router.push({
                name: 'BlogDetail',
                params: {
                    number: number
                }
            })
        }

        return {
            moveToPage
        }
    }
}
</script>

<style>
.title {
    display: inline-block;
    font-weight: 700;
    color:#232323;
    text-align: left;
    width: 100%;
    margin-top:10px;
    cursor: pointer;
}

.title .date {
    display: inline-block;
    margin-left: 10px;
    font-weight: 200;
    font-size: 14px;
}

</style>