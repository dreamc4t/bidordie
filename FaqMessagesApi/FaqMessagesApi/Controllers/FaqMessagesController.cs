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

        // GET: api/FaqMessagesApiControllers
        // currently returning a listof strings
        [HttpGet]
        public async Task<IEnumerable<FaqMessage>> Get()
        {
            // Get all Messages method
            // need to use Task
            var faqmessages = await _faqMessageService.GetAllMessages();
            return faqmessages;
        }

        // POST: api/VehiclesApiControllers
        [HttpPost]
        public async Task Post([FromBody] FaqMessage message)
        {
            await _faqMessageService.AddMessage(message);
        }
    }
}
