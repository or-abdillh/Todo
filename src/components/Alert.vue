<template>
  <section class="flex justify-between border-2 border-gray-100 px-5 py-8 rounded-xl">
    <p class="w-7/12 text-lg">{{ content }}</p>
    <div class="w-5/12 grid place-items-center">
      <button type="button" class="bg-indigo-600 text-gray-50 text-sm font-medium p-2 rounded">
        <i :class="icon"></i>
        {{ buttonText }}
      </button>
    </div>
  </section>
</template>

<script setup>
  
  defineProps({
    content: {
      type: String,
      default: "Text content goes here"
    },
    buttonText: {
      type: String,
      default: "Button text"
    },
    icon: {
      type: String,
      default: "fa fa-user"
    }
  })
  
</script>