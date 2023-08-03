npm i nx -g

# Create a new workspace

nx init

# Create a new application NextJs

npx nx generate @nx/next:application website --directory=apps --no-appDir --e2eTestRunner=none --style=scss --unitTestRunner=none --no-interactive

# Create a new React Component 
nx g @nx/reaxt:component --name=board --project=board --directory=board --style=scss --export

# nx g @nx/next:page --name=board --project=board --directory=board --style=scss --export

# nx g @nx/next:app --name=ebsgbms --style=scss --linter=eslint --unitTestRunner=jest --e2eTestRunner=cypress --tags=scope:board --directory=board --routing --strict

# Because we need a good intutive UI that will be appealing to the eye, we will use the following UI libraries

daisyui = to give us the ability to switch themes easily
checkout: https://daisyui.com/docs/themes/

bootstrap = to give us the ability to use the bootstrap components
tailwindcss = to give us the ability to use the tailwindcss components

== WE WILL BE USING JOTAI FOR STATE MANAGEMENT ==
npm i jotai
npm i jotai/utils
npm i jotai/query
npm i jotai/optics
npm i jotai/devtools
npm i jotai/undux
npm i jotai/zustand
npm i jotai/xstate
npm i jotai/immer
npm i jotai/async
npm i jotai/worker

# Created Libray for UI components
<!-- nx g @nx/react:lib bms-ui --directory=libs --style=scss --export -->

nx g @nx/react:component --name=button-ui --project=bms-ui --directory=buttons --style=scss --export --dry-run

# without dry-run
nx g @nx/react:component --name=button-ui --project=bms-ui --directory=buttons --style=scss --export
nx g @nx/react:component --name=add-box --project=bmsapp --directory=all --style=scss --export


I decided to add (NextTopLoader ) https://www.npmjs.com/package/nextjs-toploader
to add interractivity to the top when app is loading


# API Definition

/api/model
/api/model/create
/api/model/{id}
/api/model/{id}/update
/api/model/{id}/delete

# logs
/api/logs = list all logs (unsigned)
/api/logs/{id} = get log by id (unsigned)
/api/logs/{id}/update = update log by id (unsigned)
/api/logs/create = create log (unsigned)


# Push Notifications
https://www.npmjs.com/package/react-push-notification


cake

https://www.goodto.com/recipes/basic-cupcake-recipe
https://lianaskitchen.co.uk/cupcake-recipe/
https://www.allrecipes.com/recipe/157877/vanilla-cupcake/


# For google 2FA
https://github.com/yeojz/otplib/blob/master/README.md#google-authenticator
https://otplib.yeojz.dev/

# For QR Code Genrator
https://www.npmjs.com/package/qrcode.react


# Role based Menu Access
https://medium.com/@nikitinal.nal/next-js-with-postgresql-role-based-access-control-implementation-ca024fd6d471

# Redux Toolkit
https://www.youtube.com/watch?v=ss-_S1Vyxa0

# Document viewer 
https://codesandbox.io/s/docxtemplater-with-nextjs-o1nqo?file=/pages/index.js

# Currency Input Field
https://www.npmjs.com/package/react-currency-input-field


# https://preview.themeforest.net/item/bankco-tailwind-css-admin-templates/full_screen_preview/44959824?_ga=2.171827104.1210365981.1689914240-187394503.1687126359

# @tanstack/react-query
# Tanstack.com