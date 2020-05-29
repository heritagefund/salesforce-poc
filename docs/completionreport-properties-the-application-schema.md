# The Application Schema Schema

```txt
#/properties/application#/properties/application
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                     |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [CompletionReport.schema.json\*](../false/CompletionReport.schema.json "open original schema") |

## application Type

`object` ([The Application Schema](completionreport-properties-the-application-schema.md))

# The Application Schema Properties

| Property                                                  | Type         | Required | Nullable       | Defined by                                                                                                                                                                                                                                                  |
| :-------------------------------------------------------- | ------------ | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [summaryOfAcheivements](#summaryOfAcheivements)           | `array`      | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-summary-of-acheivements-schema.md "\#/properties/application/properties/summaryOfAcheivements#/properties/application/properties/summaryOfAcheivements")              |
| [changesToApprovedPurposes](#changesToApprovedPurposes)   | `array`      | Optional | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-changestoapprovedpurposes-schema.md "\#/properties/application/properties/changesToApprovedPurposes#/properties/application/properties/changesToApprovedPurposes")    |
| [howProjectAcheivedOutcomes](#howProjectAcheivedOutcomes) | `string`     | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-howprojectacheivedoutcomes-schema.md "\#/properties/application/properties/howProjectAcheivedOutcomes#/properties/application/properties/howProjectAcheivedOutcomes") |
| [contributions](#contributions)                           | `array`      | Optional | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-contributions-schema.md "\#/properties/application/properties/contributions#/properties/application/properties/contributions")                                        |
| [staff](#staff)                                           | `array`      | Optional | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-staff-schema.md "\#/properties/application/properties/staff#/properties/application/properties/staff")                                                                |
| [staffLinked](#staffLinked)                               | `string`     | Optional | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-stafflinked-schema.md "\#/properties/application/properties/staffLinked#/properties/application/properties/staffLinked")                                              |
| [howCostsSpent](#howCostsSpent)                           | `array`      | Optional | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema.md "\#/properties/application/properties/howCostsSpent#/properties/application/properties/howCostsSpent")                                      |
| [explainSpendingChanges](#explainSpendingChanges)         | Unknown Type | Optional | can be null    | [Completion Report](completionreport-properties-the-application-schema-properties-the-explainspendingchanges-schema.md "\#/properties/application/properties/explainSpendingChanges#/properties/application/properties/explainSpendingChanges")             |
| [fundingAcknowledgement](#fundingAcknowledgement)         | `string`     | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-funding-acknowledgement-schema.md "\#/properties/application/properties/fundingAcknowledgement#/properties/application/properties/fundingAcknowledgement")            |
| [totalCostsClaimed](#totalCostsClaimed)                   | `integer`    | Optional | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-total-costs-claimed-schema.md "\#/properties/application/properties/totalCostsClaimed#/properties/application/properties/totalCostsClaimed")                          |
| [completedEvaluation](#completedEvaluation)               | `string`     | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-completed-evaluation-schema.md "\#/properties/application/properties/completedEvaluation#/properties/application/properties/completedEvaluation")                     |

## summaryOfAcheivements




`summaryOfAcheivements`

-   is required
-   Type: `object[]` ([The Items Schema](completionreport-properties-the-application-schema-properties-the-summary-of-acheivements-schema-the-items-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-summary-of-acheivements-schema.md "\#/properties/application/properties/summaryOfAcheivements#/properties/application/properties/summaryOfAcheivements")

### summaryOfAcheivements Type

`object[]` ([The Items Schema](completionreport-properties-the-application-schema-properties-the-summary-of-acheivements-schema-the-items-schema.md))

## changesToApprovedPurposes




`changesToApprovedPurposes`

-   is optional
-   Type: `object[]` ([The Items Schema](completionreport-properties-the-application-schema-properties-the-changestoapprovedpurposes-schema-the-items-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-changestoapprovedpurposes-schema.md "\#/properties/application/properties/changesToApprovedPurposes#/properties/application/properties/changesToApprovedPurposes")

### changesToApprovedPurposes Type

`object[]` ([The Items Schema](completionreport-properties-the-application-schema-properties-the-changestoapprovedpurposes-schema-the-items-schema.md))

## howProjectAcheivedOutcomes




`howProjectAcheivedOutcomes`

-   is required
-   Type: `string` ([The Howprojectacheivedoutcomes Schema](completionreport-properties-the-application-schema-properties-the-howprojectacheivedoutcomes-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-howprojectacheivedoutcomes-schema.md "\#/properties/application/properties/howProjectAcheivedOutcomes#/properties/application/properties/howProjectAcheivedOutcomes")

### howProjectAcheivedOutcomes Type

`string` ([The Howprojectacheivedoutcomes Schema](completionreport-properties-the-application-schema-properties-the-howprojectacheivedoutcomes-schema.md))

### howProjectAcheivedOutcomes Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

### howProjectAcheivedOutcomes Examples

```json
"Free text"
```

## contributions




`contributions`

-   is optional
-   Type: `object[]` ([The Items Schema](completionreport-properties-the-application-schema-properties-the-contributions-schema-the-items-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-contributions-schema.md "\#/properties/application/properties/contributions#/properties/application/properties/contributions")

### contributions Type

`object[]` ([The Items Schema](completionreport-properties-the-application-schema-properties-the-contributions-schema-the-items-schema.md))

## staff




`staff`

-   is optional
-   Type: `object[]` ([The Items Schema](completionreport-properties-the-application-schema-properties-the-staff-schema-the-items-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-staff-schema.md "\#/properties/application/properties/staff#/properties/application/properties/staff")

### staff Type

`object[]` ([The Items Schema](completionreport-properties-the-application-schema-properties-the-staff-schema-the-items-schema.md))

## staffLinked




`staffLinked`

-   is optional
-   Type: `string` ([The Stafflinked Schema](completionreport-properties-the-application-schema-properties-the-stafflinked-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-stafflinked-schema.md "\#/properties/application/properties/staffLinked#/properties/application/properties/staffLinked")

### staffLinked Type

`string` ([The Stafflinked Schema](completionreport-properties-the-application-schema-properties-the-stafflinked-schema.md))

### staffLinked Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

### staffLinked Examples

```json
"Yes"
```

## howCostsSpent




`howCostsSpent`

-   is optional
-   Type: `object[]` ([The Items Schema](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema.md "\#/properties/application/properties/howCostsSpent#/properties/application/properties/howCostsSpent")

### howCostsSpent Type

`object[]` ([The Items Schema](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema.md))

## explainSpendingChanges




`explainSpendingChanges`

-   is optional
-   Type: `string` ([The Explainspendingchanges Schema](completionreport-properties-the-application-schema-properties-the-explainspendingchanges-schema.md))
-   can be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-explainspendingchanges-schema.md "\#/properties/application/properties/explainSpendingChanges#/properties/application/properties/explainSpendingChanges")

### explainSpendingChanges Type

`string` ([The Explainspendingchanges Schema](completionreport-properties-the-application-schema-properties-the-explainspendingchanges-schema.md))

### explainSpendingChanges Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

### explainSpendingChanges Examples

```json
"free text"
```

## fundingAcknowledgement

Describe how you are acknowledging National Lottery players


`fundingAcknowledgement`

-   is required
-   Type: `string` ([The Funding acknowledgement Schema](completionreport-properties-the-application-schema-properties-the-funding-acknowledgement-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-funding-acknowledgement-schema.md "\#/properties/application/properties/fundingAcknowledgement#/properties/application/properties/fundingAcknowledgement")

### fundingAcknowledgement Type

`string` ([The Funding acknowledgement Schema](completionreport-properties-the-application-schema-properties-the-funding-acknowledgement-schema.md))

### fundingAcknowledgement Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

### fundingAcknowledgement Examples

```json
"free text"
```

## totalCostsClaimed

Sum of total costs claimed


`totalCostsClaimed`

-   is optional
-   Type: `integer` ([The total costs claimed Schema](completionreport-properties-the-application-schema-properties-the-total-costs-claimed-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-total-costs-claimed-schema.md "\#/properties/application/properties/totalCostsClaimed#/properties/application/properties/totalCostsClaimed")

### totalCostsClaimed Type

`integer` ([The total costs claimed Schema](completionreport-properties-the-application-schema-properties-the-total-costs-claimed-schema.md))

## completedEvaluation




`completedEvaluation`

-   is required
-   Type: `string` ([The Completed evaluation Schema](completionreport-properties-the-application-schema-properties-the-completed-evaluation-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-completed-evaluation-schema.md "\#/properties/application/properties/completedEvaluation#/properties/application/properties/completedEvaluation")

### completedEvaluation Type

`string` ([The Completed evaluation Schema](completionreport-properties-the-application-schema-properties-the-completed-evaluation-schema.md))

### completedEvaluation Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | ----------- |
| `"notApplicable"` |             |
| `"yes"`           |             |
| `"no"`            |             |

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

### completedEvaluation Examples

```json
"Yes"
```
