
function output(a, b) {
    document.getElementById(a).innerHTML = b;
}
numberArray = [];
function layNumber() {
    var num = Number(document.querySelector('#number').value);
    numberArray.push(num);
    output('ketqua1', "Sn = " + "[" + numberArray + "]")
}
// Bài 1
function tongSoDuong() {
    var tong = 0;
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > 0) {
            tong += numberArray[i];
        }
    }
    output('ketqua2', "Tổng số dương là: " + tong)
}
// Bài 2
function demSoDuong() {
    var counts = 0;
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > 0) {
            counts++
        }
    }
    output('ketqua3', "Có tổng cộng: " + counts + " Số dương")
}
// Bài 3
function soMin() {
    var min = numberArray[0];
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] < min) {
            min = numberArray[i]
        }
    }
    output('ketqua4', "Số nhỏ nhất trong mảng: " + min)
}
// Bài 4
function soMinDuong() {
    var duongMin = 0;
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > 0) {
            duongMin = numberArray[i]
            break;
        }
    }
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i + 1] > 0 && numberArray[i + 1] < duongMin) {
            duongMin = numberArray[i + 1]
        }
        output('ketqua5', 'Số dương nhỏ nhất trong mảng là: ' + duongMin)
        console.log(duongMin);
    }
    if (duongMin == 0) {
        output('ketqua5', "Trong mảng không có số dương")
    }
}
// Bài 5
function soChanend() {
    var chan = 0;
    for (let i = numberArray.length; i >= 0; i--) {
        if (numberArray[i] % 2 == 0) {
            chan = numberArray[i];
            output('ketqua6', "Số chẵn cuối cùng trong mảng: " + chan)
            return;
        } else {
            chan = -1;
            output('ketqua6', chan)
        }
    }
}
// bài 6 
function swapnumber() {
    var viTri1 = Number(document.getElementById('vitri1').value);
    var viTri2 = Number(document.getElementById('vitri2').value);
    temp = numberArray[viTri1]
    numberArray[viTri1] = numberArray[viTri2]
    numberArray[viTri2] = temp;
    output('ketqua7', numberArray);
}
// bài 7
function sapXep() {
    for (let j = 0; j < numberArray.length; j++) {

        for (let i = 0; i < numberArray.length; i++) {
            if (numberArray[i] > numberArray[i + 1]) {
                temp = numberArray[i];
                numberArray[i++] = numberArray[i];
                numberArray[i++] = temp;
            }
        }
    }
    output('ketqua8', numberArray)
}
// bài 8
function checkNguyento(n) {
    var nguyenTo = true;
    if (n < 2) {
        return nguyenTo = false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            nguyenTo = false;
            break;
        }
    }
    return nguyenTo;
}
function findNguyenTo() {
    var soNguyenTo = 0;
    for (let i = 0; i < numberArray.length; i++) {
        if (checkNguyento(numberArray[i]) == true) {
            soNguyenTo = numberArray[i];
            break;
        } else {
            soNguyenTo = -1;
        }
    }
    output('ketqua9', soNguyenTo)
}
// bài 9
numberArrayThem = [];
function themNumber() {
    var num2 = Number(document.querySelector('#numberthem').value);
    numberArrayThem.push(num2);
    output('ketqua10', "Sn = " + "[" + numberArrayThem + "]")
}
function countSoNguyen() {
    var count = 0;
    for (let i = 0; i < numberArrayThem.length; i++) {
        if (numberArrayThem[i] % 1 == 0) {
            count++
        }
    }
    output('ketqua11',"Số Nguyên: " + count)

}
//Bài 10
function soSanh() {
    var duong = 0
    var am = 0;
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > 0) {
            duong++;
        }else if(numberArray[i] < 0) {
            am++;
        }
    }
    if (duong > am) {
        output('ketqua12',"Số Dương > Số Âm")
        
    } else if(duong < am) {
        output('ketqua12',"Số Dương < Số Âm")
    }else{
        output('ketqua12',"Số Dương = Số Âm")
    }

}