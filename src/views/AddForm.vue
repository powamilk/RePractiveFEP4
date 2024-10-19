<template>
    <div>
        <h2>Create nhà hàng</h2>
        <form @submit.prevent="handleSubmit">
            <div class="mb-3">
                <label for="name" class="form-label">name</label>
                <input v-model="nhahang.name" class="form-control" required>
            </div>
            <div class="mb-3">
                <label for="category" class="form-label">category</label>
                <input v-model="nhahang.category" class="form-control" required >
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">price</label>
                <input v-model="nhahang.price" type="number" class="form-control" required >
            </div>
            <div class="mb-3">
                <label for="ingredients" class="form-label">ingredients</label>
                <input v-model="nhahang.ingredients" class="form-control"  required>
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">description:</label>
                <input v-model="nhahang.description" class="form-control"  required>
            </div>
            <button type="submit" class="btn btn-primary">Xác Nhận</button>
        </form>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import instanceAxios from '@/ultis/configAxios';
import { useRouter } from 'vue-router';

const nhahang = ref({
    name: '',
    category: '',
    price: '',
    ingredients: '',
    description: ''
})

const router = useRouter()

const handleSubmit = async () => {
    await instanceAxios.post('/nhahangs', nhahang.value)
    router.push({name: 'home'})
}
</script>

<style lang="scss" scoped>

</style>