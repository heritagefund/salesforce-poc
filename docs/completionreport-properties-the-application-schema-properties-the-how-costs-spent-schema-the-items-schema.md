# The Items Schema Schema

```txt
#/properties/application/properties/howCostsSpent/items#/properties/application/properties/howCostsSpent/items
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                     |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [CompletionReport.schema.json\*](../false/CompletionReport.schema.json "open original schema") |

## items Type

`object` ([The Items Schema](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema.md))

# The Items Schema Properties

| Property                              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                         |
| :------------------------------------ | --------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [projectCostId](#projectCostId)       | `string`  | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-projectcostid-schema.md "\#/properties/application/properties/howCostsSpent/items/properties/projectCostId#/properties/application/properties/howCostsSpent/items/properties/projectCostId")          |
| [costHeading](#costHeading)           | `string`  | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-costheading-schema.md "\#/properties/application/properties/howCostsSpent/items/properties/costHeading#/properties/application/properties/howCostsSpent/items/properties/costHeading")                |
| [invoiceReference](#invoiceReference) | `string`  | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-invoicereference-schema.md "\#/properties/application/properties/howCostsSpent/items/properties/invoiceReference#/properties/application/properties/howCostsSpent/items/properties/invoiceReference") |
| [invoiceDate](#invoiceDate)           | `string`  | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-invoicedate-schema.md "\#/properties/application/properties/howCostsSpent/items/properties/invoiceDate#/properties/application/properties/howCostsSpent/items/properties/invoiceDate")                |
| [description](#description)           | `string`  | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-description-schema.md "\#/properties/application/properties/howCostsSpent/items/properties/description#/properties/application/properties/howCostsSpent/items/properties/description")                |
| [totalInvoice](#totalInvoice)         | `integer` | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-totalinvoice-schema.md "\#/properties/application/properties/howCostsSpent/items/properties/totalInvoice#/properties/application/properties/howCostsSpent/items/properties/totalInvoice")             |
| [totalCostClaimed](#totalCostClaimed) | `integer` | Required | cannot be null | [Completion Report](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-totalcostclaimed-schema.md "\#/properties/application/properties/howCostsSpent/items/properties/totalCostClaimed#/properties/application/properties/howCostsSpent/items/properties/totalCostClaimed") |

## projectCostId

the associated project cost ID (UUID)


`projectCostId`

-   is required
-   Type: `string` ([The projectCostId Schema](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-projectcostid-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-projectcostid-schema.md "\#/properties/application/properties/howCostsSpent/items/properties/projectCostId#/properties/application/properties/howCostsSpent/items/properties/projectCostId")

### projectCostId Type

`string` ([The projectCostId Schema](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-projectcostid-schema.md))

### projectCostId Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
```

[try pattern](https://regexr.com/?expression=%5E%5B0-9a-f%5D%7B8%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B12%7D%24 "try regular expression with regexr.com")

## costHeading




`costHeading`

-   is required
-   Type: `string` ([The Costheading Schema](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-costheading-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-costheading-schema.md "\#/properties/application/properties/howCostsSpent/items/properties/costHeading#/properties/application/properties/howCostsSpent/items/properties/costHeading")

### costHeading Type

`string` ([The Costheading Schema](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-costheading-schema.md))

### costHeading Constraints

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

### costHeading Examples

```json
"professional-fees"
```

## invoiceReference




`invoiceReference`

-   is required
-   Type: `string` ([The Invoicereference Schema](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-invoicereference-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-invoicereference-schema.md "\#/properties/application/properties/howCostsSpent/items/properties/invoiceReference#/properties/application/properties/howCostsSpent/items/properties/invoiceReference")

### invoiceReference Type

`string` ([The Invoicereference Schema](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-invoicereference-schema.md))

### invoiceReference Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

### invoiceReference Examples

```json
"free text"
```

## invoiceDate




`invoiceDate`

-   is required
-   Type: `string` ([The Invoicedate Schema](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-invoicedate-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-invoicedate-schema.md "\#/properties/application/properties/howCostsSpent/items/properties/invoiceDate#/properties/application/properties/howCostsSpent/items/properties/invoiceDate")

### invoiceDate Type

`string` ([The Invoicedate Schema](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-invoicedate-schema.md))

### invoiceDate Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

### invoiceDate Examples

```json
"2019-01-01"
```

## description




`description`

-   is required
-   Type: `string` ([The Description Schema](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-description-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-description-schema.md "\#/properties/application/properties/howCostsSpent/items/properties/description#/properties/application/properties/howCostsSpent/items/properties/description")

### description Type

`string` ([The Description Schema](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-description-schema.md))

### description Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

### description Examples

```json
"free text"
```

## totalInvoice




`totalInvoice`

-   is required
-   Type: `integer` ([The Totalinvoice Schema](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-totalinvoice-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-totalinvoice-schema.md "\#/properties/application/properties/howCostsSpent/items/properties/totalInvoice#/properties/application/properties/howCostsSpent/items/properties/totalInvoice")

### totalInvoice Type

`integer` ([The Totalinvoice Schema](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-totalinvoice-schema.md))

### totalInvoice Examples

```json
1000
```

## totalCostClaimed




`totalCostClaimed`

-   is required
-   Type: `integer` ([The Totalcostclaimed Schema](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-totalcostclaimed-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-totalcostclaimed-schema.md "\#/properties/application/properties/howCostsSpent/items/properties/totalCostClaimed#/properties/application/properties/howCostsSpent/items/properties/totalCostClaimed")

### totalCostClaimed Type

`integer` ([The Totalcostclaimed Schema](completionreport-properties-the-application-schema-properties-the-how-costs-spent-schema-the-items-schema-properties-the-totalcostclaimed-schema.md))

### totalCostClaimed Examples

```json
2000
```
