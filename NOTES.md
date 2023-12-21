
NOTES
---

What did i learn
---
- How to use index signatures for objects in TypeScript. Index signatures are used when you don't know the names of a type's properties ahead of time (in my case API response objects), but you do know the shape of the values. For example:

```ts
interface StringArray {
  [index: number]: string;
}
```

- `manifest.json` files. How to add a web app manifest, app icons and theme colors.

- how to open and close modals in React apps (specially when you have nested components. Prop drilling is not nice.)

- How to interface with TMDB API


Qs
- How to make sure we have a response from the API before looping over it? So that it doesn't give the error `undefined`.
  - Irrelevant, it was returning undefined because response was a string that we were trying to `map` over. Needed to be parsed as JSON
  - Use an `if () {}` block

- How to use `useContext` so that state is available to children components?
- How to pass methods and actions to children components?
- What component to add the modal to? What component will trigger the modal?
