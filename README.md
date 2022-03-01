# vue-tierlist

A tiermaker-esque customizable component plugin for Vue.js 2.

*Note: Vue 3 support is planned, but not a priority since I am still actively using Vue 2.*

# Installation

Install `vue-tierlist` from npm *(note: pending submission)*. Once installed you can import & use it like any other Vue plugin.

```js
import TierList from 'vue-tierlist'

Vue.use(TierList) // it's that easy!
```

```html
    <template>
        <!-- See Content subheading below for actual usage -->
        <tier-list :tiers="[]" :list="{['S': 'this plugin']}"/>
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
- Type: `Array`
- Default: `['#ff7f7f', '#ffbf7f', '#ffdf7f', '#ffff7f', '#bfff7f', '#7fff7f']`

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
