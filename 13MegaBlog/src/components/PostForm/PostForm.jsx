import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import appwriteServices from "../../appwrite/databaseService";
import { useCallback, useEffect } from "react";
export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });
  /**
   * useForm() provides watch capabilities to watch a specific field. It is used to continously monitor any field if you want.
   * setValue is used to set some value in a form.
   * control is for getting the control of the form. We can send this to the desired form to get its control.
   * getValues is used to get value of any field of the form.
   */

  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);

  const submit = async (data) => {
    if (post) {
      //react hook forms provide the access to images in a very convinient manner. data.image is an array of images that are uploaded in out form.
      const file = data.image[0]
        ? appwriteServices.uploadFile(data.image[0])
        : null;

      if (file) {
        //here if we have uploaded a new image so if the post already have any image stored, we need to delete it.
        appwriteServices.deleteFile(post?.featuredImage);
      }
      const dbPost = await appwriteServices.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = data?.image
        ? await appwriteServices.uploadFile(data.image[0])
        : null;
      const dbPost = await appwriteServices.createPost({
        ...data,
        featuredImage: file ? file.$id : undefined,
        userID: userData.$id,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name == "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
    return () => {
      //We need to unsubscribe from watch() so that the useEffect does not keep running even after the PostForm component is unmounted.
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);
  /**
   * On whatever field we have put the watch, we have added it as dependency array in useEffect. Whenever something is changed on the watched field, useEffect will run.
   */
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteServices.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}
