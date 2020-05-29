# The Items Schema Schema

```txt
#/properties/application/properties/staff/items#/properties/application/properties/staff/items
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                     |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [CompletionReport.schema.json\*](../false/CompletionReport.schema.json "open original schema") |

## items Type

`object` ([The Items Schema](completionreport-properties-the-application-schema-properties-the-staff-schema-the-items-schema.md))

# The Items Schema Properties

| Property                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                         |
| :-------------------------------- | --------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [post](#post)                     | `string`  | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-staff-schema-the-items-schema-properties-the-post-schema.md "\#/properties/application/properties/staff/items/properties/post#/properties/application/properties/staff/items/properties/post")                               |
| [dateAdvertised](#dateAdvertised) | `string`  | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-staff-schema-the-items-schema-properties-the-dateadvertised-schema.md "\#/properties/application/properties/staff/items/properties/dateAdvertised#/properties/application/properties/staff/items/properties/dateAdvertised") |
| [dateAppointed](#dateAppointed)   | `string`  | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-staff-schema-the-items-schema-properties-the-dateappointed-schema.md "\#/properties/application/properties/staff/items/properties/dateAppointed#/properties/application/properties/staff/items/properties/dateAppointed")    |
| [salary](#salary)                 | `integer` | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-staff-schema-the-items-schema-properties-the-salary-schema.md "\#/properties/application/properties/staff/items/properties/salary#/properties/application/properties/staff/items/properties/salary")                         |

## post




`post`

-   is required
-   Type: `string` ([The Post Schema](completionreport-properties-the-application-schema-properties-the-staff-schema-the-items-schema-properties-the-post-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-staff-schema-the-items-schema-properties-the-post-schema.md "\#/properties/application/properties/staff/items/properties/post#/properties/application/properties/staff/items/properties/post")

### post Type

`string` ([The Post Schema](completionreport-properties-the-application-schema-properties-the-staff-schema-the-items-schema-properties-the-post-schema.md))

### post Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

### post Examples

```json
"free text"
```

## dateAdvertised




`dateAdvertised`

-   is required
-   Type: `string` ([The Dateadvertised Schema](completionreport-properties-the-application-schema-properties-the-staff-schema-the-items-schema-properties-the-dateadvertised-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-staff-schema-the-items-schema-properties-the-dateadvertised-schema.md "\#/properties/application/properties/staff/items/properties/dateAdvertised#/properties/application/properties/staff/items/properties/dateAdvertised")

### dateAdvertised Type

`string` ([The Dateadvertised Schema](completionreport-properties-the-application-schema-properties-the-staff-schema-the-items-schema-properties-the-dateadvertised-schema.md))

### dateAdvertised Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^\d\d\d\d-\d\d-\d\d$
```

[try pattern](https://regexr.com/?expression=%5E%5Cd%5Cd%5Cd%5Cd-%5Cd%5Cd-%5Cd%5Cd%24 "try regular expression with regexr.com")

### dateAdvertised Examples

```json
"2019-01-01"
```

## dateAppointed




`dateAppointed`

-   is required
-   Type: `string` ([The Dateappointed Schema](completionreport-properties-the-application-schema-properties-the-staff-schema-the-items-schema-properties-the-dateappointed-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-staff-schema-the-items-schema-properties-the-dateappointed-schema.md "\#/properties/application/properties/staff/items/properties/dateAppointed#/properties/application/properties/staff/items/properties/dateAppointed")

### dateAppointed Type

`string` ([The Dateappointed Schema](completionreport-properties-the-application-schema-properties-the-staff-schema-the-items-schema-properties-the-dateappointed-schema.md))

### dateAppointed Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

### dateAppointed Examples

```json
"2019-01-01"
```

## salary




`salary`

-   is required
-   Type: `integer` ([The Salary Schema](completionreport-properties-the-application-schema-properties-the-staff-schema-the-items-schema-properties-the-salary-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-staff-schema-the-items-schema-properties-the-salary-schema.md "\#/properties/application/properties/staff/items/properties/salary#/properties/application/properties/staff/items/properties/salary")

### salary Type

`integer` ([The Salary Schema](completionreport-properties-the-application-schema-properties-the-staff-schema-the-items-schema-properties-the-salary-schema.md))

### salary Examples

```json
10000
```
