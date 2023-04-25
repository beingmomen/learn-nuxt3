// import courseData from './courseData';

// export const useCourse = () => {
//   return {
//     ...courseData,
//     chapters: courseData.chapters.map((chapter) => ({
//       ...chapter,
//       lessons: chapter.lessons.map((lesson) => ({
//         ...lesson,
//         path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`
//       }))
//     }))
//   };
// }
import useFetchWithCache from './useFetchWithCache'

export default async () =>
  useFetchWithCache('/api/course/meta')