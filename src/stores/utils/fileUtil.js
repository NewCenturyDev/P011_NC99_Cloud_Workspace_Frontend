import dayjs from "dayjs";

export default {
  parseFileSize(fileSize) {
    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    let index = 0;

    // Ensure that the file size is valid
    if (fileSize <= 0) return '0 Bytes';

    // Keep dividing by 1000 to move to the next unit
    while (fileSize >= 1000 && index < units.length - 1) {
      fileSize /= 1000;
      index++;
    }

    // Limit the output to 1 decimal place for readability
    return `${fileSize.toFixed(1)} ${units[index]}`;
  },
  parseFileTimestamp(timestamp) {
    const date = dayjs(timestamp, "YYYY-MM-DDTHH:mm:ss", "Asia/Seoul");
    return `${date.year()}. ${date.month() + 1}. ${date.date()} ${date.hour() > 12 ? "오전" : "오후"} ${date.hour() > 12 ? String(date.hour() - 12).padStart(2, "0") : String(date.hour()).padStart(2, "0")}:${String(date.minute()).padStart(2, "0")}`;
  }
}
