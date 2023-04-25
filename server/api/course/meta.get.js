import course from "~/server/courseData";

export default defineEventHandler((event) => {
  const outline = course.chapters.reduce((prev, next) => {
    const lessons = next.lessons.map((lesson) => ({
      title: lesson.title,
      slug: lesson.slug,
      number: lesson.number,
      path: `/course/chapter/${next.slug}/lesson/${lesson.slug}`,
    }));

    const chapter = {
      title: next.title,
      slug: next.slug,
      number: next.number,
      lessons,
    };

    return [...prev, chapter];
  }, []);

  return {
    title: course.title,
    chapters: outline,
  };
});
