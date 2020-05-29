# The Items Schema Schema

```txt
#/properties/application/properties/changesToApprovedPurposes/items#/properties/application/properties/changesToApprovedPurposes/items
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                     |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [CompletionReport.schema.json\*](../false/CompletionReport.schema.json "open original schema") |

## items Type

`object` ([The Items Schema](completionreport-properties-the-application-schema-properties-the-changestoapprovedpurposes-schema-the-items-schema.md))

# The Items Schema Properties

| Property                                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                                                    |
| :------------------------------------------ | -------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [descriptionOfChange](#descriptionOfChange) | `string` | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-changestoapprovedpurposes-schema-the-items-schema-properties-the-descriptionofchange-schema.md "\#/properties/application/properties/changesToApprovedPurposes/items/properties/descriptionOfChange#/properties/application/properties/changesToApprovedPurposes/items/properties/descriptionOfChange") |
| [dateOfRequest](#dateOfRequest)             | `string` | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-changestoapprovedpurposes-schema-the-items-schema-properties-the-dateofrequest-schema.md "\#/properties/application/properties/changesToApprovedPurposes/items/properties/dateOfRequest#/properties/application/properties/changesToApprovedPurposes/items/properties/dateOfRequest")                   |
| [dateOfReply](#dateOfReply)                 | `string` | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-changestoapprovedpurposes-schema-the-items-schema-properties-the-date-of-reply-schema.md "\#/properties/application/properties/changesToApprovedPurposes/items/properties/dateOfReply#/properties/application/properties/changesToApprovedPurposes/items/properties/dateOfReply")                       |
| [effectOfChange](#effectOfChange)           | `string` | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-changestoapprovedpurposes-schema-the-items-schema-properties-the-effect-of-change-schema.md "\#/properties/application/properties/changesToApprovedPurposes/items/properties/effectOfChange#/properties/application/properties/changesToApprovedPurposes/items/properties/effectOfChange")              |

## descriptionOfChange




`descriptionOfChange`

-   is required
-   Type: `string` ([The Descriptionofchange Schema](completionreport-properties-the-application-schema-properties-the-changestoapprovedpurposes-schema-the-items-schema-properties-the-descriptionofchange-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-changestoapprovedpurposes-schema-the-items-schema-properties-the-descriptionofchange-schema.md "\#/properties/application/properties/changesToApprovedPurposes/items/properties/descriptionOfChange#/properties/application/properties/changesToApprovedPurposes/items/properties/descriptionOfChange")

### descriptionOfChange Type

`string` ([The Descriptionofchange Schema](completionreport-properties-the-application-schema-properties-the-changestoapprovedpurposes-schema-the-items-schema-properties-the-descriptionofchange-schema.md))

### descriptionOfChange Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

### descriptionOfChange Examples

```json
"Free text"
```

## dateOfRequest




`dateOfRequest`

-   is required
-   Type: `string` ([The Dateofrequest Schema](completionreport-properties-the-application-schema-properties-the-changestoapprovedpurposes-schema-the-items-schema-properties-the-dateofrequest-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-changestoapprovedpurposes-schema-the-items-schema-properties-the-dateofrequest-schema.md "\#/properties/application/properties/changesToApprovedPurposes/items/properties/dateOfRequest#/properties/application/properties/changesToApprovedPurposes/items/properties/dateOfRequest")

### dateOfRequest Type

`string` ([The Dateofrequest Schema](completionreport-properties-the-application-schema-properties-the-changestoapprovedpurposes-schema-the-items-schema-properties-the-dateofrequest-schema.md))

### dateOfRequest Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^\d\d\d\d-\d\d-\d\d$
```

[try pattern](https://regexr.com/?expression=%5E%5Cd%5Cd%5Cd%5Cd-%5Cd%5Cd-%5Cd%5Cd%24 "try regular expression with regexr.com")

### dateOfRequest Examples

```json
"2019-01-01"
```

## dateOfReply




`dateOfReply`

-   is required
-   Type: `string` ([The Date of reply Schema](completionreport-properties-the-application-schema-properties-the-changestoapprovedpurposes-schema-the-items-schema-properties-the-date-of-reply-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-changestoapprovedpurposes-schema-the-items-schema-properties-the-date-of-reply-schema.md "\#/properties/application/properties/changesToApprovedPurposes/items/properties/dateOfReply#/properties/application/properties/changesToApprovedPurposes/items/properties/dateOfReply")

### dateOfReply Type

`string` ([The Date of reply Schema](completionreport-properties-the-application-schema-properties-the-changestoapprovedpurposes-schema-the-items-schema-properties-the-date-of-reply-schema.md))

### dateOfReply Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^\d\d\d\d-\d\d-\d\d$
```

[try pattern](https://regexr.com/?expression=%5E%5Cd%5Cd%5Cd%5Cd-%5Cd%5Cd-%5Cd%5Cd%24 "try regular expression with regexr.com")

### dateOfReply Examples

```json
"2019-01-01"
```

## effectOfChange




`effectOfChange`

-   is required
-   Type: `string` ([The Effect of change Schema](completionreport-properties-the-application-schema-properties-the-changestoapprovedpurposes-schema-the-items-schema-properties-the-effect-of-change-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-changestoapprovedpurposes-schema-the-items-schema-properties-the-effect-of-change-schema.md "\#/properties/application/properties/changesToApprovedPurposes/items/properties/effectOfChange#/properties/application/properties/changesToApprovedPurposes/items/properties/effectOfChange")

### effectOfChange Type

`string` ([The Effect of change Schema](completionreport-properties-the-application-schema-properties-the-changestoapprovedpurposes-schema-the-items-schema-properties-the-effect-of-change-schema.md))

### effectOfChange Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

### effectOfChange Examples

```json
"Free text"
```
