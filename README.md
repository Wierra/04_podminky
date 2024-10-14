# 04_podminky

## Registrace na očkování
V předchozí lekci jsem vytvářeli stránku pro registraci na očkování. Chtěli jsme po uživateli jméno a věk. Nyní budeme chtít, aby uživatel zadal také heslo. To bychom v pozdější verzi aplikaci mohli použít například k přihlášení do systému.

Vytvořte novou stránku, nebo pokračujte ve stránce z předchozí lekce pro registraci na očkování.

1. Nejdříve nechte uživatele zadat všechny hodnoty, tedy jméno, věk i heslo. Uložte si je do dobře pojmenovaných proměnných.
2. Napište první podmínku, ve které zkontrolujte, že věk uživatele je větší nebo roven 65. Pokud ano, vypište do stránky „věk v pořádku“. Pokud uživateli není alespoň 65 let, vypište „nízký věk“.
3. Napište druhou podmínku, která zkontroluje, zda je zadané heslo delší než osm znaků. Pokud není, vypište „slabé heslo“. Heslo se bude kontrolovat pouze v případě, kdy uživatel splnil první podmínku (věk alespoň 65 let).

## Cena vstupenky
Pokusme se o základ jednoduchého rezervačního sestému pro vstupenky do divadla.

1. Založte si webovou stránku s JavaScriptem.
2. Nechte uživatele zadat jeho věk.
3. Vytvořte si proměnnou plnaCena, udávající základní cenu vstupenky a uložte do ní hodnotu 12.
4. Vytvořte podmínku, která do proměnné cena uloží cenu spočítanou podle věku uživatele dle následujících pravidel:
- 0 euro pro návštěvníky mladší 6 let,
- 65 % ze základní ceny pro návštěvníky 6 až 26 let (žák, student),
- 100 % ze základní ceny pro návštěvníky 27 až 64 let (dospělý),
- 50 % ze základní ceny pro ostatní (senior).

1. Nezapomeňte na zaokrouhlování, ať nám cena vyjde v celých eurech.
2. Nakonec spočtenou cenu vypište s nějakou hezkou zprávou na výstup.