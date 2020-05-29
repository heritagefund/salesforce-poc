# The projectCostId Schema Schema

```txt
#/properties/application/properties/howCostsSpent/items/properties/projectCostId#/properties/application/properties/howCostsSpent/items/properties/projectCostId
```

the associated project cost ID (UUID)


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                     |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [CompletionReport.schema.json\*](../false/CompletionReport.schema.json "open original schema") |

## projectCostId Type

`string` ([The projectCostId Schema](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-projectcostid-schema.md))

## projectCostId Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
```

[try pattern](https://regexr.com/?expression=%5E%5B0-9a-f%5D%7B8%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B12%7D%24 "try regular expression with regexr.com")
