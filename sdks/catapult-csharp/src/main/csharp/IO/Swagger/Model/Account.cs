using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace IO.Swagger.Model
{
    /// <summary>
    /// 
    /// </summary>
    [DataContract]
    public partial class Account :  IEquatable<Account>
    { 
    
        /// <summary>
        /// How payments for your account are done
        /// </summary>
        /// <value>How payments for your account are done</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum AccountTypeEnum {
            
            [EnumMember(Value = "Pre-paid")]
            Prepaid,
            
            [EnumMember(Value = "Post-paid")]
            Postpaid
        }

    
        /// <summary>
        /// How payments for your account are done
        /// </summary>
        /// <value>How payments for your account are done</value>
        [DataMember(Name="accountType", EmitDefaultValue=false)]
        public AccountTypeEnum? AccountType { get; set; }
    
        /// <summary>
        /// Initializes a new instance of the <see cref="Account" /> class.
        /// Initializes a new instance of the <see cref="Account" />class.
        /// </summary>
        /// <param name="Balance">The current amount money you have to spend, in US dollars.</param>
        /// <param name="AccountType">How payments for your account are done.</param>

        public Account(string Balance = null, AccountTypeEnum? AccountType = null)
        {
            this.Balance = Balance;
            this.AccountType = AccountType;
            
        }
        
    
        /// <summary>
        /// The current amount money you have to spend, in US dollars
        /// </summary>
        /// <value>The current amount money you have to spend, in US dollars</value>
        [DataMember(Name="balance", EmitDefaultValue=false)]
        public string Balance { get; set; }
    
        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Account {\n");
            sb.Append("  Balance: ").Append(Balance).Append("\n");
            sb.Append("  AccountType: ").Append(AccountType).Append("\n");
            
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="obj">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object obj)
        {
            // credit: http://stackoverflow.com/a/10454552/677735
            return this.Equals(obj as Account);
        }

        /// <summary>
        /// Returns true if Account instances are equal
        /// </summary>
        /// <param name="other">Instance of Account to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Account other)
        {
            // credit: http://stackoverflow.com/a/10454552/677735
            if (other == null)
                return false;

            return 
                (
                    this.Balance == other.Balance ||
                    this.Balance != null &&
                    this.Balance.Equals(other.Balance)
                ) && 
                (
                    this.AccountType == other.AccountType ||
                    this.AccountType != null &&
                    this.AccountType.Equals(other.AccountType)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            // credit: http://stackoverflow.com/a/263416/677735
            unchecked // Overflow is fine, just wrap
            {
                int hash = 41;
                // Suitable nullity checks etc, of course :)
                
                if (this.Balance != null)
                    hash = hash * 59 + this.Balance.GetHashCode();
                
                if (this.AccountType != null)
                    hash = hash * 59 + this.AccountType.GetHashCode();
                
                return hash;
            }
        }

    }
}
