# CLINQ CRM-Bridge Boilerplate Repository

You can use this repository to bootstrap a new CLINQ CRM-Bridge.

## Step by step guide

1. Clone [this](https://github.com/sipgate/clinq-crm-bridge-boilerplate-typescript) repository.
2. Run `npm install` or `yarn` to install all dependencies.
3. Start the bridge with `npm start` or `yarn start`.
4. Edit the `index.js` file and implement the method stubs.
5. Test your implementation (e.g. `curl -H "Authorization: Bearer abcdef123456" http://localhost:8080/contacts`).
6. Make sure the Docker container is still working (`docker build -t clinq-crm-bridge . &&  docker run -p 8080:8080 clinq-crm-bridge`).
7. Create a new Git repository (e.g. `clinq-crm-bridge-salesforce`) and push your bridge.
8. [Contact](mailto:hello@clinq.com) us and tell us about your shiny new CLINQ-Bridge.
