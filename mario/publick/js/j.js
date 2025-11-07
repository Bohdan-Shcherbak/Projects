let name = null;
console.log(typeof name);

const a = name ?? 'callOfDuty'
console.log(a);

const data = {
     user: 'Bohdan',
     profile: 'dan',
email: 'gmail.com'
};
console.log(data.user?.profile?.email)