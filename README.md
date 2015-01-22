# hello-node
Simple http server using node.js
Takes two values as input - 
1) numDigits - number of digits
2) numRandom - number of random numbers to generate

Returns numRandom random numbers of numDigits each.

EX - curl --data "numDigits=7&numRandom=10" http://127.0.0.1:8000
