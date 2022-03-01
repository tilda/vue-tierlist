<template>
    <tier-list :list="list"/>
</template>

<script>

export default {
    data: function() {
        return {
            list: {
                'S': ['hello', 'with multiple items'],
                'A': ['this'],
                'B': ['is'],
                'C': ['a'],
                'D': ['demo'],
                'F': ['it\'s pretty cool, no?']
            }
        }
    }
}
</script>