using Microsoft.AspNetCore.Mvc;
using Tale.MVC.DTOs;

namespace Tale.MVC.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Add()
        {
            return RedirectToAction("Index","Home");
        }

        
    }
}
