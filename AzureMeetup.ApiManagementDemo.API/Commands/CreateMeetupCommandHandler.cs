using System.Threading;
using System.Threading.Tasks;
using AzureMeetup.ApiManagementDemo.API.Data;
using MediatR;

namespace AzureMeetup.ApiManagementDemo.API.Commands
{
    internal class CreateMeetupCommandHandler : RequestHandler<CreateMeetupCommand>
    {
        private readonly IMeetupStorage _meetupStorage;

        public CreateMeetupCommandHandler(IMeetupStorage meetupStorage)
        {
            _meetupStorage = meetupStorage;
        }
        protected override void Handle(CreateMeetupCommand request)
        {
            _meetupStorage.Meetups.Add(request.MeetupToCreate);
        }
    }
}