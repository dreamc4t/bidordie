using System;
using Microsoft.EntityFrameworkCore;
using FaqMessagesApi.Data;
using FaqMessagesApi.Interfaces;
using FaqMessagesApi.Models;


namespace FaqMessagesApi.Services
{
    // Implement interface
    public class FaqMessageService : IFaqMessage
    {
        // Datasource
        private ApiDbContext dbContext;

        //Constructor
        public FaqMessageService()
        {
            dbContext = new ApiDbContext();
        }

        public async Task AddMessage(FaqMessage message)
        {
            await dbContext.FaqMessages.AddAsync(message);
            await dbContext.SaveChangesAsync();
        }

        public async Task<List<FaqMessage>> GetAllMessages()
        {
            var faqmessages = await dbContext.FaqMessages.ToListAsync();
            return faqmessages;
        }

        public Task Delete(int Id)
        {
            throw new NotImplementedException();
        }

        public async Task DeleteMessage(int id)
        {
            var message = await dbContext.FaqMessages.FindAsync(id);
            dbContext.FaqMessages.Remove(message);
            await dbContext.SaveChangesAsync();
        }
    }
}
