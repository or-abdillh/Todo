<template>
  <section>
    <!-- TopBar -->
    <TopBar>
      <template v-slot:start>
        <h1 class="text-3xl font-bold">
          <span class="text-indigo-700">Pro </span>
          <span>Mentor.</span>
        </h1>
      </template>
      <template v-slot:end>
        <i class="text-gray-50 p-3 rounded-full bg-indigo-700 fa fa-user"></i>
      </template>
    </TopBar>
    
    <!-- BottomBar -->
    <BottomBar/>
  </section>
</template>
<script setup>
  
  import BottomBar from '@/components/BottomBar.vue'
  import TopBar from '@/components/TopBar.vue'
  
</script>