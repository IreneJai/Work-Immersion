
namespace WebApplication2
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

           // builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
           // builder.Services.AddEndpointsApiExplorer();
           // builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            // if (app.Environment.IsDevelopment())
            //{
            //  app.UseSwagger();
            // app.UseSwaggerUI();
            // }

            //app.UseHttpsRedirection();

            //app.UseAuthorization();


            //app.MapControllers();

            

            var accountsList = new List<accounts>()
            {
                new accounts()
                {
                    userName = "admin",
                    password = "admin1234",
                    Name = "Irene Alme"
                },

                new accounts()
                {
                    userName = "jaii",
                    password = "admin1234",
                    Name = "Jaz Aqui"
                },

               new accounts()
                {
                    userName = "kaii1",
                    password = "admin1234",
                    Name = "Kai Lee"
                },

                new accounts()
                {
                    userName = "sevii",
                    password = "admin1234",
                    Name = "Sebastian Lee"
                }
            };
            //Get
            app.MapGet("/accounts", () => 
            {
                return Results.Ok (accountsList);
            });

            //Insert
            app.MapPost("/accounts", (accounts newAccount) =>
            {
                accountsList.Add(newAccount);
                return Results.Ok("Saved Changes");
            });

           //Update
            app.MapPut("/accounts/{username}", (string username, accounts updatedAccount) =>
            {
                var existingAccount = accountsList.FirstOrDefault(a => a.userName == username);
                if (existingAccount == null)
                {
                    return Results.NotFound();
                }

                existingAccount.Name = updatedAccount.Name;
                existingAccount.password = updatedAccount.password;

                return Results.Ok(existingAccount);
            });

            //Delete
            app.MapDelete("/accounts/{username}", (string username) =>
            {
                var accountToRemove = accountsList.FirstOrDefault(a => a.userName == username);
                if (accountToRemove == null)
                {
                    return Results.NotFound();
                }

                accountsList.Remove(accountToRemove);
                return Results.Ok("Saved Changes");
            });


            app.Run();
        }
    }
}
