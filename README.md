# Letter Occurrence Counter

This simple JavaScript program prompts the user to enter a phrase and a single letter. It then calculates the number of occurrences of the letter within the phrase and displays the result.

## Usage

1. Open the HTML file in a web browser.
2. When prompted, enter a phrase in the first input box.
3. When prompted again, enter a single letter in the second input box.
4. The program will calculate the number of occurrences of the letter in the phrase and display the result in the designated area of the page.

## Example

### Input:
Phrase: "Hello, World!"
Letter: "o"

### Output:
The program will display the following message on the page:
"The letter 'o' occurs 2 times in the phrase 'Hello, World!'"

## Notes

- The program uses the `prompt()` function to gather user input.
- It then utilizes the `split()` method to split the phrase into an array of substrings based on the specified letter.
- The number of occurrences is calculated by subtracting 1 from the length of the resulting array.
- The program updates the HTML element with the ID `myDiv1` to display the result.

Feel free to modify the code and customize the HTML page to suit your needs.

Enjoy counting letter occurrences in your phrases!
