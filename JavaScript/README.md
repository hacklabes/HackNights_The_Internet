
# JavaScript Basics

##### Table of Contents  

1. [Introduction](#introduction)
2. [Variables](#variables)
  1. [Strings](#strings)
  2. [Numbers](#numbers)
3. [If Statement](#if-statement)
4. [For Loop](#for-loop)
5. [Arrays](#arrays)
  1. [Array Filtering](#array_filtering)
  2. [Accesing Array Values](#accesing_array_values)
6. [Looping Through Arrays](#looping_through_arrays)
7. [Functions](#functions)
8. [Functions Arguments](#functions_arguments)

You can learn basics of JavaScript interactively through the [javascripting](https://github.com/sethvincent/javascripting) npm package 

```
npm install --global javascripting
```
###Introduction

You can use the `node` application to interpret you javascript commands 

type on your command line tools (on OSX the Terminal, Windows cmd.exe)

```
node
```
then type in front of the symbol `>` then press enter
````
console.log('hello world');
```

the output is the print of the string 'hello world'. 

<div id='variables'/>
### Variables

A variable is a name that can reference a specific value. Variables are declared using `var` followed by the variable's name.

Here's an example:

```js
var example;
```

The above variable is **declared**, but it isn't defined (it does not yet reference a specific value).

Here's an example of defining a variable, making it reference a specific value:

```js
var example = 'some string';
```

##### NOTE 

A variable is **declared** using `var` and uses the equals sign to **define** the value that it references. This is colloquially known as "Making a variable equal a value".

now you can make a variable and use the function  `console.log()` to print its value.

```js
var thisisaVar = "Hello World";
console.log("thisisaVar");

```
<div id='strings'/>
#### Strings

A **string** is any value surrounded by quotes.

It can be single or double quotes:

```js
'this is a string'

"this is also a string"
```

```js
var someString = 'this is a string';
```

you can acces the lenght of the string

```js
console.log(someString.length)
```

on `node` you can use `Tab` key to see all the methods that a `String` has.

for example 

```js
someString.toUpperCase()
```

<div id='numbers'/>
#### Numbers


Numbers can be integers, like `2`, `14`, or `4353`, or they can be decimals,  
also known as floats, like `3.14`, `1.5`, or `100.7893423`.
Unlike Strings, Numbers do not need to have quotes.

```js
var thisisaNumber = 100.3232;
var thisisaAnotherNumber = 1203;
```
then you can use `console.log()`  to print its value

```js
console.log(thisisaNumber)
console.log(thisisaAnotherNumber)
```


<div id='if_statement'/>
### If Statement 

Conditional statements are used to alter the control flow of a program, based on a specified boolean condition.

A conditional statement looks like this:

```js
if (n > 1) {
  console.log('the variable n is greater than 1.');
} else {
  console.log('the variable n is less than or equal to 1.');
}
```

Inside parentheses you must enter a logic statement, meaning that the result of the statement is either true or false. 

The else block is optional and contains the code that will be executed if the statement is false.

###For Loop

<div id='arrays'/>
### Arrays
<div id='array_filtering'/>
### Array Filtering

<div id='accesing_array_values'/>
#### Accesing Array Values

<div id='looping_through_arrays'/>
#### Looping Through Arrays

<div id='functions'/>
### Functions
<div id='functions_arguments'/>
#### Functions Arguments
