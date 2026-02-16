import Head from 'expo-router/head';

export default function PageContainer({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: any;
}) {
  return (
    <>
      <Head>
        <title>{title || 'Oneira'}</title>
        <meta
          name='description'
          content={
            description ||
            'Track student progress and create seating charts with Oneira'
          }
        />
      </Head>
      {children}
    </>
  );
}
