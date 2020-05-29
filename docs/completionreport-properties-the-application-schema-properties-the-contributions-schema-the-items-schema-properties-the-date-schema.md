# The Date Schema Schema

```txt
#/properties/application/properties/contributions/items/properties/date#/properties/application/properties/contributions/items/properties/date
```




| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                     |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [CompletionReport.schema.json\*](../false/CompletionReport.schema.json "open original schema") |

## date Type

`string` ([The Date Schema](completionreport-properties-the-application-schema-properties-the-contributions-schema-the-items-schema-properties-the-date-schema.md))

## date Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^\d\d\d\d-\d\d-\d\d$
```

[try pattern](https://regexr.com/?expression=%5E%5Cd%5Cd%5Cd%5Cd-%5Cd%5Cd-%5Cd%5Cd%24 "try regular expression with regexr.com")

## date Examples

```json
"2019-01-01"
```
