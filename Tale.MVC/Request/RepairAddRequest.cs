using System.ComponentModel.DataAnnotations;

namespace Tale.MVC.Request
{
    public class RepairAddRequest
    {
        public string RemontText { get; set; }
        public int RemontCount { get; set; }
        public int RemontPrice { get; set; }
    }
}
