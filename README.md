# Cryptography_Project

This is my very simple website I made to simulate basic/ancient encryption methods

To use the program, you just have to choose your cipher, between substitution, caesar and alberti, 
then input text and press a button to either encrypt or decrypt it. 
At the bottom, you're given the option to copy this to your clipboard

If this program doesn't work maybe because some characters the code couldn't recognize were used, just reload the website

Substitution Cipher:
- Uses ASCII (American Standard Code for Information Interchange) codes instead of position in alphabet (instead of a being 1, it is 97)
- This gives more depth into the substitutions, allowing you to differentiate uppercase and lowercase letters
- There are commas between each character, so the code can tell the difference between numbers like 97 and 9 and 7

Ceasar Cipher:
- Allows you to choose the Caesar shift values by which the text is shifted

Alberti Cipher:
- Doesn't match with actual the actual alberti cipher partially because the original alberti cipher was in Latin, and the cipher was missing around 6 letters as the creator deemed them unneccecary
- I could not find a way to rotate the period of the program due to m
- This version tries to keep the same spirit of the cipher by using two randomized alphabets
- Although this won't match with the real alberti cipher, this program is at least internally consistent, so decrypting an encrypted message will return your input
