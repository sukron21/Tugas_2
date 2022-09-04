//Deteksi Palindrom
let Palindrom=(teks)=>{
    if(typeof(teks) == "string"){
        let a=teks.toLowerCase();
        let b=a.split("");
        let c=b.reverse();
        let d=c.join("");
        if (a==d){
            console.log("ini merupakan kata Palindrom");
        }else{
            console.log("ini bukan kata palindrom");
        } 
    }else{
        console.log("masukan kata bertipe string");
    }
}
Palindrom("Malam");

// Reverse Words
let reverseKalimat=(kalimat)=>{
    if(typeof(kalimat) == "string"){
        let x=kalimat.toLowerCase();
        let y=x.split(" ");
        let z=y.reverse();
        let w=z.join(" ");
        console.log(w);
        } 
        else{
        console.log("masukan kata bertipe string")
    }}
reverseKalimat("Malam ini aku sendiri");
//  let w =" ini adalah javascritp";
//  x=w.split(" ");
//  y=x.reverse();
//  z=x.join(" ");
//  console.log(z)



// Demy membeli makanan menggunakan aplikasi PijarFood.
// Dimana terdapat 2 buah kode promo:
// - Promo ‘PIJARFOOD5’ dengan ketentuan pemesanan minimal
// 50rb akan mendapat diskon 50%, dengan maksimal
// potongan sebesar 50rb.
// - Promo ‘DITRAKTIRPIJAR’ dengan ketentuan pemesanan
// minimal 25rb akan mendapatkan diskon 60%, dengan
// maksimal potongan sebesar 30rb.
// - Jika tidak menggunakan kode promo ‘false’

// Untuk pengiriman sejauh 2km pertama akan dikenakan tarif 5rb,
// dan setiap satu kilometer selanjutnya dikenakan penambahan
// 3rb. Untuk beberapa restoran dikenakan pajak yakni 5% dari
// harga makanan yang dipesan (true), jika tidak dikenakan pajak
// (false).

let PijarFood = (harga,voucher,jarak,pajak)=>{
    console.log(`Harga : ${harga}`)
    let diskon;
    let BiayaAntar;
    if (voucher=="PIJARFOOD5"){
         diskon=harga*50/100;
        if(harga>=50000 && diskon>50000){
            diskon=50000;
            console.log(`Potongan : ${diskon}`);
           
        }
        else if(harga>=50000 && diskon<=50000){ 
            console.log(`Potongan : ${diskon}`);
            
        }else{
            diskon=0;
            console.log(`Potongan : 0 `);
            
        }
    }else if(voucher=="DITRAKTIRPIJAR"){
         diskon=harga*60/100;
        if(harga>=25000 && diskon>30000){
            diskon=30000;
            console.log(`Potongan : ${diskon}`);
            
            }
            else if(harga>=25000 && diskon<=30000){ 
            console.log(`Potongan : ${diskon}`);
            
            }else{
            diskon=0;
                console.log(`Potongan : 0`);
                
            }
    }else{
        console.log(false);
    }
    let hargaAwal=2000;
    let tambahan=3000;
    if(jarak>2){
         BiayaAntar=(((jarak-2)*tambahan)+hargaAwal)
        console.log(`Biaya antar : ${BiayaAntar}`);
    }else{
        console.log(`Biaya antar : ${hargaAwal}`);
    }
    let pajak1;
    let subTotal;
    if(pajak==true){
    pajak1=harga*5/100;
    console.log(`Pajak : ${pajak1}`);
    subTotal=harga+pajak1+BiayaAntar-diskon;
    console.log(`SubTotal : ${subTotal}`);
    }else{
        console.log(`Pajak : 0`);
        subTotal=harga+BiayaAntar-diskon;
        console.log(`SubTotal : ${subTotal}`);
    }

}
PijarFood(40000,"PIJARFOOD5",5,false)


// 3.Diberikan sebuah variabel yang berisikan bilangan integer
// dengan ketentuan angka 0 (nol) dalam variabel tersebut
// merupakan pemisah antara satu bilangan dengan bilangan
// lainnya. Bilangan-bilangan tersebut akan dipisah dan diurutkan
// berdasarkan angka di bilangan-bilangan itu sendiri. Setelah itu,
// bilangan hasil pengurutan akan digabung kembali dengan tanpa
// pemisah dengan output berupa bilangan integer. Buatlah
// method/function yang menerima parameter hanya deret angka
// dan menghasilkan output seperti keterangan di atas.

let deretAngka=(cekBilangan)=>{
    let a=cekBilangan.toString();
    let b=a.split("0");
    console.log(b);
    let hasil =[];
    for(angka of b){
        hasil.push(angka.split("").sort().join(""));
    }
console.log(hasil.join(""));
}
deretAngka(5956560159466056);