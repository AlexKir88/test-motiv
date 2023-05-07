<script>
    import IconFolder from './IconFolder.vue';

    export default {
        data: () => ({
            dataFolder: {},
        }),
    }
</script>

<template>
    <IconFolder/> <sup>{{ folder }}</sup> 
    <div class="sub-folder">
        <IconFolder/><sup>100/200/300 </sup> 
    </div>
</template>
<style>
    .sub-folder{
        margin-left: 30px;
    }
</style>