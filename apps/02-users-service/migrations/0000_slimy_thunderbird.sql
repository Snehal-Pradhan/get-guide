CREATE TYPE "public"."subscription_tier" AS ENUM('free', 'paid');--> statement-breakpoint
CREATE TABLE "files" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"owner_id" uuid NOT NULL,
	"file_name" varchar(255),
	"file_embedding" vector(3072)
);
--> statement-breakpoint
CREATE TABLE "roadmaps" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"roadmap_name" varchar(255) NOT NULL,
	"content" jsonb,
	"owner_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"middle_name" varchar(255),
	"last_name" varchar(255),
	"is_onboarding_complete" boolean DEFAULT false,
	"experience" integer DEFAULT 0,
	"subscription_tier" "subscription_tier",
	"is_whatsapp_integrated" boolean DEFAULT false,
	"whatsapp_settings" jsonb DEFAULT '{}'::jsonb,
	"is_telegram_integrated" boolean DEFAULT false,
	"telegram_settings" jsonb DEFAULT '{}'::jsonb,
	"is_google_calendar_integrated" boolean DEFAULT false,
	"google_calendar_settings" jsonb DEFAULT '{}'::jsonb,
	"is_mail_integrated" boolean DEFAULT true,
	"mail_settings" jsonb DEFAULT '{}'::jsonb,
	"clerk_id" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "files" ADD CONSTRAINT "files_owner_id_users_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "roadmaps" ADD CONSTRAINT "roadmaps_owner_id_users_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;