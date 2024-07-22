let gita = document.getElementById('chp');
let slok = document.getElementById('shlok');


const bhagavad = () => {
    fetch('https://vedicscriptures.github.io/chapters').then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log("data",data);

        data.forEach(element => {
            gita.innerHTML += `<li class="hover p-2" onclick="return printSlock(${element.chapter_number},${element.verses_count} )"> ${element.name}</li>`
        });
    }).catch((err)=>{
        console.log("err", err);
    }) 
}
bhagavad();
const printSlock = async (id, verses_count ) => { // 1 47
    slok.innerHTML = "";
    for (let x = 1; x < verses_count ; x++) { // 1 < 47
       let data = await fetch(`https://vedicscriptures.github.io/slok/${id}/${x}/`)
       let res = await data.json();
       console.log(res);
       slok.innerHTML += res.slok + "<br><br>";
    }

}