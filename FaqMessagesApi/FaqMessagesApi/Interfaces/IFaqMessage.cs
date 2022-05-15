using System;
using FaqMessagesApi.Models;

namespace FaqMessagesApi.Interfaces
{
    public interface IFaqMessage
    {
        // Get all messages
        Task<List<FaqMessage>> GetAllMessages();

        // Add message
        Task AddMessage(FaqMessage message);

        // Delete message
        Task DeleteMessage(int id);
    }
}
