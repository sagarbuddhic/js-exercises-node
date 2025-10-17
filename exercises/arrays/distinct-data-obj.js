const arr = [
  [
    {
      wayBill: 123,
      carrier: "fedx",
    },
    {
      wayBill: 124,
      carrier: "fedx",
    },
  ],
  [
    {
      wayBill: 123,
      carrier: "dtdc",
    },
    {
      wayBill: 123,
      carrier: "fedx",
    },
    {
      wayBill: 125,
      carrier: "fedx",
    },
  ],
];

const getDistinctData = (arr) => {
  let flattened = arr.flat();

  let distinctKeys = new Set();
  let distinctValues = [];

  flattened.forEach((val) => {
    let keyValComb = String(val.wayBill) + String(val.carrier);
    if (!distinctKeys.has(keyValComb)) {
      distinctValues.push({ wayBill: val.wayBill, courier: val.carrier });
      distinctKeys.add(keyValComb);
    }
  });

  return distinctValues;
};

console.log(getDistinctData(arr));
