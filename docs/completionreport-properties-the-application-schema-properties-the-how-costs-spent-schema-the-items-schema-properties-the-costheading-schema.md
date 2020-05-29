# The Costheading Schema Schema

```txt
#/properties/application/properties/howCostsSpent/items/properties/costHeading#/properties/application/properties/howCostsSpent/items/properties/costHeading
```




| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                     |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [CompletionReport.schema.json\*](../false/CompletionReport.schema.json "open original schema") |

## costHeading Type

`string` ([The Costheading Schema](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-costheading-schema.md))

## costHeading Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                                    | Explanation |
| :------------------------------------------------------- | ----------- |
| `"professional-fees"`                                    |             |
| `"new-staff-costs"`                                      |             |
| `"opening-up-work-surveys"`                              |             |
| `"capacity-building-activity"`                           |             |
| `"other-cost-development-phase"`                         |             |
| `"non-cash-contributions"`                               |             |
| `"volunteer-time"`                                       |             |
| `"purchase-price-heritage-items"`                        |             |
| `"repair-and-conservation-work"`                         |             |
| `"new-build-work"`                                       |             |
| `"digital-outputs"`                                      |             |
| `"equipment-and-materials-including-learning-materials"` |             |
| `"training-for-staff"`                                   |             |
| `"training-for-volunteers"`                              |             |
| `"travel-and-expenses-for-staff"`                        |             |
| `"travel-and-expenses-for-volunteers"`                   |             |
| `"expenses-for-staff"`                                   |             |
| `"expenses-for-volunteers"`                              |             |
| `"event-costs"`                                          |             |
| `"community-grants"`                                     |             |
| `"publicity-and-promotion"`                              |             |
| `"full-cost-recovery"`                                   |             |
| `"professional-fees-relating-to-any-of-the-above"`       |             |
| `"paid-training-placements"`                             |             |
| `"recruitment"`                                          |             |
| `"other"`                                                |             |
| `"evaluation"`                                           |             |
| `"contingency"`                                          |             |

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

## costHeading Examples

```json
"professional-fees"
```
