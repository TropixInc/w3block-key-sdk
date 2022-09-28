# W3block Key SDK 
## Installation

Create or edit the `.npmrc` file and enter the GitHub registry address

```
@tropixinc:registry=https://npm.pkg.github.com/tropixinc
```

Install the package with npm
```
npm install @w3block/sdk-key --save
```

Use the package in the project

```js
import 'dotenv/config'
import Api from '@tropixinc/w3block-key-sdk'

async function main() {

}

main().then(() => {
  console.log('script running with success')
})


```



## Generate Api from Swagger

`SWAGGER_JSON_PATH=http://localhost:6007/sdk-json npm run gen:api`
