  export default {
    formatCurrency: function (num) {
      if (num === 0){
        return "SOLD";
      } else{
        return Number(num.toFixed(1)).toLocaleString() + " NOK";
      }
    }
  }