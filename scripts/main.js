// This file will handle array generation and basic visualization

const arrayContainer = document.getElementById('arrayContainer');
const generateArrayBtn = document.getElementById('generateArray');
const startSortBtn = document.getElementById('startSort');
const resetSortBtn = document.getElementById('resetSort');

const DEFAULT_ARRAY_SIZE = 30;
const MIN_VALUE = 5;
const MAX_VALUE = 100;

let array = [];

function generateNewArray(){
    array = [];

    // Generate random numbers
    for (let i=0; i < DEFAULT_ARRAY_SIZE; i++){
        const value = Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1)) + MIN_VALUE;
        array.push(value);
    }

    updateVisualization();

    console.log("Generated Array: ", array);
}

function updateVisualization() {
    arrayContainer.innerHTML = '';

    const maxValue = Math.max(...array);

    // Create bar for each element in array
    array.forEach(value => {
        const bar = document.createElement('div');

        bar.className = 'bar';

        const heightPercentage = (value / maxValue) * 100;
        bar.style.height = `${heightPercentage}%`;
        bar.style.width = '20px';
        bar.style.margin = '0 2px';
        bar.style.backgroundColor = '#6b7fd7';

        arraycontainer.appendChild(bar);
    });
}