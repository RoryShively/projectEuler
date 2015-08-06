testNum = 1000000;
numPalindrome = false;

reverse = function(s){
    return s.split("").reverse().join("");
}

isInt = function(n) {
   return n % 1 === 0;
}


while (numPalindrome === false && testNum > 1) {
	testNumeString = testNum.toString();
	testNumeStringReverse = reverse(testNumeString);


	if (testNumeString === testNumeStringReverse) {
		intFactor = 999;

		while (numPalindrome === false && intFactor > 99) {

			newInt = testNum / intFactor;

			if (isInt(newInt) === true && newInt.toString().length === 3) {
				console.log(testNum);
				console.log(intFactor);
				console.log(newInt);
				numPalindrome = true;
			}

			intFactor--;
		}

	}

	testNum--;
}

