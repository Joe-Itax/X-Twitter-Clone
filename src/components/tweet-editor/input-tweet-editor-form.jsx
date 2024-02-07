

function Input({ customOnChange, register }) {
  return (
    <input
      type="text" name="new_tweet" id="new_tweet"
      placeholder="What's happening?"
      className="tweet-editor-input h-[60px] w-full text-[1.3rem] bg-[black] text-[white] resize-none mx-0 my-[13px] pt-2.5 pb-0 px-0 border-[none] outline-none"
      {...register("new_tweet", {
        required: "Ce champ est obligatoire",
        maxLength: {
          value: 180,
          message: "Le tweet doit contenir au maximum 180 caractères"
        },
        pattern: {
          value: /\S/,
          message: "Le contenu du tweet ne doit pas être vide ou contenir uniquement des espaces"
        }
      })}
    />
  );
}

export default Input;