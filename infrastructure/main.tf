terraform {
  required_version = ">= 1.0"
}

provider "aws" {
  region = var.aws_region
}

resource "aws_vpc" "onboarding_vpc" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "onboarding-vpc"
    Environment = "learning"
  }
}