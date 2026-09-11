# Module 08 - AWS Identity and Access Concepts

## Objective

Understand AWS Identity and Access Management (IAM) concepts and how authentication and authorization are implemented securely in cloud environments.

---

## Concept Checkpoint

| Topic | Developer Status | Mentor Sign-off |
|---------|---------|---------|
| IAM Users, Roles, Policies and Trust Relationships | Done |
| OIDC/Federation and Short-Lived Credentials | Pending |
| Least Privilege and Avoiding Long-Lived Access Keys | Pending |

---

## IAM Concepts

### IAM Users

IAM users represent individual identities that can sign in and access AWS resources.

Examples:
- Developers
- Admin

### IAM Roles

IAM roles provide temporary permissions and can be assumed by:

- New Roles

### IAM Policies

Policies define permissions using JSON documents.

Example permissions:
- New Policies

---

## Trust Relationships

Trust policies define who can assume a role.

Examples:

- EC2 instance assuming a role
- Lambda function assuming a role
- GitHub Actions using OIDC to assume AWS role

---

## OIDC and Federation

OIDC enables authentication without storing long-lived credentials.

Benefits:

- Improved security
- Temporary credentials
- Easier integration with CI/CD platforms

Example:

GitHub Actions → OIDC → AWS IAM Role

---

## Least Privilege Principle

Grant only the permissions required to perform a task.

Good Practice:
- Allow specific actions
- Restrict resource access
- Review permissions regularly

Avoid:
- AdministratorAccess for all users
- Long-lived access keys
- Unused permissions

---

## Security Best Practices

- Use IAM Roles instead of access keys.
- Enable Multi-Factor Authentication (MFA).
- Follow least privilege.
- Rotate credentials regularly.
- Monitor IAM activity using CloudTrail.

---