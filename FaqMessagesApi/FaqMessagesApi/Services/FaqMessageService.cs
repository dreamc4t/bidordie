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
    }
}
