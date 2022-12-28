<template>
    <div class="bar-hp-pokemon">
        <div class="bar"></div>
        <p class="hp">HP {{ props.hp }}/{{ props.hp }}</p>
    </div>
   
</template>

<script setup lang="ts">
    const props = defineProps({
        hp:{
            type:Number,
            required:true
        }
    })
</script>