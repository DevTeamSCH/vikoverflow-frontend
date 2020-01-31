# Fejlesztési alapelvek

## Együttműködés

Mindenki külön branchen dolgozik.

Feature branch név formátum: feature/{feature neve}, pl. feature/auth.

Nem commitolunk más branchére. Helyette leágazunk belőle, megtartva a feature branch eredeti nevét és hozzáírva a mi nevünket (pl. feature/auth-den) és egy pull requestet indítunk, amiben meg lehet beszélni az implementációbeli különbségeket.

## Mappaszerkezet

```
\-- src
    |-- pages
    |   |-- index.js
    |   \-- question
    |       |-- [id].js
    |       \-- ...
    |-- lib
    |   |-- some-business-logic.js
    |   \-- ...
    \-- components
        |-- button.js
        |-- question.js
        \-- ...
```

- A **lib** mappába kerülnek a segédfüggvények.
- A **components** mappa maradjon flat egyelőre.

## CSS

styled-jsx, lehetőleg követve a már létező komponensek konvencióit: classname-toggling, atomic design.