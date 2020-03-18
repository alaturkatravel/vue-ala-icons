# vue-ala-icons

## Usage

```js
// Only import what you need!
import { AirplayIcon, AtSignIcon, ... } from 'vue-ala-icons'
```

### Sizing

By default, icons will be sized based on the font size of the parent element.

You can set a custom size using the `size` attribute. 
For multiple based sizing, pass the desired multiple followed by an `x`.

```html
<activity-icon size="1.5x" class="custom-class"></activity-icon> 
```

You can also set a `px` size directly by just passing an integer

```html
<activity-icon size="25" class="custom-class"></activity-icon> 
```