import {
  pgTable,
  uuid,
  text,
  real,
  primaryKey,
  index,
  vector,
  pgEnum,
  boolean
} from "drizzle-orm/pg-core";

export const roleCategoryEnum = pgEnum("role_category", [
  "software_it",
  "data_ai_ml",
  "embedded_electronics",
  "mechanical_automotive",
  "aerospace_drone",
  "chemical_materials",
  "civil_architecture",
  "healthcare_lifescience",
  "textile_apparel",
  "management_consulting",
  "finance_fintech"
]);

export const affectedByAiEnum = pgEnum("affected_by_ai", ["low", "med", "high"]);

export const roles = pgTable(
  "roles",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull().unique(),
    description: text("description").notNull(),
    category: roleCategoryEnum("category").notNull(),
    currentPopularity: real("current_popularity"),
    futureScope: real("future_scope"),
    affectedByAi: affectedByAiEnum("affected_by_ai"),
    isDemandIncreasing: boolean("is_demand_increasing"),
    embedding: vector("embedding", { dimensions: 3072 }),
  },
  (t) => ({
    
    nameIdx: index("roles_name_idx").on(t.name),

    categoryIdx: index("roles_category_idx").on(t.category),
  })
);
export const skills = pgTable(
  "skills",
  {
    id: uuid("id").defaultRandom().primaryKey(),

    name: text("name").notNull().unique(),

    category: text("category"),

    embedding: vector("embedding", { dimensions: 3072 }),
  },
  (t) => ({
    nameIdx: index("skills_name_idx").on(t.name),
    categoryIdx: index("skills_category_idx").on(t.category),
  })
);


export const skillRelations = pgTable(
  "skill_relations",
  {
    parentId: uuid("parent_id")
      .references(() => skills.id)
      .notNull(),

    childId: uuid("child_id")
      .references(() => skills.id)
      .notNull(),

    weight: real("weight").default(0.7),
  },
  (t) => ({
   
    pk: primaryKey({
      columns: [t.parentId, t.childId],
    }),

    parentIdx: index("skill_relations_parent_idx").on(t.parentId),
    childIdx: index("skill_relations_child_idx").on(t.childId),
  })
);
