# CLINQ Bridge Boilerplate Repository

Use this repository to bootstrap a new CLINQ Bridge.

## Step by step guide

1. Clone this repository (`git clone git@github.com:sipgate/clinq-bridge-boilerplate.git clinq-bridge-mycrm`)
2. Run `rm -rf .git && git init` to initialize your new git repository.
3. Run `npm i` to install all dependencies.
4. Start the bridge with `npm start`.
5. Edit the `index.ts` file and implement the method stubs.
6. Test your implementation (e.g. `curl -H "X-Provider-Key: abcdef123456" -H "X-Provider-URL: https://www.example.com" http://localhost:8080/contacts`).
7. Create a new Git repository (e.g. `clinq-bridge-mycrm`) and push your bridge.
8. [Contact](mailto:hello@clinq.com) us and tell us about your shiny new CLINQ-Bridge.

## Coding style and linting

[Prettier](https://prettier.io/) and [TSLint](https://palantir.github.io/tslint/) are included by default. Feel free to remove these tools (or certain rules) if you don't like them.

## License

[Apache 2.0](LICENSE)
