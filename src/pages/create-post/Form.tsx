import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface CreateFormData {
  text: string;
}

export const Form = () => {
  const schema = yup.object().shape({
    text: yup.string().required("You can't post nothing!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  const onCreatePost = (data: CreateFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <textarea placeholder="Post something.." {...register("text")} />
      <p>{errors.text?.message}</p>
      <input type="submit" value="Post" />
    </form>
  );
};
