import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);

  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          <h1 className="text-3xl text-center mt-10">{session?.user?.email}</h1>
          <Image
            src={
              session?.user?.image ||
              'https://cdn.pixabay.com/photo/2013/07/12/14/36/man-148582_1280.png'
            }
            width={100}
            height={100}
            alt="user image"
            className="mx-auto rounded-full mt-10"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
