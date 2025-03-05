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

                [array[j], array[j+1]] = [array[j+1], array[j]];
        
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