# oncommon.js
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

on-event common module for mofron

## event function parameter

- component: event target component object

- object: event object (depend on 'ename' parameter)

- mixed: user specified parameter


# Install
```
npm install mofron oncommon.js
```

# Sample
```html
<require>
    <tag load="mofron-comp-button">Button</tag>
    <tag load="mofron-event-oncommon">onCommon</tag>
</require>

<script run=init>
let fcs_evt = (p1,p2) => { console.log(p2); }
</script>

<Button event=onCommon:(@fcs_evt,"onfocus")>test</Button>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | ename | string | event name |
| | | | undefined: call as getter |

