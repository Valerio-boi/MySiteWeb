import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

export const productsGenerator = () => {
  const items = [];

  items.push({
    Numero: "1",
    kyu: "8",
    Codewars: (
      <a href="https://www.codewars.com/kata/523b4ff7adca849afe000035">
        Function 1 - hello world
      </a>
    ),
    Soluzione: (
      <a
        href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/FunctionHelloWorld.java"
        target="_blank"
      >
        Function 1 - hello world
      </a>
    ),
  });
  items.push({
    Numero: "2",
    kyu: "8",
    Codewars: (
      <a href="https://www.codewars.com/kata/55ca77fa094a2af31f00002a">
        Grasshopper - Messi Goals
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/GrasshopperMessiGoals.java">
        Grasshopper - Messi Goals
      </a>
    ),
  });
  items.push({
    Numero: "3",
    kyu: "8",
    Codewars: (
      <a href="https://www.codewars.com/kata/577ff15ad648a14b780000e7">
        Welcome!
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/Welcome.java">
        Welcome!
      </a>
    ),
  });
  items.push({
    Numero: "4",
    kyu: "8",
    Codewars: (
      <a href="https://www.codewars.com/kata/5265326f5fda8eb1160004c8">
        Convert a Number to a String!
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/ConvertAnumberToAstring.java">
        Convert a Number to a String!
      </a>
    ),
  });
  items.push({
    Numero: "5",
    kyu: "8",
    Codewars: (
      <a href="https://www.codewars.com/kata/53da3dbb4a5168369a0000fe">
        Even or Odd
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/EvenorOdd.java">
        Even or Odd
      </a>
    ),
  });
  items.push({
    Numero: "6",
    kyu: "8",
    Codewars: (
      <a href="https://www.codewars.com/kata/55c0a79e20be94c91400014b">
        Playing with cubes I
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/PlayingwithcubesI.java">
        Playing with cubes I
      </a>
    ),
  });
  items.push({
    Numero: "7",
    kyu: "8",
    Codewars: (
      <a href="https://www.codewars.com/kata/55d24f55d7dd296eb9000030">
        Grasshopper - Summation
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/GrasshopperSummation.java">
        Grasshopper - Summation
      </a>
    ),
  });
  items.push({
    Numero: "8",
    kyu: "8",
    Codewars: (
      <a href="https://www.codewars.com/kata/5583090cbe83f4fd8c000051">
        Convert number to reversed array of digits
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/ConvertNumberToReversedArrayOfDigits.java">
        Convert number to reversed array of digits
      </a>
    ),
  });
  items.push({
    Numero: "9",
    kyu: "8",
    Codewars: (
      <a href="https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0">
        Remove First and Last Character
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/RemoveFirstAndLastCharacter.java">
        Remove First and Last Character
      </a>
    ),
  });
  items.push({
    Numero: "10",
    kyu: "8",
    Codewars: (
      <a href="https://www.codewars.com/kata/50ee6b0bdeab583673000025">
        Basic variable assignment
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/BasicVariableAssignment.java">
        Basic variable assignment
      </a>
    ),
  });
  items.push({
    Numero: "11",
    kyu: "8",
    Codewars: (
      <a href="https://www.codewars.com/kata/56f173a35b91399a05000cb7">
        Squash the bugs
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/SquashTheBugs.java">
        Squash the bugs
      </a>
    ),
  });
  items.push({
    Numero: "12",
    kyu: "8",
    Codewars: (
      <a href="https://www.codewars.com/kata/53369039d7ab3ac506000467">
        Convert boolean values to strings 'Yes' or 'No'.
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/ConvertBooleanValuesToStringsYesOrNo.java">
        Convert boolean values to strings 'Yes' or 'No'.
      </a>
    ),
  });
  items.push({
    Numero: "13",
    kyu: "8",
    Codewars: (
      <a href="https://www.codewars.com/kata/50654ddff44f800200000004">
        Multiply
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/Multiply.java">
        Multiply
      </a>
    ),
  });
  items.push({
    Numero: "14",
    kyu: "8",
    Codewars: (
      <a href="https://www.codewars.com/kata/57eae20f5500ad98e50002c5">
        Remove String Spaces
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/RemoveStringSpaces.java">
        Remove String Spaces
      </a>
    ),
  });
  items.push({
    Numero: "15",
    kyu: "7",
    Codewars: (
      <a href="https://www.codewars.com/kata/582cb0224e56e068d800003c">
        Keep Hydrated!
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars/blob/master/Java/Keep%20Hydrated!/src/it/raffo/codewars/KeepHydrated.java">
        Keep Hydrated!
      </a>
    ),
  });
  items.push({
    Numero: "16",
    kyu: "7",
    Codewars: (
      <a href="https://www.codewars.com/kata/535474308bb336c9980006f2">
        Greet Me
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/GreetMe.java">
        Greet Me
      </a>
    ),
  });
  items.push({
    Numero: "17",
    kyu: "7",
    Codewars: (
      <a href="https://www.codewars.com/kata/5949481f86420f59480000e7">
        Odd or Even?
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/OddorEven.java">
        Odd or Even?
      </a>
    ),
  });
  items.push({
    Numero: "18",
    kyu: "7",
    Codewars: (
      <a href="https://www.codewars.com/kata/59cfc000aeb2844d16000075">
        Alternate capitalization
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/AlternateCapitalization.java">
        Alternate capitalization
      </a>
    ),
  });
  items.push({
    Numero: "19",
    kyu: "7",
    Codewars: (
      <a href="https://www.codewars.com/kata/57e92812750fcc051800004d">
        Holiday VII - Local Talk
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/HolidayVIILocalTalk.java">
        Holiday VII - Local Talk
      </a>
    ),
  });
  items.push({
    Numero: "20",
    kyu: "7",
    Codewars: (
      <a href="https://www.codewars.com/kata/54ba84be607a92aa900000f1">
        Isograms
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/Isograms.java">
        Isograms
      </a>
    ),
  });
  items.push({
    Numero: "21",
    kyu: "7",
    Codewars: (
      <a href="https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9">
        Shortest Word
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/ShortestWord.java">
        Shortest Word
      </a>
    ),
  });
  items.push({
    Numero: "22",
    kyu: "7",
    Codewars: (
      <a href="https://www.codewars.com/kata/54ff3102c1bad923760001f3">
        Vowel Count
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/VowelCount.java">
        Vowel Count
      </a>
    ),
  });
  items.push({
    Numero: "23",
    kyu: "7",
    Codewars: (
      <a href="https://www.codewars.com/kata/56606694ec01347ce800001b">
        Is this a triangle?
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/Isthisatriangle.java">
        Is this a triangle?
      </a>
    ),
  });
  items.push({
    Numero: "24",
    kyu: "7",
    Codewars: (
      <a href="https://www.codewars.com/kata/55f2b110f61eb01779000053">
        Beginner Series #3 Sum of Numbers
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/BeginnerSeries3SumOfNumbers.java">
        Beginner Series #3 Sum of Numbers
      </a>
    ),
  });
  items.push({
    Numero: "25",
    kyu: "7",
    Codewars: (
      <a href="https://www.codewars.com/kata/5467e4d82edf8bbf40000155">
        Descending Order
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/DescendingOrder.java">
        Descending Order
      </a>
    ),
  });
  items.push({
    Numero: "26",
    kyu: "6",
    Codewars: (
      <a href="https://www.codewars.com/kata/515de9ae9dcfc28eb6000001">
        Split Strings
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/SplitStrings.java">
        Split Strings
      </a>
    ),
  });
  items.push({
    Numero: "27",
    kyu: "6",
    Codewars: (
      <a href="https://www.codewars.com/kata/55c45be3b2079eccff00010f">
        Your order, please
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/YourOrderPlease.java">
        Your order, please
      </a>
    ),
  });
  items.push({
    Numero: "28",
    kyu: "6",
    Codewars: (
      <a href="https://www.codewars.com/kata/5208f99aee097e6552000148">
        Break camelCase
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/BreakCamelCase.java">
        Break camelCase
      </a>
    ),
  });
  items.push({
    Numero: "29",
    kyu: "6",
    Codewars: (
      <a href="https://www.codewars.com/kata/5340298112fa30e786000688">
        Difference of 2
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/Differenceof2.java">
        Difference of 2
      </a>
    ),
  });
  items.push({
    Numero: "30",
    kyu: "6",
    Codewars: (
      <a href="https://www.codewars.com/kata/5a9c35e9ba1bb5c54a0001ac">
        Sum of Two Integers
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/SumOfTwoIntegers.java">
        Sum of Two Integers
      </a>
    ),
  });
  items.push({
    Numero: "31",
    kyu: "6",
    Codewars: (
      <a href="https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1">
        Counting Duplicates
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/CountingDuplicates.java">
        Counting Duplicates
      </a>
    ),
  });
  items.push({
    Numero: "32",
    kyu: "6",
    Codewars: (
      <a href="https://www.codewars.com/kata/58fa9898dfec0ef150000014">
        Dude, my computer cannot count!
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/DudeMyComputerCannotCount!.java">
        Dude, my computer cannot count!
      </a>
    ),
  });
  items.push({
    Numero: "33",
    kyu: "6",
    Codewars: (
      <a href="https://www.codewars.com/kata/54da5a58ea159efa38000836">
        Find the odd int
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/FindTheOddInt.java">
        Find the odd int
      </a>
    ),
  });
  items.push({
    Numero: "34",
    kyu: "6",
    Codewars: (
      <a href="https://www.codewars.com/kata/54b724efac3d5402db00065e">
        Decode the Morse code
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/DecodeTheMorseCode.java">
        Decode the Morse code
      </a>
    ),
  });
  items.push({
    Numero: "35",
    kyu: "6",
    Codewars: (
      <a href="https://www.codewars.com/kata/517abf86da9663f1d2000003">
        Convert string to camel case
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/ConvertStringToCamelCase.java">
        Convert string to camel case
      </a>
    ),
  });
  items.push({
    Numero: "36",
    kyu: "6",
    Codewars: (
      <a href="https://www.codewars.com/kata/5583d268479559400d000064">
        Binary to Text (ASCII) Conversion
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/BinaryToTextASCIIConversion.java">
        Binary to Text (ASCII) Conversion
      </a>
    ),
  });
  items.push({
    Numero: "37",
    kyu: "6",
    Codewars: (
      <a href="https://www.codewars.com/kata/51b62bf6a9c58071c600001b">
        Roman Numerals Encoder
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/RomanNumeralsEncoder.java">
        Roman Numerals Encoder
      </a>
    ),
  });
  items.push({
    Numero: "38",
    kyu: "6",
    Codewars: (
      <a href="https://www.codewars.com/kata/525f50e3b73515a6db000b83">
        Create Phone Number
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/CreatePhoneNumber.java">
        Create Phone Number
      </a>
    ),
  });
  items.push({
    Numero: "39",
    kyu: "6",
    Codewars: (
      <a href="https://www.codewars.com/kata/5262119038c0985a5b00029f">
        Is a number prime?
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/IsAnumberPrime.java">
        Is a number prime?
      </a>
    ),
  });
  items.push({
    Numero: "40",
    kyu: "6",
    Codewars: (
      <a href="https://www.codewars.com/kata/5277c8a221e209d3f6000b56">
        Valid Braces
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/ValidBraces.java">
        Valid Braces
      </a>
    ),
  });
  items.push({
    Numero: "41",
    kyu: "6",
    Codewars: (
      <a href="https://www.codewars.com/kata/541c8630095125aba6000c00">
        Sum of Digits / Digital Root
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/SumOfDigitsDigitalRoot.java">
        Sum of Digits / Digital Root
      </a>
    ),
  });
  items.push({
    Numero: "42",
    kyu: "6",
    Codewars: (
      <a href="https://www.codewars.com/kata/545cedaa9943f7fe7b000048">
        Detect Pangram
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/DetectPangram.java">
        Detect Pangram
      </a>
    ),
  });
  items.push({
    Numero: "43",
    kyu: "6",
    Codewars: (
      <a href="https://www.codewars.com/kata/514b92a657cdc65150000006">
        Multiples of 3 or 5
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/Multiples.java">
        Multiples of 3 or 5
      </a>
    ),
  });
  items.push({
    Numero: "44",
    kyu: "5",
    Codewars: (
      <a href="https://www.codewars.com/kata/55c04b4cc56a697bb0000048">
        Scramblies
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/Scramblies.java">
        Scramblies
      </a>
    ),
  });
  items.push({
    Numero: "45",
    kyu: "5",
    Codewars: (
      <a href="https://www.codewars.com/kata/5541f58a944b85ce6d00006a">
        Product of consecutive Fib numbers
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/ProductOfConsecutiveFibNumbers.java">
        Product of consecutive Fib numbers
      </a>
    ),
  });
  items.push({
    Numero: "46",
    kyu: "5",
    Codewars: (
      <a href="https://www.codewars.com/kata/52e88b39ffb6ac53a400022e">
        int32 to IPv4
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-java/blob/master/Kata/int32toIPv4.java">
        int32 to IPv4
      </a>
    ),
  });

  return items;
};

const products = productsGenerator(100);

const columns = [
  {
    dataField: "Numero",
    text: "N.",
    sort: true,
  },
  {
    dataField: "kyu",
    text: "kyu",
    sort: true,
  },
  {
    dataField: "Codewars",
    text: "Codewars Kata",
  },
  {
    dataField: "Soluzione",
    text: "La mia soluzione",
  },
];

export default function pythonCodeWars() {
  return (
    <div className="App">
      <BootstrapTable
        bootstrap4
        keyField="Numero"
        data={products}
        columns={columns}
        pagination={paginationFactory({ sizePerPage: 5 })}
      />
    </div>
  );
}
