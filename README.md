# react-native-uzpay

click and payme

## Installation

```sh
npm install react-native-uzpay
yarn add react-native-uzpay
```

## Usage

```js
import { UzPay } from 'react-native-uzpay';

// ...

const Payment = ()=>{
    return(
        <UzPay
        amount = {1000} // so'm
        type = "click" // click yoki payme
        params = {{
            //  payme
            merchantId: '',
            merchantUserId: ''
            //  payme

            //  click
            merchantId: '',
            serviceId: '',
            transactionParam: '',
            //  click
        }} />
    )
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
