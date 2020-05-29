# The Meta Schema Schema

```txt
#/properties/meta#/properties/meta
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                     |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [CompletionReport.schema.json\*](../false/CompletionReport.schema.json "open original schema") |

## meta Type

`object` ([The Meta Schema](completionreport-properties-the-meta-schema.md))

# The Meta Schema Properties

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                      |
| :------------------------------ | -------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [form](#form)                   | `string` | Required | cannot be null | [Completion Report](completionreport-properties-the-meta-schema-properties-the-form-schema.md "\#/properties/meta/properties/form#/properties/meta/properties/form")                            |
| [schemaVersion](#schemaVersion) | `string` | Required | cannot be null | [Completion Report](completionreport-properties-the-meta-schema-properties-the-schemaversion-schema.md "\#/properties/meta/properties/schemaVersion#/properties/meta/properties/schemaVersion") |
| [environment](#environment)     | `string` | Required | cannot be null | [Completion Report](completionreport-properties-the-meta-schema-properties-the-environment-schema.md "\#/properties/meta/properties/environment#/properties/meta/properties/environment")       |
| [commitId](#commitId)           | `string` | Required | cannot be null | [Completion Report](completionreport-properties-the-meta-schema-properties-the-commitid-schema.md "\#/properties/meta/properties/commitId#/properties/meta/properties/commitId")                |
| [locale](#locale)               | `string` | Required | cannot be null | [Completion Report](completionreport-properties-the-meta-schema-properties-the-locale-schema.md "\#/properties/meta/properties/locale#/properties/meta/properties/locale")                      |
| [username](#username)           | `string` | Required | cannot be null | [Completion Report](completionreport-properties-the-meta-schema-properties-the-username-schema.md "\#/properties/meta/properties/username#/properties/meta/properties/username")                |
| [applicationId](#applicationId) | `string` | Required | cannot be null | [Completion Report](completionreport-properties-the-meta-schema-properties-the-applicationid-schema.md "\#/properties/meta/properties/applicationId#/properties/meta/properties/applicationId") |
| [startedAt](#startedAt)         | `string` | Required | cannot be null | [Completion Report](completionreport-properties-the-meta-schema-properties-the-startedat-schema.md "\#/properties/meta/properties/startedAt#/properties/meta/properties/startedAt")             |

## form




`form`

-   is required
-   Type: `string` ([The Form Schema](completionreport-properties-the-meta-schema-properties-the-form-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-meta-schema-properties-the-form-schema.md "\#/properties/meta/properties/form#/properties/meta/properties/form")

### form Type

`string` ([The Form Schema](completionreport-properties-the-meta-schema-properties-the-form-schema.md))

### form Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

### form Examples

```json
"completion-report"
```

## schemaVersion




`schemaVersion`

-   is required
-   Type: `string` ([The Schemaversion Schema](completionreport-properties-the-meta-schema-properties-the-schemaversion-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-meta-schema-properties-the-schemaversion-schema.md "\#/properties/meta/properties/schemaVersion#/properties/meta/properties/schemaVersion")

### schemaVersion Type

`string` ([The Schemaversion Schema](completionreport-properties-the-meta-schema-properties-the-schemaversion-schema.md))

### schemaVersion Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

### schemaVersion Examples

```json
"v1.x"
```

## environment




`environment`

-   is required
-   Type: `string` ([The Environment Schema](completionreport-properties-the-meta-schema-properties-the-environment-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-meta-schema-properties-the-environment-schema.md "\#/properties/meta/properties/environment#/properties/meta/properties/environment")

### environment Type

`string` ([The Environment Schema](completionreport-properties-the-meta-schema-properties-the-environment-schema.md))

### environment Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

### environment Examples

```json
"production"
```

## commitId




`commitId`

-   is required
-   Type: `string` ([The Commitid Schema](completionreport-properties-the-meta-schema-properties-the-commitid-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-meta-schema-properties-the-commitid-schema.md "\#/properties/meta/properties/commitId#/properties/meta/properties/commitId")

### commitId Type

`string` ([The Commitid Schema](completionreport-properties-the-meta-schema-properties-the-commitid-schema.md))

### commitId Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

### commitId Examples

```json
"b4ecf18eae01d34b296e9388f387cc42bf7c0f93"
```

## locale




`locale`

-   is required
-   Type: `string` ([The Locale Schema](completionreport-properties-the-meta-schema-properties-the-locale-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-meta-schema-properties-the-locale-schema.md "\#/properties/meta/properties/locale#/properties/meta/properties/locale")

### locale Type

`string` ([The Locale Schema](completionreport-properties-the-meta-schema-properties-the-locale-schema.md))

### locale Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

### locale Examples

```json
"en"
```

## username




`username`

-   is required
-   Type: `string` ([The Username Schema](completionreport-properties-the-meta-schema-properties-the-username-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-meta-schema-properties-the-username-schema.md "\#/properties/meta/properties/username#/properties/meta/properties/username")

### username Type

`string` ([The Username Schema](completionreport-properties-the-meta-schema-properties-the-username-schema.md))

### username Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

### username Examples

```json
"example@example.com"
```

## applicationId




`applicationId`

-   is required
-   Type: `string` ([The Applicationid Schema](completionreport-properties-the-meta-schema-properties-the-applicationid-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-meta-schema-properties-the-applicationid-schema.md "\#/properties/meta/properties/applicationId#/properties/meta/properties/applicationId")

### applicationId Type

`string` ([The Applicationid Schema](completionreport-properties-the-meta-schema-properties-the-applicationid-schema.md))

### applicationId Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

### applicationId Examples

```json
"9453d770-e450-11e9-b3b6-212ded63c337"
```

## startedAt




`startedAt`

-   is required
-   Type: `string` ([The Startedat Schema](completionreport-properties-the-meta-schema-properties-the-startedat-schema.md))
-   cannot be null
-   defined in: [Completion Report](completionreport-properties-the-meta-schema-properties-the-startedat-schema.md "\#/properties/meta/properties/startedAt#/properties/meta/properties/startedAt")

### startedAt Type

`string` ([The Startedat Schema](completionreport-properties-the-meta-schema-properties-the-startedat-schema.md))

### startedAt Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^(.*)$
```

[try pattern](https://regexr.com/?expression=%5E(.*)%24 "try regular expression with regexr.com")

### startedAt Examples

```json
"2019-05-17T15:34:13.000Z"
```
