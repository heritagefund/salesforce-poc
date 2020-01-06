# Completion Report Schema

```
CompletionReport.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                   |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ------------------------------------------------------------ |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [CompletionReport.schema.json](CompletionReport.schema.json) |

# Completion Report Properties

| Property                    | Type     | Required     | Nullable | Defined by                                 |
| --------------------------- | -------- | ------------ | -------- | ------------------------------------------ |
| [application](#application) | `object` | **Required** | No       | Completion Report (this schema)            |
| [meta](#meta)               | `object` | **Required** | No       | Completion Report (this schema)            |
| `*`                         | any      | Additional   | Yes      | this schema _allows_ additional properties |

## application

### The Application Schema

`application`

- is **required**
- type: `object`
- defined in this schema

### application Type

`object` with following properties:

| Property                     | Type        | Required     | Default |
| ---------------------------- | ----------- | ------------ | ------- |
| `changesToApprovedPurposes`  | array       | Optional     |         |
| `completedEvaluation`        | string      | **Required** | `""`    |
| `contributions`              | array       | Optional     |         |
| `explainSpendingChanges`     | string,null | Optional     | `""`    |
| `fundingAcknowledgement`     | string      | **Required** | `""`    |
| `howCostsSpent`              | array       | Optional     |         |
| `howProjectAcheivedOutcomes` | string      | **Required** | `""`    |
| `staff`                      | array       | Optional     |         |
| `staffLinked`                | string      | Optional     | `""`    |
| `summaryOfAcheivements`      | array       | **Required** |         |
| `totalCostsClaimed`          | integer     | Optional     |         |

#### changesToApprovedPurposes

##### The Changestoapprovedpurposes Schema

`changesToApprovedPurposes`

- is optional
- type: `object[]`

##### changesToApprovedPurposes Type

Array type: `object[]`

All items must be of the type: `object`, nullable, with following properties:

| Property              | Type   | Required     | Default |
| --------------------- | ------ | ------------ | ------- |
| `dateOfReply`         | string | **Required** | `""`    |
| `dateOfRequest`       | string | **Required** | `""`    |
| `descriptionOfChange` | string | **Required** | `""`    |
| `effectOfChange`      | string | **Required** | `""`    |

#### dateOfReply

##### The Date of reply Schema

`dateOfReply`

- is **required**
- type: `string`
- default: `""`

##### dateOfReply Type

`string`

All instances must conform to this regular expression

```regex
^\d\d\d\d-\d\d-\d\d$
```

- test example: [2019-01-01](https://regexr.com/?expression=%5E%5Cd%5Cd%5Cd%5Cd-%5Cd%5Cd-%5Cd%5Cd%24&text=2019-01-01)

##### dateOfReply Example

```json
2019 - 01 - 01
```

#### dateOfRequest

##### The Dateofrequest Schema

`dateOfRequest`

- is **required**
- type: `string`
- default: `""`

##### dateOfRequest Type

`string`

All instances must conform to this regular expression

```regex
^\d\d\d\d-\d\d-\d\d$
```

- test example: [2019-01-01](https://regexr.com/?expression=%5E%5Cd%5Cd%5Cd%5Cd-%5Cd%5Cd-%5Cd%5Cd%24&text=2019-01-01)

##### dateOfRequest Example

```json
2019 - 01 - 01
```

#### descriptionOfChange

##### The Descriptionofchange Schema

`descriptionOfChange`

- is **required**
- type: `string`
- default: `""`

##### descriptionOfChange Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Free text](<https://regexr.com/?expression=%5E(.*)%24&text=Free%20text>)

##### descriptionOfChange Example

```json
Free text
```

#### effectOfChange

##### The Effect of change Schema

`effectOfChange`

- is **required**
- type: `string`
- default: `""`

##### effectOfChange Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Free text](<https://regexr.com/?expression=%5E(.*)%24&text=Free%20text>)

##### effectOfChange Example

```json
Free text
```

#### completedEvaluation

##### The Completed evaluation Schema

`completedEvaluation`

- is **required**
- type: `enum`
- default: `""`

The value of this property **must** be equal to one of the [known values below](#application-known-values).

##### completedEvaluation Known Values

| Value           | Description |
| --------------- | ----------- |
| `notApplicable` |             |
| `yes`           |             |
| `no`            |             |

##### completedEvaluation Example

```json
Yes
```

#### contributions

##### The Contributions Schema

`contributions`

- is optional
- type: `object[]`

##### contributions Type

Array type: `object[]`

All items must be of the type: `object`, nullable, with following properties:

| Property             | Type    | Required     | Default |
| -------------------- | ------- | ------------ | ------- |
| `date`               | string  | **Required** | `""`    |
| `numberOfVolunteers` | integer | **Required** | `0`     |
| `taskDescription`    | string  | **Required** | `""`    |
| `volunteerHours`     | integer | **Required** | `0`     |

#### date

##### The Date Schema

`date`

- is **required**
- type: `string`
- default: `""`

##### date Type

`string`

All instances must conform to this regular expression

```regex
^\d\d\d\d-\d\d-\d\d$
```

- test example: [2019-01-01](https://regexr.com/?expression=%5E%5Cd%5Cd%5Cd%5Cd-%5Cd%5Cd-%5Cd%5Cd%24&text=2019-01-01)

##### date Example

```json
2019 - 01 - 01
```

#### numberOfVolunteers

##### The Numberofvolunteers Schema

`numberOfVolunteers`

- is **required**
- type: `integer`
- default: `0`

##### numberOfVolunteers Type

`integer`

##### numberOfVolunteers Example

```json
10
```

#### taskDescription

##### The Taskdescription Schema

`taskDescription`

- is **required**
- type: `string`
- default: `""`

##### taskDescription Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [free text](<https://regexr.com/?expression=%5E(.*)%24&text=free%20text>)

##### taskDescription Example

```json
free text
```

#### volunteerHours

##### The Volunteerhours Schema

`volunteerHours`

- is **required**
- type: `integer`
- default: `0`

##### volunteerHours Type

`integer`

##### volunteerHours Example

```json
2000
```

#### explainSpendingChanges

##### The Explainspendingchanges Schema

`explainSpendingChanges`

- is optional
- type: `string`
- default: `""`

##### explainSpendingChanges Type

`string`, nullable

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [free text](<https://regexr.com/?expression=%5E(.*)%24&text=free%20text>)

##### explainSpendingChanges Example

```json
free text
```

#### fundingAcknowledgement

##### The Funding acknowledgement Schema

Describe how you are acknowledging National Lottery players

`fundingAcknowledgement`

- is **required**
- type: `string`
- default: `""`

##### fundingAcknowledgement Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [free text](<https://regexr.com/?expression=%5E(.*)%24&text=free%20text>)

##### fundingAcknowledgement Example

```json
free text
```

#### howCostsSpent

##### The How costs spent Schema

`howCostsSpent`

- is optional
- type: `object[]`

##### howCostsSpent Type

Array type: `object[]`

All items must be of the type: `object`, nullable, with following properties:

| Property           | Type    | Required     | Default |
| ------------------ | ------- | ------------ | ------- |
| `costHeading`      | string  | **Required** | `""`    |
| `description`      | string  | **Required** | `""`    |
| `invoiceDate`      | string  | **Required** | `""`    |
| `invoiceReference` | string  | **Required** | `""`    |
| `projectCostId`    | string  | **Required** | `""`    |
| `totalCostClaimed` | integer | **Required** | `0`     |
| `totalInvoice`     | integer | **Required** | `0`     |

#### costHeading

##### The Costheading Schema

`costHeading`

- is **required**
- type: `enum`
- default: `""`

The value of this property **must** be equal to one of the [known values below](#application-known-values).

##### costHeading Known Values

| Value                                                  | Description |
| ------------------------------------------------------ | ----------- |
| `professional-fees`                                    |             |
| `new-staff-costs`                                      |             |
| `opening-up-work-surveys`                              |             |
| `capacity-building-activity`                           |             |
| `other-cost-development-phase`                         |             |
| `non-cash-contributions`                               |             |
| `volunteer-time`                                       |             |
| `purchase-price-heritage-items`                        |             |
| `repair-and-conservation-work`                         |             |
| `new-build-work`                                       |             |
| `digital-outputs`                                      |             |
| `equipment-and-materials-including-learning-materials` |             |
| `training-for-staff`                                   |             |
| `training-for-volunteers`                              |             |
| `travel-and-expenses-for-staff`                        |             |
| `travel-and-expenses-for-volunteers`                   |             |
| `expenses-for-staff`                                   |             |
| `expenses-for-volunteers`                              |             |
| `event-costs`                                          |             |
| `community-grants`                                     |             |
| `publicity-and-promotion`                              |             |
| `full-cost-recovery`                                   |             |
| `professional-fees-relating-to-any-of-the-above`       |             |
| `paid-training-placements`                             |             |
| `recruitment`                                          |             |
| `other`                                                |             |
| `evaluation`                                           |             |
| `contingency`                                          |             |

##### costHeading Example

```json
professional - fees
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

#### invoiceDate

##### The Invoicedate Schema

`invoiceDate`

- is **required**
- type: `string`
- default: `""`

##### invoiceDate Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [2019-01-01](<https://regexr.com/?expression=%5E(.*)%24&text=2019-01-01>)

##### invoiceDate Example

```json
2019 - 01 - 01
```

#### invoiceReference

##### The Invoicereference Schema

`invoiceReference`

- is **required**
- type: `string`
- default: `""`

##### invoiceReference Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [free text](<https://regexr.com/?expression=%5E(.*)%24&text=free%20text>)

##### invoiceReference Example

```json
free text
```

#### projectCostId

##### The projectCostId Schema

the associated project cost ID (UUID)

`projectCostId`

- is **required**
- type: `string`
- default: `""`

##### projectCostId Type

`string`

All instances must conform to this regular expression (test examples
[here](https://regexr.com/?expression=%5E%5B0-9a-f%5D%7B8%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B12%7D%24)):

```regex
^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
```

#### totalCostClaimed

##### The Totalcostclaimed Schema

`totalCostClaimed`

- is **required**
- type: `integer`
- default: `0`

##### totalCostClaimed Type

`integer`

##### totalCostClaimed Example

```json
2000
```

#### totalInvoice

##### The Totalinvoice Schema

`totalInvoice`

- is **required**
- type: `integer`
- default: `0`

##### totalInvoice Type

`integer`

##### totalInvoice Example

```json
1000
```

#### howProjectAcheivedOutcomes

##### The Howprojectacheivedoutcomes Schema

`howProjectAcheivedOutcomes`

- is **required**
- type: `string`
- default: `""`

##### howProjectAcheivedOutcomes Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Free text](<https://regexr.com/?expression=%5E(.*)%24&text=Free%20text>)

##### howProjectAcheivedOutcomes Example

```json
Free text
```

#### staff

##### The Staff Schema

`staff`

- is optional
- type: `object[]`

##### staff Type

Array type: `object[]`

All items must be of the type: `object`, nullable, with following properties:

| Property         | Type    | Required     | Default |
| ---------------- | ------- | ------------ | ------- |
| `dateAdvertised` | string  | **Required** | `""`    |
| `dateAppointed`  | string  | **Required** | `""`    |
| `post`           | string  | **Required** | `""`    |
| `salary`         | integer | **Required** | `0`     |

#### dateAdvertised

##### The Dateadvertised Schema

`dateAdvertised`

- is **required**
- type: `string`
- default: `""`

##### dateAdvertised Type

`string`

All instances must conform to this regular expression

```regex
^\d\d\d\d-\d\d-\d\d$
```

- test example: [2019-01-01](https://regexr.com/?expression=%5E%5Cd%5Cd%5Cd%5Cd-%5Cd%5Cd-%5Cd%5Cd%24&text=2019-01-01)

##### dateAdvertised Example

```json
2019 - 01 - 01
```

#### dateAppointed

##### The Dateappointed Schema

`dateAppointed`

- is **required**
- type: `string`
- default: `""`

##### dateAppointed Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [2019-01-01](<https://regexr.com/?expression=%5E(.*)%24&text=2019-01-01>)

##### dateAppointed Example

```json
2019 - 01 - 01
```

#### post

##### The Post Schema

`post`

- is **required**
- type: `string`
- default: `""`

##### post Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [free text](<https://regexr.com/?expression=%5E(.*)%24&text=free%20text>)

##### post Example

```json
free text
```

#### salary

##### The Salary Schema

`salary`

- is **required**
- type: `integer`
- default: `0`

##### salary Type

`integer`

##### salary Example

```json
10000
```

#### staffLinked

##### The Stafflinked Schema

`staffLinked`

- is optional
- type: `string`
- default: `""`

##### staffLinked Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Yes](<https://regexr.com/?expression=%5E(.*)%24&text=Yes>)

##### staffLinked Example

```json
Yes
```

#### summaryOfAcheivements

##### The Summary of acheivements Schema

`summaryOfAcheivements`

- is **required**
- type: `object[]`

##### summaryOfAcheivements Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property                | Type   | Required     | Default |
| ----------------------- | ------ | ------------ | ------- |
| `approvedPurpose`       | string | **Required** | `""`    |
| `summaryOfAcheivements` | string | **Required** | `""`    |

#### approvedPurpose

##### The Approvedpurpose Schema

`approvedPurpose`

- is **required**
- type: `string`
- default: `""`

##### approvedPurpose Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [Approved purpose 1](<https://regexr.com/?expression=%5E(.*)%24&text=Approved%20purpose%201>)

##### approvedPurpose Example

```json
Approved purpose 1
```

#### summaryOfAcheivements

##### The Summaryofacheivements Schema

`summaryOfAcheivements`

- is **required**
- type: `string`
- default: `""`

##### summaryOfAcheivements Type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example: [free text](<https://regexr.com/?expression=%5E(.*)%24&text=free%20text>)

##### summaryOfAcheivements Example

```json
free text
```

#### totalCostsClaimed

##### The total costs claimed Schema

Sum of total costs claimed

`totalCostsClaimed`

- is optional
- type: `integer`

##### totalCostsClaimed Type

`integer`

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

- test example: [completion-report](<https://regexr.com/?expression=%5E(.*)%24&text=completion-report>)

##### form Example

```json
completion - report
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
