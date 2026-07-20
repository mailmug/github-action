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

1. Create a [MailMug](https://mailmug.net) account.
2. Create an [API key](https://mailmug.net/admin/my-profile) in your MailMug account.
3. Go to your GitHub repository: **Settings → Secrets and variables → Actions**.
4. Add the API key as a repository secret named `MAILMUG_API_KEY`.


## Features

* Inspect application emails
* Test email delivery in CI/CD
* Check recipients, subjects, and content
* Prevent accidental emails to real users

## License

MIT
