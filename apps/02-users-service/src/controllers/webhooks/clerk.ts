import { verifyWebhook } from '@clerk/express/webhooks'
import type { Request, Response } from 'express'
import { db } from '../../db/drizzle.js'
import { UserTable } from '../../db/schema.js'
import { eq } from 'drizzle-orm'

export const clerkWebhookController = async (req: Request, res: Response) => {
  try {
    const evt = await verifyWebhook(req)
    const { type, data } = evt

    console.log(`Received webhook: ${type}`, data.id);

    if (type === 'user.created') {
      const { id, first_name, last_name } = data as any;
      await db.insert(UserTable).values({
        clerkId: id,
        firstName: first_name || "User",
        lastName: last_name || "", 
      });
      console.log(`User created: ${id}`);
    } else if (type === 'user.updated') {
      const { id, first_name, last_name } = data as any;
      await db.update(UserTable).set({
        firstName: first_name || "User",
        lastName: last_name || "",
      }).where(eq(UserTable.clerkId, id));
      console.log(`User updated: ${id}`);
    } else if (type === 'user.deleted') {
      const { id } = data as any;
      await db.delete(UserTable).where(eq(UserTable.clerkId, id));
      console.log(`User deleted: ${id}`);
    }

    return res.status(200).send('Webhook received')
  } catch (err: any) {
    console.error('Error verifying webhook:', err.message || err)
    return res.status(400).send('Error verifying webhook')
  }
}