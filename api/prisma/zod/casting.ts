import * as z from "zod"
import { CompleteTitle, RelatedTitleModel, CompleteActor, RelatedActorModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const CastingModel = z.object({
  id: z.number().int(),
  titleId: z.number().int(),
  actorId: z.number().int(),
  roles: jsonSchema,
})

export interface CompleteCasting extends z.infer<typeof CastingModel> {
  title: CompleteTitle
  actor: CompleteActor
}

/**
 * RelatedCastingModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCastingModel: z.ZodSchema<CompleteCasting> = z.lazy(() => CastingModel.extend({
  title: RelatedTitleModel,
  actor: RelatedActorModel,
}))
