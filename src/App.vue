<template>
    <div>
        <tier-list :listType="listType" :list="(listType === 'text' ? textList : listType === 'image' ? imageList : '')"/>
        <br/>
        <button v-on:click="switchToTextList" v-bind:class="{ active: listType === 'text' }">Text mode</button>
        <button v-on:click="switchToImageList" v-bind:class="{ active: listType === 'image' } ">Image mode</button>
    </div>
</template>

<style>
    body {
        font-family: sans-serif;
    }
    button {
        border-radius: 10%;
        background-color: #ddd;
    }
    button.active {
        background-color: #0ad;
    }
</style>

<script>
export default {
    methods: {
        switchToTextList: function() {
            this.listType = 'text'
        },
        switchToImageList: function() {
            this.listType = 'image'
        }
    },
    data: function() {
        return {
            listType: 'text',
            textList: {
                'S': ['hello', 'this is a tierlist'],
                'A': ['it has', 'multiple items!'],
                'B': ['pretty cool no?'],
                'C': ['what a demo', 'innit'],
                'D': ['uhh fuck'],
                'F': ['something idk']
            },
            imageList: {
                'S': ['https://picsum.photos/80/80', 'https://cdn.discordapp.com/emojis/944180127976271883.webp?size=80'],
                'A': ['https://avatars.githubusercontent.com/u/8301262?v=4'],
                'B': ['https://picsum.photos/80/80?'],
                'C': ['https://cdn.discordapp.com/emojis/396521773149192214.png?size=80'],
                'D': ['https://cdn.discordapp.com/emojis/944145229047537685.webp?size=80'],
                'F': ['https://media.discordapp.net/attachments/866875917137477643/897696716462112768/cooltext395089308814713.gif']
            },
        }
    }
}
</script>