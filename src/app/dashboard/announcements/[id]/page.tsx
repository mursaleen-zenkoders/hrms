import AnnouncementView from '@/view/announcement/single-announcement';

export default function Page({ params }: { params: { id: string } }) {
  return <AnnouncementView id={Number(params.id)} />;
}
