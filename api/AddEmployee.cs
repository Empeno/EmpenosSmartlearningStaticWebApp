using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using Azure.Storage.Queues;

namespace EmpenosSmartLearningStaticWebApp
{
    public static class AddEmployee
    {
        [FunctionName("AddEmployee")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = null)] HttpRequest req, ExecutionContext executionContext,
            ILogger log)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(executionContext.FunctionAppDirectory)
                .AddJsonFile("local.settings.json", optional: true, reloadOnChange: true)
                .AddEnvironmentVariables()
                .Build();


            string connectionString = config["StorageAccountConnectionString"];
            string queueName = "employeesqueue";
            QueueClient queueClient = new QueueClient(connectionString, queueName);

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();

            await queueClient.CreateAsync();

            await queueClient.SendMessageAsync(Base64Encode(requestBody));

            return new OkObjectResult(requestBody);
        }

        public static string Base64Encode(string plainText)
        {
            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(plainText);
            return System.Convert.ToBase64String(plainTextBytes);
        }
    }
}
