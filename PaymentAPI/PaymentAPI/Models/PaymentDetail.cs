using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PaymentAPI.Models
{
    public class PaymentDetail
    {
        [Key]
        public int PaymentDetailId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        [Required]
        public string CardOwnerName { get; set; } = "";

        [Column(TypeName = "nvarchar(16)")]
        [Required]
        [StringLength(16, ErrorMessage = "Card number must be 16 digits.")]
        public string CardNumber { get; set; } = "";

        // MM/YY format
        [Column(TypeName = "nvarchar(5)")]
        [Required]
        [RegularExpression(@"^(0[1-9]|1[0-2])\/?([0-9]{2})$", ErrorMessage = "Expiration date must be in MM/YY format.")]
        public string ExpirationDate { get; set; } = "";

        [Column(TypeName = "nvarchar(3)")]
        [Required]
        [StringLength(3, ErrorMessage = "Security code must be 3 digits.")]
        public string SecurityCode { get; set; } = "";
    }
}
