# Liquid docs

[![Join us on GitHub discussions](https://img.shields.io/badge/Join%20us-on%20GitHub%20discussions-blue?style=flat&color=0F69AF)](https://github.com/emdgroup-liquid/liquid/discussions)
[![Join us on Teams](https://img.shields.io/badge/Join%20us-on%20Teams-blue?style=flat&color=503291)](https://teams.microsoft.com/l/channel/19%3aeae3b35b0cbf42659e45c2b5592e0c0e%40thread.tacv2/General?groupId=88f23881-53e2-4a99-ad5c-8188c1087bbf&tenantId=db76fb59-a377-4120-bc54-59dead7d39c9)

**Liquid docs** is a starter project based on [11ty](https://www.11ty.dev/) and [Stencil](https://stenciljs.com/) and acts as the foundation for the [Liquid Oxygen documentation](https://emdgroup-liquid.github.io/liquid/).

## Getting started

1. **Clone this repository**:

```shell
git clone git@github.com:emdgroup-liquid/liquid-docs.git
```

2. **Install dependencies**:

```shell
npm install
```

3. **Start up the development server**:

```shell
npm start
```

4. **Edit markdown pages** in `src/docs/pages`. Make sure to supply [front matter data](https://www.11ty.dev/docs/data-frontmatter/) at the top of your markdown file. Here is an example:

```md
---
eleventyNavigation:
  key: Getting started
  parent: Introduction
  order: 1
layout: layout.njk
title: Getting started
permalink: introduction/getting-started/
tags:
  - installation
  - setup
---
```

5. **Modify** the functionality of the docs:
  - by editing existing or adding new components inside the folder `src/docs/components`. For instance, if you want to change the logo and the heading in the page header or if you want to replace / remove the GitHub button, head over to `src/docs/components/docs-topbar.tsx` and change it according to your requirements.
  - by configuring existing or adding new 11ty [plugins](https://www.11ty.dev/docs/plugins/), [shortcodes](https://www.11ty.dev/docs/shortcodes/), [filters](https://www.11ty.dev/docs/filters/) etc. in `.eleventy.js`.

6. **Deploy** the `dist-docs` directory to the hosting environment of your choice.

## Links

- [Feature backlog](https://github.com/emdgroup-liquid/liquid-docs/issues?q=is%3Aissue+sort%3Areactions-%2B1-desc+label%3Afeature+-label%3Adone+)

## Contributing

If you'd like to contribute to the project, please read our [code of conduct](https://github.com/emdgroup-liquid/liquid/blob/develop/CODE_OF_CONDUCT.md). Then proceed to the [contributing docs](CONTRIBUTING.md).

## License

This project is available under a [custom license](https://emdgroup-liquid.github.io/liquid/legal/license/) which restricts its usage to applications created for or by Merck KGaA, Darmstadt, Germany as well as its vendors.
