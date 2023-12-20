-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "imageUrl" TEXT,
    "quantity" INTEGER NOT NULL,
    "listId" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL,
    CONSTRAINT "Item_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Item" ("code", "created", "id", "imageUrl", "listId", "name", "quantity", "updated", "value") SELECT "code", "created", "id", "imageUrl", "listId", "name", "quantity", "updated", "value" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
CREATE TABLE "new_ContainerItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "containerId" TEXT NOT NULL,
    "linkedItemId" TEXT,
    "quantity" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT,
    "code" INTEGER,
    "imageUrl" TEXT,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL,
    CONSTRAINT "ContainerItem_containerId_fkey" FOREIGN KEY ("containerId") REFERENCES "Container" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ContainerItem" ("code", "containerId", "created", "id", "imageUrl", "linkedItemId", "name", "quantity", "updated", "value") SELECT "code", "containerId", "created", "id", "imageUrl", "linkedItemId", "name", "quantity", "updated", "value" FROM "ContainerItem";
DROP TABLE "ContainerItem";
ALTER TABLE "new_ContainerItem" RENAME TO "ContainerItem";
CREATE TABLE "new_Container" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "ownerId" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL,
    "allowView" TEXT NOT NULL,
    "allowEdit" TEXT NOT NULL,
    "allowDelete" TEXT NOT NULL,
    CONSTRAINT "Container_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Container" ("allowDelete", "allowEdit", "allowView", "created", "description", "id", "name", "ownerId", "updated") SELECT "allowDelete", "allowEdit", "allowView", "created", "description", "id", "name", "ownerId", "updated" FROM "Container";
DROP TABLE "Container";
ALTER TABLE "new_Container" RENAME TO "Container";
CREATE UNIQUE INDEX "Container_ownerId_key" ON "Container"("ownerId");
CREATE TABLE "new_List" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "ownerId" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL,
    "allowView" TEXT NOT NULL,
    "allowEdit" TEXT NOT NULL,
    "allowDelete" TEXT NOT NULL,
    CONSTRAINT "List_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_List" ("allowDelete", "allowEdit", "allowView", "created", "description", "id", "name", "ownerId", "updated") SELECT "allowDelete", "allowEdit", "allowView", "created", "description", "id", "name", "ownerId", "updated" FROM "List";
DROP TABLE "List";
ALTER TABLE "new_List" RENAME TO "List";
CREATE UNIQUE INDEX "List_ownerId_key" ON "List"("ownerId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
