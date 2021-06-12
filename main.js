const words = ["Αφγανιστάν", "Αλβανία", "Αλγερία", "Ανδόρα", "Αγκόλα", "Ανγκουίλα", "Αντίγκουα Μπαρμπούντα", "Αργεντινή", "Αρμενία", "Αρούμπα", "Αυστραλία", "Αυστρία", "Αζερμπαϊτζάν","Μπαχάμες","Μπαχρέιν","Μπαγκλαντές","Μπαρμπάντος","Λευκορωσία","Βέλγιο","Μπελίζ","Μπενίν","Βερμούδες","Μπουτάν","Βολιβία","Βοσνία Ερζεγοβίνη","Μποτσουάνα","Βραζιλία","Βρετανικές Παρθένοι Νήσοι","Μπρουνέι","Βουλγαρία","Μπουρκίνα Φάσο","Μπουρούντι","Καμπότζη","Καμερούν","Πράσινο Ακρωτήριο","Νησιά Καϊμάν" , "Τσαντ", "Χιλή", "Κίνα", "Κολομβία", "Κονγκό", "Νησιά Κουκ", "Κόστα Ρίκα", "Ακτή Ελεφαντοστού", "Κροατία","Κούβα", "Κύπρος", "Τσεχική Δημοκρατία", "Δανία", "Τζιμπουτί", "Δομίνικα", "Δομινικανή Δημοκρατία", "Εκουαδόρ", "Αίγυπτος", "Ελ Σαλβαδόρ", "Ισημερινή Γουινέα", "Εσθονία", "Αιθιοπία","Νήσοι Φώκλαντ","Νησιά Φερόες","Φίτζι","Φινλανδία","Γαλλία","Γαλλική Πολυνησία","Γαλλικές Δυτικές Ινδίες","Γκαμπόν","Γκάμπια","Γεωργία","Γερμανία" , "Γκάνα", "Γιβραλτάρ", "Ελλάδα", "Γροιλανδία", "Γρενάδα", "Γκουάμ", "Γουατεμάλα", "Γκέρνσεϊ", "Γουινέα", "Γουινέα Μπισσάου", "Γουιάνα", "Αϊτή", "Ονδούρα", "Χονγκ Κονγκ", "Ουγγαρία", "Ισλανδία", "Ινδία" , "Ινδονησία", "Ιράν", "Ιράκ", "Ιρλανδία", "Νήσος του Μαν", "Ισραήλ", "Ιταλία", "Τζαμάικα", "Ιαπωνία", "Τζέρσεϋ", "Ιορδανία", "Καζακστάν" , "Κένυα", "Κουβέιτ", "Δημοκρατία της Κιργιζίας", "Λάος", "Λετονία", "Λίβανος", "Λεσόθο", "Λιβερία", "Λιβύη", "Λιχτενστάιν", "Λιθουανία", "Λουξεμβούργο", "Μακάο", "Μακεδονία", "Μαδαγασκάρη", "Μαλάουι", "Μαλαισία", "Μαλδίβες", "Μάλι", "Μάλτα", "Μαυριτανία", "Μαυρίκιος", "Μεξικό", "Μολδαβία", "Μονακό","Μογγολία","Μαυροβούνιο","Μοντσερράτ","Μαρόκο","Μοζαμβίκη","Ναμίμπια","Νεπάλ","Ολλανδία","Ολλανδικές Αντίλλες","Νέα Καληδονία","Νέα Ζηλανδία","Νικαράγουα","Νίγηρας","Νιγηρία","Νορβηγία","Ομάν","Πακιστάν","Παλαιστίνη","Παναμάς","Παπούα Νέα Γουινέα","Παραγουάη","Περού","Φιλιππίνες","Πολωνία","Πορτογαλία","Πουέρτο Ρίκο","Κατάρ","Ρεϊνιόν","Ρουμανία","Ρωσία","Ρουάντα","Σαμόα","Άγιος Μαρίνος","Δορυφόρος" , "Σαουδική Αραβία", "Σενεγάλη", "Σερβία", "Σεϋχέλλες", "Σιέρα Λεόνε", "Σιγκαπούρη", "Σλοβακία", "Σλοβενία", "Νότια Αφρική", "Νότια Κορέα", "Ισπανία", "Σρι Λάνκα","Σουδάν","Σουρινάμ","Σουαζιλάνδη","Σουηδία","Ελβετία","Συρία","Ταϊβάν","Τατζικιστάν","Τανζανία","Ταϊλάνδη", "Τόγκο", "Τόνγκα", "Τρινιντάντ και Τομπάγκο", "Τυνησία", "Τουρκία", "Τουρκμενιστάν", "Τούρκοι Κάικος", "Ουγκάντα", "Ουκρανία", "Ηνωμένα Αραβικά Εμιράτα", "Ηνωμένο Βασίλειο", "Ουρουγουάη", "Ουζμπεκιστάν", "Βενεζουέλα", "Βιετνάμ", "Παρθένοι Νήσοι", "Υεμένη", "Ζάμπια", "Ζιμπάμπουε"];

const success_message = document.querySelector(".result_success");
const failure_message = document.querySelector(".result_failure");
const btnLetters = document.querySelectorAll(".letters span"); // BUTTONS LETTERS TO PRESS
const hidden_word = document.querySelector(".hidden_word");    // hidden word div
let word = words[Math.floor(Math.random() * words.length)];    // pick a random word from words array
let lathos1 = document.querySelector(".head");
let lathos2 = document.querySelector(".body");
let lathos3 = document.querySelector(".left-hand")
let lathos4 = document.querySelector(".right-hand")
let lathos5 = document.querySelector(".left-leg")
let lathos6 = document.querySelector(".right-leg")




// random word from the array 

document.addEventListener("DOMContentLoaded", (e) => {
    
      e.preventDefault();         
      word = word.toUpperCase();
      let attempt = 0;
        [...word].forEach(wordsletter => {                  //create a span element for every letter in choosen word
            wordsletter =  wordsletter.normalize("NFD").replace(/[\u0300-\u036f]/g, "")     //get rid of greek accents capital letters
            span = document.createElement("span");
            
            
            
            if(wordsletter === " "){  // get rid of empty spaces for multiple word country names
                //  span.remove()
                 span.style.opacity="0";
                
            }
                
            span.innerHTML = wordsletter; // place the letter inside the span element
            
            hidden_word.appendChild(span); //place all spans inside the 'hidden_word' element
            
            })
       
        
//    check if pressed key exist in hidden word 
      let hidden = hidden_word.childNodes
      
      
     console.log(word)
      btnLetters.forEach(btn => {
          
          btn.addEventListener("click", (e) => {
           
            
            let leksh = hidden_word.innerText;
            let koumpi = e.target.innerText;

            
            //  lathos gramma
            if(!leksh.includes(koumpi)){  //IF PRESSED LETTERS ARE NOT INSIDE WORD(LEKSH)
                document.querySelector(`.stage${attempt+5}`).style.stroke = "red"
                btn.style.backgroundColor = "red"
                attempt++;
                if(attempt == 6){
                    failure_message.style.display = "block"; //DISPLAY FAILURE MESSAGE
                    hidden.forEach(i => {
                        i.classList.add("reveal")  // reveal the word if players loses
                    })
                }
            }
            console.log(attempt)
            
            // swsto gramma
            let correct_letters = [];
            hidden.forEach(e => {
                
                if(leksh.includes(koumpi) && e.innerText == koumpi){ //IF PRESSED LETTERS ARE INSIDE WORD(LEKSH)
                   
                   btn.style.backgroundColor = "green"
                   e.classList.add("reveal") //REVEAL THE LETTER
                   
                   }
                   if(e.classList.contains("reveal") || e.style.opacity == "0"){
                    correct_letters.push(e)
                }
            if(correct_letters.length == hidden.length && attempt < 6){ //DISPLAY SUCCESS MESSAGE
                success_message.style.display = "block"
               
                
            }
                
                
            })
                 
        })
        
    })    
           
})
                
                           
                            
                           
                 
                  
                 
                 
            
              
         
                    
                    
                    
                    
                
                
            
            