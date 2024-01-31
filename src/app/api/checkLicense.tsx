import supabase from '@/database/supabase';

export default async function Notes() {
  const { data: notes } = await supabase.from("licenses").select();

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}