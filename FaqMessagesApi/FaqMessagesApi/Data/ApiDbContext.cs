using System;
using Microsoft.EntityFrameworkCore;
using FaqMessagesApi.Models;

namespace FaqMessagesApi.Data
{
    // Config för databas
    public class ApiDbContext : DbContext
    {
        public DbSet<FaqMessage>? FaqMessages { get; set; }

        // connections to string to this db contex class
        // override OnConfi...
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //base.OnConfiguring(optionsBuilder);
            //remove

            optionsBuilder.UseSqlServer(@"server=(localdb)\MSSQLLocalDB;Database=FaqDb;");
            // @"Server=(localdb)\MSSQLLocalDB;Database=dbnamn;"
            // server object explorer windows
            // @"server=(localdb)\MSSQLLocalDB;Database=CarDb;"
        }
    }
}
