let a = {
  aa: 1,
  bb: 2,
  cc: 3,
  dd: {
    ee: 5
  },
  ff: {
    gg: 6
  }
}
let d = JSON.parse(JSON.stringify(a)) // 深拷贝
let c = { ...a } // 浅拷贝
let b = a
b.bb = 22
c.cc = 33
c.dd.ee = 55
d.ff.gg = 66
console.log(a)
console.log(b)
console.log(c)
console.log(d)
