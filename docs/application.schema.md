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

| Property                   | Type        | Required     | Default |
| -------------------------- | ----------- | ------------ | ------- |
| `authorisedSignatoryEmail` | string      | **Required** | `""`    |
| `authorisedSignatoryName`  | string      | **Required** | `""`    |
| `authorisedSignatoryPhone` | string      | **Required** | `""`    |
| `authorisedSignatoryRole`  | string      | **Required** | `""`    |
| `charityNumber`            | null,string | Optional     | `null`  |
| `charityNumberNi`          | null,string | Optional     | `null`  |
| `companyNumber`            | string      | Optional     | `""`    |
| `mainContactAddress`       | object      | **Required** |         |
| `mainContactDateOfBirth`   | string      | **Required** | `""`    |
| `mainContactEmail`         | string      | **Required** | `""`    |
| `mainContactName`          | string      | **Required** | `""`    |
| `mainContactPhone`         | string      | **Required** | `""`    |
| `organisationAddress`      | object      | **Required** |         |
| `organisationId`           | string      | **Required** | `""`    |
| `organisationType`         | string      | **Required** | `""`    |
| `projectAddress`           | object      | **Required** |         |
| `projectAvailable`         | string      | **Required** | `""`    |
| `projectCommunity`         | string      | **Required** | `""`    |
| `projectDateRange`         | object      | **Required** |         |
| `projectDifference`        | string      | **Required** | `""`    |
| `projectName`              | string      | **Required** | `""`    |
| `projectOrgBestPlace`      | string      | **Required** | `""`    |
| `projectOutcome1`          | string      | **Required** | `""`    |
| `projectOutcome2`          | string,null | Optional     | `""`    |
| `projectOutcome3`          | string,null | Optional     | `""`    |
| `projectOutcome4`          | string,null | Optional     | `""`    |
| `projectOutcome5`          | string,null | Optional     | `""`    |
| `projectOutcome6`          | string,null | Optional     | `""`    |
| `projectOutcome7`          | string,null | Optional     | `""`    |
| `projectOutcome8`          | string,null | Optional     | `""`    |
| `projectOutcome9`          | string,null | Optional     | `null`  |
| `projectTotalCosts`        | integer     | **Required** | `0`     |
| `yourIdeaProject`          | string      | **Required** | `""`    |

#### authorisedSignatoryEmail

##### Authorised Signatory Email

`authorisedSignatoryEmail`

- is **required**
- type: `string`
- default: `""`

##### authorisedSignatoryEmail Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [jane@example.com](<https://regexr.com/?expression=%5E(.*)%24&text=jane%40example.com>)

##### authorisedSignatoryEmail Example

```json
jane@example.com
```

#### authorisedSignatoryName

##### Authorised Signatory Name

`authorisedSignatoryName`

- is **required**
- type: `string`
- default: `""`

##### authorisedSignatoryName Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Jane Doe](<https://regexr.com/?expression=%5E(.*)%24&text=Jane%20Doe>)

##### authorisedSignatoryName Example

```json
Jane Doe
```

#### authorisedSignatoryPhone

##### Authorised Signatory Phone

`authorisedSignatoryPhone`

- is **required**
- type: `string`
- default: `""`

##### authorisedSignatoryPhone Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [07777 777777](<https://regexr.com/?expression=%5E(.*)%24&text=07777%20777777>)

##### authorisedSignatoryPhone Example

```json
07777 777777
```

#### authorisedSignatoryRole

##### The Authorisedsignatoryrole Schema

`authorisedSignatoryRole`

- is **required**
- type: `string`
- default: `""`

##### authorisedSignatoryRole Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [trustee](<https://regexr.com/?expression=%5E(.*)%24&text=trustee>)

##### authorisedSignatoryRole Example

```json
trustee
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

#### mainContactAddress

##### Main Contact Address

`mainContactAddress`

- is **required**
- type: `object`

##### mainContactAddress Type

`object` with following properties:

| Property   | Type   | Required     | Default |
| ---------- | ------ | ------------ | ------- |
| `county`   | string | **Required** | `""`    |
| `line1`    | string | **Required** | `""`    |
| `postcode` | string | **Required** | `""`    |
| `townCity` | string | **Required** | `""`    |

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

#### organisationAddress

##### The Organisationaddress Schema

`organisationAddress`

- is **required**
- type: `object`

##### organisationAddress Type

`object` with following properties:

| Property   | Type   | Required     | Default |
| ---------- | ------ | ------------ | ------- |
| `county`   | string | **Required** | `""`    |
| `line1`    | string | **Required** | `""`    |
| `postcode` | string | **Required** | `""`    |
| `townCity` | string | **Required** | `""`    |

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
^(.*)$
```

- test example:
  [c23e12e0-e69e-11e9-aaf2-2514879727cc](<https://regexr.com/?expression=%5E(.*)%24&text=c23e12e0-e69e-11e9-aaf2-2514879727cc>)

##### organisationId Example

```json
c23e12e0-e69e-11e9-aaf2-2514879727cc
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
not-for-profit-company
```

#### projectAddress

##### The Projectaddress Schema

`projectAddress`

- is **required**
- type: `object`

##### projectAddress Type

`object` with following properties:

| Property          | Type   | Required     | Default |
| ----------------- | ------ | ------------ | ------- |
| `county`          | string | **Required** | `""`    |
| `line1`           | string | **Required** | `""`    |
| `projectPostcode` | string | **Required** | `""`    |
| `townCity`        | string | **Required** | `""`    |

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

#### projectTotalCosts

##### project total cost (in £)

`projectTotalCosts`

- is **required**
- type: `integer`
- default: `0`

##### projectTotalCosts Type

`integer`

##### projectTotalCosts Example

```json
20000
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
^(.*)$
```

- test example:
  [9453d770-e450-11e9-b3b6-212ded63c337](<https://regexr.com/?expression=%5E(.*)%24&text=9453d770-e450-11e9-b3b6-212ded63c337>)

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