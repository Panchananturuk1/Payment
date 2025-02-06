using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PaymentAPI.Models
{
    public class PaymentDetail
    {
        [Key]
        public int PaymentDetailId { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string CardOwonerName { get; set; } = "";
        [Column(TypeName = "nvarchar(20)")]
        public string CarNumber { get; set; } = "";
        //mm/yy
        [Column(TypeName = "nvarchar(5)")]
        public string ExpiratoinDate { get; set; } = "";
        [Column(TypeName = "nvarchar(3)")]
        public string SecurityCode { get; set; } = "";


    }
}
