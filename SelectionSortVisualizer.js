
fill(0, 0, 0);
textSize(12);
text("The numbers underlined in blue are being compared to the other array numbers to see if they need to switch. The numbers underlined in green are the lowest numbers from the new index.", 10, 10, 400, 100);

//declaring position of the array numbers
var x=25;
var y=64;

//function to display the array
var displayArray = function(array, lowest, index) {
    fill(255, 0, 0);
    textFont(createFont("monospace"), 12);
    //looping through each position in the array
    for(var i=0; i<array.length; i++){
        text(array[i], x, y);
        strokeWeight(4);
        
        //blue value that is being compared 
        if (array[i] === array[index])
        {
            stroke(9, 0, 255);
            line(x-2, y+6, x+11, y+6);
        }
        
        //green minimum value
        if (array[i] === array[lowest])
        {
            stroke(0, 255, 38);
            line(x-2, y+2, x+11, y+2);
        }
          
        x=x+25;
    }
    y=y+25;
    x=25;
};

//this function swaps the two values 
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

//this function checks to see if there is smaller value in the array
var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

//this function contains the loop that checks all positions in the array and sends the values to the other functions
var selectionSort = function(array) {
    var minimum;
    for (var i=0; i<array.length; i++){
        var minimumIndex = i;
        minimum = indexOfMinimum(array, i);
        displayArray(array, minimum, minimumIndex);
        swap(array, i, minimum);
    }
};

//stating which example
fill(21, 235, 224);
textSize(16);
text("Example 1", 220, 102);
text("Example 2", 220, 207);
text("Example 3", 220, 294);
text("Example 4", 220, 370);

//creating lines that separate each example
strokeWeight(2);
stroke(5, 0, 0);
line(0, 150, 400, 150);
line(0, 250, 400, 250);
line(0, 325, 400, 325);

//all four arrrays with assertions

var array = [2, 1, 7, 0];
selectionSort(array);
Program.assertEqual(array, [0, 1, 2, 7]);

var array2 = [9, 3, -5, 2];
selectionSort(array2);
Program.assertEqual(array2, [-5, 2, 3, 9]);

var array3 = [7, 2, 4];
selectionSort(array3);
Program.assertEqual(array3, [2, 4, 7]);

var array4 = [8, 6, 1];
selectionSort(array4);
Program.assertEqual(array4, [1, 6, 8]);
