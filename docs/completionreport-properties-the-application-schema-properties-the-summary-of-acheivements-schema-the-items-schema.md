# The Items Schema Schema

```txt
#/properties/application/properties/summaryOfAcheivements/items#/properties/application/properties/summaryOfAcheivements/items
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                     |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [CompletionReport.schema.json\*](../false/CompletionReport.schema.json "open original schema") |

## items Type

`object` ([The Items Schema](completionreport-properties-the-application-schema-properties-the-summary-of-acheivements-schema-the-items-schema.md))

# The Items Schema Properties

| Property                                        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                                                |
| :---------------------------------------------- | -------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [approvedPurpose](#approvedPurpose)             | `string` | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-summary-of-acheivements-schema-the-items-schema-properties-the-approvedpurpose-schema.md "\#/properties/application/properties/summaryOfAcheivements/items/properties/approvedPurpose#/properties/application/properties/summaryOfAcheivements/items/properties/approvedPurpose")                   |
| [summaryOfAcheivements](#summaryOfAcheivements) | `string` | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-summary-of-acheivements-schema-the-items-schema-properties-the-summaryofacheivements-schema.md "\#/properties/application/properties/summaryOfAcheivements/items/properties/summaryOfAcheivements#/properties/application/properties/summaryOfAcheivements/items/properties/summaryOfAcheivements") |

## approvedPurpose




`approvedPurpose`

-   is required
-   Type: `string` ([The Approvedpurpose Schema](completionreport-properties-the-application-schema-properties-the-summary-of-acheivements-schema-the-items-schema-properties-the-approvedpurpose-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-summary-of-acheivements-schema-the-items-schema-properties-the-approvedpurpose-schema.md "\#/properties/application/properties/summaryOfAcheivements/items/properties/approvedPurpose#/properties/application/properties/summaryOfAcheivements/items/properties/approvedPurpose")

### approvedPurpose Type

`string` ([The Approvedpurpose Schema](completionreport-properties-the-application-schema-properties-the-summary-of-acheivements-schema-the-items-schema-properties-the-approvedpurpose-schema.md))

### approvedPurpose Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

### approvedPurpose Examples

```json
"Approved purpose 1"
```

## summaryOfAcheivements




`summaryOfAcheivements`

-   is required
-   Type: `string` ([The Summaryofacheivements Schema](completionreport-properties-the-application-schema-properties-the-summary-of-acheivements-schema-the-items-schema-properties-the-summaryofacheivements-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-summary-of-acheivements-schema-the-items-schema-properties-the-summaryofacheivements-schema.md "\#/properties/application/properties/summaryOfAcheivements/items/properties/summaryOfAcheivements#/properties/application/properties/summaryOfAcheivements/items/properties/summaryOfAcheivements")

### summaryOfAcheivements Type

`string` ([The Summaryofacheivements Schema](completionreport-properties-the-application-schema-properties-the-summary-of-acheivements-schema-the-items-schema-properties-the-summaryofacheivements-schema.md))

### summaryOfAcheivements Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

### summaryOfAcheivements Examples

```json
"free text"
```
