# The Date of reply Schema Schema

```txt
#/properties/application/properties/changesToApprovedPurposes/items/properties/dateOfReply#/properties/application/properties/changesToApprovedPurposes/items/properties/dateOfReply
```




| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                     |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [CompletionReport.schema.json\*](../false/CompletionReport.schema.json "open original schema") |

## dateOfReply Type

`string` ([The Date of reply Schema](completionreport-properties-the-application-schema-properties-the-changestoapprovedpurposes-schema-the-items-schema-properties-the-date-of-reply-schema.md))

## dateOfReply Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^\d\d\d\d-\d\d-\d\d$
```

[try pattern](https://regexr.com/?expression=%5E%5Cd%5Cd%5Cd%5Cd-%5Cd%5Cd-%5Cd%5Cd%24 "try regular expression with regexr.com")

## dateOfReply Examples

```json
"2019-01-01"
```
