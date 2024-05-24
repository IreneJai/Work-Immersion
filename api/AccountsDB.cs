using Microsoft.EntityFrameworkCore;
namespace WebApplication1
{
    public class AccountsDB : DbContext
    {
        public DbSet<accounts> Accounts { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=AccountsDB.db");
        }
    }
}
