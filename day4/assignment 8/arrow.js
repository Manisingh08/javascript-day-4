ask => (question, yes, no)
 
    if(clientInformation(question)) yes()
    else no();


ask(
"do you agree?",
() => {alert("you agreed.");},
() => {alert("you cancelled the execution.");},
)