---
title: 2 - app folder layout
sidebar_position: 2
---
# App Layout

Now we have a basic application ready for customization! Lets dive into the folder layout of our new app:

*[send-token example](https://github.com/cosmology-tech/create-cosmos-app/tree/main/examples/send-tokens)*
```bash
.                                   
  ├── components/      # Contains the ui components logic (buttons, widgets, navbar, etc)
      ├── wallet.tsx   # wallet component
  ├── config/          # General app configuration 
  ├── pages/           # Web-app pages
      ├── _app.tsx     # setup global app (wallet router, toast, etc.).
      ├── index.tsx    # home page of web-app
  ├── public/          # Images, fonts, and content consumed by UI
  └── styles/          # CSS & SCSS files for making your app beautiful
  ├── next.config.js   # Configuration file for Next.Js apps. 
  ├── package.json/    # node modules dependency list. 
  ├── tsconfig.json/   # Typescript config file. 
```

You may choose whichever folder structure works best for you during customization.

## Packages
**Packages are bundles of code that are installed by developers and provide independent functions to Node based applications.** An app often has many packages, either imported from itself directly, or using `npm` or `yarn`.  Packages are good if your are building an app or multiple apps that may need to use the same logic.

**Up next we talk about `cosmjs`, and how it serves applications and its users.**