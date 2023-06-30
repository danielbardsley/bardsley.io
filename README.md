## bardsley.io

A simple single page application for showcasing my resume. Hosted at bardsley.io. In addition to the SPA the repository
contains the Terraform required to build and deploy the application to S3, front it with a CloudFront cache and
expose to the internet via Route53. The site is deployed via GitLab workflows with the Terraform backed end utilizing
Terraform Cloud services.

## Preview
![Preview](https://bardsley.io/images/screenshot.jpg)

## How to use
1. Clone/Download the repo.
2. Run  ``` npm install ```.
3. Change the values in ```src/resumeData.js``` to suit your use-case.
4. Run ```npm start``` to spin the up the local dev server port 3000.(http://localhost:3000).
5. Make required changes in ```src/resumeData.js``` to suit your needs.

## Credit
This project was forked and enhanced from the excellent original work of [Rahul Bhatia](https://rbhatia46.github.io/).

