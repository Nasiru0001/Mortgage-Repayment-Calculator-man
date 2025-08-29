let inputAmount = document.querySelector(".amount-input");
let amount = document.querySelector(".amount");
let euroAmount = document.querySelector(".euro-amount");
let repay = document.querySelector(".repay");
let interest2 = document.querySelector(".interest-2");
const year = document.querySelector(".year");
const btn = document.querySelector(".btn");
let rate = document.querySelector(".rate");
let radio1 = document.querySelector(".radio-1");
let radio2 = document.querySelector(".radio-2");
let radios = [radio1, radio2];
let checked = false;
const hidden = document.querySelector(".hidden");
const active = document.querySelector(".active");
let section1 = document.getElementById("section-1");
const clear = document.querySelector(".clear");
let amountTerm = document.getElementById("amount-term");
let amountYear = document.getElementById("amount-year");
let amountRate = document.getElementById("amount-rate");
let amountPercent = document.getElementById("amount-percent");
let monthlyRepayments = document.getElementById("monthly-repayments");
let totalRepayments = document.getElementById("total-repayments");
let all = [inputAmount, year, rate, radios];
let numberFormat = new Intl.NumberFormat("en-US");
let rightSide = document.querySelector(".right-side");
let rightSide2 = document.querySelector(".right-side-2");

radio1.addEventListener("click", () => {
  repay.style.border = "1px solid var(--Lime)";
  // (radio1.style.accentColor = "var(--Lime)");
});

monthlyRepayments.textContent = "";
totalRepayments.textContent = "";

inputAmount.value.numberFormat;

btn.addEventListener("click", () => {
  let hasError = false;

  if (inputAmount.value === "") {
    document.getElementById("amount-field").classList.remove("hidden");
    amount.style.border = "1px solid var(--Red)";
    euroAmount.style.backgroundColor = "var(--Red)";
    euroAmount.style.color = "var(--White)";
    // let value = this.value.replace(/\D/g, "");
  } else {
    document.getElementById("amount-field").classList.add("hidden");
    amount.style.border = "1px solid var(--Slate-500)";
    euroAmount.style.backgroundColor = "var(--Slate-100)";
    euroAmount.style.color = "var(--Slate-700)";
  }

  if (year.value === "") {
    document.getElementById("year-field").classList.remove("hidden");
    amountTerm.style.border = "1px solid var(--Red)";
    amountYear.style.backgroundColor = "var(--Red)";
    amountYear.style.color = "var(--White)";
    hasError = true;
  } else {
    document.getElementById("year-field").classList.add("hidden");
    amountTerm.style.border = "1px solid var(--Slate-500)";
    amountYear.style.backgroundColor = "var(--Slate-100)";
    amountYear.style.color = "var(--Slate-700)";
  }

  if (rate.value === "") {
    document.getElementById("rate-field").classList.remove("hidden");
    amountRate.style.border = "1px solid var(--Red)";
    amountPercent.style.backgroundColor = "var(--Red)";
    amountPercent.style.color = "var(--White)";
    hasError = true;
  } else {
    document.getElementById("rate-field").classList.add("hidden");
    amountRate.style.border = "1px solid var(--Slate-500)";
    amountPercent.style.backgroundColor = "var(--Slate-100)";
    amountPercent.style.color = "var(--Slate-700)";
  }

  radios.forEach((radio) => {
    if (radio.checked) {
      checked = true;
    }
  });

  if (!checked) {
    document.getElementById("radio-field").classList.remove("hidden");
  } else {
    document.getElementById("radio-field").classList.add("hidden");
  }

  if (inputAmount.value && rate.value && year.value && (radio1 || radio2)) {
    rightSide2.classList.remove("hidden");
    rightSide.classList.add("hidden");
  }

  //  Calculation
  let inputAmountValue = inputAmount.value;
  let calcInterest = rate.value / 100 / 12;
  let calcYear = year.value * 12;

  if (radio1.checked) {
    let resultMonthlyrepayments =
      (inputAmountValue * calcInterest * (1 + calcInterest) ** calcYear) /
      ((1 + calcInterest) ** calcYear - 1);

    monthlyRepayments.textContent = `£${Number(
      resultMonthlyrepayments.toFixed(2)
    ).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

    totalRepayments.textContent = `£${(
      Number(resultMonthlyrepayments) * calcYear
    ).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }

  if (radio2.checked) {
    let resultMonthlyInterest = (inputAmountValue * (rate.value / 100)) / 12;
    monthlyRepayments.textContent = `£${Number(
      resultMonthlyInterest
    ).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

    totalRepayments.textContent = `£${(
      Number(resultMonthlyInterest) * calcYear
    ).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }
});

inputAmount.addEventListener("click", () => {
  amount.style.border = "1px solid var(--Lime)";
  euroAmount.style.backgroundColor = "var(--Lime)";
});

clear.addEventListener("click", () => {
  inputAmount.value = "";
  year.value = "";
  rate.value = "";
  radios.forEach((radio) => {
    radio.checked = "";
  });

  document.getElementById("amount-field").classList.add("hidden");
  document.getElementById("year-field").classList.add("hidden");
  document.getElementById("rate-field").classList.add("hidden");
  document.getElementById("radio-field").classList.add("hidden");
});
