const core = require('@actions/core');
const git = require('../../core/git');
let commitGit = function () {
    let INSIGHT_BOT_USERNAME = process.env.INSIGHT_BOT_USERNAME || 'eplus-bot';
    let INSIGHT_BOT_EMAIL = process.env.INSIGHT_BOT_EMAIL || 'bot@eplus.dev';
    let commit = async function (message) {
        core.info(`Git Commit ${message}`)
        try {
            await git.commit(INSIGHT_BOT_USERNAME, INSIGHT_BOT_EMAIL, message);
        } catch (error) {
            core.info(error);
        }

    }
    return {
        commit: commit
    };
}();
module.exports = commitGit;