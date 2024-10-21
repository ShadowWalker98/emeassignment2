//change 5 to the total number of questions
var total=10;
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Good work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

// Questions and Choices
question[1] = "What does CSS stand for?";
choice1[1] = "Creative Style Sheets";
choice1[2] = "Cascading Style Sheets";
choice1[3] = "Computer Style Sheets";
choice1[4] = "Colorful Style Sheets";

question[2] = "Which HTML tag is used to define an internal style sheet?";
choice2[1] = "<style>";
choice2[2] = "<script>";
choice2[3] = "<css>";
choice2[4] = "<link>";

question[3] = "Which CSS property controls the text size?";
choice3[1] = "font-style";
choice3[2] = "text-size";
choice3[3] = "font-size";
choice3[4] = "text-style";

question[4] = "How do you select an element with the class 'container' in CSS?";
choice4[1] = ".container";
choice4[2] = "#container";
choice4[3] = "container";
choice4[4] = "*container";

question[5] = "Which property is used to change the background color in CSS?";
choice5[1] = "color";
choice5[2] = "background-color";
choice5[3] = "bg-color";
choice5[4] = "background";

question[6] = "Which CSS property is used to change the text color of an element?";
choice6[1] = "fg-color";
choice6[2] = "text-color";
choice6[3] = "color";
choice6[4] = "font-color";

question[7] = "Which CSS property is used to control the space between lines of text?";
choice7[1] = "spacing";
choice7[2] = "letter-spacing";
choice7[3] = "line-height";
choice7[4] = "text-spacing";

question[8] = "How do you make a list without bullets in CSS?";
choice8[1] = "list-style: none;";
choice8[2] = "list-type: no-bullet;";
choice8[3] = "bullet: none;";
choice8[4] = "text-decoration: none;";

question[9] = "How do you make text bold in CSS?";
choice9[1] = "font-weight: bold;";
choice9[2] = "font-style: bold;";
choice9[3] = "text-decoration: bold;";
choice9[4] = "font-weight: bolder;";

question[10] = "Which property is used to add padding inside an element in CSS?";
choice10[1] = "margin";
choice10[2] = "padding";
choice10[3] = "border";
choice10[4] = "spacing";

// Solutions (Correct answers)
solution[1] = "b";  // Cascading Style Sheets
solution[2] = "a";  // <style>
solution[3] = "c";  // font-size
solution[4] = "a";  // .container
solution[5] = "b";  // background-color
solution[6] = "c";  // color
solution[7] = "c";  // line-height
solution[8] = "a";  // list-style: none;
solution[9] = "a";  // font-weight: bold;
solution[10] = "b"; // padding
