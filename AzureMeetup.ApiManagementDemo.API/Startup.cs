using AzureMeetup.ApiManagementDemo.API.Data;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Authentication.AzureADB2C.UI;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Authentication;

namespace AzureMeetup.ApiManagementDemo.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            var storage = new InMemoryMeetupStorage();
            storage.SeedDummyData();
            services.AddSingleton<IMeetupStorage>(storage);

            services.AddAuthentication(AzureADB2CDefaults.BearerAuthenticationScheme)
                    .AddAzureADB2CBearer(options => Configuration.GetSection("AzureADB2C").Bind(options));

            services.AddMvc();
            services.AddMediatR();
            services.AddCors(settings => settings.AddDefaultPolicy(builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()));
            services.AddSwaggerDocument(settings => {
                
                settings.Title = "Meetup REST API";
                settings.Version = "0.1-alpha";
                settings.DocumentName = $"{settings.Title} - {settings.Version}";
            });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();

            app.UseAuthentication();
            app.UseMvc();

            app.UseSwagger();
            app.UseSwaggerUi3(config => config.Path = string.Empty);
        }
    }
}
