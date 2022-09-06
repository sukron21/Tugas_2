function pemisah(angka) {
    if (typeof angka == "number") {
      //rubah ke string
      const rubahString = angka.toString();
  
      // merubah inputan string pada parameter kedalam array dengan method split
      const arrayAngka = rubahString.split("0");
      // hasil "595656" "159466" "56"
  
      // split array
      for (let i = 0; i < arrayAngka.length; i++) {
        arrayAngka[i] = arrayAngka[i].split("");
      }
  // split dan join
      for (let i = 0; i < arrayAngka.length; i++) {
        arrayAngka[i] = arrayAngka[i].sort().join("");
      }
  
      //join
      const hasilSorting = arrayAngka.join("");
      console.log(hasilSorting);
    }
  }
  pemisah(5956560159466056);