import React from 'react';

export const serviceDetails: Record<string, { title: string, benefits: string[], content: React.ReactNode }> = {
  "apdailos-remonto-darbai": {
    title: "Apdailos, remonto darbai Kaune",
    benefits: ["Profesionalus paviršių paruošimas", "Glaistymas, dažymas, tapetavimas", "Plytelių klijavimas", "Grindų klojimas"],
    content: (
      <>
        <p>Atliekame visus vidaus apdailos ir remonto darbus. Nesvarbu, ar tai kosmetinis remontas, ar pilnas patalpų įrengimas nuo nulio – mūsų komanda užtikrina aukščiausią kokybę.</p>
        <p>Ilgametė patirtis leidžia mums dirbti greitai ir tiksliai, parenkant tinkamiausias medžiagas Jūsų projektui.</p>
      </>
    )
  },
  "betonavimo-darbai": {
    title: "Betonavimo darbai",
    benefits: ["Pramoninės grindys", "Terasų ir laiptų betonavimas", "Atraminės sienutės", "Aukščiausia betono kokybė"],
    content: (
      <>
        <p>Siūlome profesionalias betonavimo paslaugas. Liejame pramonines grindis, betonuojame laiptus, aikšteles ir kitas konstrukcijas.</p>
        <p>Mūsų meistrai naudoja modernią įrangą, todėl užtikriname lygius paviršius ir ilgaamžius rezultatus.</p>
      </>
    )
  },
  "elektros-darbai": {
    title: "Elektros darbai, elektrikai",
    benefits: ["Vidaus elektros instaliacija", "Skydelių surinkimas", "Apšvietimo sprendimai", "Gedimų šalinimas"],
    content: (
      <>
        <p>Teikiame kompleksines elektros instaliacijos paslaugas tiek naujai statomuose, tiek renovuojamuose pastatuose.</p>
        <p>Visi darbai atliekami laikantis griežčiausių saugumo reikalavimų, užtikrinant Jūsų namų ar biuro elektros sistemų ilgaamžiškumą.</p>
      </>
    )
  },
  "fasadai-apdaila": {
    title: "Fasadai, fasadų apdaila",
    benefits: ["Ventiliuojami fasadai", "Dekoratyvinis tinkavimas", "Klinkerio klijavimas", "Pastato estetikos atnaujinimas"],
    content: (
      <>
        <p>Fasadas – tai pastato vizitinė kortelė. Atliekame įvairaus tipo fasadų apdailos darbus: nuo dekoratyvinio tinko iki modernių ventiliuojamų sistemų.</p>
        <p>Dirbame su aukštos kokybės medžiagomis, atspariomis aplinkos poveikiui.</p>
      </>
    )
  },
  "griovimo-darbai": {
    title: "Griovimo darbai",
    benefits: ["Sienų ir pertvarų griovimas", "Statybinių atliekų išvežimas", "Saugumo užtikrinimas", "Greitas darbų atlikimas"],
    content: (
      <>
        <p>Atliekame saugius ir operatyvius pastatų bei vidaus konstrukcijų griovimo darbus.</p>
        <p>Užtikriname, kad darbai bus atlikti švariai, laikantis visų saugumo normų, o statybinis laužas – tinkamai utilizuotas.</p>
      </>
    )
  },
  "inzinerines-komunikacijos": {
    title: "Inžinerinės komunikacijos",
    benefits: ["Vandentiekio tinklai", "Nuotekų sistemos", "Drenažo įrengimas", "Pilnas projektų derinimas"],
    content: (
      <>
        <p>Kokybiškos inžinerinės komunikacijos yra esminė patogaus gyvenimo dalis. Projektuojame ir įrengiame lauko bei vidaus vandentiekio ir nuotekų tinklus.</p>
        <p>Mūsų inžinieriai parinks optimaliausius sprendimus pagal Jūsų sklypo ir pastato specifiką.</p>
      </>
    )
  },
  "namu-statyba": {
    title: "Namų statyba Kaune",
    benefits: ["Statyba nuo pamatų iki rakto", "Mūriniai ir karkasiniai namai", "Griežta kokybės kontrolė", "Aiškūs terminai"],
    content: (
      <>
        <p>Esame pilno ciklo namų statybos partneris. Pastatysime Jūsų svajonių namą atsakingai, laikantis visų technologinių reikalavimų ir A++ energetinės klasės standartų.</p>
        <p>Mes prisiimame atsakomybę už visą procesą, todėl Jums nereikės ieškoti atskirų meistrų.</p>
      </>
    )
  },
  "pamatai": {
    title: "Pamatai",
    benefits: ["Gręžtiniai pamatai", "Plokštuminiai pamatai", "Juostiniai pamatai", "Pamatų hidroizoliacija"],
    content: (
      <>
        <p>Tvirtas pamatas – ilgaamžio namo pagrindas. Įrengiame visų tipų pamatus, pritaikytus pagal grunto specifiką ir pastato apkrovas.</p>
        <p>Garantuojame tikslumą ir kokybę atliekant armavimo, klojinių montavimo bei betonavimo darbus.</p>
      </>
    )
  },
  "pjovimo-grezimo-darbai": {
    title: "Pjovimo, gręžimo darbai",
    benefits: ["Deimantinis gręžimas", "Betono pjovimas", "Angų pjovimas", "Darbas be dulkių"],
    content: (
      <>
        <p>Atliekame tikslius deimantinio pjovimo ir gręžimo darbus betone, mūre, gelžbetonyje.</p>
        <p>Naudojame profesionalią įrangą, leidžiančią išpjauti angas durims, langams ar komunikacijoms greitai ir be vibracijos.</p>
      </>
    )
  },
  "renovacija": {
    title: "Renovacija",
    benefits: ["Energetinio efektyvumo didinimas", "Pilnas pastatų atnaujinimas", "Konstrukcijų stiprinimas", "Patalpų perplanavimas"],
    content: (
      <>
        <p>Seniems pastatams suteikiame naują gyvybę. Atliekame kompleksinę gyvenamųjų ir komercinių pastatų renovaciją.</p>
        <p>Atnaujiname ne tik išvaizdą, bet ir inžinerines sistemas bei užtikriname geresnę šilumos izoliaciją.</p>
      </>
    )
  },
  "restauravimas": {
    title: "Restauravimas",
    benefits: ["Autentiškumo išsaugojimas", "Istorinių pastatų atnaujinimas", "Kruopštus rankų darbas", "Specialių medžiagų naudojimas"],
    content: (
      <>
        <p>Istorinių ar kultūros paveldo objektų restauravimas reikalauja specifinių žinių ir pagarbos praeičiai.</p>
        <p>Mūsų komanda atlieka restauravimo darbus atkuriant pradinę pastatų išvaizdą bei struktūrą.</p>
      </>
    )
  },
  "santechnikos-darbai": {
    title: "Santechnikos darbai",
    benefits: ["Vamzdynų keitimas", "Prietaisų montavimas", "Šildymo sistemų pajungimas", "Gedimų šalinimas"],
    content: (
      <>
        <p>Teikiame visas santechnikos paslaugas: nuo smulkaus remonto ir prietaisų pajungimo iki pilno namo santechnikos mazgų įrengimo.</p>
        <p>Dirbame operatyviai ir naudojame tik patikimų gamintojų detales.</p>
      </>
    )
  },
  "specialieji-statybos-darbai": {
    title: "Specialieji statybos darbai",
    benefits: ["Nestandartinės konstrukcijos", "Aukštalipių darbai", "Specifiniai sprendimai", "Tiksli inžinerija"],
    content: (
      <>
        <p>Atliekame specialiuosius statybos darbus, reikalaujančius ypatingos kvalifikacijos ir techninės bazės.</p>
        <p>Kreipkitės į mus su sudėtingais ar nestandartiniais projektais – surasime efektyvų sprendimą.</p>
      </>
    )
  },
  "statybos-darbai": {
    title: "Statybos darbai",
    benefits: ["Mūrijimas", "Konstrukcijų surinkimas", "Stogų dengimas", "Sąmatų sudarymas"],
    content: (
      <>
        <p>Atliekame bendruosius statybos darbus visuose statybų etapuose. Organizuojame procesą taip, kad darbai vyktų sklandžiai ir be prastovų.</p>
        <p>Esame patikimas partneris tiek mažiems remontams, tiek stambiems komerciniams objektams.</p>
      </>
    )
  },
  "stogo-dengimas": {
    title: "Stogo dengimas",
    benefits: ["Šlaitiniai stogai", "Plokštieji stogai", "Stogo apšiltinimas", "Skardinimo darbai"],
    content: (
      <>
        <p>Įrengiame, keičiame ir remontuojame įvairaus tipo stogus. Profesionaliai sumontuotas stogas – geriausia apsauga Jūsų pastatui.</p>
        <p>Atliekame visus darbus: nuo gegnių montavimo iki lietaus nuvedimo sistemų įrengimo.</p>
      </>
    )
  },
  "sildomos-grindys": {
    title: "Šildomos grindys",
    benefits: ["Tolygus šilumos pasiskirstymas", "Vamzdynų klojimas", "Kolektorių pajungimas", "Sistemos testavimas"],
    content: (
      <>
        <p>Grindinis šildymas yra vienas efektyviausių ir komfortiškiausių šildymo būdų. Projektuojame ir montuojame šildomų grindų sistemas.</p>
        <p>Paruošiame pagrindą, klojame izoliaciją, vamzdynus bei atliekame pilną sistemos balansavimą ir paleidimą.</p>
      </>
    )
  },
  "sildymo-sistemu-irengimas": {
    title: "Šildymo sistemų, katilinių įrengimas",
    benefits: ["Šilumos siurblių montavimas", "Katilinių įrengimas", "Sistemų modernizavimas", "Automatikos pajungimas"],
    content: (
      <>
        <p>Įrengiame modernias, ekonomiškas ir ekologiškas šildymo sistemas bei katilines.</p>
        <p>Padedame išsirinkti optimaliausią šilumos šaltinį (šilumos siurbliai oras-vanduo, geoterminis šildymas ar kt.) ir profesionaliai jį sumontuojame.</p>
      </>
    )
  },
  "siltinimas-izoliacija": {
    title: "Šiltinimas, techninė izoliacija",
    benefits: ["Fasadų šiltinimas", "Stogų šiltinimas", "Garso izoliacija", "Hidroizoliacija"],
    content: (
      <>
        <p>Tinkamas pastato apšiltinimas – tai investicija į mažesnes šildymo sąskaitas ir komfortą. Šiltiname fasadus, stogus, pamatus.</p>
        <p>Taip pat atliekame patalpų garso izoliacijos bei drėgnų patalpų hidroizoliacijos įrengimo darbus.</p>
      </>
    )
  },
  "vedinimas-ventiliacija": {
    title: "Vėdinimas, ventiliacija",
    benefits: ["Rekuperacijos sistemų montavimas", "Ortakių vedžiojimas", "Pramoninė ventiliacija", "Sistemų balansavimas"],
    content: (
      <>
        <p>Švarus ir gaivus oras namuose – būtinas gerai savijautai. Projektuojame ir montuojame vėdinimo bei rekuperacijos sistemas.</p>
        <p>Dirbame tiek privačiuose namuose, tiek komercinės paskirties patalpose, užtikrindami efektyvius oro mainus be šilumos nuostolių.</p>
      </>
    )
  }
};
