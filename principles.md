# Fejlesztési alapelvek
## Együttműködés
Mindenki külön branchen dolgozik.

Feature branch név formátum: feature/{feature neve}/{fejlesztő neve}, pl. feature/auth/den.

 - Miért? Azért, mert ha egy másik fejlesztő is be akar csatlakozni a feature fejlesztésébe, akkor nem lesznek random branch nevek a repoban, és az egyes branchek lényege egyértelmű lesz.

Nem commitolunk más branchére. Helyette leágazunk belőle (a fentebb leírt branch név formátumot használva) és egy pull requestet indítunk, amiben meg lehet beszélni az implementációbeli különbségeket.

## YAGNI & DRY
YAGNI = You Ain't Gonna Need It

DRY = Don't Repeat Yourself

Előre dolgozni tilos! A kódismétlést elkerülő praktikák csak és kizárólag utólag alkalmazhatók!

1. Make it work
2. Make it right
3. Make it fast

---

1. Fejleszted a featuret
2. Működik, de a kód hányás
3. Írsz hozzá teszteket
4. Refaktorálod, hogy a kód ne legyen hányás. A működés most már a teszteknek köszönhetően biztosított.


## Backend
Coding style: black, flake8

[API design guide](https://geemus.gitbooks.io/http-api-design/content/en/) néhány eltéréssel (todo)

## Frontend
Coding style: a mindenkori prettier config alapján. Dockerben fejlesztők számára a prettier-vscode extension használata ajánlott.

### Mappaszerkezet
```
.
\-- src
    |-- pages
    \-- modules
        |-- common
        |-- question_list
        \-- question_detail
            |-- index.js
            |-- lib
            |   \-- context.js
            |-- question
            |   |-- index.js
            |   \-- QuestionOwnerDetails.jsx
            |-- answer
            \-- comment
```
A pages mappa tartalmazza az oldalakat. Ez a Next.js default oldal mappa, gyakorlatilag a routing is le van kezelve benne.

 - A **modules** mappa tartalmazza a komponenseket domainek szerint csoportosítva. Egy domain összefoglalja azokat a komponenseket, amelyeknek jól megnevezhető közös célja van.
 - **common** domainbe kerülnek azok a komponensek, amelyeket több másik domainben is használunk.
 - A domainek neveinek a formátuma a snake case.
 - A domainek tartalmazhatnak subdomaineket is. Pl. a question_detail domainben találhatók a question, answer és comment subdomainek.
 - A lib nevű subdomainekben működést leíró kód van, pl. hook-ok definíciója, redux stb.

### Styling
styled-jsx