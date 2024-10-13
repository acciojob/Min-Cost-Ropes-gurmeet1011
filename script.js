function mincost(arr)
{ 
//write your code here
// return the min cost
	 arr.sort((a, b) => a - b);
    let totalCost = 0;
    // Keep combining ropes until only one rope is left
    while (arr.length > 1) {
        // Step 2: Take the two smallest ropes
        let first = arr.shift();  // Smallest element
        let second = arr.shift(); // Next smallest element

        // Step 3: Combine the two ropes
        let newRope = first + second;

        // Add the cost of combining the two ropes
        totalCost += newRope;

        // Step 4: Insert the new combined rope back into the sorted array
        arr.push(newRope);

        // Re-sort the array (simulating min-heap behavior)
        arr.sort((a, b) => a - b);
    }

    return totalCost;
}

module.exports=mincost;
