using System;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace EmpenosSmartLearningStaticWebApp
{
    public static class PullFromEmployeesQueue
    {
        [FunctionName("PullFromEmployeesQueue")]
        public static async Task Run([QueueTrigger("employeesqueue", Connection = "StorageAccountConnectionString")]string myQueueItem, ILogger log, ExecutionContext executionContext)
        {
            
            dynamic data = JsonConvert.DeserializeObject(myQueueItem);
            
            string firstname = data?.firstName;
            string lastname = data?.lastName;

            var config = new ConfigurationBuilder()
                .SetBasePath(executionContext.FunctionAppDirectory)
                .AddJsonFile("local.settings.json", optional: true, reloadOnChange: true)
                .AddEnvironmentVariables()
                .Build();

            string connectionString = config.GetConnectionString("SqlDtabaseConnectionSting");
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();
                var text = $"INSERT INTO [dbo].[Employees] ([FirstName], [LastName]) VALUES ('{firstname}', '{lastname}')";

                using (SqlCommand cmd = new SqlCommand(text, conn))
                {
                    var rows = await cmd.ExecuteNonQueryAsync();
                    log.LogInformation($"{rows} rows were updated");
                }
            }

            log.LogInformation($"C# function processed: {myQueueItem}");
        }
    }
}
