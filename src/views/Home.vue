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
    
    <!-- Contents -->
    <section class="px-5 mt-8">
      <h1 class="text-2xl font-medium mb-3">Today's Schedules</h1>
      <!-- Alert -->
      <Alert content="You have no sheduled sessions for today" button-text="new mission" icon="fa fa-plus" />
    </section>
    
    <!-- BottomBar -->
    <BottomBar/>
  </section>
</template>
<script setup>
  
  import BottomBar from '@/components/BottomBar.vue'
  import TopBar from '@/components/TopBar.vue'
  import Alert from '@/components/Alert.vue'
  
</script>