# Module 12 - GitHub Actions CD Pipeline

## Objective

Create a controlled Continuous Deployment pipeline with separate build and deployment stages, artifact promotion, environment configuration, and secure deployment practices.

## Concept Checkpoint

| Topic | Developer Status | Mentor Sign-off |
|---|---|---|
| CI vs CD and artifact promotion | Done |
| GitHub environments and approvals | Done |
| Environment-specific configuration | Done |
| Secure AWS authentication and OIDC | Done |

## CD Pipeline Architecture

The deployment workflow follows:

Source Code
→ Build
→ Package
→ Artifact
→ Learning Environment
→ Deployment

## Build Job

The build job performs:

- Repository checkout
- Build validation
- Deployment package creation
- Artifact upload

## Deploy Job

The deployment job:

- Runs after successful build
- Downloads the deployment artifact
- Uses the GitHub learning environment
- Validates the deployment package
- Executes deployment validation

## Artifact Promotion

The build job generates a deployment artifact.

The same artifact is passed to the deployment job instead of rebuilding the application during deployment.

## Environment

GitHub Environment:

learning

The learning environment represents the approved onboarding deployment environment.

## Secure AWS Authentication

AWS deployments should use GitHub Actions OIDC with an AWS IAM Role.

OAuth/OIDC-based temporary credentials avoid storing long-lived AWS access keys in the repository.

Conceptual flow:

GitHub Actions
→ GitHub OIDC Token
→ AWS IAM Role
→ Temporary AWS Credentials
→ AWS Resources

## Security Practices

- No credentials committed to GitHub.
- No AWS access keys included in workflow files.
- Environment-specific configuration should be protected.
- Least privilege IAM access should be provided.
- Deployment approval should be configured where available.

## Practical Validation

- Created GitHub Actions CD workflow.
- Configured separate build and deploy jobs.
- Configured deployment artifact promotion.
- Configured GitHub learning environment.
- Executed CD workflow successfully.
- Verified Build and Deploy stages.

## Evidence

- Successful GitHub Actions workflow run.
- Build job completed successfully.
- Deployment artifact generated successfully.
- Deploy job completed successfully.
- GitHub learning environment configured.

## Status

Done