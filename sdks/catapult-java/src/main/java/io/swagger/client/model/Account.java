package io.swagger.client.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;





@javax.annotation.Generated(value = "class io.swagger.codegen.languages.JavaClientCodegen", date = "2016-06-21T16:27:15.205-04:00")
public class Account   {
  
  private String balance = null;


  public enum AccountTypeEnum {
    PRE_PAID("Pre-paid"),
    POST_PAID("Post-paid");

    private String value;

    AccountTypeEnum(String value) {
      this.value = value;
    }

    @Override
    @JsonValue
    public String toString() {
      return value;
    }
  }

  private AccountTypeEnum accountType = null;

  
  /**
   * The current amount money you have to spend, in US dollars
   **/
  public Account balance(String balance) {
    this.balance = balance;
    return this;
  }
  
  @ApiModelProperty(example = "null", value = "The current amount money you have to spend, in US dollars")
  @JsonProperty("balance")
  public String getBalance() {
    return balance;
  }
  public void setBalance(String balance) {
    this.balance = balance;
  }

  
  /**
   * How payments for your account are done
   **/
  public Account accountType(AccountTypeEnum accountType) {
    this.accountType = accountType;
    return this;
  }
  
  @ApiModelProperty(example = "null", value = "How payments for your account are done")
  @JsonProperty("accountType")
  public AccountTypeEnum getAccountType() {
    return accountType;
  }
  public void setAccountType(AccountTypeEnum accountType) {
    this.accountType = accountType;
  }

  

  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Account account = (Account) o;
    return Objects.equals(this.balance, account.balance) &&
        Objects.equals(this.accountType, account.accountType);
  }

  @Override
  public int hashCode() {
    return Objects.hash(balance, accountType);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Account {\n");
    
    sb.append("    balance: ").append(toIndentedString(balance)).append("\n");
    sb.append("    accountType: ").append(toIndentedString(accountType)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

