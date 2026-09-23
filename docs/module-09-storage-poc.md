# Module 09 - AWS Storage Concepts and POC

## Objective

Understand AWS S3 storage concepts and create a Terraform-based storage proof of concept.

---

## Concept Checkpoint

| Topic | Status |
|--------|--------|
| S3 Buckets and Objects | Done |
| Storage Classes and Encryption | Done |
| IAM Based Access | Done |
| Blocking Public Access | Done |

---

## AWS S3 Concepts

### Bucket

A bucket is a container used to store objects in Amazon S3.

### Object

Objects are files stored within an S3 bucket.

### Storage Classes

- Standard
- Intelligent-Tiering
- Standard-IA
- Glacier

### Security

- IAM-based access control
- Block Public Access
- Encryption at rest

---

## Terraform POC

Created:

```text
infrastructure/s3-bucket.tf
```

Resource:

```text
aws_s3_bucket
```

---

## Upload/List Service Design

Upload Service:
- Upload file to S3 bucket.

List Service:
- Retrieve available objects.

---

## Security Considerations

- Use IAM roles instead of access keys.
- Enable bucket encryption.
- Enable Block Public Access.
- Follow least privilege access principle.

---

## Evidence

- Reviewed AWS S3 concepts.
- Created Terraform S3 bucket configuration.
- Reviewed bucket security settings.
- Documented storage architecture.

---

## Status

Completed