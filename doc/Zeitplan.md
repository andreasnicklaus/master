<h1>Masterthesis Zeitplan</h1>

- [Gantt](#gantt)
- [Milestones](#milestones)
  - [1. Anmeldung](#1-anmeldung)
  - [2. Experimenterahmen festgestellt](#2-experimenterahmen-festgestellt)
  - [3. Presentable Information](#3-presentable-information)
  - [4. Relevant Information](#4-relevant-information)
  - [5. Version 1](#5-version-1)
  - [6. Abgabe](#6-abgabe)
  - [6. Kolloquium](#6-kolloquium)

# Gantt

```mermaid
gantt
    title Zeitplan
    dateFormat  DD.MM.YYYY
    axisFormat %d.%m.

    section Vorbereitung
    Themensuche     :themensuche, 03.03.2024, 22d
    Anmeldung       :milestone, anmeldung, after themensuche, 1d 

    section Wissensfindung
    Recherchephase 1      :recherche1, after anmeldung themensuche, 2w
    Experimenterahmen festgestellt: milestone, rahmen, after recherche1, 1d
    Experimente Vue :vue, after recherche1, 4w
    Experimente React :react, after recherche1, 4w
    Experimente Angular :angular, after recherche1, 4w
    Experimente Astro :astro, after recherche1, 4w
    Experimente Svelte :svelte, after recherche1, 4w
    Experimente Nuxt :nuxt, after recherche1, 4w
    Auswertung :evaluation1, after vue react angular svelte nuxt, 1w
    Recherchephase 2:recherche2, after evaluation1, 2w
    Presentable Information: milestone, whoo, after recherche2, 1d

    section Schreibphase 1
    Einleitungskapitel :einleitung, after recherche2, 1w
    Related Work :related_work, after einleitung, 1w
    Outline Evaluation :outline, after related_work, 1w

    section Probelesung 1
    Probelesen: probelesen1, after outline, 1w
    Anpassungen: anpassungen1, after probelesen1, 1w

    section Umsetzung Schwachstellenfix
    Schwachstellen ausarbeiten: schwachstellen, after outline,  2w
    Projekt publishen: projectfix, after schwachstellen,  1w
    Projektdetails: projektdetails, after projectfix, 2w
    Relevant Information: milestone, whoo2, after projektdetails, 1d
    
    section Untersuchung Reactivity
    Reactivityunterschiede ausarbeiten: reactivity, after outline,  1w
    Untersuchung Vue: reactivity_vue, after reactivity, 3w
    Untersuchung React: reactivity_vue, after reactivity, 3w
    Untersuchung Angular: reactivity_vue, after reactivity, 3w
    Untersuchung Astro: reactivity_vue, after reactivity, 3w
    Untersuchung Svelte: reactivity_vue, after reactivity, 3w
    Untersuchung Nuxt: reactivity_vue, after reactivity, 3w
    Auswertung: auswertung, after reactivity_vue, 1w
    Relevant Information: milestone, whoo2, after auswertung, 1d

    section Schreibphase 2
    Beschreibung der Experimente: experimente_beschreibung, after auswertung, 1w
    Auswertung der Umsetzung/Reactivityuntersuchung :ergebnisse, after experimente_beschreibung, 2w
    Fazit: fazit, after ergebnisse, 1w
    Version 1: milestone, version1, after fazit, 1d

    section Probelesung 2
    Probelesen: probelesen2, after experimente_beschreibung, 5w
    Anpassungen: anpassungen2, after probelesen2, 2w

    section After-Work
    Abgabe: milestone, abgabe, 25.09.2024, 1d
    Kolloquiumsvorbereitung: kolloqprep, after abgabe, 2w
    Kolloquium: milestone, kolloq, after kolloqprep, 1w

    section Be done
    Be done: be_done, after kolloq, 1w
```

# Milestones

## 1. Anmeldung

|               |                                                                     |
| ------------- | ------------------------------------------------------------------- |
| Beschreibung  | Anmeldung der Abschlussarbeit                                       |
| Predicted ETA | 25.03.24                                                            |
| Actual TA     | 25.03.24                                                            |
| Anforderung   | Anmeldung der Abschlussarbeit von der Prüfungsverwaltung genehmigt. |

## 2. Experimenterahmen festgestellt

|               |                                                                                                                                                                            |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Beschreibung  | Um einen geordneten und zielgerichteten Ablauf der ersten Experimente zu gewährleisten, müssen Rahmenbedingungen, Untersuchungsgegenstände und Metriken festgelegt werden. |
| Predicted ETA | 08.04.24                                                                                                                                                                   |
| Actual TA     |                                                                                                                                                                            |
| Anforderung   | Untersuchte Frameworks, genutzte Metriken, Experimenteumgebung und Experimentebeschreibung stehen fest.                                                                    |

## 3. Presentable Information

|               |                                                                                                                                                                     |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Beschreibung  | Nach Durchführung der ersten Experimente gibt es erste Erkenntnisse, die vorgestellt und verglichen werden können, damit sie besprochen und bewertet werden können. |
| Predicted ETA | 27.05.24                                                                                                                                                            |
| Actual TA     |                                                                                                                                                                     |
| Anforderung   | Experimenteergebnisse sind verständlich, vollständig und vergleichbar dokumentiert.                                                                                 |

## 4. Relevant Information

|               |                                                                                                                                                                                                                                                                                                                                                      |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Beschreibung  | Nach der ersten Experimentephase wurden in einer zweiten Wissensfindungsphase die Ergebnisse der ersten Experimente im Detail hinterfragt und genauer untersucht, um Erkenntnisse daraus zu ziehen. Dies kann entweder die Behebung von gefundenen Schwachstellen oder die genauere Untersuchung der Performance der JavaScript-Frameworks bedeuten. |
| Predicted ETA | 01.07.24                                                                                                                                                                                                                                                                                                                                             |
| Actual TA     |                                                                                                                                                                                                                                                                                                                                                      |
| Anforderung   | Es wurden entweder Schwachstellenfixes aus den ersten Experimenten oder Performancevariablen aus den ersten Experimenten verständlich, vollständig und vergleichbar dokumentiert.                                                                                                                                                                    |

## 5. Version 1

|               |                                                                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Beschreibung  | Die erste vollständige Version der Arbeit ist fertig und kann zum Probelesen freigegeben werden. Jetzt sollten nur noch Details und Abbildungen fehlen. |
| Predicted ETA | 29.07.24                                                                                                                                                |
| Actual TA     |                                                                                                                                                         |
| Anforderung   | Alle vorgesehenen Kapitel sind textuell vollständig und auf Rechtschreibfehler geprüft. Darstellungen, Diagramme, Screenshots etc. dürfen fehlen.       |

## 6. Abgabe

|               |                                                                                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Beschreibung  | Deadline für die Abgabe der Arbeit.                                                                                                                                       |
| Predicted ETA | 25.09.24                                                                                                                                                                  |
| Actual TA     |                                                                                                                                                                           |
| Anforderung   | Die Arbeit ist Probegelesen (und korrigiert), auf Rechtschreibfehler geprüft, ggf. ausgedruckt und gebunden, und auf Datenträgern bei der Prüfungsverwaltung eingegangen. |

## 6. Kolloquium

|               |                                                                                                                                                                     |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Beschreibung  | Präsentation und Verteidung der Ergebnisse der Arbeit.                                                                                                              |
| Predicted ETA | 09.10.24                                                                                                                                                            |
| Actual TA     |                                                                                                                                                                     |
| Anforderung   | Präsentation ist im PDF-Format exportiert, hochgeladen und auf USB-Stick gespeichert und die Präsentation ist geprobt und auf den geforderten Zeitrahmen angepasst. |