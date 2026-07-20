const core = require('@actions/core');

async function run() {
    try {
        const apiKey = core.getInput('api-key', { required: true });
        const inbox = core.getInput('inbox', { required: true });
        const subject = core.getInput('subject');

        const response = await fetch(
            `https://mailmug.net/api/inboxes/${inbox}/emails?per_page=1&page=1`,
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Accept': 'application/json',
                },
            }
        );

        if (!response.ok) {
            throw new Error(`MailMug API error: ${response.status}`);
        }

        const data = await response.json();
        const emails = data.data || [];

        core.info(`Found ${emails.length} email(s).`);

        if (emails.length === 0) {
            core.setFailed('No emails found in the MailMug inbox.');
            return;
        }

        if (subject) {
            const email = emails.find(
                (email) => email.subject === subject
            );

            if (!email) {
                core.setFailed(
                    `Email with subject "${subject}" was not found.`
                );
                return;
            }
            core.info(`Email found: "${subject}"`);
        }

        core.info('MailMug email check completed successfully.');
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
