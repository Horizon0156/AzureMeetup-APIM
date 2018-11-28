using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;

namespace AzureMeetup.ApiManagementDemo.API.Controllers
{
    /// <summary>
    ///     Demo REST API for testing purpose.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class DemoController : Controller
    {
        /// <summary>
        ///     Gets the current UTC time.
        /// </summary>
        /// <returns> An action result. </returns>
        // <response code="200"> Success. The body holds the current time (UTC). </response>
        [HttpGet("time")]
        public IActionResult GetCurrentTime()
        {
            return Json(DateTime.UtcNow);
        }
    }
}
