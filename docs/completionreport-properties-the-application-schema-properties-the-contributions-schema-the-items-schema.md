# The Items Schema Schema

```txt
#/properties/application/properties/contributions/items#/properties/application/properties/contributions/items
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                     |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [CompletionReport.schema.json\*](../false/CompletionReport.schema.json "open original schema") |

## items Type

`object` ([The Items Schema](completionreport-properties-the-application-schema-properties-the-contributions-schema-the-items-schema.md))

# The Items Schema Properties

| Property                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                             |
| :---------------------------------------- | --------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [date](#date)                             | `string`  | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-contributions-schema-the-items-schema-properties-the-date-schema.md "\#/properties/application/properties/contributions/items/properties/date#/properties/application/properties/contributions/items/properties/date")                                           |
| [taskDescription](#taskDescription)       | `string`  | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-contributions-schema-the-items-schema-properties-the-taskdescription-schema.md "\#/properties/application/properties/contributions/items/properties/taskDescription#/properties/application/properties/contributions/items/properties/taskDescription")          |
| [numberOfVolunteers](#numberOfVolunteers) | `integer` | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-contributions-schema-the-items-schema-properties-the-numberofvolunteers-schema.md "\#/properties/application/properties/contributions/items/properties/numberOfVolunteers#/properties/application/properties/contributions/items/properties/numberOfVolunteers") |
| [volunteerHours](#volunteerHours)         | `integer` | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-contributions-schema-the-items-schema-properties-the-volunteerhours-schema.md "\#/properties/application/properties/contributions/items/properties/volunteerHours#/properties/application/properties/contributions/items/properties/volunteerHours")             |

## date




`date`

-   is required
-   Type: `string` ([The Date Schema](completionreport-properties-the-application-schema-properties-the-contributions-schema-the-items-schema-properties-the-date-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-contributions-schema-the-items-schema-properties-the-date-schema.md "\#/properties/application/properties/contributions/items/properties/date#/properties/application/properties/contributions/items/properties/date")

### date Type

`string` ([The Date Schema](completionreport-properties-the-application-schema-properties-the-contributions-schema-the-items-schema-properties-the-date-schema.md))

### date Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^\d\d\d\d-\d\d-\d\d$
```

[try pattern](https://regexr.com/?expression=%5E%5Cd%5Cd%5Cd%5Cd-%5Cd%5Cd-%5Cd%5Cd%24 "try regular expression with regexr.com")

### date Examples

```json
"2019-01-01"
```

## taskDescription




`taskDescription`

-   is required
-   Type: `string` ([The Taskdescription Schema](completionreport-properties-the-application-schema-properties-the-contributions-schema-the-items-schema-properties-the-taskdescription-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-contributions-schema-the-items-schema-properties-the-taskdescription-schema.md "\#/properties/application/properties/contributions/items/properties/taskDescription#/properties/application/properties/contributions/items/properties/taskDescription")

### taskDescription Type

`string` ([The Taskdescription Schema](completionreport-properties-the-application-schema-properties-the-contributions-schema-the-items-schema-properties-the-taskdescription-schema.md))

### taskDescription Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

### taskDescription Examples

```json
"free text"
```

## numberOfVolunteers




`numberOfVolunteers`

-   is required
-   Type: `integer` ([The Numberofvolunteers Schema](completionreport-properties-the-application-schema-properties-the-contributions-schema-the-items-schema-properties-the-numberofvolunteers-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-contributions-schema-the-items-schema-properties-the-numberofvolunteers-schema.md "\#/properties/application/properties/contributions/items/properties/numberOfVolunteers#/properties/application/properties/contributions/items/properties/numberOfVolunteers")

### numberOfVolunteers Type

`integer` ([The Numberofvolunteers Schema](completionreport-properties-the-application-schema-properties-the-contributions-schema-the-items-schema-properties-the-numberofvolunteers-schema.md))

### numberOfVolunteers Examples

```json
10
```

## volunteerHours




`volunteerHours`

-   is required
-   Type: `integer` ([The Volunteerhours Schema](completionreport-properties-the-application-schema-properties-the-contributions-schema-the-items-schema-properties-the-volunteerhours-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-contributions-schema-the-items-schema-properties-the-volunteerhours-schema.md "\#/properties/application/properties/contributions/items/properties/volunteerHours#/properties/application/properties/contributions/items/properties/volunteerHours")

### volunteerHours Type

`integer` ([The Volunteerhours Schema](completionreport-properties-the-application-schema-properties-the-contributions-schema-the-items-schema-properties-the-volunteerhours-schema.md))

### volunteerHours Examples

```json
2000
```
