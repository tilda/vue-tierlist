<template>
    <tier-list :list="list"/>
</template>

<style>
    body {
        font-family: sans-serif;
    }
</style>

<script>
export default {
    data: function() {
        return {
            list: {
                'S': ['hello', 'this is a tierlist'],
                'A': ['it has', 'multiple items!'],
                'B': ['pretty cool no?'],
                'C': ['what a demo', 'innit'],
                'D': ['uhh fuck'],
                'F': ['something idk']
            }
        }
    }
}
</script>