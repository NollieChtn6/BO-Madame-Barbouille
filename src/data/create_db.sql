BEGIN;

DROP TABLE IF EXISTS 
"users";
-- -------------------
-- Table "users"
-- -------------------
CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMPTZ
);

COMMIT;