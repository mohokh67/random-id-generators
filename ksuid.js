import  KSUID from 'ksuid'

const ksuidExample = KSUID.randomSync()

// console.log(`ksuid: ${ksuidExample}`)
// console.log(`ksuid string: ${ksuidExample.string}`);
// console.log(`ksuid 20-byte buffer: ${ksuidExample.raw}`);
// console.log(ksuidExample.raw);
// console.log(`ksuid date: ${ksuidExample.date}`);
// console.log(`ksuid timestamp: ${ksuidExample.timestamp}`);
// console.log(`ksuid payload: ${ksuidExample.payload}`);
// console.log(ksuidExample.payload);

const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const nextYear = new Date(today);
nextYear.setFullYear(today.getFullYear() +1);
const lastMonth = new Date(today);
lastMonth.setMonth(today.getMonth() - 1);

// console.log(yesterday)
// console.log(today)
// console.log(tomorrow)

const lastMonthKSUID = KSUID.randomSync(lastMonth)
const yesterdayKSUID = KSUID.randomSync(yesterday)
const todayKSUID = KSUID.randomSync(today)
const tomorrowKSUID = KSUID.randomSync(tomorrow)
const nextYearKSUID = KSUID.randomSync(nextYear)

// console.log(`yesterdayKSUID: ${yesterdayKSUID}`);
// console.log(`todayKSUID: ${todayKSUID}`);
// console.log(`tomorrowKSUID: ${tomorrowKSUID}`);

// console.log(todayKSUID.compare(yesterdayKSUID)); // 1
// console.log(todayKSUID.compare(todayKSUID)); // 0
// console.log(yesterdayKSUID.compare(todayKSUID)); // -1


const KSUIDs = [nextYearKSUID, todayKSUID,yesterdayKSUID, tomorrowKSUID, lastMonthKSUID];
const sortedKSUIDs = KSUIDs.sort();
sortedKSUIDs.forEach(value => console.log(value.date))
