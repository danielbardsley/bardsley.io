resource "aws_s3_bucket" "bardsley_io_s3" {
  bucket = "bardsley-io"

  tags = {
    Name        = "bardsley-io"
    Environment = "Production"
  }
}

resource "aws_s3_bucket_policy" "cdn_cf_policy" {
  bucket = aws_s3_bucket.bardsley_io_s3.id
  policy = data.aws_iam_policy_document.cdn_cf_policy_document.json
}

data "aws_iam_policy_document" "cdn_cf_policy_document" {
  statement {
    sid = "1"
    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.oai.iam_arn]
    }

    actions = [
      "s3:GetObject"
    ]

    resources = [
      "${aws_s3_bucket.bardsley_io_s3.arn}/*"
    ]
  }
}