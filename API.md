# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### SecureBucket <a name="cdk20.SecureBucket"></a>

A secure bucket.

#### Initializers <a name="cdk20.SecureBucket.Initializer"></a>

```typescript
import { SecureBucket } from 'cdk20'

new SecureBucket(scope: Construct, id: string, props: SecureBucketProps)
```

##### `scope`<sup>Required</sup> <a name="cdk20.SecureBucket.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk20.SecureBucket.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk20.SecureBucket.parameter.props"></a>

- *Type:* [`cdk20.SecureBucketProps`](#cdk20.SecureBucketProps)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="cdk20.SecureBucket.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* [`aws-cdk-lib.aws_s3.IBucket`](#aws-cdk-lib.aws_s3.IBucket)

---


## Structs <a name="Structs"></a>

### SecureBucketProps <a name="cdk20.SecureBucketProps"></a>

Props for SecureBucket.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { SecureBucketProps } from 'cdk20'

const secureBucketProps: SecureBucketProps = { ... }
```

##### `bucketName`<sup>Optional</sup> <a name="cdk20.SecureBucketProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* `string`

Optional bucket name.

If not provided, a unique name will be generated.

---



