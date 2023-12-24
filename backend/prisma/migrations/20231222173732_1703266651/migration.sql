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
    "isExternalSrc" BOOLEAN NOT NULL DEFAULT false,
    "allowView" TEXT NOT NULL,
    "allowEdit" TEXT NOT NULL,
    "allowDelete" TEXT NOT NULL,
    CONSTRAINT "Recipe_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Recipe" ("allowDelete", "allowEdit", "allowView", "created", "description", "id", "ingredients", "instructions", "ownerId", "title", "updated") SELECT "allowDelete", "allowEdit", "allowView", "created", "description", "id", "ingredients", "instructions", "ownerId", "title", "updated" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
CREATE UNIQUE INDEX "Recipe_ownerId_key" ON "Recipe"("ownerId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
