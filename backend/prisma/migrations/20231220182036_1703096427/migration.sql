-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "provider" TEXT NOT NULL DEFAULT 'EMAIL',
    "password" TEXT,
    "refreshToken" TEXT,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "listId" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL,
    CONSTRAINT "Item_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "List" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL,
    "allowView" TEXT NOT NULL,
    "allowEdit" TEXT NOT NULL,
    "allowDelete" TEXT NOT NULL,
    CONSTRAINT "List_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Container" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL,
    "allowView" TEXT NOT NULL,
    "allowEdit" TEXT NOT NULL,
    "allowDelete" TEXT NOT NULL,
    CONSTRAINT "Container_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ContainerItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "containerId" TEXT NOT NULL,
    "linkedItemId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL,
    CONSTRAINT "ContainerItem_containerId_fkey" FOREIGN KEY ("containerId") REFERENCES "Container" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "List_ownerId_key" ON "List"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "Container_ownerId_key" ON "Container"("ownerId");
