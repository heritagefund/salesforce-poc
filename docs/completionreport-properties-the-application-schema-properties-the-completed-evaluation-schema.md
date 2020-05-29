# The Completed evaluation Schema Schema

```txt
#/properties/application/properties/completedEvaluation#/properties/application/properties/completedEvaluation
```




| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                     |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [CompletionReport.schema.json\*](../false/CompletionReport.schema.json "open original schema") |

## completedEvaluation Type

`string` ([The Completed evaluation Schema](completionreport-properties-the-application-schema-properties-the-completed-evaluation-schema.md))

## completedEvaluation Constraints

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

## completedEvaluation Examples

```json
"Yes"
```
