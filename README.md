# Demo on how to force `.vue` extension with `eslint` in `vue-cli` project
* This is built on top of an empty Vue Cli 4.2.5 project with default config: `vue create yourProjectName --default`  

## How do I check if this repo actually forces .vue extension?
```shell
git clone https://github.com/3nuc/eslint-import && cd eslint-import && npm ci && npm run lint
```
You should get two eslint errors in `App.vue`. The repo intentionally holds code that fails linting to demonstrate that it actually works.


There are some random duplicated files in `./src/components` but that's 