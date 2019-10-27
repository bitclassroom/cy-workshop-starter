// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
}

// cypress/plugins/index.js
module.exports = (on, config) => {
    on('task', require('@cypress/code-coverage/task'))
}
