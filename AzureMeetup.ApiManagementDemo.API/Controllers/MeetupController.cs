using System.Threading.Tasks;
using AzureMeetup.ApiManagementDemo.API.Commands;
using AzureMeetup.ApiManagementDemo.API.Models;
using AzureMeetup.ApiManagementDemo.API.Queries;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace AzureMeetup.ApiManagementDemo.API.Controllers
{
    /// <summary>
    ///     REST API Controller for managing Meetups.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class MeetupController : Controller
    {
        private readonly IMediator _mediator;

        /// <summary>
        /// Creates a new instance of the Meetup controller.
        /// </summary>
        /// <param name="mediator"> An instance of a mediator used for command and query dispatching. </param>
        public MeetupController(IMediator mediator)
        {
            _mediator = mediator;
        }

        /// <summary>
        ///     Gets a list of announced Meetups.
        /// </summary>
        /// <returns> An action result. </returns>
        /// <response code="200"> Success. The body holds a list of announced Meetups. </response>
        [HttpGet]
        [Produces(typeof(Meetup[]))]
        public async Task<IActionResult> GetMeetupsAsync()
        {
            var meetups = await _mediator.Send(new MeetupQuery());

            return Ok(meetups);
        }

        /// <summary>
        ///     Annouces a new Meetup.
        /// </summary>
        /// <param name="meetup"> The meetup which should be announced. </param>
        /// <returns> An action result. </returns>
        /// <response code="204"> Success. The Meetup was announced successfully. </response>
        /// <response code="400"> Bad Request. The given meetup is missing information or malformed. </response>
        /// <response code="401"> Unauthorized. Only registered users are allowed to announce a Meetup. </response>
        [HttpPost]
        [Authorize]
        [ProducesResponseType(204)]
        public async Task<IActionResult> CreateMeetupAsync([FromBody] Meetup meetup)
        {
            if (!ModelState.IsValid) 
            {
                return BadRequest(ModelState);
            }
            
            await _mediator.Send(new CreateMeetupCommand(meetup));

            return NoContent();
        }
    }
}
