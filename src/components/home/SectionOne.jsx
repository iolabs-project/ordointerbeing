import React from "react";
import Link from "next/link";
import { getPostById } from "@/lib/wp";

const SectionOne = async () => {
  // Fetch slug for the "Tentang Plum Village" post (ID 271)
  const aboutPost = await getPostById(271);
  const aboutSlug = aboutPost?.slug || "271";

  return (
    <div className="section-one">
      <div className="wrapper">
        <p className="text-1">Selamat Datang di Zen Plum Village Indonesia</p>
        <p className="text-2">
          Plum Village Indonesia adalah komunitas kewawasan (mindfulness
          community) dari ajaran Mahabiksu Zen Thich Nhat
          <br />
          Hanh [一行禪師] tentang praktik hidup sadar atau kewawasan [smrti,
          正念] dalam kehidupan sehari-hari.
          <br />
          Anda bisa mendapatkan informasi seputar latihan, kegiatan retret, dan
          Day of Mindfulness (DOM) dari tradisi
          <br />
          Mahayana Zen / chan (禪) Plum Village.
        </p>

        <div className="wrapper-button">
          <Link href={`/posts/${aboutSlug}`} className="button">
            Tentang Plum Village
          </Link>
          <a href="https://zenplumvillage.net/" className="button">
            Kelas Moodle
          </a>
          <a href="https://ordointerbeing.myr.id/" className="button">
            Kelas Daring
          </a>
        </div>
      </div>

      <div className="wrapper-mobile">
        <p className="text-1">Selamat Datang di Zen Plum Village Indonesia</p>
        <p className="text-2">
          Plum Village Indonesia adalah komunitas kewawasan (mindfulness
          community) dari ajaran Mahabiksu Zen Thich Nhat
          Hanh [一行禪師] tentang praktik hidup sadar atau kewawasan [smrti,
          正念] dalam kehidupan sehari-hari.
          <br />
          <br />

          Anda bisa mendapatkan informasi seputar latihan, kegiatan retret, dan
          Day of Mindfulness (DOM) dari tradisi
          Mahayana Zen / chan (禪) Plum Village.
        </p>

        <div className="wrapper-button">
          <Link href={`/posts/${aboutSlug}`} className="button">
            Tentang Plum Village
          </Link>
          <a href="https://zenplumvillage.net/" className="button">
            Kelas Moodle
          </a>
          <a href="https://ordointerbeing.myr.id/" className="button">
            Kelas Daring
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
