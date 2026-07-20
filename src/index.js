const core = require('@actions/core');

async function run() {
    try {
        const apiKey = core.getInput('api-key', { required: true });

        const response = await fetch('https://mailmug.net/api/emails', {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`MailMug API error: ${response.status}`);
        }

        const data = await response.json();

        core.info(`MailMug email check completed.`);

        if (!data.data || data.data.length === 0) {
            core.setFailed('No emails found in MailMug.');
            return;
        }

        core.info(`Found ${data.data.length} email(s).`);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();