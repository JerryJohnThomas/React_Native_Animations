* need to add a bottom svg something
* need to add white border on touching
* mask animation

---
svg and gesture 



## problems


problem 1 : if A is clicked then B followed by A, the third circle transition will not happen
fix 1: 
* make the offset to 0 before adding A back in the stack, if add to stack and then change offset value it will cause a glitch
* you need to make a resetOFfset in child and call that function from the parent [here](https://bobbyhadz.com/blog/react-call-function-in-child-component)
* you need a unique reference for each of the child 


problem 2: if you click 3 circles in succession, you will see the blank green screen in the back, due to stack size being 2
* making stack size as 6 will solve that issue

problem 3: initally nothing is displayed.
* make some init variable in the home, 
* after first child load make init usestate as false
* depending upon init value , mask size initially value or something should be determined.



