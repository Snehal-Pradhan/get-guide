CREATE TYPE "public"."affected_by_ai" AS ENUM('low', 'med', 'high');--> statement-breakpoint
CREATE TYPE "public"."role_category" AS ENUM('software_it', 'data_ai_ml', 'embedded_electronics', 'mechanical_automotive', 'aerospace_drone', 'chemical_materials', 'civil_architecture', 'healthcare_lifescience', 'textile_apparel', 'management_consulting', 'finance_fintech');--> statement-breakpoint
CREATE TABLE "roles" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"category" "role_category" NOT NULL,
	"current_popularity" real,
	"future_scope" real,
	"affected_by_ai" "affected_by_ai",
	"is_demand_increasing" boolean,
	"embedding" vector(3072),
	CONSTRAINT "roles_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "skill_relations" (
	"parent_id" uuid NOT NULL,
	"child_id" uuid NOT NULL,
	"weight" real DEFAULT 0.7,
	CONSTRAINT "skill_relations_parent_id_child_id_pk" PRIMARY KEY("parent_id","child_id")
);
--> statement-breakpoint
CREATE TABLE "skills" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"category" text,
	"embedding" vector(3072),
	CONSTRAINT "skills_name_unique" UNIQUE("name")
);
--> statement-breakpoint
ALTER TABLE "skill_relations" ADD CONSTRAINT "skill_relations_parent_id_skills_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."skills"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "skill_relations" ADD CONSTRAINT "skill_relations_child_id_skills_id_fk" FOREIGN KEY ("child_id") REFERENCES "public"."skills"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "roles_name_idx" ON "roles" USING btree ("name");--> statement-breakpoint
CREATE INDEX "roles_category_idx" ON "roles" USING btree ("category");--> statement-breakpoint
CREATE INDEX "skill_relations_parent_idx" ON "skill_relations" USING btree ("parent_id");--> statement-breakpoint
CREATE INDEX "skill_relations_child_idx" ON "skill_relations" USING btree ("child_id");--> statement-breakpoint
CREATE INDEX "skills_name_idx" ON "skills" USING btree ("name");--> statement-breakpoint
CREATE INDEX "skills_category_idx" ON "skills" USING btree ("category");