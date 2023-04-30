import { serverSupabaseUser } from '#supabase/server';

export default defineEventHandler(async (event) => {
    const user = await serverSupabaseUser(event);
    // console.warn('user', user);
    event.context.user = user;
});
