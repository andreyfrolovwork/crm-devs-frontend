export function calc(srok, summ, percent, vznos) {
    summ = summ - vznos
    let ret = 0,
        itog = 0,
        monthPer = 0
    for (let i = 1; i <= srok; i++) {
        monthPer = summ * (percent / 12 / 100)
        itog = Math.round(monthPer * 100) / 100
        ret = ret + itog
    }
    ret = Math.round(ret + summ)
    return Math.round(ret / srok)
}
