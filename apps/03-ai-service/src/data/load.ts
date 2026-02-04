import "dotenv/config";

import { db } from "../db/client.js";
import { roles, skills, skillRelations } from "../db/schema.js";
import { embed } from "./embeddings/embed.js";
import { rolesData, skillsData, relationsData } from "./seed/index.js";



async function load() {
  console.log("Starting ingestion...");
  for (const [category, rolesList] of Object.entries(rolesData)) {
    for (const role of rolesList) {
      const exists = await db.query.roles.findFirst({
        where: (t, { eq }) => eq(t.name, role.name),
      });

      if (exists) {
        console.log(`⚠️ Role exists: ${role.name}`);
        continue;
      }

      const vec = await embed(role.description);
      

      await db.insert(roles).values({
        name: role.name,
        description: role.description,
        category: category as any,
        currentPopularity: role.current_popularity,
        futureScope: role.future_scope,
        affectedByAi: role.affected_by_ai as any,
        isDemandIncreasing: role.is_demand_increasing,
        embedding: vec,
      });

      console.log(`✅ Inserted role: ${role.name} [${category}]`);
    }
  }



  for (const skill of skillsData) {
    const exists = await db.query.skills.findFirst({
      where: (t, { eq }) => eq(t.name, skill.name),
    });

    if (exists) {
      console.log(`⚠️ Skill exists: ${skill.name}`);
      continue;
    }

    const vec = await embed(skill.name);

    await db.insert(skills).values({
      name: skill.name,
      category: skill.category,
      embedding: vec,
    });

    console.log(`✅ Inserted skill: ${skill.name}`);
  }

  console.log("🎉 Ingestion completed.");
}


load();