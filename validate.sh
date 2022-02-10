
#!/bin/sh

npx concurrently \
  --kill-others-on-fail \
  --prefix "[{name}]" \
  --names "test,lint,typecheck,build" \
  --prefix-colors "bgRed.bold.white,bgGreen.bold.white,bgBlue.bold.white,bgMagenta.bold.white" \
    "yarn test --silent -- --watch=false" \
    "yarn lint --silent" \
    "yarn prettier --silent" \
    "yarn typecheck --silent" \
    "yarn build --silent"