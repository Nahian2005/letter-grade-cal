var num = prompt("Enter your marks in ICT IN HSC");

if(num > 100 || num < 0)
document.write("Salar pot. Aj projonto kono exam e dekchis kauke 100 r beshi ba 0 er kom paite? HAla. VAG");
    

else if (num <= 100 && num >= 80)

    document.write("Your Grade is: A+");


else if (num < 80 && num >= 70)

    document.write("Your Grade is: A");

else if (num < 70 && num >= 60)

    document.write("Your Grade is: A-");


else if (num < 60 && num >= 50)

    document.write ("Your Grade is: B");



else if (num < 50 && num >= 40)

    document.write("Your Grade is: C");



else if (num < 40 && num >= 33)

    document.write("Your Grade is: D");


else

    document.write("F***! You have Failed! Go eat GRASS IN YOUR HOME!");


