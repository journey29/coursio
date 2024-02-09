"use server";
import db from "@/lib/db";

export const addProduct = async () => {
  await db.course.create({
    data: {
      costType: "Free",
      description: `Do you wish to learn more about the Front-End developer profession and try your skills in this direction? Then we invite you to participate in the Front-End Essentials self-study program — a course for 
      those who possess basic skills in JavaScript development and wish to grow their knowledge of this sphere.`,
      languages: ["English", "German"],
      imageUrl:
        "https://img.freepik.com/free-photo/man-using-external-storage-used_23-2149388543.jpg?w=360&t=st=1707231273~exp=1707231873~hmac=2ef9f612cfd207f0afe94b2ede607dd43850cc437f01c8b6f6dd4f17036ca24e",
      duration: "2 weeks",
      level: "Intermidiate",
      title: "Front-End Self-Paced",
      type: "SelfStudy",
    },
  });
};
