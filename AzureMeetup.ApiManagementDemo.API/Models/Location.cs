namespace AzureMeetup.ApiManagementDemo.API.Models
{
    /// <summary>
    ///     A geographic location.
    /// </summary>
    public class GeoLocation
    {
        /// <summary>
        ///     Creates a new geographic location.
        /// </summary>
        /// <param name="longitude"> The longitude. </param>
        /// <param name="latitude"> The latitude. </param>
        public GeoLocation(double longitude, double latitude)
        {
            Longitude = longitude;
            Latitude = latitude;
        }

        /// <summary>
        ///     Gets the longitude.
        /// </summary>
        public double Longitude { get; }

        /// <summary>
        ///     Gets the latitude.
        /// </summary>
        public double Latitude { get; }
    }
}