import { type NextRequest, NextResponse } from "next/server";

import prisma from "@referrer/prisma";

import { auth } from "@/lib/auth";

import { TApply } from "@/types/types";

export async function GET() {
  // * Get all Posts user applied

  const data = await prisma.applied.findMany({
    where: {
      userId: "cluy7vm6t0000go3v3lwwzt0z",
    },
    select: {
      id: true,
      appliedAt: true,
      applyInfo: true,
      posts: {
        select: {
          description: true,
          stars: true,
        },
      },
    },
  });

  return NextResponse.json(
    {
      data: data,
    },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function POST(request: NextRequest) {
  const token = request.headers.get("authorization")?.replace(/^Bearer\s+/, "");
  const response: TApply = await request.json();

  if (!token) {
    return NextResponse.json(
      { message: "You are not authenticated" },
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const session = await auth();
  const userId = session.user.id;

  // If `starsRequired` is 0, skip star deduction and addition
  if (response.starsRequired === 0) {
    // Create apply and update apply count without star transaction
    await prisma.$transaction([
      prisma.applied.create({
        data: {
          userId: userId,
          postId: response.postId,
          applyInfo: response.applyInfo,
        },
      }),
      prisma.posts.update({
        where: { id: response.postId },
        data: {
          totalApplied: {
            increment: 1,
          },
        },
      }),
    ]);
  } else {
    try {
      // Proceed with star deduction, apply creation, and star addition
      await prisma.$transaction(async (prisma) => {
        const userStars = await prisma.user.findFirst({
          where: { id: userId },
          select: { stars: true },
        });

        // Check if user has enough stars
        if (userStars.stars < response.starsRequired) {
          return NextResponse.json(
            { message: "You donot have enough stars !" },
            {
              status: 403,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        }

        // Deduct stars from Applier
        await prisma.user.update({
          where: { id: userId },
          data: {
            stars: {
              decrement: response.starsRequired,
            },
          },
        });

        // Create apply
        await prisma.applied.create({
          data: {
            userId,
            postId: response.postId,
            applyInfo: response.applyInfo,
          },
        });

        // Update apply count
        await prisma.posts.update({
          where: { id: response.postId },
          data: {
            totalApplied: {
              increment: 1,
            },
          },
        });

        // Add stars in author account
        await prisma.user.update({
          where: { id: response.authorId },
          data: {
            stars: {
              increment: response.starsRequired,
            },
          },
        });
      });

      return NextResponse.json(
        { message: "You have successfully applied for the referral!" },
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      return NextResponse.json(
        { message: error instanceof Error ? error.message : "Internal Server Error" },
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  }
}

export async function DELETE(request: NextRequest) {
  // * Delete Posts

  const res = await request.json();
  return NextResponse.json({ res });
}

export async function PATCH(request: NextRequest) {
  // * Update Posts

  const res = await request.json();
  return NextResponse.json({ res });
}
