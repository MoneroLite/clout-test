export const timeConverter = (timestamp: number) => {
  const date = new Date(timestamp);
  let hours = String(date.getHours());
  let minutes = String(date.getMinutes());

  if (date.getHours() < 10) hours = "0" + hours;
  if (date.getMinutes() < 10) minutes = "0" + minutes;

  let string = String(hours) + ":" + String(minutes);
  return string;
};
