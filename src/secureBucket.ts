import * as cdk from 'aws-cdk-lib';
import { aws_s3 as s3 } from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * Props for SecureBucket
 */
export interface SecureBucketProps {
  /**
   * Optional bucket name. If not provided, a unique name will be generated.
   */
  readonly bucketName?: string;
}

/**
 * A secure bucket
 */
export class SecureBucket extends Construct {
  public readonly bucket: s3.IBucket;

  constructor(scope: Construct, id: string, props: SecureBucketProps) {
    super(scope, id);

    this.bucket = new s3.Bucket(this, 'SecureBucket', {
      bucketName: props.bucketName,
      encryption: s3.BucketEncryption.S3_MANAGED,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      blockPublicAccess: new s3.BlockPublicAccess({
        blockPublicAcls: true,
        blockPublicPolicy: true,
        ignorePublicAcls: true,
        restrictPublicBuckets: true,
      }),
    });
  }
}