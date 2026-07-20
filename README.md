# MailMug GitHub Action

Test and inspect application emails in GitHub Actions with MailMug SMTP Sandbox—without sending emails to real users.

## Usage

```yaml
name: Email Test

on:
  push:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Check emails with MailMug
        uses: mailmug/github-action@main
        with:
          api-key: ${{ secrets.MAILMUG_API_KEY }}
```

## Setup

1. Create a MailMug account.
2. Create an API key.
3. Add the API key to your GitHub repository secrets:

```text
MAILMUG_API_KEY
```

4. Use the MailMug Action in your GitHub Actions workflow.

## Features

* Inspect application emails
* Test email delivery in CI/CD
* Check recipients, subjects, and content
* Prevent accidental emails to real users

## License

MIT
