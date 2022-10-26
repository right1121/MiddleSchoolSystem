-- CreateTable
CREATE TABLE "lunch_cooking" (
    "cooking_id" UUID NOT NULL,
    "menu_id" UUID NOT NULL,
    "cooking_name" VARCHAR(50),
    "staple_flg" BOOLEAN DEFAULT false,
    "main_dish_flg" BOOLEAN DEFAULT false,
    "side_dish_flg" BOOLEAN DEFAULT false,
    "created_at" DATE NOT NULL,
    "created_user" VARCHAR(50) NOT NULL,
    "updated_at" DATE,
    "updated_user" VARCHAR(50),

    CONSTRAINT "lunch_cooking_pkey" PRIMARY KEY ("cooking_id")
);

-- CreateTable
CREATE TABLE "lunch_menu" (
    "menu_id" UUID NOT NULL,
    "school_lunch_id" UUID NOT NULL,
    "day" DATE NOT NULL,
    "created_at" DATE NOT NULL,
    "created_user" VARCHAR(50) NOT NULL,
    "updated_at" DATE,
    "updated_user" VARCHAR(50),

    CONSTRAINT "lunch_menu_pkey" PRIMARY KEY ("menu_id")
);

-- CreateTable
CREATE TABLE "school_lunch" (
    "school_lunch_id" UUID NOT NULL,
    "date" DATE NOT NULL,
    "created_at" DATE NOT NULL,
    "created_user" VARCHAR(50) NOT NULL,
    "updated_at" DATE,
    "updated_user" VARCHAR(50),

    CONSTRAINT "school_lunch_pkey" PRIMARY KEY ("school_lunch_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "lunch_menu_day_key" ON "lunch_menu"("day");
