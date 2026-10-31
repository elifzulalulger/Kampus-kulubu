const aramaKutusu = document.getElementById("arama");
const etkinlikler = document.querySelectorAll(".etkinlik");
const sonuc = document.getElementById("sonuc");
const temizleButonu = document.getElementById("temizle");

function etkinlikleriAra() {
    const arananKelime = aramaKutusu.value.trim().toLowerCase();
        let bulunanSayisi = 0;

            etkinlikler.forEach(function(etkinlik) {
                    const metin = etkinlik.textContent.toLowerCase();

                            if (metin.includes(arananKelime)) {
                                        etkinlik.style.display = "block";
                                                    bulunanSayisi++;
                                                            } else {
                                                                        etkinlik.style.display = "none";
                                                                                }
                                                                                    });

                                                                                        if (arananKelime === "") {
                                                                                                sonuc.textContent = "Toplam " + bulunanSayisi + " etkinlik listeleniyor.";
                                                                                                    } else {
                                                                                                            sonuc.textContent = bulunanSayisi + " etkinlik bulundu.";
                                                                                                                }

                                                                                                                    if (bulunanSayisi === 0) {
                                                                                                                            sonuc.textContent = "Aradığınız etkinlik bulunamadı.";
                                                                                                                                }
                                                                                                                                }

                                                                                                                                aramaKutusu.addEventListener("input", etkinlikleriAra);

                                                                                                                                temizleButonu.addEventListener("click", function() {
                                                                                                                                    aramaKutusu.value = "";
                                                                                                                                        etkinlikleriAra();
                                                                                                                                        });

                                                                                                                                        etkinlikleriAra();