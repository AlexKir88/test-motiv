
<template>
    <svg-icon type="mdi" color="red" :path="path"></svg-icon>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiFolderOutline } from '@mdi/js';

export default {
    name: "my-component",
    components: {
        SvgIcon
    },
    data() {
        return {
            path: mdiFolderOutline,
        }
    }
}
</script>