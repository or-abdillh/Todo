<template>
  <section :class="borderBottom ? 'border-b-2 border-gray-100' : ''" class="px-5 py-4 flex w-full justify-between">
    <slot name="start" />
    <slot name="end" />
  </section>
</template>

<script setup>
  
  defineProps({
    borderBottom : {
      type: Boolean,
      default: true
    }
  })
  
</script>