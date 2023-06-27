npm i nx -g

# Create a new workspace
nx init

# Create a new application NextJs
npx nx generate @nx/next:application bmsapp --directory=apps --no-appDir --e2eTestRunner=none --style=scss --unitTestRunner=none --no-interactive

# nx g @nx/reaxt:component --name=board --project=board --directory=board --style=scss --export
# nx g @nx/next:page --name=board --project=board --directory=board --style=scss --export

# nx g @nx/next:app --name=ebsgbms --style=scss --linter=eslint --unitTestRunner=jest --e2eTestRunner=cypress --tags=scope:board --directory=board --routing --strict



