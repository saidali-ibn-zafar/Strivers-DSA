// - - - - - - - - - - - - - - - - - - - - - - -
// Pattern-1: Rectangular Star Pattern
function pattern1(nRow, nCol) {
  for (let i = 0; i < nRow; i++) {
    let row = "";
    for (let j = 0; j < nCol; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// pattern1(3, 3);

// optimized way:
function pattern1V2(nRow, nCol) {
  for (let i = 0; i < nRow; i++) {
    let row = "*".repeat(nCol);
    console.log(row);
  }
}

// pattern1V2(3, 3);

// - - - - - - - - - - - - - - - - - - - - - - -

// Pattern-2: Right-Angled Triangle Pattern
function pattern2(nRow) {
  for (let i = 0; i < nRow; i++) {
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
function pattern3(nRow) {
  for (let i = 1; i <= nRow; i++) {
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
function pattern4(nRow) {
  for (let i = 1; i <= nRow; i++) {
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
function pattern5(nRow) {
  for (let i = nRow; i >= 1; i--) {
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
function pattern6(nRow) {
  for (let i = nRow; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
}

pattern6(5);

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
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - -
