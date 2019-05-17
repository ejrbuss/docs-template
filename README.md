# docs-template
`docs-template` is a generic website template for project docs. I use this repository to manage the core website features for other libraries I maintain (eg. [type-mark](https://ejrbuss.net/type-mark) and [Mekpie](https://ejrbuss.net/type-mark)). This website template makes creating docs sites faster and ensures that their look and feel is consistent.

For an example of what the docs sites produced by this template look like, head over to the [example page](https://ejrbuss.net/docs-template).

This website template is intended for personal use, it links to my personal website and includes branding and materials related to me. If you are interested in using this template for your own site, feel free, but be aware that the steps below will probably be insufficient, as you will need to change other files that for example link to my homepage.

## Modification Steps

When creating a new docs sits be sure to do all of the following steps:

1. Update `pages/index.json5`
2. Update `pages/index.md`
3. Update/remove `pages/api.json5` and `pages/api.md`
4. Add any other desired pages
5. Update `Vars.less` for site look and feel
6. Update `Vars.js` for site variables
7. Update `components/Logo.js`
8. Update `components/Places.js`
9. Replace `static/favicon.ico`
10. Test, build, and export
11. Add `.nojekyll`

## Testing

Start the site with
```
$ npm run dev
```

And in a separate terminal start the page builder
```
$ node ./lib/page-builder.js
```

## Building

Run the following commands. Because of the GitHub pages url prefix you will **not** be able to test the output folder with static hosting. 
```
$ npm run build
$ npm run export
$ mov out docs
```

## Contact

root@ejrbuss.net