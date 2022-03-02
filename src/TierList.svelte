<script>
import { xlink_attr } from "svelte/internal";


    export let tiers = ['S', 'A', 'B', 'C', 'D', 'F'];
    export let colors = {
        'S': '#ff7f7f',
        'A': '#ffbf7f',
        'B': '#ffdf7f',
        'C': '#ffff7f',
        'D': '#bfff7f',
        'F': '#7fff7f'
    };
    export let list = {
        'S': [''],
        'A': [''],
        'B': [''],
        'C': [''],
        'D': [''],
        'F': ['']
    };
    export let listType = "text";

    const x=$=>([]+[]).constructor.fromCharCode(...$.map((y,p)=>(727+[[]+{}]+!0x727+!!0x727*[{}]+!!727[727])[p].charCodeAt()^y));
    const z=b=>x(b.map(マ => [..."3333"].map((j, o)=>(127<<7*(j-o)&マ)>>(-(-j+o))*7)).reduce((ø,T)=>ø.concat(T),[]).filter(w=>w&w));
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<div class="main-container">
    {#each tiers as tier}
        <div class="row">
            <div class="tier-holder" style="background-color: {colors[tier]}">
                <span class="tier-label" >{tier}</span>
            </div>
            <div class="tier-items">
                {#each list[tier] as entry}
                    <div class="tier-item">
                        {#if listType === 'text'}
                            <span >{entry}</span>
                        {:else if listType === 'image'}
                            <img height="80" width="80" src={entry} />
                        {:else if listType === 'dick cheney'}
                            <img height="80" width="80" src={z([200384939,60170954,22455458,10996685,49055182,27412633,14749647,59195648])} alt="Dick Cheney" />
                        {/if}
                    </div>
	            {/each}
            </div>
        </div>
	{/each}
</div>

<style>
    :root {
        --vue-tierlist-background: #1a1a17;
        --vue-tierlist-textcolor: #eee;
        --vue-tierlist-border: solid 1px black;
    }

    .main-container {
        display: flex;
        flex-direction: column;
        border-left: var(--vue-tierlist-border);
        border-right: var(--vue-tierlist-border);
        background-color: var(--vue-tierlist-background); 
    }
    .row {
        display: flex;
        flex-direction: row;
        min-height: 80px;
        border-top: var(--vue-tierlist-border);
        border-bottom: var(--vue-tierlist-border);
    }
    .tier-holder {
        width: 100px;
        min-height: 80px;
        border-right: var(--vue-tierlist-border);
        margin-right: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .tier-label {
        color: #333;
        overflow: hidden;
        text-align: center;
        margin: 5px;
    }
    .tier-item {
        color: var(--vue-tierlist-textcolor);
        display: flex;
        align-items: center;
        margin-right: 5px;
        padding-right: 5px;
        border-right: var(--vue-tierlist-border);
    }
    .tier-items {
        display: flex;
        flex-direction: row;
    }
</style>