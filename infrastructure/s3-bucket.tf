resource "aws_s3_bucket" "onboarding_bucket" {
  bucket = "saravanakumaar-onboarding-storage"

  tags = {
    Name        = "Onboarding Storage"
    Environment = "Learning"
  }
}