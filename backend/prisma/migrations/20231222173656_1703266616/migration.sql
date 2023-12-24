/*
  Warnings:

  - You are about to drop the column `name` on the `Recipe` table. All the data in the column will be lost.
  - Added the required column `title` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recipe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "ingredients" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL,
    "allowView" TEXT NOT NULL,
    "allowEdit" TEXT NOT NULL,
    "allowDelete" TEXT NOT NULL,
    CONSTRAINT "Recipe_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Recipe" ("allowDelete", "allowEdit", "allowView", "created", "description", "id", "ingredients", "instructions", "ownerId", "updated") SELECT "allowDelete", "allowEdit", "allowView", "created", "description", "id", "ingredients", "instructions", "ownerId", "updated" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
CREATE UNIQUE INDEX "Recipe_ownerId_key" ON "Recipe"("ownerId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
