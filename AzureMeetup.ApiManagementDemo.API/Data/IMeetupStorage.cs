using System.Collections.Generic;
using System.Linq;
using AzureMeetup.ApiManagementDemo.API.Models;

namespace AzureMeetup.ApiManagementDemo.API.Data
{
    internal interface IMeetupStorage
    {
        List<Meetup> Meetups { get; }
    }
}