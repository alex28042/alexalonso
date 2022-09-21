# react-ion-icon

This is a React wrapper component for them ionic icons.

to use this package you first have to add.
```html
<script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
```
at the very bottom of your body at your index.html. then on the com ponent you want to use it you just import it

```javascript
import {IonIcon} from "react-ion-icon";

export function MyComponent (props) {

    return (
        <div>
        <IonIcon name="person" />
        </div>
    )
}
```

if you want to change them colors you can add this variables to your css
```css
:root {
    --ionicon-stroke-width: 32px;
    --ion-color-primary: #0fa;
    --ion-color-secondary: #fa0;
    --ion-color-tertiary: #f4a942;
    --ion-color-success: #10dc60;
    --ion-color-warning: #ffce00;
    --ion-color-danger: #f14141;
    --ion-color-light: #f4f5f8;
    --ion-color-medium: #989aa2;
    --ion-color-dark: #222428;
}
```
