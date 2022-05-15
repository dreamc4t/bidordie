using System;

namespace FaqMessagesApi.Models
{
    public class FaqMessage
    {
        public int Id { get; set; }
        public string? nameOfSender { get; set; }
        public string? phone { get; set; }
        public string? emailOfSender { get; set; }
        public string? message { get; set; }

    }
}
