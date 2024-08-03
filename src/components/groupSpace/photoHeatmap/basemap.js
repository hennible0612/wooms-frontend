const map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 4, 5, 6, 7, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 18, 19, 20, 21, 22, 23, 24, 25, 26, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 27, 28, 29, 30, 31, 32, 33, 34, 35, 0, 0, 158, 0, 0, 0],
  [0, 0, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 0, 0, 0, 0, 0, 159],
  [0, 0, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 0, 0, 0, 0, 0],
  [0, 0, 0, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 80, 81, 82, 83, 84, 85, 86, 87, 88, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 0, 0, 0, 0, 0, 0],
  [
    0, 0, 0, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 0, 0, 0, 0,
    0,
  ],
  [
    0, 0, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 0, 0, 0, 0, 0,
    0,
  ],
  [0, 0, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 141, 142, 143, 144, 145, 146, 0, 0, 147, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 148, 149, 150, 151, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 152, 153, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 155, 156, 157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const map2 = [
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, 3, 4, 5, 6, 7, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, 18, 19, 20, 21, 22, 23, 24, 25, 26, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, 158, -1, -1, -1],
  [-1, -1, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, -1, -1, -1, -1, -1, 159],
  [-1, -1, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, -1, -1, -1, -1, -1],
  [-1, -1, -1, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, 80, 81, 82, 83, 84, 85, 86, 87, 88, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, -1, -1, -1, -1, -1, -1],
  [
    -1, -1, -1, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, -1, -1,
    -1, -1, -1,
  ],
  [
    -1, -1, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, -1, -1, -1,
    -1, -1, -1,
  ],
  [
    -1, -1, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, -1, -1, -1, -1,
    -1, -1, -1,
  ],
  [
    -1, -1, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, -1, -1, -1, -1,
    -1, -1, -1,
  ],
  [
    -1, -1, 141, 142, 143, 144, 145, 146, -1, -1, 147, -1, -1, -1, -1, -1, -1,
    -1, -1,
  ],
  [
    -1, -1, 148, 149, 150, 151, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1,
  ],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [
    -1, -1, -1, 152, 153, 154, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1,
  ],
  [
    -1, -1, 155, 156, 157, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1,
  ],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
];