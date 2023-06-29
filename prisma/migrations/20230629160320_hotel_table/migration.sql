/*
  Warnings:

  - Added the required column `amenities` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dining` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lowestRates` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomTypes` to the `Hotel` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Hotel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "numberOfRooms" INTEGER NOT NULL,
    "website" TEXT NOT NULL,
    "image" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Hotel" ("description", "id", "location", "name", "numberOfRooms", "price", "website") SELECT "description", "id", "location", "name", "numberOfRooms", "price", "website" FROM "Hotel";
DROP TABLE "Hotel";
ALTER TABLE "new_Hotel" RENAME TO "Hotel";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
