<template>
    <div>
        <h2>Update nhà hàng</h2>
        <form @submit.prevent="handleSubmit">
            <div class="mb-3">
                <label for="name" class="form-label">name</label>
                <input v-model="nhahang.name" class="form-control" >
            </div>
            <div class="mb-3">
                <label for="category" class="form-label">category</label>
                <input v-model="nhahang.category" class="form-control"  >
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">price</label>
                <input v-model="nhahang.price" type="number" class="form-control" >
            </div>
            <div class="mb-3">
                <label for="ingredients" class="form-label">ingredients</label>
                <input v-model="nhahang.ingredients" class="form-control" >
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">description:</label>
                <input v-model="nhahang.description" class="form-control" >
            </div>
            <button type="submit" class="btn btn-primary">Xác Nhận</button>
        </form>
    </div>
</template>

<script setup>
    import {ref, onMounted} from 'vue'
    import instanceAxios from '@/ultis/configAxios';
    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute()
    const router = useRouter()
    const nhahang = ref({})

    const fetchNhaHang = async() => {
        const response = await instanceAxios.get(`/nhahangs/${route.params.id}`)
        nhahang.value = response.data
    }

    const handleSubmit = async () => {
        await instanceAxios.put(`/nhahangs/${nhahang.value.id}`, nhahang.value)
        router.push({name : 'home'})
    }

    onMounted(fetchNhaHang)
</script>
<style lang="scss" scoped>

</style>