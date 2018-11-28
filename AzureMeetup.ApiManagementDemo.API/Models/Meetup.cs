using System;
using System.ComponentModel.DataAnnotations;

namespace AzureMeetup.ApiManagementDemo.API.Models
{
    /// <summary>
    ///     This class holds inforamtion about an announced Meetup.
    /// </summary>
    public class Meetup
    {
        /// <summary>
        ///     Gets or sets the id.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        ///     Gets or sets the title.
        /// </summary>
        [Required]
        public string Title { get; set; }

        /// <summary>
        ///     Gets or sets the description.
        /// </summary>
        [Required]
        public string Description { get; set; }

        /// <summary>
        ///     Gets or sets the date where the Meetup will take place.
        /// </summary>
        public DateTime Date { get; set; }

        /// <summary>
        ///     Gets or sets the name of the speaker.
        /// </summary>
        [Required]
        public string Speaker { get; set; }

        /// <summary>
        ///     Gets or sets the location of the Meetup.
        /// </summary>
        public GeoLocation Location { get; set; }
    }
}