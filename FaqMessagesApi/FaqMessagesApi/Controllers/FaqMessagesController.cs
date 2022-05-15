using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using FaqMessagesApi.Interfaces;
using FaqMessagesApi.Models;

// NuGet packages
// Microsoft.EntityFrameworkCore
// Microsoft.EntityFrameworkCore.SqlServer
// Microsoft.EntityFrameworkCore.Tools

namespace FaqMessagesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FaqMessagesController : ControllerBase
    {
        // Get interface
        private IFaqMessage _faqMessageService;

        // Inject interface in this structure
        public FaqMessagesController(IFaqMessage faqMessageService)
        {
            _faqMessageService = faqMessageService;
        }

        // GET: api/FaqMessages
        [HttpGet]
        public async Task<IEnumerable<FaqMessage>> Get()
        {
            var faqmessages = await _faqMessageService.GetAllMessages();
            return faqmessages;
        }

        // POST: api/FaqMessages
        [HttpPost]
        public async Task Post([FromBody] FaqMessage message)
        {
            await _faqMessageService.AddMessage(message);
        }

        // DELETE: api/FaqMessages
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            await _faqMessageService.DeleteMessage(id);
        }
    }
}
