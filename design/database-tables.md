# Database Tables

        database:   sqlite3
        dialect:    sql
        charset:    utf8

---

> **NOTE** : all tables have an `id` field which will not be shown below.

## Users

    - avatar    <string>,   # location metadata of file to be kept
    - fname     <string>,
    - lname     <string>,
    - email     <string>(unique),
    - password  <string>,
    - type      <string>    [ admin, employer, employee ],
    - city      <string>    # these 3 make up the address for simplicity {city, county, street}
    - country   <string>
    - street    <string>
    - status    <string> [active, banned]

## Qualifications

    - userId,   <string>(unique)
    - details,  <string>

## Companies

    - avatar,   <string>    # location metadata of file to be kept
    - name,     <string>
    - website,  <string>
    - city      <string>
    - country   <string>
    - street    <string>
    - bio,      <string>
    - email,    <string>
    - password, <string>
    - sector,  <string>    
    - status    <string>     [active, banned]

## Jobs

    - name,      <string>
    - email,     <string>
    - salary,    <number>
    - branch,    <string>
    - expires,   <date>
    - details,   <string>
    - status     <string>   [standby, waiting, published, approved, denied]

## Messages

    - ownerId,      <number>
    - recipientId,  <number>
    - content,      <string>
    - created,      <date>
    - updated       <date>

## applications

    - userId,    <number>
    - companyId, <number>
    - favorite,  <bool>
    - appliedOn, <date>
    - status     <string>   [waiting, approved, denied]

## reports

    - reporterId    <number>
    - userId        <number>
    - details       <string>
    - created       <date>
    - updated       <date>
