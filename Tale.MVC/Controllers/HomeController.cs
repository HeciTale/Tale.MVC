using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Net;
using Tale.MVC.DTOs;
using Tale.MVC.Models;
using Tale.MVC.Request;

namespace Tale.MVC.Controllers
{
    public class HomeController : Controller
    {
        private readonly string _connectionString;

        public HomeController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        public IActionResult Index()
        {
            return View();
        }

        //[HttpPost]
        //public IActionResult AddRemont(RepairAddRequest model)
        //{

        //    Repair repair = new Repair();
        //    repair.RepairName = model.RemontText;
        //    repair.RepairPrice = model.RemontPrice;
        //    repair.RepairCount = model.RemontCount;




        //    return RedirectToAction("Index", "Home");
        //}

        [HttpPost]
        public async Task<JsonResult> AddRemont( string remontText, int remontCount, int remontPrice)
        {
            Repair repair = new Repair();
            repair.RepairName = remontText;
            repair.RepairCount = remontCount;
            repair.RepairPrice = remontPrice;


            return Json(new
            {
                status = HttpStatusCode.OK,
                data = repair
            });
        }
    }
}





