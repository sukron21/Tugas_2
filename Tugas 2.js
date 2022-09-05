// Deteksi Palindrom
let Palindrom=(teks)=>{
    if(typeof(teks) == "string"){
        let hurufKecil=teks.toLowerCase();
        let Arr=hurufKecil.split("");
        let rev=Arr.reverse();
        let gabungkan=rev.join("");

        if (hurufKecil==gabungkan){
            console.log("ini merupakan kata Palindrom");
        }else{
            console.log("ini bukan kata palindrom");
        }

    }else{
        console.log("masukan kata bertipe string");
    }
}
Palindrom("pagi");
Palindrom("malam");
Palindrom(1235);

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
// reverseKalimat(1);
reverseKalimat("hari ini saya siap belajar javascript");




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
    // console.log(`Harga : ${harga}`)
    let diskon;
    let BiayaAntar;
    if (voucher=="PIJARFOOD5"){
         diskon=harga*50/100;
        if(harga>=50000 && diskon>50000){
            diskon=50000;
            // console.log(`Potongan : ${diskon}`);
           
        }
        else if(harga>=50000 && diskon<=50000){ 
            // console.log(`Potongan : ${diskon}`);
            
        }else{
            diskon=0;
            // console.log(`Potongan : 0 `);
            
        }
    }else if(voucher=="DITRAKTIRPIJAR"){
         diskon=harga*60/100;
        if(harga>=25000 && diskon>30000){
            diskon=30000;
            // console.log(`Potongan : ${diskon}`);
            
            }
            else if(harga>=25000 && diskon<=30000){ 
            // console.log(`Potongan : ${diskon}`);
            
            }else{
            diskon=0;
                // console.log(`Potongan : 0`);
                
            }
    }else{
        console.log(false);
    }
    let hargaAwal=5000;
    let tambahan=3000;
    if(jarak>2){
         BiayaAntar=(((jarak-2)*tambahan)+hargaAwal)
        // console.log(`Biaya antar : ${BiayaAntar}`);
    }else{
        BiayaAntar=hargaAwal
        // console.log(`Biaya antar : ${BiayaAntar}`);
    }
    let pajak1;
    let subTotal;
    if(pajak==true){
    pajak1=harga*5/100;
    // console.log(`Pajak : ${pajak1}`);
    
    }else{
        pajak1=0;
        // console.log(`Pajak : 0`);
    }
    subTotal=harga+pajak1+BiayaAntar-diskon;
    console.log(`Harga          : ${harga}`)
    console.log(`Potongan       : ${diskon}`);
    console.log(`Biaya antar    : ${BiayaAntar}`);
    console.log(`Pajak          : ${pajak1}`);
    console.log(`SubTotal       : ${subTotal}`);
    
}
PijarFood(40000,"PIJARFOOD5",5,false)


// // 3.Diberikan sebuah variabel yang berisikan bilangan integer
// // dengan ketentuan angka 0 (nol) dalam variabel tersebut
// // merupakan pemisah antara satu bilangan dengan bilangan
// // lainnya. Bilangan-bilangan tersebut akan dipisah dan diurutkan
// // berdasarkan angka di bilangan-bilangan itu sendiri. Setelah itu,
// // bilangan hasil pengurutan akan digabung kembali dengan tanpa
// // pemisah dengan output berupa bilangan integer. Buatlah
// // method/function yang menerima parameter hanya deret angka
// // dan menghasilkan output seperti keterangan di atas.

let DevideandSort=(cekBilangan)=>{
    if(typeof(cekBilangan) == "number"){
            let a=cekBilangan.toString();
            let b=a.split("0");
            console.log(b);
            let hasil =[];
            for(let i=0;i<b.length;i++){
            b[i]=b[i].split("").sort().join("")
            }
        console.log(b.join(""));
        }else{
            console.log("salah")
        }
}
DevideandSort(5956560159466056);