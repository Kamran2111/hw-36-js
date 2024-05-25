export class NextDayMethod {
  day;
  constructor(day) {
    this.day = new Date(day);
  }
  nextDay() {
    const currentDate = new Date();
    const dayOfMonth = currentDate.getDate() + 1;
    return dayOfMonth;
  }
}
