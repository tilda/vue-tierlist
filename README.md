# vue-tierlist

A Tiermaker-esque component plugin for Vue.js 2. By default, the component is basically a 1:1 replica of Tiermaker's implementation - however there are customization options available if you so choose.

# Planned
- **Vue 3 support** (note: I am still using Vue 2 for the most part so may take a while to switch over)
- Description support (being able to elaborate on your choices, this is where it differs from Tiermaker really)
- *???* (Have other requests? I'll likely be happy to add them here for later work.)

# Installation

Install `vue-tierlist` from npm *(note: pending submission)*. Once installed you can import & use it like any other Vue plugin.

```js
import TierList from 'vue-tierlist'

Vue.use(TierList) // it's that easy!
```

```html
    <template>
        <!-- See Content subheading below for actual usage -->
        <tier-list :list="{['S': 'this plugin']}"/>
    </template>
```

# Customization

If you'd like to customize how your tier list looks, there are plenty of options.

## Appearance
`vue-tierlist`'s appearance is managed through CSS variables:
```css
:root {
    --vue-tierlist-background: #1a1a17;     /* Type: color         */
    --vue-tierlist-border: solid 1px black; /* Type: border [1]    */
    --vue-tierlist-textcolor: #eee;         /* Type: color         */
    /* [1] https://developer.mozilla.org/en-US/docs/Web/CSS/border */
}
```

## Content
`vue-tierlist`'s content is managed through component props.

### `tiers`
List of tiers that should be displayed.
- Type: `Array`
- Default: `['S', 'A', 'B', 'C', 'D', 'F']`

### `colors`
Colors that should be used on the list of tiers above.
- Type: `Object`
- Default:
```js
{
    'S': '#ff7f7f',
    'A': '#ffbf7f',
    'B': '#ffdf7f',
    'C': '#ffff7f',
    'D': '#bfff7f',
    'F': '#7fff7f'
}
```

### `list`
Actual list that is used for the tier-listing.
- Type: `Array`s surrounded by an `Object`
- Default: 
```js
    {
        'S': [''],
        'A': [''],
        'B': [''],
        'C': [''],
        'D': [''],
        'F': ['']
    }
```
- Notes: Each tier would be its own array. For example if you had your tiers as `['epic', 'rare', 'uncommon']` your list prop would look like `{'epic': [''], 'rare': [''], 'uncommon': ['']}`.

# License & other stuff
`vue-tierlist` is licensed under the Apache 2.0 License.

If you have any questions, comments, or concerns, please feel free to reach out to me! Trust me, I won't judge for any stupid questions ~~because I am stupid too~~.
