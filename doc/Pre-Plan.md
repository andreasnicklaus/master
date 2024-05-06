---
layout: page
title: Pre-Plan
permalink: /pre-plan.html
nav_order: 1
---

<h1>Pre-Plan</h1>

Andreas Nicklaus, an067, 44835

- [Vorüberlegungen](#vorüberlegungen)
- [Typ der Arbeit nach Prof. Dr. Dirk Heuzeroth](#typ-der-arbeit-nach-prof-dr-dirk-heuzeroth)
  - [Erste Wahl: Messungsthesis](#erste-wahl-messungsthesis)
  - [Zweite Wahl: Umsetzungsthesis](#zweite-wahl-umsetzungsthesis)
- [Dokumente](#dokumente)
- [Links](#links)


# Vorüberlegungen

| Topic           | Value                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------- |
| Arbeitstitel    | **<u>Evaluation von Automatisierten Web-Performance-Optimierungen mit JavaScript-Frameworks</u>** |
| Erstprüfer      | Fridtjof Toenniessen                                                                              |
| Zweitprüfer     | Stephan Soller                                                                                    |
| Forschungsthema | Web-Performance                                                                                   |
| Start           | 15. - 31.03.2024                                                                                  |
| Abgabe          | Ende September 2024                                                                               |
| Umfang          | 50-70 Seiten                                                                                      |

# Typ der Arbeit nach Prof. Dr. Dirk Heuzeroth
siehe [https://www.dirk-heuzeroth.de/forschung-und-lehre/#theses](https://www.dirk-heuzeroth.de/forschung-und-lehre/#theses)

## Erste Wahl: Messungsthesis

| Messungsthesis                                                                          |                                                                                                                                                                                                                 |
| :-------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                         | Ich will anhand von klassischen Web-Performance-Zahlen & Reactivity-Codeexecution-Zeiten Plugins für Webbundler miteinander vergleichen.                                                                        |
| Welche Frage will man anhand des Vergleichs beantworten?                                | Welche unterschiede machen Frameworks und Plugins für die Performance und Reactivity?                                                                                                                           |
| In welcher Umgebung will man den Vergleich machen? Warum?                               | lokale Entwicklungsumgebung für Developer (*Macht meine Änderung die Ladezeiten der Anwendung kaputt?*) und Live-Hosting-Umgebung (*Macht es einen Unterschied, ob ich die Performance lokal oder Live teste?*) |
| Herausarbeiten, welche Metriken für diesen Vergleich Sinn ergeben                       | Lighthouse, Codeexecutionzeit für Reactivity                                                                                                                                                                    |
| Wie relevant sind die Messergebnisse? Welche Entscheidungen kann man mit ihnen treffen? | Messwerte an sich sind irrelevant, interessant sich die Unterschiede zwischen Frameworks und die Methodik, an die Ergebnisse zu kommen (Testtools, -konfiguration etc.)                                         |

Mögl. Gliederung:

1. Dokumentation des Untersuchungs-Kontexts
2. Definition der genutzten und potentiellen Metriken
3. Pro Metrik: Rekonstruierbare Messungsdokumentation
4. Pro Messung: Ergebnispräsentation und -interpretation
5. Fazit: Zusammenfassung und Diskussion der Ergebnisse

## Zweite Wahl: Umsetzungsthesis

| Umsetzungsthesis                                                                                       |                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                        | Ich will ein JavaScript-Plugin entwickeln, das Änderungen zur Web-Performance automatisch erkennt und vornimmt, oder Probleme mit bestehenden Frameworks oder Plugins behebt. |
| Die Tools (die man schon kennt) in diesem speziellen Anwendungsfall beleuchten.                        | Klassische Performance-Optimierung durch Regex-Replacment im HTML o.ä. Anpassungen.                                                                                           |
| Herausarbeiten, was genau man eigentlich bauen will und einen Prototyp implementieren.                 | NPM-Package mit Installationsanleitung und Konfigurationen für mögl. viele Frameworks (NUXT, NEXT, Angular usw.)                                                              |
| Die Details des Anwendungsfalls und der Tools aufzeigen, die bei der Implementierung aufgefallen sind. | Build-Performance, Open-Source-Praktiken, Barrierefreiheit?, Performanceauswirkungen                                                                                          |

Mögl. Gliederung:
1. Projekt- & Planungsdefinition
2. Pro Anforderung: Definition der Anforderungen zur Erfüllung
3. Entwurfs- und Implementierungbeschreibung, evtl. nötige Workarounds
4. Analyse der Anforderungserfüllung
5. Diskussion der Vor-und Nachteile der Implementierung

# Dokumente
nach den [Allgemeinen Randbedingungen für den Ablauf von Abschlussarbeiten](https://cloud.mi.hdm-stuttgart.de/s/KfLpqykdikwj2NG) von Prof. Dr. Johannes Maucher

0. Anmeldungsdokumente
   1. Anmeldung der Abschlussarbeit
   2. Pre-Plan (dieses Dokument)
1. Vorhabensbeschreibung (Umfang: 1 Seite)
   1. Ziele
   2. Randbedingungen
   3. wissenschaft. Herausforderungen
   4. notwendige Technologien, Daten & Werkzeuge
   5. Risiken
   6. Einordnung der Aufgabe ins Thema
2. Projektplan
   1. Ziele
   2. Arbeitspakete
   3. Milestones
   4. Aufwandsabschätzung (insg. 600h = 20 ECTS * 30 h/ECTS)
3. Statusreports, 2-3 wöchtlich
   1. Bearbeitete Arbeitspakete
   2. Aufgetretene Schwierigkeiten & Erfolge
      1. Einfluss auf den Projektplan
   3. Erreichte Milestones & Status des aktuellen Milestones
   4. Anstehende Aufgaben in der nächsten Reportperiode
   5. Evtl. notwendiges Handeln & Meetings oder Zusammenfassung der abgehaltenen Meetings
4. Berichte zu Milestone- oder Statustreffen, 6-8 wöchentlich.
5. Thesisausschnitte zum Korrekturlesen, monatl.
   1. Abschnittversionen
   2. Änderungs- oder Neuheitsbericht
   3. Feedback

# Links

- Aufbau von Diplomarbeiten [https://os.inf.tu-dresden.de/Studium/Diplom/Aufbau.xml](https://os.inf.tu-dresden.de/Studium/Diplom/Aufbau.xml)
  - Kapitel und Fallstricke von Abschlussarbeiten
- A Small Guide to Writing Your Thesis [https://cgi.cse.unsw.edu.au/~kevine/thesisguide.html](https://cgi.cse.unsw.edu.au/~kevine/thesisguide.html)
  - Was soll in die Thesis?
  - Was sollte jedes Kapitel, jeder Entwurf oder jede Kurzfassung enthalten?
- Tips and Guidance for Students and ECRs Writing Papers and Reports [https://gernot-heiser.org/style-guide.html](https://gernot-heiser.org/style-guide.html)
  - Was Studenten tun sollten und oft vergessen
  - Hinweise für Studenten
  - Tips und Tricks
  - Fallstricke
  - How-Tos
- How to Write an Abstract [https://users.ece.cmu.edu/~koopman/essays/abstract.html](https://users.ece.cmu.edu/~koopman/essays/abstract.html)