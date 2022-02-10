
#!/bin/sh

npx concurrently \
  --kill-others-on-fail \
  --prefix "[{name}]" \
  --names "prettier,lint,typecheck,build" \
  --prefix-colors "bgRed.bold.white,bgGreen.bold.white,bgBlue.bold.white,bgMagenta.bold.white" \
    "yarn prettier --loglevel silent" \
    "yarn lint" \
    "yarn typecheck" \
    "yarn build" \
    