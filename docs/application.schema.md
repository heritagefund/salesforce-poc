# 3-10k application Schema

```
application.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                         |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | -------------------------------------------------- |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [application.schema.json](application.schema.json) |

# 3-10k application Properties

| Property                    | Type     | Required     | Nullable | Defined by                                 |
| --------------------------- | -------- | ------------ | -------- | ------------------------------------------ |
| [application](#application) | `object` | **Required** | No       | 3-10k application (this schema)            |
| [meta](#meta)               | `object` | **Required** | No       | 3-10k application (this schema)            |
| `*`                         | any      | Additional   | Yes      | this schema _allows_ additional properties |

## application

### The Application Schema

`application`

- is **required**
- type: `object`
- defined in this schema

### application Type

`object` with following properties:

| Property                        | Type         | Required     | Default |
| ------------------------------- | ------------ | ------------ | ------- |
| `authorisedSignatoryOneDetails` | object       | **Required** |         |
| `authorisedSignatoryTwoDetails` | object       | **Required** |         |
| `cashContributions`             | array        | Optional     |         |
| `charityNumber`                 | null,string  | Optional     | `null`  |
| `charityNumberNi`               | null,string  | Optional     | `null`  |
| `companyNumber`                 | string       | Optional     | `""`    |
| `evidenceOfSupport`             | array        | Optional     |         |
| `mainContactAddress`            | object       | **Required** |         |
| `mainContactDateOfBirth`        | string       | **Required** | `""`    |
| `mainContactEmail`              | string       | **Required** | `""`    |
| `mainContactName`               | string       | **Required** | `""`    |
| `mainContactPhone`              | string       | **Required** | `""`    |
| `nonCashContributions`          | array        | Optional     |         |
| `organisationAddress`           | object       | **Required** |         |
| `organisationId`                | string       | **Required** | `""`    |
| `organisationName`              | string       | **Required** | `""`    |
| `organisationType`              | string       | **Required** | `""`    |
| `projectAddress`                | object       | **Required** |         |
| `projectAvailable`              | string       | **Required** | `""`    |
| `projectCommunity`              | string       | **Required** | `""`    |
| `projectCosts`                  | array        | Optional     |         |
| `projectDateRange`              | object       | **Required** |         |
| `projectDifference`             | string       | **Required** | `""`    |
| `projectName`                   | string       | **Required** | `""`    |
| `projectOrgBestPlace`           | string       | **Required** | `""`    |
| `projectOutcome1`               | string       | **Required** | `""`    |
| `projectOutcome2`               | string,null  | Optional     | `""`    |
| `projectOutcome2Checked`        | boolean,null | Optional     |         |
| `projectOutcome3`               | string,null  | Optional     | `""`    |
| `projectOutcome4`               | string,null  | Optional     | `""`    |
| `projectOutcome4Checked`        | boolean,null | Optional     |         |
| `projectOutcome5`               | string,null  | Optional     | `""`    |
| `projectOutcome5Checked`        | boolean,null | Optional     |         |
| `projectOutcome6`               | string,null  | Optional     | `""`    |
| `projectOutcome6Checked`        | boolean,null | Optional     |         |
| `projectOutcome7`               | string,null  | Optional     | `""`    |
| `projectOutcome7Checked`        | boolean,null | Optional     |         |
| `projectOutcome8`               | string,null  | Optional     | `""`    |
| `projectOutcome8Checked`        | boolean,null | Optional     |         |
| `projectOutcome9`               | string,null  | Optional     | `null`  |
| `projectOutcome9Checked`        | boolean,null | Optional     |         |
| `projectVolunteers`             | array        | Optional     |         |
| `yourIdeaProject`               | string       | **Required** | `""`    |

#### authorisedSignatoryOneDetails

`authorisedSignatoryOneDetails`

- is **required**
- type: `object`

##### authorisedSignatoryOneDetails Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `email`  | string | **Required** |
| `name`   | string | **Required** |
| `phone`  | string | **Required** |
| `role`   | string | **Required** |

#### email

`email`

- is **required**
- type: `string`

##### email Type

`string`

#### name

`name`

- is **required**
- type: `string`

##### name Type

`string`

#### phone

`phone`

- is **required**
- type: `string`

##### phone Type

`string`

#### role

`role`

- is **required**
- type: `string`

##### role Type

`string`

#### authorisedSignatoryTwoDetails

`authorisedSignatoryTwoDetails`

- is **required**
- type: `object`

##### authorisedSignatoryTwoDetails Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `email`  | string | **Required** |
| `name`   | string | **Required** |
| `phone`  | string | **Required** |
| `role`   | string | **Required** |

#### email

`email`

- is **required**
- type: `string`

##### email Type

`string`

#### name

`name`

- is **required**
- type: `string`

##### name Type

`string`

#### phone

`phone`

- is **required**
- type: `string`

##### phone Type

`string`

#### role

`role`

- is **required**
- type: `string`

##### role Type

`string`

#### cashContributions

##### The Cashcontributions Schema

`cashContributions`

- is optional
- type: `object[]`

##### cashContributions Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property      | Type    | Required     | Default |
| ------------- | ------- | ------------ | ------- |
| `amount`      | integer | **Required** | `0`     |
| `description` | string  | **Required** | `""`    |
| `id`          | string  | **Required** | `""`    |
| `secured`     | string  | **Required** | `""`    |

#### amount

##### The Amount Schema

`amount`

- is **required**
- type: `integer`
- default: `0`

##### amount Type

`integer`

##### amount Example

```json
1000
```

#### description

##### The Description Schema

`description`

- is **required**
- type: `string`
- default: `""`

##### description Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [free text](<https://regexr.com/?expression=%5E(.*)%24&text=free%20text>)

##### description Example

```json
free text
```

#### id

##### cash contribution ID (UUID)

`id`

- is **required**
- type: `string`
- default: `""`

##### id Type

`string`

All instances must conform to this regular expression

```regex
^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
```

- test example:
  [c23e12e0-e69e-11e9-aaf2-2514879727cc](https://regexr.com/?expression=%5E%5B0-9a-f%5D%7B8%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B12%7D%24&text=c23e12e0-e69e-11e9-aaf2-2514879727cc)

##### id Example

```json
c23e12e0-e69e-11e9-aaf2-2514879727cc
```

#### secured

##### The Secured Schema

`secured`

- is **required**
- type: `enum`
- default: `""`

The value of this property **must** be equal to one of the [known values below](#application-known-values).

##### secured Known Values

| Value                 | Description |
| --------------------- | ----------- |
| `yes-with-evidence`   |             |
| `yes-no-evidence-yet` |             |
| `no`                  |             |
| `not-sure`            |             |

##### secured Example

```json
yes-with-evidence
```

#### charityNumber

##### Charity Number

`charityNumber`

- is optional
- type: `string`
- default: `null`

##### charityNumber Type

`string`, nullable

##### charityNumber Examples

```json

```

```json
123456789
```

#### charityNumberNi

##### Northern Island Charity Number

`charityNumberNi`

- is optional
- type: `string`
- default: `null`

##### charityNumberNi Type

`string`, nullable

##### charityNumberNi Examples

```json

```

```json
123456789
```

#### companyNumber

##### The Companynumber Schema

`companyNumber`

- is optional
- type: `string`
- default: `""`

##### companyNumber Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [123456789](<https://regexr.com/?expression=%5E(.*)%24&text=123456789>)

##### companyNumber Example

```json
123456789
```

#### evidenceOfSupport

##### The Evidenceofsupport Schema

`evidenceOfSupport`

- is optional
- type: `object[]`

##### evidenceOfSupport Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property      | Type   | Required     | Default |
| ------------- | ------ | ------------ | ------- |
| `description` | string | **Required** | `""`    |

#### description

##### The Description Schema

`description`

- is **required**
- type: `string`
- default: `""`

##### description Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [free text](<https://regexr.com/?expression=%5E(.*)%24&text=free%20text>)

##### description Example

```json
free text
```

#### mainContactAddress

##### Main Contact Address

`mainContactAddress`

- is **required**
- type: `object`

##### mainContactAddress Type

`object` with following properties:

| Property   | Type        | Required     | Default |
| ---------- | ----------- | ------------ | ------- |
| `county`   | string      | **Required** | `""`    |
| `line1`    | string      | **Required** | `""`    |
| `line2`    | string,null | Optional     | `""`    |
| `line3`    | string,null | Optional     | `""`    |
| `postcode` | string      | **Required** | `""`    |
| `townCity` | string      | **Required** | `""`    |

#### county

##### Address County

`county`

- is **required**
- type: `string`
- default: `""`

##### county Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Berkshire](<https://regexr.com/?expression=%5E(.*)%24&text=Berkshire>)

##### county Example

```json
Berkshire
```

#### line1

##### Address Line 1

`line1`

- is **required**
- type: `string`
- default: `""`

##### line1 Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [41465 Bashirian Oval](<https://regexr.com/?expression=%5E(.*)%24&text=41465%20Bashirian%20Oval>)

##### line1 Example

```json
41465 Bashirian Oval
```

#### line2

##### The Line2 Schema

`line2`

- is optional
- type: `string`
- default: `""`

##### line2 Type

`string`, nullable

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Foo Street](<https://regexr.com/?expression=%5E(.*)%24&text=Foo%20Street>)

##### line2 Example

```json
Foo Street
```

#### line3

##### The Line3 Schema

`line3`

- is optional
- type: `string`
- default: `""`

##### line3 Type

`string`, nullable

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Foo lane](<https://regexr.com/?expression=%5E(.*)%24&text=Foo%20lane>)

##### line3 Example

```json
Foo lane
```

#### postcode

##### Postcode

`postcode`

- is **required**
- type: `string`
- default: `""`

##### postcode Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [B15 1TR](<https://regexr.com/?expression=%5E(.*)%24&text=B15%201TR>)

##### postcode Example

```json
B15 1TR
```

#### townCity

##### Address town or city

`townCity`

- is **required**
- type: `string`
- default: `""`

##### townCity Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Friesenhaven](<https://regexr.com/?expression=%5E(.*)%24&text=Friesenhaven>)

##### townCity Example

```json
Friesenhaven
```

#### mainContactDateOfBirth

##### The Main contact date of birth Schema

`mainContactDateOfBirth`

- is **required**
- type: `string`
- default: `""`

##### mainContactDateOfBirth Type

`string`

All instances must conform to this regular expression

```regex
^\d\d\d\d-\d\d-\d\d$
```

- test example: [1975-10-12](https://regexr.com/?expression=%5E%5Cd%5Cd%5Cd%5Cd-%5Cd%5Cd-%5Cd%5Cd%24&text=1975-10-12)

##### mainContactDateOfBirth Example

```json
1975 - 10 - 12
```

#### mainContactEmail

##### The Maincontactemail Schema

`mainContactEmail`

- is **required**
- type: `string`
- default: `""`

##### mainContactEmail Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Lizzie87@example.com](<https://regexr.com/?expression=%5E(.*)%24&text=Lizzie87%40example.com>)

##### mainContactEmail Example

```json
Lizzie87@example.com
```

#### mainContactName

##### Main contact name

`mainContactName`

- is **required**
- type: `string`
- default: `""`

##### mainContactName Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Nelda](<https://regexr.com/?expression=%5E(.*)%24&text=Nelda>)

##### mainContactName Example

```json
Nelda
```

#### mainContactPhone

##### The Maincontactphone Schema

`mainContactPhone`

- is **required**
- type: `string`
- default: `""`

##### mainContactPhone Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [0345 4 10 20 30](<https://regexr.com/?expression=%5E(.*)%24&text=0345%204%2010%2020%2030>)

##### mainContactPhone Example

```json
0345 4 10 20 30
```

#### nonCashContributions

##### The Noncashcontributions Schema

`nonCashContributions`

- is optional
- type: `object[]`

##### nonCashContributions Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property         | Type    | Required     | Default |
| ---------------- | ------- | ------------ | ------- |
| `description`    | string  | **Required** | `""`    |
| `estimatedValue` | integer | **Required** | `0`     |
| `secured`        | string  | **Required** | `""`    |

#### description

##### The Description Schema

`description`

- is **required**
- type: `string`
- default: `""`

##### description Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Free text](<https://regexr.com/?expression=%5E(.*)%24&text=Free%20text>)

##### description Example

```json
Free text
```

#### estimatedValue

##### The Estimatedvalue Schema

`estimatedValue`

- is **required**
- type: `integer`
- default: `0`

##### estimatedValue Type

`integer`

##### estimatedValue Example

```json
1000
```

#### secured

##### The Secured Schema

`secured`

- is **required**
- type: `enum`
- default: `""`

The value of this property **must** be equal to one of the [known values below](#application-known-values).

##### secured Known Values

| Value                 | Description |
| --------------------- | ----------- |
| `yes-with-evidence`   |             |
| `yes-no-evidence-yet` |             |
| `no`                  |             |
| `not-sure`            |             |

##### secured Example

```json
yes-with-evidence
```

#### organisationAddress

##### The Organisationaddress Schema

`organisationAddress`

- is **required**
- type: `object`

##### organisationAddress Type

`object` with following properties:

| Property   | Type        | Required     | Default |
| ---------- | ----------- | ------------ | ------- |
| `county`   | string      | **Required** | `""`    |
| `line1`    | string      | **Required** | `""`    |
| `line2`    | string,null | Optional     | `""`    |
| `line3`    | string,null | Optional     | `""`    |
| `postcode` | string      | **Required** | `""`    |
| `townCity` | string      | **Required** | `""`    |

#### county

##### The County Schema

`county`

- is **required**
- type: `string`
- default: `""`

##### county Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Berkshire](<https://regexr.com/?expression=%5E(.*)%24&text=Berkshire>)

##### county Example

```json
Berkshire
```

#### line1

##### The Line1 Schema

`line1`

- is **required**
- type: `string`
- default: `""`

##### line1 Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [82553 Demarco Rapid](<https://regexr.com/?expression=%5E(.*)%24&text=82553%20Demarco%20Rapid>)

##### line1 Example

```json
82553 Demarco Rapid
```

#### line2

##### The Line2 Schema

`line2`

- is optional
- type: `string`
- default: `""`

##### line2 Type

`string`, nullable

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Foo Street](<https://regexr.com/?expression=%5E(.*)%24&text=Foo%20Street>)

##### line2 Example

```json
Foo Street
```

#### line3

##### The Line3 Schema

`line3`

- is optional
- type: `string`
- default: `""`

##### line3 Type

`string`, nullable

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Foo lane](<https://regexr.com/?expression=%5E(.*)%24&text=Foo%20lane>)

##### line3 Example

```json
Foo lane
```

#### postcode

##### The Postcode Schema

`postcode`

- is **required**
- type: `string`
- default: `""`

##### postcode Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [B15 1TR](<https://regexr.com/?expression=%5E(.*)%24&text=B15%201TR>)

##### postcode Example

```json
B15 1TR
```

#### townCity

##### The Towncity Schema

`townCity`

- is **required**
- type: `string`
- default: `""`

##### townCity Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Waelchitown](<https://regexr.com/?expression=%5E(.*)%24&text=Waelchitown>)

##### townCity Example

```json
Waelchitown
```

#### organisationId

##### Organisation ID (UUID)

`organisationId`

- is **required**
- type: `string`
- default: `""`

##### organisationId Type

`string`

All instances must conform to this regular expression

```regex
^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
```

- test example:
  [c23e12e0-e69e-11e9-aaf2-2514879727cc](https://regexr.com/?expression=%5E%5B0-9a-f%5D%7B8%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B12%7D%24&text=c23e12e0-e69e-11e9-aaf2-2514879727cc)

##### organisationId Example

```json
c23e12e0-e69e-11e9-aaf2-2514879727cc
```

#### organisationName

##### Organisation name

`organisationName`

- is **required**
- type: `string`
- default: `""`

##### organisationName Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Acme corp](<https://regexr.com/?expression=%5E(.*)%24&text=Acme%20corp>)

##### organisationName Example

```json
Acme corp
```

#### organisationType

##### organisation type

`organisationType`

- is **required**
- type: `enum`
- default: `""`

The value of this property **must** be equal to one of the [known values below](#application-known-values).

##### organisationType Known Values

| Value                                              | Description |
| -------------------------------------------------- | ----------- |
| `local-authority`                                  |             |
| `other-public-sector-organisation`                 |             |
| `registered-charity`                               |             |
| `registered-company-or-community-interest-company` |             |
| `faith-based-or-church-organisation`               |             |
| `community-or-voluntary-group`                     |             |
| `private-owner-of-heritage`                        |             |

##### organisationType Example

```json
local - authority
```

#### projectAddress

##### The Projectaddress Schema

`projectAddress`

- is **required**
- type: `object`

##### projectAddress Type

`object` with following properties:

| Property          | Type        | Required     | Default |
| ----------------- | ----------- | ------------ | ------- |
| `county`          | string      | **Required** | `""`    |
| `line1`           | string      | **Required** | `""`    |
| `line2`           | string,null | Optional     | `""`    |
| `line3`           | string,null | Optional     | `""`    |
| `projectPostcode` | string      | **Required** | `""`    |
| `townCity`        | string      | **Required** | `""`    |

#### county

##### The County Schema

`county`

- is **required**
- type: `string`
- default: `""`

##### county Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Berkshire](<https://regexr.com/?expression=%5E(.*)%24&text=Berkshire>)

##### county Example

```json
Berkshire
```

#### line1

##### The Line1 Schema

`line1`

- is **required**
- type: `string`
- default: `""`

##### line1 Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [82553 Demarco Rapid](<https://regexr.com/?expression=%5E(.*)%24&text=82553%20Demarco%20Rapid>)

##### line1 Example

```json
82553 Demarco Rapid
```

#### line2

##### The Line2 Schema

`line2`

- is optional
- type: `string`
- default: `""`

##### line2 Type

`string`, nullable

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Foo Street](<https://regexr.com/?expression=%5E(.*)%24&text=Foo%20Street>)

##### line2 Example

```json
Foo Street
```

#### line3

##### The Line3 Schema

`line3`

- is optional
- type: `string`
- default: `""`

##### line3 Type

`string`, nullable

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Foo lane](<https://regexr.com/?expression=%5E(.*)%24&text=Foo%20lane>)

##### line3 Example

```json
Foo lane
```

#### projectPostcode

##### The Projectpostcode Schema

`projectPostcode`

- is **required**
- type: `string`
- default: `""`

##### projectPostcode Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [B15 1TR](<https://regexr.com/?expression=%5E(.*)%24&text=B15%201TR>)

##### projectPostcode Example

```json
B15 1TR
```

#### townCity

##### The Towncity Schema

`townCity`

- is **required**
- type: `string`
- default: `""`

##### townCity Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Waelchitown](<https://regexr.com/?expression=%5E(.*)%24&text=Waelchitown>)

##### townCity Example

```json
Waelchitown
```

#### projectAvailable

##### The Projectavailable Schema

`projectAvailable`

- is **required**
- type: `string`
- default: `""`

##### projectAvailable Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example:
  [Even more more more text](<https://regexr.com/?expression=%5E(.*)%24&text=Even%20more%20more%20more%20text>)

##### projectAvailable Example

```json
Even more more more text
```

#### projectCommunity

##### The Projectcommunity Schema

`projectCommunity`

- is **required**
- type: `string`
- default: `""`

##### projectCommunity Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Even more free text](<https://regexr.com/?expression=%5E(.*)%24&text=Even%20more%20free%20text>)

##### projectCommunity Example

```json
Even more free text
```

#### projectCosts

##### The Projectcosts Schema

`projectCosts`

- is optional
- type: `object[]`

##### projectCosts Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property          | Type    | Required     | Default |
| ----------------- | ------- | ------------ | ------- |
| `costAmount`      | integer | **Required** | `0`     |
| `costDescription` | string  | **Required** | `""`    |
| `costId`          | string  | **Required** |         |
| `costType`        | string  | **Required** | `""`    |

#### costAmount

##### The Costamount Schema

`costAmount`

- is **required**
- type: `integer`
- default: `0`

##### costAmount Type

`integer`

##### costAmount Example

```json
1000
```

#### costDescription

##### The Costdescription Schema

`costDescription`

- is **required**
- type: `string`
- default: `""`

##### costDescription Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Free text](<https://regexr.com/?expression=%5E(.*)%24&text=Free%20text>)

##### costDescription Example

```json
Free text
```

#### costId

##### The CostId Schema

Cost ID in UUID format

`costId`

- is **required**
- type: `string`

##### costId Type

`string`

All instances must conform to this regular expression

```regex
^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
```

- test example:
  [b181327d-0809-46b1-9dc1-8e7e4d965454](https://regexr.com/?expression=%5E%5B0-9a-f%5D%7B8%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B12%7D%24&text=b181327d-0809-46b1-9dc1-8e7e4d965454)

##### costId Example

```json
b181327d-0809-46b1-9dc1-8e7e4d965454
```

#### costType

##### The Costtype Schema

`costType`

- is **required**
- type: `enum`
- default: `""`

The value of this property **must** be equal to one of the [known values below](#application-known-values).

##### costType Known Values

| Value                                                  | Description |
| ------------------------------------------------------ | ----------- |
| `new-staff`                                            |             |
| `professional-fees`                                    |             |
| `recruitment`                                          |             |
| `purchase-price-of-heritage-items`                     |             |
| `repair-and-conservation-work`                         |             |
| `event-costs`                                          |             |
| `digital-outputs`                                      |             |
| `equipment-and-materials-including-learning-materials` |             |
| `training-for-staff`                                   |             |
| `training-for-volunteers`                              |             |
| `travel-for-staff`                                     |             |
| `travel-for-volunteers`                                |             |
| `expenses-for-staff`                                   |             |
| `expenses-for-volunteers`                              |             |
| `other`                                                |             |
| `publicity-and-promotion`                              |             |
| `evaluation`                                           |             |
| `contingency`                                          |             |

##### costType Example

```json
new-staff
```

#### projectDateRange

##### The Projectdaterange Schema

`projectDateRange`

- is **required**
- type: `object`

##### projectDateRange Type

`object` with following properties:

| Property    | Type   | Required     | Default |
| ----------- | ------ | ------------ | ------- |
| `endDate`   | string | **Required** | `""`    |
| `startDate` | string | **Required** | `""`    |

#### endDate

##### Project end date

`endDate`

- is **required**
- type: `string`
- default: `""`

##### endDate Type

`string`

All instances must conform to this regular expression

```regex
^\d\d\d\d-\d\d-\d\d$
```

- test example: [2020-12-12](https://regexr.com/?expression=%5E%5Cd%5Cd%5Cd%5Cd-%5Cd%5Cd-%5Cd%5Cd%24&text=2020-12-12)

##### endDate Example

```json
2020 - 12 - 12
```

#### startDate

##### Project Start Date

`startDate`

- is **required**
- type: `string`
- default: `""`

##### startDate Type

`string`

All instances must conform to this regular expression

```regex
^\d\d\d\d-\d\d-\d\d$
```

- test example: [2020-12-12](https://regexr.com/?expression=%5E%5Cd%5Cd%5Cd%5Cd-%5Cd%5Cd-%5Cd%5Cd%24&text=2020-12-12)

##### startDate Example

```json
2020 - 12 - 12
```

#### projectDifference

##### The Projectdifference Schema

`projectDifference`

- is **required**
- type: `string`
- default: `""`

##### projectDifference Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [More free text](<https://regexr.com/?expression=%5E(.*)%24&text=More%20free%20text>)

##### projectDifference Example

```json
More free text
```

#### projectName

##### The Projectname Schema

`projectName`

- is **required**
- type: `string`
- default: `""`

##### projectName Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [my project](<https://regexr.com/?expression=%5E(.*)%24&text=my%20project>)

##### projectName Example

```json
my project
```

#### projectOrgBestPlace

##### The Projectorgbestplace Schema

`projectOrgBestPlace`

- is **required**
- type: `string`
- default: `""`

##### projectOrgBestPlace Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example:
  [Even more and more free text](<https://regexr.com/?expression=%5E(.*)%24&text=Even%20more%20and%20more%20free%20text>)

##### projectOrgBestPlace Example

```json
Even more and more free text
```

#### projectOutcome1

##### The Projectoutcome1 Schema

`projectOutcome1`

- is **required**
- type: `string`
- default: `""`

##### projectOutcome1 Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example:
  [More and more and more free text](<https://regexr.com/?expression=%5E(.*)%24&text=More%20and%20more%20and%20more%20free%20text>)

##### projectOutcome1 Example

```json
More and more and more free text
```

#### projectOutcome2

##### The Projectoutcome2 Schema

`projectOutcome2`

- is optional
- type: `string`
- default: `""`

##### projectOutcome2 Type

`string`, nullable

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example:
  [More and more and more free text](<https://regexr.com/?expression=%5E(.*)%24&text=More%20and%20more%20and%20more%20free%20text>)

##### projectOutcome2 Example

```json
More and more and more free text
```

#### projectOutcome2Checked

`projectOutcome2Checked`

- is optional
- type: `boolean`

##### projectOutcome2Checked Type

`boolean` , nullable

#### projectOutcome3

##### The Projectoutcome3 Schema

`projectOutcome3`

- is optional
- type: `string`
- default: `""`

##### projectOutcome3 Type

`string`, nullable

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example:
  [More and more and more free text](<https://regexr.com/?expression=%5E(.*)%24&text=More%20and%20more%20and%20more%20free%20text>)

##### projectOutcome3 Example

```json
More and more and more free text
```

#### projectOutcome4

##### The Projectoutcome4 Schema

`projectOutcome4`

- is optional
- type: `string`
- default: `""`

##### projectOutcome4 Type

`string`, nullable

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example:
  [More and more and more free text](<https://regexr.com/?expression=%5E(.*)%24&text=More%20and%20more%20and%20more%20free%20text>)

##### projectOutcome4 Example

```json
More and more and more free text
```

#### projectOutcome4Checked

`projectOutcome4Checked`

- is optional
- type: `boolean`

##### projectOutcome4Checked Type

`boolean` , nullable

#### projectOutcome5

##### The Projectoutcome5 Schema

`projectOutcome5`

- is optional
- type: `string`
- default: `""`

##### projectOutcome5 Type

`string`, nullable

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example:
  [More and more and more free text](<https://regexr.com/?expression=%5E(.*)%24&text=More%20and%20more%20and%20more%20free%20text>)

##### projectOutcome5 Example

```json
More and more and more free text
```

#### projectOutcome5Checked

`projectOutcome5Checked`

- is optional
- type: `boolean`

##### projectOutcome5Checked Type

`boolean` , nullable

#### projectOutcome6

##### The Projectoutcome6 Schema

`projectOutcome6`

- is optional
- type: `string`
- default: `""`

##### projectOutcome6 Type

`string`, nullable

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example:
  [More and more and more free text](<https://regexr.com/?expression=%5E(.*)%24&text=More%20and%20more%20and%20more%20free%20text>)

##### projectOutcome6 Example

```json
More and more and more free text
```

#### projectOutcome6Checked

`projectOutcome6Checked`

- is optional
- type: `boolean`

##### projectOutcome6Checked Type

`boolean` , nullable

#### projectOutcome7

##### The Projectoutcome7 Schema

`projectOutcome7`

- is optional
- type: `string`
- default: `""`

##### projectOutcome7 Type

`string`, nullable

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example:
  [More and more and more free text](<https://regexr.com/?expression=%5E(.*)%24&text=More%20and%20more%20and%20more%20free%20text>)

##### projectOutcome7 Example

```json
More and more and more free text
```

#### projectOutcome7Checked

`projectOutcome7Checked`

- is optional
- type: `boolean`

##### projectOutcome7Checked Type

`boolean` , nullable

#### projectOutcome8

##### The Projectoutcome8 Schema

`projectOutcome8`

- is optional
- type: `string`
- default: `""`

##### projectOutcome8 Type

`string`, nullable

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example:
  [More and more and more free text](<https://regexr.com/?expression=%5E(.*)%24&text=More%20and%20more%20and%20more%20free%20text>)

##### projectOutcome8 Example

```json
More and more and more free text
```

#### projectOutcome8Checked

`projectOutcome8Checked`

- is optional
- type: `boolean`

##### projectOutcome8Checked Type

`boolean` , nullable

#### projectOutcome9

##### The Projectoutcome9 Schema

`projectOutcome9`

- is optional
- type: `string`
- default: `null`

##### projectOutcome9 Type

`string`, nullable

##### projectOutcome9 Example

```json

```

#### projectOutcome9Checked

`projectOutcome9Checked`

- is optional
- type: `boolean`

##### projectOutcome9Checked Type

`boolean` , nullable

#### projectVolunteers

##### The Projectvolunteers Schema

`projectVolunteers`

- is optional
- type: `object[]`

##### projectVolunteers Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property      | Type    | Required     | Default |
| ------------- | ------- | ------------ | ------- |
| `description` | string  | **Required** | `""`    |
| `hours`       | integer | **Required** | `0`     |

#### description

##### The Description Schema

`description`

- is **required**
- type: `string`
- default: `""`

##### description Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [free text](<https://regexr.com/?expression=%5E(.*)%24&text=free%20text>)

##### description Example

```json
free text
```

#### hours

##### The Hours Schema

`hours`

- is **required**
- type: `integer`
- default: `0`

##### hours Type

`integer`

##### hours Example

```json
10
```

#### yourIdeaProject

##### The Yourideaproject Schema

`yourIdeaProject`

- is **required**
- type: `string`
- default: `""`

##### yourIdeaProject Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Free text…](<https://regexr.com/?expression=%5E(.*)%24&text=Free%20text%E2%80%A6>)

##### yourIdeaProject Example

```json
Free text…
```

## meta

### metadata

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
^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
```

- test example:
  [9453d770-e450-11e9-b3b6-212ded63c337](https://regexr.com/?expression=%5E%5B0-9a-f%5D%7B8%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B12%7D%24&text=9453d770-e450-11e9-b3b6-212ded63c337)

##### applicationId Example

```json
9453d770-e450-11e9-b3b6-212ded63c337
```

#### commitId

##### git commit hash of application

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

##### form type

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

- test example: [3-10k-grant](<https://regexr.com/?expression=%5E(.*)%24&text=3-10k-grant>)

##### form Example

```json
3-10k-grant
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

##### The Startedat Schema

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
