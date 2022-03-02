# vue-tierlist

A Tiermaker-esque component plugin for Svelte. By default, the component is basically a 1:1 replica of Tiermaker's implementation - however there are customization options available if you so choose. I know the repo is called "vue-tierlist", it's just because I made it when I was unenlightened and I don't know where the rename button is. Please [email me](mailto:tilda@crouton.net) if you have any leads.

# Planned
- Description support (being able to elaborate on your choices, this is where it differs from Tiermaker really)
- *???* (Have other requests? I'll likely be happy to add them here for later work.)

# Not planned
- Vue support

# Installation

Install `vue-tierlist` from npm *(note: pending submission)*. Once installed you can import & use it like any other Svelte plugin. Sorry again about the name.

```js
import TierList from 'vue-tierlist' // it's that easy!
```

```svelte
    <!-- See Content subheading below for actual usage -->
    <TierList list={}/>
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
- Type: `string[]`
- Default: `['S', 'A', 'B', 'C', 'D', 'F']`

### `colors`
Colors that should be used on the list of tiers above.
- Type: `{ [tier: string]: string }`
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
- Type: `{ [tier: string]: string[] }`
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

### `listType`
Type of list that you would like to use.
- Type: `'text' | 'image' | 'dick chungy'`
- Default: `'text'`
- Notes: Currently you can only have one list type, not both.
  - i.e. If you set this to `'image'`, it expects items to be links to images, and if you set it to `'text'` it will display that image link as just raw text.

# License & other stuff
`vue-tierlist` is licensed under the Apache 2.0 License.

If you have any questions, comments, or concerns, please feel free to reach out to me! Trust me, I won't judge for any stupid questions 'cause I'm based as hell.
