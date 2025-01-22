function calculateAge() {
  const birthdateInput = document.getElementById("birthdate").value;
  if (!birthdateInput) {
    alert("تاریخ تولد را به درستی ثبت نمایید");
    return;
  }

  const birthdate = new Date(birthdateInput);
  const today = new Date();

  let years = today.getFullYear() - birthdate.getFullYear();
  let months = today.getMonth() - birthdate.getMonth();
  let days = today.getDate() - birthdate.getDate();

  if (days < 0) {
    months--;
    const daysInMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days += daysInMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById(
    "ageResult"
    ).textContent = `سن شما ${years} سال، ${months} ماه، ${days}  روز می باشد  `;
    document.getElementById("birthdate").value = "";
}
