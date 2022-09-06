// // 1.Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in
// // Functions) beserta contoh penggunaannya(kecuali : split, reverse,
// // join, foreach)

// 1.Push
// Method push digunakan untuk menambah satu atau lebih data baru di ahir dari sebuah array.
const myNum = [1, 2, 3]
myNum.push(4);  
console.log(myNum)

//2. Pop
// Method pop digunakan untuk menghapus item terakhir dari sebuah array.
// Method pop tidak perlu menggunakan argumen.
const myNum1 = [1, 2, 3]
myNum1.pop()
console.log(myNum1)

// 3. Unshift
// Kalau push digunakan untuk menambah item baru di ahir sebuah array, 
// maka method unshift digunakan untuk menambah item baru di awal sebuah array.
const myNum2 = [3, 4]
myNum2.unshift(1, 2);
console.log(myNum2)


// 4. Shift
// Shift adalah kebalikan dari unshift.
// Digunakan untuk menghapus item pertama dari sebuah array.
const myNum3 = [1, 2, 3]
myNum3.shift();
console.log(myNum3)


// 5. Includes
// Method includes digunakan untuk mengecek apakah sebuah array memilik element tertentu.
const fruits = ['apple', 'banana', 'cherry']
console.log(fruits.includes('apple')) // return true
console.log(fruits.includes('mango')) // return false


// // 6. indexOf
// // Method indexOf digunakan untuk mencari letak sebuah item dalam array.
const fruits1 = ['apple', 'banana', 'cherry']
console.log(fruits1.indexOf('apple')) // return 0
console.log(fruits1.indexOf('mango')) // return -1


// 7. Concat
// Method concat digunakan untuk menggabungkan 2 atau lebih array.
const debian = ['ubuntu', 'mint', 'kali']
const redhat = ['rhel', 'centos']
const arch = ['manjaro', 'chakra']
const linuxDistro = debian.concat(redhat, arch)
console.log(linuxDistro)


// 8. Slice
// Method slice digunakan untuk memilih satu atau beberapa item dari sebuah array.
const fruits2 = ['apple', 'banana', 'cherry']
console.log(fruits2.slice(0, 2)) //slice dari index ke 0 sampai 2


//9. Splice
// Metode splice() bisa digunakan untuk menambahkan, menghapus, atau mereplace item ke atau dari sebuah array.
const fruits3 = ['apple', 'banana', 'cherry']
fruits3.splice(0, 1) // menghapus 1 item di index 0
console.log(fruits3) // ['banana', 'cherry']

// 10. Sort
// Sesuai namanya, method sort digunakan untuk mengurutkan item dalam sebuah array.
// const myNum4 = [40, 100, 1, 5, 25, 10]
// myNum4.sort();
// console.log(myNum4);
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
console.log(points)
//nomor 2
// Buatlah program searching nama yang dapat dibatasi jumlah
// outputnya yang menerapkan callback function dengan data
// sebagai berikut:
const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"];



let fungsiKesatu=(substring,pembatas,callback)=> {
const value = name.filter((elemen) => elemen.toLowerCase().includes(substring) );
        console.log(value.slice(0,pembatas));//slice dari index ke 0 sampai pembatas
    callback();
} 
const soal = () => {
    console.log('Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan callback function');
};
  
fungsiKesatu("an",3,soal);

// // Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan
// // nilaiAkhir (number), serta dataArray (array).
// // Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan
// // jumlah data dalam dataArray harus lebih dari 5.
// // Fungsi tersebut akan mencari data didalam dataArray yang
// // memiliki nilai diantara nilaiAwal dan nilaiAkhir, mengurutkan
// // hasil pencarian dan menampilkannya ke layar/console.


let seleksi=(nilaiAwal,nilaiAkhir,dataArray)=>{
    let value=[];
    if(nilaiAwal<nilaiAkhir){
        if (dataArray.length >5){
             value = dataArray.filter((elemen) => elemen>nilaiAwal && elemen<nilaiAkhir);
               //  tampilkan hasil
              if(value.length != 0){
              console.log(value);
              }else{
              console.log("Nilai tidak ditemukan");}
        }else{      
            console.log("Jumlah angka dalam dataArray harus lebih dari 5")
        } 
    }else{
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    }
  
   }
  seleksi(1,15,[2, 25, 4, 3,10,20,17])
  seleksi(15,1,[2, 25, 4, 5, 10,20,17])
  seleksi(1,15,[20,25,40,30,40])

