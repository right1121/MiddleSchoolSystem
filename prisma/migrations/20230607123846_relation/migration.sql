-- AddForeignKey
ALTER TABLE "lunch_cooking" ADD CONSTRAINT "lunch_cooking_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "lunch_menu"("menu_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lunch_menu" ADD CONSTRAINT "lunch_menu_school_lunch_id_fkey" FOREIGN KEY ("school_lunch_id") REFERENCES "school_lunch"("school_lunch_id") ON DELETE RESTRICT ON UPDATE CASCADE;
