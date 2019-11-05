# The Root Schema Schema

```
PermissionToStart.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                     |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | -------------------------------------------------------------- |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [PermissionToStart.schema.json](PermissionToStart.schema.json) |

# The Root Schema Properties

| Property                    | Type     | Required     | Nullable | Defined by                                 |
| --------------------------- | -------- | ------------ | -------- | ------------------------------------------ |
| [application](#application) | `object` | **Required** | No       | The Root Schema (this schema)              |
| [meta](#meta)               | `object` | **Required** | No       | The Root Schema (this schema)              |
| `*`                         | any      | Additional   | Yes      | this schema _allows_ additional properties |

## application

### The Application Schema

`application`

- is **required**
- type: `object`
- defined in this schema

### application Type

`object` with following properties:

| Property                    | Type    | Required     | Default |
| --------------------------- | ------- | ------------ | ------- |
| `agreeTerms`                | boolean | **Required** | `false` |
| `bankAccountName`           | string  | **Required** | `""`    |
| `bankAccountNumber`         | string  | **Required** | `""`    |
| `bankAccountsortCode`       | string  | **Required** | `""`    |
| `buildingSocietyNumber`     | string  | **Required** | `""`    |
| `hasStatutoryPermissions`   | string  | **Required** | `""`    |
| `onBehalfOfPartnership`     | boolean | **Required** | `false` |
| `paymentReference`          | string  | **Required** | `""`    |
| `permissions`               | array   | **Required** |         |
| `proposedChanges`           | string  | **Required** | `""`    |
| `securedPartnershipFunding` | string  | **Required** | `""`    |
| `signatory1`                | string  | **Required** | `""`    |
| `signatory2`                | string  | **Required** | `""`    |
| `signatory3`                | string  | **Required** | `""`    |
| `terms1`                    | boolean | **Required** | `false` |
| `terms2`                    | boolean | **Required** | `false` |
| `terms3`                    | boolean | **Required** | `false` |
| `terms4`                    | boolean | **Required** | `false` |
| `terms5`                    | boolean | **Required** | `false` |
| `terms6`                    | boolean | **Required** | `false` |
| `termsPersonName`           | string  | **Required** | `""`    |
| `termsPersonOrganisation`   | string  | **Required** | `""`    |
| `termsPersonPosition`       | string  | **Required** | `""`    |
| `willAdvertise`             | string  | **Required** | `""`    |

#### agreeTerms

##### The Agreeterms Schema

`agreeTerms`

- is **required**
- type: `boolean`
- default: `false`

##### agreeTerms Type

`boolean`

##### agreeTerms Example

```json
true
```

#### bankAccountName

##### The Bankaccountname Schema

`bankAccountName`

- is **required**
- type: `string`
- default: `""`

##### bankAccountName Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [free text](<https://regexr.com/?expression=%5E(.*)%24&text=free%20text>)

##### bankAccountName Example

```json
free text
```

#### bankAccountNumber

##### The Bankaccountnumber Schema

`bankAccountNumber`

- is **required**
- type: `string`
- default: `""`

##### bankAccountNumber Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [12345678](<https://regexr.com/?expression=%5E(.*)%24&text=12345678>)

##### bankAccountNumber Example

```json
12345678
```

#### bankAccountsortCode

##### The Bankaccountsortcode Schema

`bankAccountsortCode`

- is **required**
- type: `string`
- default: `""`

##### bankAccountsortCode Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [12345678](<https://regexr.com/?expression=%5E(.*)%24&text=12345678>)

##### bankAccountsortCode Example

```json
12345678
```

#### buildingSocietyNumber

##### The Buildingsocietynumber Schema

`buildingSocietyNumber`

- is **required**
- type: `string`
- default: `""`

##### buildingSocietyNumber Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [12345678](<https://regexr.com/?expression=%5E(.*)%24&text=12345678>)

##### buildingSocietyNumber Example

```json
12345678
```

#### hasStatutoryPermissions

##### The Has statutory permissions Schema

`hasStatutoryPermissions`

- is **required**
- type: `enum`
- default: `""`

The value of this property **must** be equal to one of the [known values below](#application-known-values).

##### hasStatutoryPermissions Known Values

| Value           | Description |
| --------------- | ----------- |
| `notApplicable` |             |
| `yes`           |             |
| `no`            |             |

##### hasStatutoryPermissions Example

```json
Yes
```

#### onBehalfOfPartnership

##### The Onbehalfofpartnership Schema

`onBehalfOfPartnership`

- is **required**
- type: `boolean`
- default: `false`

##### onBehalfOfPartnership Type

`boolean`

##### onBehalfOfPartnership Example

```json
true
```

#### paymentReference

##### The Payment reference Schema

`paymentReference`

- is **required**
- type: `string`
- default: `""`

##### paymentReference Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [free text](<https://regexr.com/?expression=%5E(.*)%24&text=free%20text>)

##### paymentReference Example

```json
free text
```

#### permissions

##### The Permissions Schema

`permissions`

- is **required**
- type: `object[]`

##### permissions Type

Array type: `object[]`

All items must be of the type: `object`, nullable, with following properties:

| Property          | Type   | Required     | Default |
| ----------------- | ------ | ------------ | ------- |
| `anticipatedDate` | string | **Required** | `""`    |
| `permissionType`  | string | **Required** | `""`    |
| `receivedDate`    | string | **Required** | `""`    |

#### anticipatedDate

##### The Anticipated date Schema

`anticipatedDate`

- is **required**
- type: `string`
- default: `""`

##### anticipatedDate Type

`string`

All instances must conform to this regular expression

```regex
^\d\d\d\d-\d\d-\d\d$
```

- test example: [2019-01-01](https://regexr.com/?expression=%5E%5Cd%5Cd%5Cd%5Cd-%5Cd%5Cd-%5Cd%5Cd%24&text=2019-01-01)

##### anticipatedDate Example

```json
2019 - 01 - 01
```

#### permissionType

##### The Permissiontype Schema

`permissionType`

- is **required**
- type: `string`
- default: `""`

##### permissionType Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [free text](<https://regexr.com/?expression=%5E(.*)%24&text=free%20text>)

##### permissionType Example

```json
free text
```

#### receivedDate

##### The Received date Schema

`receivedDate`

- is **required**
- type: `string`
- default: `""`

##### receivedDate Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example:
  [^\d\d\d\d-\d\d-\d\d\$](<https://regexr.com/?expression=%5E(.*)%24&text=%5E%5Cd%5Cd%5Cd%5Cd-%5Cd%5Cd-%5Cd%5Cd%24>)

##### receivedDate Example

```json
^\d\d\d\d-\d\d-\d\d$
```

#### proposedChanges

##### The Proposedchanges Schema

`proposedChanges`

- is **required**
- type: `string`
- default: `""`

##### proposedChanges Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [freeText](<https://regexr.com/?expression=%5E(.*)%24&text=freeText>)

##### proposedChanges Example

```json
freeText
```

#### securedPartnershipFunding

##### The Securedpartnershipfunding Schema

`securedPartnershipFunding`

- is **required**
- type: `string`
- default: `""`

##### securedPartnershipFunding Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Yes](<https://regexr.com/?expression=%5E(.*)%24&text=Yes>)

##### securedPartnershipFunding Example

```json
Yes
```

#### signatory1

##### The Signatory1 Schema

`signatory1`

- is **required**
- type: `string`
- default: `""`

##### signatory1 Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Jane](<https://regexr.com/?expression=%5E(.*)%24&text=Jane>)

##### signatory1 Example

```json
Jane
```

#### signatory2

##### The Signatory2 Schema

`signatory2`

- is **required**
- type: `string`
- default: `""`

##### signatory2 Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [John](<https://regexr.com/?expression=%5E(.*)%24&text=John>)

##### signatory2 Example

```json
John
```

#### signatory3

##### The Signatory3 Schema

`signatory3`

- is **required**
- type: `string`
- default: `""`

##### signatory3 Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [David](<https://regexr.com/?expression=%5E(.*)%24&text=David>)

##### signatory3 Example

```json
David
```

#### terms1

##### The Terms1 Schema

`terms1`

- is **required**
- type: `boolean`
- default: `false`

##### terms1 Type

`boolean`

##### terms1 Example

```json
true
```

#### terms2

##### The Terms2 Schema

`terms2`

- is **required**
- type: `boolean`
- default: `false`

##### terms2 Type

`boolean`

##### terms2 Example

```json
true
```

#### terms3

##### The Terms3 Schema

`terms3`

- is **required**
- type: `boolean`
- default: `false`

##### terms3 Type

`boolean`

##### terms3 Example

```json
true
```

#### terms4

##### The Terms4 Schema

`terms4`

- is **required**
- type: `boolean`
- default: `false`

##### terms4 Type

`boolean`

##### terms4 Example

```json
true
```

#### terms5

##### The Terms5 Schema

`terms5`

- is **required**
- type: `boolean`
- default: `false`

##### terms5 Type

`boolean`

##### terms5 Example

```json
true
```

#### terms6

##### The Terms6 Schema

`terms6`

- is **required**
- type: `boolean`
- default: `false`

##### terms6 Type

`boolean`

##### terms6 Example

```json
true
```

#### termsPersonName

##### The Terms person name Schema

`termsPersonName`

- is **required**
- type: `string`
- default: `""`

##### termsPersonName Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Jane](<https://regexr.com/?expression=%5E(.*)%24&text=Jane>)

##### termsPersonName Example

```json
Jane
```

#### termsPersonOrganisation

##### The Terms person organisation Schema

`termsPersonOrganisation`

- is **required**
- type: `string`
- default: `""`

##### termsPersonOrganisation Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [foo charity](<https://regexr.com/?expression=%5E(.*)%24&text=foo%20charity>)

##### termsPersonOrganisation Example

```json
foo charity
```

#### termsPersonPosition

##### The Terms person position Schema

`termsPersonPosition`

- is **required**
- type: `string`
- default: `""`

##### termsPersonPosition Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [free text](<https://regexr.com/?expression=%5E(.*)%24&text=free%20text>)

##### termsPersonPosition Example

```json
free text
```

#### willAdvertise

##### The Will advertise Schema

`willAdvertise`

- is **required**
- type: `enum`
- default: `""`

The value of this property **must** be equal to one of the [known values below](#application-known-values).

##### willAdvertise Known Values

| Value           | Description |
| --------------- | ----------- |
| `notApplicable` |             |
| `yes`           |             |
| `no`            |             |

##### willAdvertise Example

```json
notApplicable
```

## meta

### The Meta Schema

`meta`

- is **required**
- type: `object`
- defined in this schema

### meta Type

`object` with following properties:

| Property        | Type   | Required     | Default |
| --------------- | ------ | ------------ | ------- |
| `applicationId` | string | **Required** | `""`    |
| `commitId`      | string | **Required** | `""`    |
| `environment`   | string | **Required** | `""`    |
| `form`          | string | **Required** | `""`    |
| `locale`        | string | **Required** | `""`    |
| `schemaVersion` | string | **Required** | `""`    |
| `startedAt`     | string | **Required** | `""`    |
| `username`      | string | **Required** | `""`    |

#### applicationId

##### The Applicationid Schema

`applicationId`

- is **required**
- type: `string`
- default: `""`

##### applicationId Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example:
  [9453d770-e450-11e9-b3b6-212ded63c337](<https://regexr.com/?expression=%5E(.*)%24&text=9453d770-e450-11e9-b3b6-212ded63c337>)

##### applicationId Example

```json
9453d770-e450-11e9-b3b6-212ded63c337
```

#### commitId

##### The Commitid Schema

`commitId`

- is **required**
- type: `string`
- default: `""`

##### commitId Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example:
  [b4ecf18eae01d34b296e9388f387cc42bf7c0f93](<https://regexr.com/?expression=%5E(.*)%24&text=b4ecf18eae01d34b296e9388f387cc42bf7c0f93>)

##### commitId Example

```json
b4ecf18eae01d34b296e9388f387cc42bf7c0f93
```

#### environment

##### The Environment Schema

`environment`

- is **required**
- type: `string`
- default: `""`

##### environment Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [production](<https://regexr.com/?expression=%5E(.*)%24&text=production>)

##### environment Example

```json
production
```

#### form

##### The Form Schema

`form`

- is **required**
- type: `string`
- default: `""`

##### form Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Permission-to-start](<https://regexr.com/?expression=%5E(.*)%24&text=Permission-to-start>)

##### form Example

```json
Permission - to - start
```

#### locale

##### The Locale Schema

`locale`

- is **required**
- type: `string`
- default: `""`

##### locale Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [en](<https://regexr.com/?expression=%5E(.*)%24&text=en>)

##### locale Example

```json
en
```

#### schemaVersion

##### The Schemaversion Schema

`schemaVersion`

- is **required**
- type: `string`
- default: `""`

##### schemaVersion Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [v1.x](<https://regexr.com/?expression=%5E(.*)%24&text=v1.x>)

##### schemaVersion Example

```json
v1.x
```

#### startedAt

##### The Started at Schema

`startedAt`

- is **required**
- type: `string`
- default: `""`

##### startedAt Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example:
  [2019-05-17T15:34:13.000Z](<https://regexr.com/?expression=%5E(.*)%24&text=2019-05-17T15%3A34%3A13.000Z>)

##### startedAt Example

```json
2019-05-17T15:34:13.000Z
```

#### username

##### The Username Schema

`username`

- is **required**
- type: `string`
- default: `""`

##### username Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [example@example.com](<https://regexr.com/?expression=%5E(.*)%24&text=example%40example.com>)

##### username Example

```json
example@example.com
```
