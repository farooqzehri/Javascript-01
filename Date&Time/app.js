function formatCustomDate(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayName = days[date.getDay()];
    const dayNum = date.getDate();
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();

    return dayName + ", " + dayNum + " " + monthName + " " + year;
}

function getpassedMinutes(time1, time2) {
    const difference = Math.abs(time2 - time1);
    return Math.floor(difference / (1000 * 60));
}

function calculateAge(birthdate) {
    const birth = new Date(birthdate);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    return years + " years, " + months + " months, " + days + " days";
}

function getFirstDay() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
}

function getLastDay() {
    const now = new Date();
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    return lastDay.getDate();
}

function timeAgo(pastDate) {
    const seconds = Math.floor((new Date() - pastDate) / 1000);
    if (seconds < 60) return "Just now";
    if (seconds < 3600) return Math.floor(seconds / 60) + " minutes ago";
    if (seconds < 86400) return Math.floor(seconds / 3600) + " hours ago";
    return Math.floor(seconds / 86400) + " days ago";
}

function countdown(targetDate) {
    const total = Date.parse(targetDate) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}

function HoursMins(d1, d2) {
    const diffMs = Math.abs(d1 - d2);
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const mins = Math.floor((diffMs / (1000 * 60)) % 60);
    return hours + " hours " + mins + " minutes";
}

function checkDay(dateString) {
    const day = new Date(dateString).getDay();
    if (day === 0 || day === 6) {
        return "Weekend";
    } else {
        return "Weekday";
    }
}

function comparebirths(date1, date2) {
    const p1 = new Date(date1);
    const p2 = new Date(date2);
    if (p1 < p2) return "Person 1 is older";
    if (p2 < p1) return "Person 2 is older";
    return "They are the same age";
}

function AlarmTime(alarmDay, alarmTime) {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = days[now.getDay()];
    const currentTime = now.getHours() + ":" + now.getMinutes();
    return currentDay === alarmDay && currentTime === alarmTime;
}

function isValid(str) {
    const d = new Date(str);
    return d.toString() !== "Invalid Date";
}

function formatRelative(date) {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return "Today";
    if (date.toDateString() === yesterday.toDateString()) return "Yesterday";
    return "Some days ago";
}

function nextSevenDays() {
    const list = [];
    for (let i = 1; i <= 7; i++) {
        const d = new Date();
        d.setDate(d.getDate() + i);
        list.push(d.toDateString());
    }
    return list;
}

function getSlots() {
    const slots = [];
    for (let h = 9; h < 17; h++) {
        slots.push(h + ":00");
        slots.push(h + ":30");
    }
    return slots;
}

function monthDates() {
    const now = new Date();
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const allDates = [];
    for (let i = 1; i <= daysInMonth; i++) {
        allDates.push(i + "-" + (now.getMonth() + 1) + "-" + now.getFullYear());
    }
    return allDates;
}

function convertToLocal(utcStr) {
    const d = new Date(utcStr);
    return d.toString();
}

function total(fn) {
    const start = Date.now();
    fn();
    const end = Date.now();
    return (end - start) + "ms";
}

function simpleDate() {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    return year + "-" + month + "-" + day;
}

function daysMonthes(m, y) {
    return new Date(y, m, 0).getDate();
}