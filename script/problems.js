 class problem{
     constructor(p1,p2,p3,link,linkName){
         this.p1=p1;
         this.p2=p2;
         this.p3=p3;
         this.link=link;
         this.linkN=linkName;
     }
     get gp1(){
         return this.p1;
     }
     get gp2(){
        return this.p2;
    }
    get gp3(){
        return this.p3;
    }
     get glink(){
         return this.linkGen();
     }
     linkGen()
     {
         return '<a href="'+link+'">'+linkN+'</a>';
     }

}
let canadaP = new problem('Brak drugorzędnej obsługi medycznej co wiąże się z koniecznością dużych wydatków  na usługi zdrowotne niezależnie od stanu majątkowego.','Brak rozwoju na rynku usług, utrudniony dostęp do internetu i telefonii.','Handel międzyprowincyjny jest utrudniony i sprawia wiele problemów.','https://www.canadahelps.org/en/','Canada Helps');

let usaP = new problem('','','','','');
console.log(usaP.gp1);