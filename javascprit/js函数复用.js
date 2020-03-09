
/**
 * 深度拷贝的方法
 * */
export function deepCopy(data) {
	let dataTmp = undefined
	if (data === null || !(typeof data === 'object')) {
		dataTmp = data
	} else {
		dataTmp = data.constructor.name === 'Array' ? [] : {}
		for (let key in data) {
			dataTmp[key] = deepCopy(data[key])
		}
	}
	return dataTmp
}
/**
 * 计算获取开始时间和结束时间之间的 （日期数组集合）
 * */
export function getAlldate(begin, end) {
	let arr1 = begin.split("/");
	let arr2 = end.split("/");
	let arr1_ = new Date();
	let arrTime = [];
	arr1_.setUTCFullYear(arr1[0], arr1[1] - 1, arr1[2]);
	let arr2_ = new Date();
	arr2_.setUTCFullYear(arr2[0], arr2[1] - 1, arr2[2]);
	let unixDb = arr1_.getTime();
	let unixDe = arr2_.getTime();
	for (let k = unixDb; k <= unixDe;) {
		arrTime.push(datetimeparse(k, 'yyyy-MM-DD'));
		k = k + 24 * 60 * 60 * 1000;
	}
	return arrTime;
}
/**
 * 出生日期转换年龄
 * */
export function  getAge (data) {
	let birthdays = new Date(data.replace(/-/g, "/"));
	let d = new Date();
	let age =
		d.getFullYear() -
		birthdays.getFullYear() -
		(d.getMonth() < birthdays.getMonth() ||
		(d.getMonth() == birthdays.getMonth() &&
			d.getDate() < birthdays.getDate())
			? 1
			: 0);
	return age;
}
1.函数添加默认值 节省效率
function log( y = 'World') {
  console.log( y);
}