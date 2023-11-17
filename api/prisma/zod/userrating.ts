import * as z from "zod";
import {
  CompleteTitle,
  RelatedTitleModel,
  CompleteUser,
  RelatedUserModel,
} from "./index";

export const UserRatingModel = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  titleId: z.number().int(),
  rating: z.number().int(),
});

export interface CompleteUserRating extends z.infer<typeof UserRatingModel> {
  title: CompleteTitle;
  user: CompleteUser;
}

/**
 * RelatedUserRatingModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserRatingModel: z.ZodSchema<CompleteUserRating> = z.lazy(
  () =>
    UserRatingModel.extend({
      title: RelatedTitleModel,
      user: RelatedUserModel,
    }),
);
