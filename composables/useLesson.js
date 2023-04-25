import useFetchWithCache from "./useFetchWithCache";

export default async (chapterSlug, lessonSlug) =>
  useFetchWithCache(`/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`);
