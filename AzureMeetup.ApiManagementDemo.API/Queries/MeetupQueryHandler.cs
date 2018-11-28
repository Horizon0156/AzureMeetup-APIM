using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AzureMeetup.ApiManagementDemo.API.Data;
using AzureMeetup.ApiManagementDemo.API.Models;
using MediatR;

namespace AzureMeetup.ApiManagementDemo.API.Queries
{
    internal class MeetupQueryHandler : IRequestHandler<MeetupQuery, IQueryable<Meetup>>
    {
        private readonly IMeetupStorage _meetupStorage;

        public MeetupQueryHandler(IMeetupStorage meetupStorage)
        {
            _meetupStorage = meetupStorage;
        }
        public Task<IQueryable<Meetup>> Handle(MeetupQuery request, CancellationToken cancellationToken)
        {
            return Task.FromResult(_meetupStorage.Meetups.OrderByDescending(m => m.Date).AsQueryable());
        }
    }
}