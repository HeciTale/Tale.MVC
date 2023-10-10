using Microsoft.EntityFrameworkCore;
using Tale.MVC.Models;

namespace Tale.MVC.Db
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
    : base(options)
        {
        }

        public  DbSet<Repair> Repairs { get; set; }
    }
}
