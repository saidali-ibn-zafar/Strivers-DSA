// - - - - - - - - - - - - - - - - - - - - - - -
// Pattern-1: Rectangular Star Pattern
function pattern1(nRows, nCol) {
  for (let i = 0; i < nRows; i++) {
    let row = "";
    for (let j = 0; j < nCol; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// pattern1(3, 3);

// optimized way:
function pattern1V2(nRows, nCol) {
  for (let i = 0; i < nRows; i++) {
    let row = "*".repeat(nCol);
    console.log(row);
  }
}

// pattern1V2(3, 3);

// - - - - - - - - - - - - - - - - - - - - - - -

// Pattern-2: Right-Angled Triangle Pattern
function pattern2(nRows) {
  for (let i = 0; i < nRows; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// pattern2(5);

// - - - - - - - - - - - - - - - - - - - - - - -

// Pattern - 3: Right-Angled Number Pyramid
function pattern3(nRows) {
  for (let i = 1; i <= nRows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
}

// pattern3(5);

// - - - - - - - - - - - - - - - - - - - - - - -

// Pattern - 4: Right-Angled Number Pyramid - II
function pattern4(nRows) {
  for (let i = 1; i <= nRows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i;
    }
    console.log(row);
  }
}

// pattern4(5);

// - - - - - - - - - - - - - - - - - - - - - - -

// Pattern-5: Inverted Right Pyramid
function pattern5(nRows) {
  for (let i = nRows; i >= 1; i--) {
    let row = "";
    for (let j = i; j >= 1; j--) {
      row += "*";
    }
    console.log(row);
  }
}

// pattern5(5);

// - - - - - - - - - - - - - - - - - - - - - - -

// Pattern - 6: Inverted Numbered Right Pyramid
function pattern6(nRows) {
  for (let i = nRows; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
}

// pattern6(5);

// - - - - - - - - - - - - - - - - - - - - - - -

// Pattern - 7: Star Pyramid
function pattern7(nRows) {
  for (let i = 0; i < nRows; i++) {
    let row = "";
    for (let j = 0; j < nRows - i - 1; j++) {
      row += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      row += "*";
    }

    for (let j = 0; j < nRows - i - 1; j++) {
      row += " ";
    }
    console.log(row);
  }
}

// pattern7(5);

// - - - - - - - - - - - - - - - - - - - - - - -

// Pattern - 8: Inverted Star Pyramid
function pattern8(nRows) {
  for (let i = 0; i < nRows; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += " ";
    }
    for (let j = 0; j < 2 * nRows - (2 * i + 1); j++) {
      row += "*";
    }

    for (let j = 0; j < i; j++) {
      row += " ";
    }
    console.log(row);
  }
}

// pattern8(5);

// - - - - - - - - - - - - - - - - - - - - - - -

// Pattern - 9: Diamond Star Pattern
function pattern9(nRows) {
  pattern7(nRows);
  pattern8(nRows);
}

// pattern9(6);

// - - - - - - - - - - - - - - - - - - - - - - -

// Pattern - 10: Half Diamond Star Pattern
function pattern10(nRows) {
  for (let i = 1; i <= 2 * nRows - 1; i++) {
    let row = "";
    let stars;

    stars = i;

    if (i > nRows) {
      stars = 2 * nRows - i;
    }
    for (let j = 1; j <= stars; j++) {
      row += "*";
    }

    console.log(row);
  }
}

// pattern10(5);

// - - - - - - - - - - - - - - - - - - - - - - -

// Pattern - 11: Binary Number Triangle Pattern

function pattern11(nRows) {
  for (let i = 0; i < nRows; i++) {
    let row = "";
    let start = 1;

    if (i % 2 === 0) {
      start = 0;
    } else {
      start = 1;
    }

    for (let j = 0; j <= i; j++) {
      row += start;
      start = 1 - start;
    }
    console.log(row);
  }
}

// pattern11(5);

// - - - - - - - - - - - - - - - - - - - - - - -

// Pattern - 12: Number Crown Pattern
function pattern12(nRows) {
  let spaces = 2 * (nRows - 1);

  for (let i = 1; i <= nRows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }

    for (let j = 1; j <= spaces; j++) {
      row += " ";
    }

    for (let j = i; j >= 1; j--) {
      row += j;
    }
    console.log(row);

    spaces -= 2;
  }
}

// pattern12(6);
// - - - - - - - - - - - - - - - - - - - - - - -

// Pattern - 13: Increasing Number Triangle Pattern

function pattern13(nRows) {
  let num = 1;
  for (let i = 1; i <= nRows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += num + " ";
      num++;
    }
    console.log(row);
  }
}

pattern13(5);
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
