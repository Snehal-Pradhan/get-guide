import { relations } from "drizzle-orm";
import { boolean, integer, jsonb, pgEnum, pgTable, text, timestamp, uuid, varchar, vector } from "drizzle-orm/pg-core";

export const subscriptionEnum = pgEnum("subscription_tier", ["free", "paid"]);

export const UserTable = pgTable("users", {
	id: uuid("id").primaryKey().defaultRandom().notNull(),
	firstName: varchar("first_name", { length: 255 }).notNull(),
	middleName: varchar("middle_name", { length: 255 }),
	lastName: varchar("last_name", { length: 255 }),
	isOnboardingComplete: boolean("is_onboarding_complete").default(false),
	experience: integer("experience").default(0),
	subscriptionTier: subscriptionEnum("subscription_tier"),
	isWhatsappIntegrated: boolean("is_whatsapp_integrated").default(false),
	whatsappSettings: jsonb("whatsapp_settings").default({}),
	isTelegramIntegrated: boolean("is_telegram_integrated").default(false),
	telegramSettings: jsonb("telegram_settings").default({}),
	isGoogleCalendarIntegrated: boolean("is_google_calendar_integrated").default(false),
	googleCalendarSettings: jsonb("google_calendar_settings").default({}),
	isMailIntegrated: boolean("is_mail_integrated").default(true),
	mailSettings: jsonb("mail_settings").default({}),
	clerkId: text("clerk_id").notNull(),
});

export const usersRelations = relations(UserTable, ({ many }) => ({
	files: many(FileTable),
	roadmaps: many(RoadmapTable),
}));

export const FileTable = pgTable("files", {
	id: uuid("id").primaryKey().defaultRandom().notNull(),
	ownerId: uuid("owner_id").references(() => UserTable.id, { onDelete: "cascade" }).notNull(),
	fileName: varchar("file_name", { length: 255 }),
	fileEmbedding: vector("file_embedding", { dimensions: 3072 }),
});

export const filesRelations = relations(FileTable, ({ one }) => ({
	owner: one(UserTable, {
		fields: [FileTable.ownerId],
		references: [UserTable.id],
	}),
}));


export const RoadmapTable = pgTable("roadmaps", {
	id: uuid("id").primaryKey().defaultRandom().notNull(),
	roadmapName: varchar("roadmap_name", { length: 255 }).notNull(),
	content: jsonb("content"),
	ownerId: uuid("owner_id").references(() => UserTable.id, { onDelete: "cascade" }).notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const roadmapsRelations = relations(RoadmapTable, ({ one }) => ({
	owner: one(UserTable, {
		fields: [RoadmapTable.ownerId],
		references: [UserTable.id],
	}),
}));

