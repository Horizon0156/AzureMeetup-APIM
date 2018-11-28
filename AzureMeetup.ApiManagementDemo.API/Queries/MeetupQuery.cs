using System.Linq;
using AzureMeetup.ApiManagementDemo.API.Models;
using MediatR;

namespace AzureMeetup.ApiManagementDemo.API.Queries
{
    internal class MeetupQuery : IRequest<IQueryable<Meetup>>
    {
    }
}