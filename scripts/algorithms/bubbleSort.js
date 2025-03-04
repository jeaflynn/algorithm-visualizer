// Bubble Sort Algorithm Implementation

/** 
 * Performs bubble sort on the array and visualizes each step
 * @param {Array} arr - The array to be sorted
 * @returns {Promise} - Resolves when sorting is complete
 */
async function bubbleSort(arr) {
    const array = [...arr];
    const n = array.length;

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    let swaps = 0;
    let comparisons = 0;

    let swapped;

    for (let i=0; i < n-1; i++){
        swapped = false;

        for (let j=0; j < n-i-1; j++) {
            updateVisualization(array, [j, j+1], 'comparing');
            comparisons++;

            await delay(100);
        
            if (array[j] > array[j+1]){
                updateVisualization(array, [j, j+1], 'swapping');
                swaps++;

                await delay(100);

                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        
                updateVisualization(array, [j, j+1], 'swapping');

                await delay(100);

                swapped = true;
            }

        updateVisualization(array);

        }

        updateVisualization(array, [n-i-1], 'sorted');

        if (!swapped){
            for (let k=0; k<n-i-1; k++){
                updateVisualization(array, [k], 'sorted');
                await delay(50);
            }
            break;
        }
    }
    console.log(`Bubble sort complete. Comparisons: ${comparisons}, Swaps: ${swaps}`);
    return array;
}

```
/* Updates visualization with elements being compared */
function updateVisualizationWithComparison(array, index1, index2) {
    updateVisualization(array, [index1, index2], 'comparing');
}

/* Updates visualization with elements being swapped */
function updateVisualizationWithSwap(array, index1, index2) {
    updateVisualization(array, [index1, index2], 'swapping');
}

/* Updates the visualization showing an element in its sorted position */
function updateVisualizationWithSorted(array, index) {
    updateVisualization(array, [index], 'sorted');
}
```