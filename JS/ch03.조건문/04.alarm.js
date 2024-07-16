// 백준도장 - 2884 문제

const alarmHour = 0, alarmMin = 40;
let newHour = 0, newMin = 0;

if (alarmMin-45 < 0) {
    if (alarmHour-1 < 0) {
        newHour = 24-alarmHour-1;
        newMin  = 60+alarmMin-45;
        // console.log(`${24-alarmHour-1}시 ${60+alarmMin-45}분 `);
    } else {
        newHour = alarmHour-1;
        newMin  = 60+alarmMin-45;
        // console.log(`${alarmHour-1}시 ${60+alarmMin-45}분 `);
    }
} else {
    newHour = alarmHour;
    newMin  = alarmMin-45;
    // console.log(`${alarmHour}시 ${alarmMin-45}분 `);
}
console.log(`새롭게 설정한 알람 시간은 ${newHour}시 ${newMin}분 입니다.`)

if (alarmMin >= 45) {
    newHour = alarmHour;
    newMin  = alarmMin-45;
} else {
    if (alarmHour == 0) {
        newHour = 24 + alarmHour - 1;
        newMin  = 60 + alarmMin - 45;
    } else {
        newHour = alarmHour - 1;
        newMin  = 60 + alarmMin - 45;
    }
}
console.log(`새롭게 설정한 알람 시간은 ${newHour}시 ${newMin}분 입니다.`)

if (alarmMin >= 45) {
    newHour = alarmHour;
    newMin  = alarmMin-45;
} else {
    newHour = (24+alarmHour-1) % 24;
    newMin  = 60+alarmMin-45;
}
console.log(`새롭게 설정한 알람 시간은 ${newHour}시 ${newMin}분 입니다.`)