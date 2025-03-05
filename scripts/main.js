// This file will handle array generation and basic visualization

const arrayContainer = document.getElementById('arrayContainer');
const generateArrayBtn = document.getElementById('generateArray');
const startSortBtn = document.getElementById('startSort');
const resetSortBtn = document.getElementById('resetSort');

const DEFAULT_ARRAY_SIZE = 30;
const MIN_VALUE = 5;
const MAX_VALUE = 100;

let array = [];
let sortedArray = [];
let isSorting = false;

function generateNewArray(){
    if (isSorting) return;

    array = [];

    // Generate random numbers
    for (let i=0; i < DEFAULT_ARRAY_SIZE; i++){
        const value = Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1)) + MIN_VALUE;
        array.push(value);
    }

    updateVisualization(array);

    console.log("Generated Array:", array);
}

function updateVisualization(arr, highlightIndices = [], highlightClass = '') {
    arrayContainer.innerHTML = '';

    const maxValue = Math.max(...array);

    // Create bar for each element in array
    array.forEach((value, index) => {
        const bar = document.createElement('div');

        bar.className = 'bar';

        if (highlightIndices.includes(index)){
            bar.classList.add(highlightClass);
        }

        const heightPercentage = (value / maxValue) * 100;
        bar.style.height = `${heightPercentage}%`;

        arrayContainer.appendChild(bar);
    });
}

async function startSorting(){
    if (isSorting) return;

    isSorting = true;
    startSortBtn.disabled = true;
    generateArrayBtn.disabled = true;

    sortedArray = await bubbleSort(array);

    isSorting = false;
    startSortBtn.disabled = false;
    generateArrayBtn.disabled = false;
}

function resetArray() {
    if (isSorting) return;
    updateVisualization(array);
}

// Set up event listeners when page loads
window.onload = function(){
    generateArrayBtn.addEventListener('click', generateNewArray);
    startSortBtn.addEventListener('click', startSorting);
    resetSortBtn.addEventListener('click', resetArray);
    generateNewArray();

    console.log("Algorithm Visualizer initialized");
};
