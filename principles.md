# Fejlesztési alapelvek
## Együttműködés
Mindenki külön branchen dolgozik.

Feature branch név formátum: feature/{feature neve}, pl. feature/auth.

Nem commitolunk más branchére. Helyette leágazunk belőle, megtartva a feature branch eredeti nevét és hozzáírva a mi nevünket (pl. feature/auth-den) és egy pull requestet indítunk, amiben meg lehet beszélni az implementációbeli különbségeket.

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
    |-- utils
    \-- components
        |-- common
        |   \-- VoteBox.js
        |-- QuestionList.js
        |-- QuestionDetail.js
        \-- ...
```
A pages mappa tartalmazza az oldalakat. Ez a Next.js default oldal mappa, gyakorlatilag a routing is le van kezelve benne.


 - A **common** mappába kerülnek azok a komponensek, amelyeket több másik komponensben is használunk.
 - A **utils** mappába kerülnek a segédfüggvények.

 A többi majd alakul.

### Styling
styled-jsx