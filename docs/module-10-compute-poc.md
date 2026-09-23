# Module 10 - AWS Compute Concepts and POC

## Objective

Understand AWS compute services and create a Terraform-based EC2 proof of concept.

## Concept Checkpoint

| Topic | Status |
|--------|--------|
| EC2 Fundamentals | Done |
| Instance Types | Done |
| AMI Concepts | Done |
| Security Groups | Done |

## AWS Compute Concepts

### EC2

Amazon EC2 provides scalable virtual servers in the cloud.

### AMI

Amazon Machine Images provide templates used to launch EC2 instances.

### Instance Types

- t2.micro
- t3.micro
- t3.small

### Security Groups

Security groups act as virtual firewalls controlling inbound and outbound traffic.

## Terraform POC

Created:

```text
infrastructure/ec2-instance.tf
```

Resource:

```text
aws_instance
```

## Security Considerations

- Use least privilege IAM access.
- Restrict inbound ports.
- Use security groups.
- Enable monitoring and logging.

## Evidence

- Reviewed AWS EC2 concepts.
- Created Terraform EC2 configuration.
- Executed terraform plan.
- Reviewed instance deployment workflow.

## Status

Completed