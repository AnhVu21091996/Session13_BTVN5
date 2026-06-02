let mang = [1, 2, 4, 6, 0, -9, 12];
let check = true;
let chan = 0;
let le = 0;

for (let i = 0; i <= mang.length - 1; i = i + 1){
    if (Number.isInteger(mang[i])){
        if(mang[i]%2 === 0){
            chan = Number(mang[i] + chan);
        }
        else {
            le = Number(mang[i]) + le;
        }
    }
    else {
        check = false;
    }
}

if (check){
    alert("Tổng số chẵn là: " + chan);
    alert("Tổng số lẻ là: " + le);
}
else {
    alert("Có giá trị không phải số nguyên, vui lòng xem lại");
}