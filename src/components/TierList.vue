<template>
    <div class="v-tierlist-main-container">
        <div v-for="tier in tiers" class="v-tierlist-row" :key="tier">
            <div class="v-tierlist-tier-holder" :style="{'background-color': colors[tier]}">
                <span class="v-tierlist-tier-label" >{{ tier }}</span>
            </div>
            <div class="v-tierlist-tier-items">
                <div class="v-tierlist-tier-item" v-for="(entry) in list[tier]" :key="entry">
                    <span>{{ entry }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    :root {
        --vue-tierlist-background: #1a1a17;
        --vue-tierlist-textcolor: #eee;
        --vue-tierlist-border: solid 1px black;
    }

    .v-tierlist-main-container {
        display: flex;
        flex-direction: column;
        border-left: var(--vue-tierlist-border);
        border-right: var(--vue-tierlist-border);
        background-color: var(--vue-tierlist-background); 
    }
    .v-tierlist-row {
        display: flex;
        flex-direction: row;
        min-height: 80px;
        border-top: var(--vue-tierlist-border);
        border-bottom: var(--vue-tierlist-border);
    }
    .v-tierlist-tier-holder {
        width: 100px;
        min-height: 80px;
        border-right: var(--vue-tierlist-border);
        margin-right: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .v-tierlist-tier-label {
        color: #333;
        overflow: hidden;
        text-align: center;
        margin: 5px;
    }
    .v-tierlist-tier-item {
        color: var(--vue-tierlist-textcolor);
        display: flex;
        align-items: center;
        margin-right: 5px;
        padding-right: 5px;
        border-right: var(--vue-tierlist-border);
    }
    .v-tierlist-tier-items {
        display: flex;
        flex-direction: row;
    }
</style>

<script>
export default {
    props: {
        tiers: {
            type: Array,
            default: function() {
                return ['S', 'A', 'B', 'C', 'D', 'F']
            }
        },
        colors: {
            type: Object,
            default: function() {
                return {
                    'S': '#ff7f7f',
                    'A': '#ffbf7f',
                    'B': '#ffdf7f',
                    'C': '#ffff7f',
                    'D': '#bfff7f',
                    'F': '#7fff7f'
                }
            }
        },
        list: {
            type: Object,
            required: true,
            default: function() {
                return {
                    'S': [''],
                    'A': [''],
                    'B': [''],
                    'C': [''],
                    'D': [''],
                    'F': ['']
                }
            }
        }
    }
}
</script>