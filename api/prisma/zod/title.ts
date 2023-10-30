import * as z from "zod"
import { CompleteUserRating, RelatedUserRatingModel, CompleteCasting, RelatedCastingModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const TitleModel = z.object({
  id: z.number().int().optional(),
  type: z.string(),
  title: z.string(),
  originalTitle: z.string(),
  year: z.number().int(),
  runtimeMins: z.number().int(),
  posterUrl: z.string(),
  trailerUrl: z.string().nullish(),
  genres: jsonSchema,
  directors: jsonSchema,
  writers: jsonSchema,
  stars: jsonSchema,
  isActive: z.boolean(),
})

export interface CompleteTitle extends z.infer<typeof TitleModel> {
  userRatings: CompleteUserRating[]
  cast: CompleteCasting[]
}

/**
 * RelatedTitleModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTitleModel: z.ZodSchema<CompleteTitle> = z.lazy(() => TitleModel.extend({
  userRatings: RelatedUserRatingModel.array(),
  cast: RelatedCastingModel.array(),
}))
