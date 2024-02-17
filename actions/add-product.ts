"use server";
import db from "@/lib/db";

export const addProduct = async () => {
  await db.course.create({
    data: {
      costType: "Premium",
      price: "168$",
      description: `AWS Authorized Instructors emphasize best practices using the AWS. Through a series of use case scenarios and practical learning, you'll explore AWS services that can be applied to solve architectural problems. You’ll find opportunities to combine your new knowledge with critical thinking and problem-solving skills.`,
      languages: ["Ukrainian", "German"],
      imageUrl:
        "https://img.freepik.com/free-photo/male-drinking-juice-reading-book_23-2147864202.jpg?w=360&t=st=1707947969~exp=1707948569~hmac=22a886088c9d09f9b99135ad825fb636fa6f98d77f9fe5dfc0a911f7f0ad839b",
      duration: "7 days",
      level: "Advanced",
      title: "Advanced Architecting on AWS",
      type: "WorkShop",
    },
  });
};
