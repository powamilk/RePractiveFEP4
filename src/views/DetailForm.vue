<template>
    <div v-if="nhahang">
        <h2>Chi tiết món ăn</h2>
        <p>Id {{ nhahang.id }}</p>
        <p>Tên món ăn {{ nhahang.name }}</p>
        <p>Danh mục {{ nhahang.category }}</p>
        <p>Giá {{ nhahang.price }}</p>
        <p>Nguyên liệu chính: {{ nhahang.ingredients }}</p>
        <p>Mô tả: {{ nhahang.description }}</p>
    </div>
</template>

<script setup>
    import {ref, onMounted} from 'vue'
    import instanceAxios from '@/ultis/configAxios';
    import { useRoute } from 'vue-router';

    const route = useRoute()
    const nhahang = ref({})

    const fetchNhaHang = async () => {
        const response = await instanceAxios.get(`/nhahangs/${route.params.id}`)
        nhahang.value = response.data
    }

    onMounted(fetchNhaHang)
</script>

<style lang="scss" scoped>

</style>