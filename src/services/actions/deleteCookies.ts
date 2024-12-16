"use server";

import { cookies } from "next/headers";

export const deleteCookies = async(keys: string[]) => {
  keys.forEach(async (key) => {
    (await cookies()).delete(key);
  });
};
