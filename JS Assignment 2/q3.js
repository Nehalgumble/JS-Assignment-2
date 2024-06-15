function findTax(salary) {
let tax=0;
switch(true){
    case salary<=500000:
        tax=0;
        break;
        case salary <=1000000:
            tax=(salary - 500000) * 0.1;
            break;
            case salary<=1500000:
                tax=50000 + (salary - 1000000) * 0.2;
                break;
                default:
      tax = 150000 + (salary - 1500000) * 0.3;
  }
  return tax;
}