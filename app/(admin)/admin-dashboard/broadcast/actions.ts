"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getNotifications() {
  return await prisma.notification.findMany({
    orderBy: { createdAt: 'desc' }
  });
}

export async function sendNotification(data: { title: string, message: string, type: string }) {
  const notif = await prisma.notification.create({
    data: {
      title: data.title,
      message: data.message,
      type: data.type,
    },
  });
  revalidatePath("/admin-dashboard/broadcast");
  return notif;
}

export async function deleteNotification(id: string) {
  await prisma.notification.delete({ where: { id } });
  revalidatePath("/admin-dashboard/broadcast");
}

export async function updateNotification(id: string, data: { title: string, message: string, type: string }) {
  await prisma.notification.update({
    where: { id },
    data: {
      title: data.title,
      message: data.message,
      type: data.type,
    },
  });
  revalidatePath("/admin-dashboard/broadcast");
}