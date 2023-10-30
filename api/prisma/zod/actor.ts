import * as z from "zod"
import { CompleteCasting, RelatedCastingModel } from "./index"

export const ActorModel = z.object({
  id: z.number().int(),
  name: z.string(),
  pictureUrl: z.string().nullish(),
})

export interface CompleteActor extends z.infer<typeof ActorModel> {
  castings: CompleteCasting[]
}

/**
 * RelatedActorModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedActorModel: z.ZodSchema<CompleteActor> = z.lazy(() => ActorModel.extend({
  castings: RelatedCastingModel.array(),
}))
