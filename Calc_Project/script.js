 function toggleShiftInput() { //Runs when you change your Cipher Type, hides or reveals the shift
      const cipher = document.getElementById('cipher').value;
      document.getElementById('shiftContainer').style.display = cipher === 'caesar' ? 'block' : 'none';
}

    function transformText(encrypt = true) {
      const cipher = document.getElementById('cipher').value;
      const input = document.getElementById('inputText').value;
      const shift = parseInt(document.getElementById('shift').value) || 3;
      let output = '';

      switch (cipher) {
        case 'shift':
          output = substitutionCipher(input, encrypt);
          break;
        case 'caesar':
          output = caesarCipher(input, encrypt ? shift : (26 - shift));
          break;
        case 'alberti':
          output = albertiCipher(input, encrypt);
          break;
        
      }

      document.getElementById('outputText').value = output;
    }

    function substitutionCipher(str, encrypt = true){

    if (encrypt){
        return str.replace(/[a-z]/gi,(c, index) =>{
            const end = (str[index+1] === " " || str[index+1] === undefined) ? "" : ",";
            return c.toLowerCase().charCodeAt(0) + end;
        })
    }else{
        return (str.replace(/\d+/g, (numStr) => {

            num = parseInt(numStr, 10);
            const strNum = String.fromCharCode(num);
            return strNum;

         })).replace(/,/gi, c => "")}
    }

    function caesarCipher(str, shift) {
      return str.replace(/[a-z]/gi, c => { //Loops through all letters in the string, continues and doesn't care for uppercase
        const base = c === c.toUpperCase() ? 65 : 97; //Checks if letter is uppercase or lowercase
        return String.fromCharCode((c.charCodeAt(0) - base + shift) % 26 + base); //Fun Math
      });
    }

    function albertiCipher(str, encrypt = true) {
      const plain = 'abcdefghijklmnopqrstuvwxyz';
      const cipher = 'dgptakvqlzsncxbyhefrwuijmo'; 
      const map = {};

      for (let i = 0; i < 26; i++) {
        if (encrypt) {
          map[plain[i]] = cipher[i];
          map[plain[i].toUpperCase()] = cipher[i].toUpperCase();
        } else {
          map[cipher[i]] = plain[i];
          map[cipher[i].toUpperCase()] = plain[i].toUpperCase();
        }
      }

      return str.replace(/[a-z]/gi, c => map[c] || c);
    }

    function copyToClipboard() {
      const output = document.getElementById('outputText');
      output.select();
      output.setSelectionRange(0, 99999);
      document.execCommand('copy');
      alert('Copied to clipboard!');
    }

    // Initialize shift input visibility
    toggleShiftInput();