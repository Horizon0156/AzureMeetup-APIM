using System;
using System.Collections.Generic;
using AzureMeetup.ApiManagementDemo.API.Models;

namespace AzureMeetup.ApiManagementDemo.API.Data
{
    internal class InMemoryMeetupStorage : IMeetupStorage
    {
        public InMemoryMeetupStorage()
        {
            Meetups = new List<Meetup>();
        }

        public List<Meetup> Meetups { get; }

        public void SeedDummyData() 
        {
            Meetups.Add(new Meetup 
            {
                Title = "Azure Kubernetes Services und Azure Service Fabric auf Azure Stack",
                Description = "In dieser Session stellt Markus vor, welche Möglichkeiten Azure Kubernetes Services und Azure Service Fabric auf Azure Stack bieten und wie sie in einer hybriden Cloud genutzt werden können. Zudem wird auf Besonderheiten der Lösungen in Azure Stack im Vergleich zu Azure hingewiesen.",
                Date = new DateTime(2018,11,27),
                Location = new GeoLocation(51.442140, 6.7712),
                Speaker = "Markus Klein"
            });

            Meetups.Add(new Meetup 
            {
                Title = "Azure API Management – Einführung und Beispiele",
                Description = "In der Session stellt Stefan das API Management Produkt von Azure vor, demonstriert Entwickler- sowie das Managementportal und geht auf die Verwendungsmöglichkeiten ein. Im Anschluss folgt ein Praxisbeispiel an Hand von Reglementierungen einer .NET Core API sowie der Integration von Azure B2C, um auch auf dem vorherigen Thema aufzusetzen.",
                Date = new DateTime(2018,11,27),
                Location = new GeoLocation(51.442140, 6.7712),
                Speaker = "Stefan Wilkes"
            });

            Meetups.Add(new Meetup 
            {
                Title = "Azure and Security – everything you need to know",
                Description = "Die Security der Cloud ist des Öfteren ein sehr unpopuläres Thema. Entweder geht man von grundsätzlicher Sicherheit aus und beruft sich hierbei auf ein missverstandenes Bild der Cloud, oder man steht Cloud Computing aus Prinzip skeptisch gegenüber. In Zeiten von Skandalen rund um Sicherheitsbehörden scheint ein selbst konfigurierter bzw. entwickelter Rundumschutz aussichtslos. Der Vortrag wird die Möglichkeiten von Microsoft Azure vorstellen und diskutieren. Ebenso werden Methoden vorgestellt, um unabhängig vom Cloud Provider eigene Security Mechanismen umzusetzen.",
                Date = new DateTime(2018,9,25),
                Location = new GeoLocation(51.442140, 6.7712),
                Speaker = "Benjamin Tokgöz"
            });

            Meetups.Add(new Meetup 
            {
                Title = "Azure and Security – everything you need to know",
                Description = "-Überblick und Neuerungen\n- Wie kann eine Migration in die Cloud aussehen?\n- Modernisierungsstrategien",
                Date = new DateTime(2018,9,25),
                Location = new GeoLocation(51.442140, 6.7712),
                Speaker = "Dirk Johann"
            });

            Meetups.Add(new Meetup 
            {
                Title = "Azure Kubernetes Services (AKS)",
                Description = "Seit ein paar Jahren wird es immer beliebter, Applikationen und insbesondere Web Apps mit Container-Systemen wie z.B. Docker zu entwickeln und betreiben. Dies geht auch an der .NET-Welt nicht vorbei und so ist Docker spätestens seit .NET-Core fester Bestandteil des Microsoft-Ökosystems...",
                Date = new DateTime(2018,7,24),
                Location = new GeoLocation(51.442140, 6.7712),
                Speaker = "Dominique Göttner"
            });
        }
    }
}