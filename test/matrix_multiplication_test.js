import { multiplyMatrices } from "../src/matrix_multiplication.js";
import { assertEquals } from "jsr:@std/assert";

Deno.test("testing 2x3 matrix", () => {
  assertEquals(
    multiplyMatrices(
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
      [
        [7, 8],
        [9, 10],
        [11, 12],
      ]
    ),
    [
      [58, 64],
      [139, 154],
    ]
  );
});

Deno.test("testing 2x2 matrix", () => {
  assertEquals(
    multiplyMatrices(
      [
        [1, 2],
        [3, 4],
      ],
      [
        [5, 6],
        [7, 8],
      ]
    ),
    [
      [19, 22],
      [43, 50],
    ]
  );
});

Deno.test("testing 2x2 matrix", () => {
  assertEquals(multiplyMatrices([], []), []);
});
