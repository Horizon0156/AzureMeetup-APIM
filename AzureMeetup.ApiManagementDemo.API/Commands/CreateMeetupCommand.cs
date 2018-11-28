using AzureMeetup.ApiManagementDemo.API.Models;
using MediatR;

namespace AzureMeetup.ApiManagementDemo.API.Commands
{
    internal class CreateMeetupCommand : IRequest
    {
        public CreateMeetupCommand(Meetup meetupToCreate)
        {
            MeetupToCreate = meetupToCreate;
        }

        public Meetup MeetupToCreate { get; }
    }
}