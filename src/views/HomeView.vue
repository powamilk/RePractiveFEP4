<template>
  <main>
    <RouterLink to="/create" class="btn btn-primary">
        Tạo Món ăn
    </RouterLink>
    <table class="table">
        <thead>
          <tr>
            <td>Id</td>
            <td>Tên Món ăn</td>
            <td>Danh mục</td>
            <td>Giá Món Ăn</td>
            <td>Nguyên Liệu</td>
            <td>Mô tả</td>
          </tr>
        </thead>
        <tbody v-for="nhahang in nhahangs" :key="nhahang.id">
            <tr>
              <td>{{ nhahang.id }}</td>
              <td>{{ nhahang.name }}</td>
              <td>{{ nhahang.category }}</td>
              <td>{{ nhahang.price }}</td>
              <td>{{ nhahang.ingredients }}</td>
              <td>{{ nhahang.description }}</td>
              <td>
                <RouterLink :to="{name: 'detail', params: {id: nhahang.id}}" class="btn btn-info">View</RouterLink>
                <RouterLink :to="{name: 'edit', params: {id: nhahang.id}}" class="btn btn-info">Edit</RouterLink> 
                <button class="btn btn-primary" @click="deleteHandle(nhahang.id)">Xoa</button>
              </td>
            </tr>
        </tbody>
    </table>
  </main>
</template>

<script setup>
  import {ref, onMounted} from 'vue'
  import instanceAxios from '@/ultis/configAxios';
  
  const nhahangs = ref([])

  const fetchNhaHangs = async () => {
    const response = await instanceAxios.get('/nhahangs')
    nhahangs.value = response.data
  }

  const deleteHandle = async (id) => {
    const isConfirm = confirm('bạn có muốn xóa')
    if(!isConfirm) return
    await instanceAxios.delete(`/nhahangs/${id}`)
    fetchNhaHangs()
  }

  onMounted(fetchNhaHangs)
</script>

<style lang="scss" scoped>

</style>